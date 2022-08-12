import { gql } from '@apollo/client';
import PaginatedListGQ from 'components/PaginatedListGQ';

/**
 * Component: Soul list filtered by type & role
 */
export default function SoulListGQ(props: any) {
  //Soul Query - Role Optional
  const query = gql`
    query GetSouls($type: String!, $role: String, $first: Int, $skip: Int) {
      souls(first: $first, skip: $skip, where: { type: $type, role: $role }) {
        id
        owner
        type
        uri
        uriData
        metadata
        name
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
    }
  `;
  return <PaginatedListGQ {...props} query={query} />;
}