import axios from 'axios';
// import { DocumentNode, gql, useQuery } from '@apollo/client';
import { IS_GAMES_CREATED_BY_NOT_HUB_DISABLED } from 'constants/features';
import { unionWith } from 'lodash';
import { hexStringToJson } from 'utils/converters';

/**
 * Hook to work with subgraph.
 */
export default function useSubgraph() {
  const findSouls = async function (
    ids?: Array<string>,
    owners?: Array<string>,
    type?: string,
    first?: number,
    skip?: number,
  ) {
    const fixedOwners = owners
      ? owners.map((owner) => owner.toLowerCase())
      : undefined;
    const response = await makeSubgraphQuery(
      getFindSoulsQuery(ids, fixedOwners, type, first, skip),
    );
    return response.souls;
  };

  const findGames = async function (
    ids?: Array<string>,
    type?: string,
    first?: number,
    skip?: number,
  ) {
    const response = await makeSubgraphQuery(
      getFindGamesQuery(ids, type, first, skip),
    );
    return response.games;
  };

  const findClaims = async function (
    ids?: Array<string>,
    type?: string,
    game?: string,
    first?: number,
    skip?: number,
  ) {
    const response = await makeSubgraphQuery(
      getFindClaimsQuery(ids, type, game, first, skip),
    );
    return response.claims;
  };

  const isGamePart = async (gameId: string, sbt: string) => {
    const queryGQL = `
      query GetPart($sbt: ID!, $gameId: ID!) {
        gameParticipants(where: { sbt: $sbt, entity: $gameId }) {
          id
        }
      }
    `;
    const response = await makeSubgraphQuery(queryGQL, { sbt, gameId });
    // console.log('Response:', response, response.gameParticipants, {
    //   sbt,
    //   gameId,
    // });
    return response.gameParticipants.length > 0;
  };

  /**
   * Find the jurisdiction rule entities.
   *
   * @param {Array.<string>} ids A list with jurisdiction rule ids
   * @param {string} jurisdiction Jurisdiction id (address)
   * @param {string} actionGuid Action id (guid)
   * @param {bool} isPositive get only positive rules
   * @param {bool} isNegative get only negative rules
   * @param {bool} isEnabled get only enabled rules
   * @returns {Promise.<Array.<{object}>>} Array with rule entities
   */
  const findJurisdictionRuleEntities = async function (
    ids: string[],
    jurisdiction?: any,
    actionGuid?: string,
    isPositive?: boolean,
    isNegative?: boolean,
    isEnabled?: boolean,
  ) {
    const fixedIds = !!ids.length ? ids.map((id) => id.toLowerCase()) : [];
    const fixedJurisdiction = jurisdiction ? jurisdiction.toLowerCase() : null;
    const response = await makeSubgraphQuery(
      getFindJurisdictionRuleEntitiesQuery(
        fixedIds,
        fixedJurisdiction,
        actionGuid,
        isPositive,
        isNegative,
        isEnabled,
      ),
    );
    return response.jurisdictionRuleEntities;
  };

  /**
   * Get jurisdiction rule entities by search query.
   *
   * @param {string} jurisdiction Jurisdiction id (address).
   * @param {bool} isPositive get only positive rules.
   * @param {bool} isNegative get only negative rules.
   * @param {bool} isEnabled get only enabled rules.
   * @param {string} searchQuery Search query.
   * @returns {Promise.<Array.<{object}>>} Array with rule entities.
   */
  let findJurisdictionRuleEntitiesBySearchQuery = async function (
    jurisdiction: string,
    isPositive?: boolean,
    isNegative?: boolean,
    isEnabled?: boolean,
    searchQuery?: any,
  ) {
    const response = await makeSubgraphQuery(
      getFindJurisdictionRuleEntitiesBySearchQueryQuery(
        jurisdiction,
        isPositive,
        isNegative,
        isEnabled,
        searchQuery,
      ),
    );
    const unitedResults = unionWith(
      response.result1,
      response.result2,
      response.result3,
      (entity1: any, entity2: any) => entity1.id === entity2.id,
    );
    return unitedResults;
  };

  /**
   * Get jurisdiction rules.
   *
   * @param {Array.<string>} ids A list with jurisdiction rule ids
   * @param {string} jurisdiction Jurisdiction id (address)
   * @param {string} actionGuid Action id (guid)
   * @param {bool} isPositive get only positive rules
   * @param {bool} isNegative get only negative rules
   * @param {bool} isEnabled get only enabled rules
   * @returns {Promise.<Array.<{JurisdictionRule}>>} Array with rules
   */
  const getJurisdictionRules = async function (
    ids: string[],
    jurisdiction: string,
    actionGuid?: any,
    isPositive?: boolean,
    isNegative?: boolean,
    isEnabled?: boolean,
  ) {
    const jurisdictionRuleEntities = await findJurisdictionRuleEntities(
      ids,
      jurisdiction,
      actionGuid,
      isPositive,
      isNegative,
      isEnabled,
    );
    return jurisdictionRuleEntities.map((ruleEntity: any) => ({
      ...ruleEntity,
      metadata: hexStringToJson(ruleEntity.uriData),
    }));
  };

  /**
   * Find the action entities.
   *
   * @param {Array.<string>} guids If not null, then the function returns the action entities for the specified guids.
   * @returns {Promise.<Array.<{object}>>} Array with action entities.
   */
  const findActionEntities = async function (guids: string[]) {
    const response = await makeSubgraphQuery(getFindActionEntitiesQuery(guids));
    return response.actionEntities;
  };

  return {
    isGamePart,
    findSouls,
    findGames,
    findClaims,
    findActionEntities,
    getJurisdictionRules,
  };
}

async function makeSubgraphQuery(query: string, variables = {}) {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_SUBGRAPH_API || '',
      { query, variables },
    );
    if (response.data.errors) {
      throw new Error(
        `Error making subgraph query: ${JSON.stringify(response.data.errors)}`,
      );
    }
    return response.data.data;
  } catch (error: any) {
    throw new Error(
      `Could not query the subgraph: ${JSON.stringify(error.message)}`,
    );
  }
}

function getFindSoulsQuery(
  ids?: Array<string>,
  owners?: Array<string>,
  type?: string,
  first?: number,
  skip?: number,
) {
  let idsFilter = ids ? `id_in: ["${ids.join('","')}"]` : '';
  let ownersFilter = owners ? `owner_in: ["${owners.join('","')}"]` : '';
  let typeFilter = type !== undefined ? `type: "${type}"` : '';
  let filterParams = `where: {${idsFilter}, ${ownersFilter}, ${typeFilter}}`;
  let paginationParams = `first: ${first}, skip: ${skip}`;
  return `{
      souls(${filterParams}, ${paginationParams}) {
        id
        owner
        type
        uri
        uriData
        uriImage
        uriFirstName
        uriLastName
        participantGame {
          id
          roles
        }
        participantProc {
          id
          roles
        }
      }
    }`;
}

function getFindGamesQuery(
  ids?: Array<string>,
  type?: string,
  first?: number,
  skip?: number,
) {
  let idsFilter = ids ? `id_in: ["${ids.join('","')}"]` : '';
  let typeFilter = type ? `type: "${type}"` : '';
  let hubFilter = IS_GAMES_CREATED_BY_NOT_HUB_DISABLED
    ? `hub: "${process.env.NEXT_PUBLIC_HUB_CONTRACT_ADDRESS?.toLowerCase()}"`
    : '';
  let filterParams = `where: {${idsFilter}, ${typeFilter}, ${hubFilter}}`;
  let paginationParams = `first: ${first}, skip: ${skip}`;
  return `{
    games(${filterParams}, ${paginationParams}) {
      id
      name
      type
      uri
      uriData
      roles {
        id
        roleId
        name
        souls
        soulsCount
      }
      nominations {
        id
        createdDate
        nominator {
          id
        }
        nominated {
          id
        }
      }
      posts {
        id
        createdDate
        entityRole
        author {
          id
          owner
        }
        uri
        metadata
      }
    }
  }`;
}

function getFindClaimsQuery(
  ids?: Array<string>,
  type?: string,
  game?: string,
  first?: number,
  skip?: number,
) {
  let idsFilter = ids ? `id_in: ["${ids.join('","')}"]` : '';
  let typeFilter = type ? `type: "${type}"` : '';
  let gameFilter = game ? `game: "${game}"` : '';
  let filterParams = `where: {${idsFilter}, ${typeFilter}, ${gameFilter}}`;
  let paginationParams = `first: ${first}, skip: ${skip}`;
  return `{
    claims(${filterParams}, ${paginationParams}) {
      id
      name
      stage
      uri
      uriData
      type
      game {
        name
        uriData
      }
      roles {
        id
        name
        roleId
        souls
        soulsCount
      }
      nominations {
        id
        createdDate
        nominator {
          id
          owner
          type
        }
        nominated {
          id
          owner
          type
        }
      }
      posts {
        id
        createdDate
        entityRole
        author {
          id
          owner
        }
        uri
        metadata
      }
    }
  }`;
}

///
function getFindJurisdictionRuleEntitiesBySearchQueryQuery(
  jurisdiction: string,
  isPositive?: boolean,
  isNegative?: boolean,
  isEnabled?: boolean,
  searchQuery?: string,
) {
  let jurisdictionFilter = jurisdiction
    ? `jurisdiction: "${jurisdiction}"`
    : '';
  let isPositiveFilter = isPositive === true ? 'isPositive: true' : '';
  let isNegativeFilter = isNegative === true ? 'isPositive: false' : '';
  let isEnabledFilter = isEnabled === true ? 'isDisabled: false' : '';
  let searchQueryFilter1 = `aboutSubject_contains_nocase: "${searchQuery}"`;
  let searchQueryFilter2 = `affected_contains_nocase: "${searchQuery}"`;
  let filterParams1 = `where: {${jurisdictionFilter}, ${isPositiveFilter},  ${isNegativeFilter}, ${isEnabledFilter}, ${searchQueryFilter1}}`;
  let filterParams2 = `where: {${jurisdictionFilter}, ${isPositiveFilter}, ${isNegativeFilter}, ${isEnabledFilter},  ${searchQueryFilter2}}`;
  let paginationParams = `first: 20`;
  let fields = `
    id
    about {
      id
    }
    ruleId
    affected
    uri
    uriData
    negation
    confirmationRuling
    confirmationEvidence
    confirmationWitness
    effects {
      name
      direction
      value
    }
  `;
  return `{
    result1: jurisdictionRuleEntities(${filterParams1}, ${paginationParams}) {
      ${fields}
    }
    result2: jurisdictionRuleEntities(${filterParams2}, ${paginationParams}) {
      ${fields}
    }
  }`;
}

function getFindActionEntitiesQuery(guids: string[] = []) {
  let queryParams = `first: 100`;
  if (guids && guids.length == 0) {
    queryParams = `where: {id: ""}`;
  }
  if (guids && guids.length == 1) {
    queryParams = `where: {id: "${guids[0]}"}`;
  }
  if (guids && guids.length > 1) {
    queryParams = `first: 100, where: {id_in: ["${guids.join('","')}"]}`;
  }
  return `{
    actionEntities(${queryParams}) {
      id
      subject
      verb
      object
      tool
      uri
      uriData
      rules {
        id
        affected
        uri
        negation
        confirmationRuling
        confirmationEvidence
        confirmationWitness
        effects {
          name
          direction
          value
        }
      }
    }
  }`;
}

///
function getFindJurisdictionRuleEntitiesQuery(
  ids: string[],
  jurisdiction?: string,
  actionGuid?: string,
  isPositive?: boolean,
  isNegative?: boolean,
  isEnabled?: boolean,
) {
  let idsFilter = !!ids.length ? `id_in: ["${ids.join('","')}"]` : '';
  console.log('[TEST] idsFilter should be empty if no ids ', {
    ids,
    idsFilter,
  });
  let jurisdictionFilter = jurisdiction
    ? `jurisdiction: "${jurisdiction}"`
    : '';
  let actionGuidFilter = actionGuid ? `about: "${actionGuid}"` : '';
  let isPositiveFilter = isPositive === true ? 'isPositive: true' : '';
  let isNegativeFilter = isNegative === true ? 'isPositive: false' : '';
  let isEnabledFilter = isEnabled === true ? 'isDisabled: false' : '';
  let filterParams = `where: {${idsFilter}, ${jurisdictionFilter}, ${actionGuidFilter}, ${isPositiveFilter}, ${isNegativeFilter}, ${isEnabledFilter}}`;
  let paginationParams = `first: 100`;
  return `{
    jurisdictionRuleEntities(${filterParams}, ${paginationParams}) {
      id
      about {
        id
      }
      ruleId
      affected
      uri
      uriData
      negation
      confirmationRuling
      confirmationEvidence
      confirmationWitness
      effects {
        name
        direction
        value
      }
      isPositive
      isDisabled
    }
  }`;
}
