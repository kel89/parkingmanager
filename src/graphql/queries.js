/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCredentials = /* GraphQL */ `
  query GetCredentials($id: ID!) {
    getCredentials(id: $id) {
      id
      user
      resort
      username
      password
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCredentials = /* GraphQL */ `
  query ListCredentials(
    $filter: ModelCredentialsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCredentials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        resort
        username
        password
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getToReserve = /* GraphQL */ `
  query GetToReserve($id: ID!) {
    getToReserve(id: $id) {
      id
      user
      resort
      reserveOn
      reserveTarget
      Credentials {
        id
        user
        resort
        username
        password
        createdAt
        updatedAt
        __typename
      }
      reserveTime
      createdAt
      updatedAt
      toReserveCredentialsId
      __typename
    }
  }
`;
export const listToReserves = /* GraphQL */ `
  query ListToReserves(
    $filter: ModelToReserveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listToReserves(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        resort
        reserveOn
        reserveTarget
        reserveTime
        createdAt
        updatedAt
        toReserveCredentialsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
