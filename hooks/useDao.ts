import Dao from 'classes/Dao';
import { GAME_TYPE } from 'constants/contracts';
import { hexStringToJson } from 'utils/converters';
import useGameContract from './contracts/useGameContract';
import useHubContract from './contracts/useHubContract';
import useSubgraph from './useSubgraph';

/**
 * Hook for work with DAOs.
 */
export default function useDao() {
  const { gameMake } = useHubContract();
  const { setUri, assignRole, removeRole } = useGameContract();
  const { findGames } = useSubgraph();

  let createDao = async function (
    name: string,
    metadataUrl: string,
  ): Promise<any> {
    return gameMake(GAME_TYPE.mdao, name, metadataUrl);
  };

  let editDao = async function (id: string, metadataUrl: string) {
    return setUri(id, metadataUrl);
  };

  let getDaoById = async function (id: string): Promise<Dao | null> {
    const daos = await getDaos([id]);
    return daos.length > 0 ? daos[0] : null;
  };

  let getDaos = async function (
    ids?: Array<string>,
    first = 10,
    skip = 0,
  ): Promise<Array<Dao>> {
    const subgraphGames = await findGames(ids, GAME_TYPE.mdao, first, skip);
    return subgraphGames.map((subgraphGame: any) =>
      convertSubgraphGameToDao(subgraphGame),
    );
  };

  let isSoulHasRole = function (
    dao: Dao,
    soul: string,
    roleId: string,
  ): boolean {
    return getSoulsByRole(dao, roleId).includes(soul);
  };

  let getSoulsByRole = function (dao: Dao, roleId: string) {
    const daoRole = dao.roles?.find(
      (element: any) => element?.roleId === roleId,
    );
    return daoRole?.souls || [];
  };

  let assignRoleToSoul = function (dao: Dao, soul: string, roleName: string) {
    return assignRole(dao.id, soul, roleName);
  };

  let removeRoleToSoul = function (dao: Dao, soul: string, roleName: string) {
    return removeRole(dao.id, soul, roleName);
  };

  return {
    createDao,
    editDao,
    getDaoById,
    getDaos,
    isSoulHasRole,
    getSoulsByRole,
    assignRoleToSoul,
    removeRoleToSoul,
  };
}

function convertSubgraphGameToDao(subgraphGame: any) {
  return new Dao(
    subgraphGame.id,
    subgraphGame.name,
    subgraphGame.type,
    subgraphGame.uri,
    hexStringToJson(subgraphGame.uriData),
    subgraphGame.roles,
  );
}