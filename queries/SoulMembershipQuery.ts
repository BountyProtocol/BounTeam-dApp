import { gql } from '@apollo/client';

//Soul Query - Role Optional
const query = gql`
  query SoulGamesQuery($id: ID!, $gameRole: String, $first: Int, $skip: Int) {
    gameParticipants(
      first: $first
      skip: $skip
      where: { sbt_: { id: $id }, entity_: { role: $gameRole } }
    ) {
      id
      entity {
        id
        name
        type
        role
      }
      sbt {
        id
        name
        type
      }
    }
  }
`;

export default query;