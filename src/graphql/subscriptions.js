/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCredentials = /* GraphQL */ `
  subscription OnCreateCredentials(
    $filter: ModelSubscriptionCredentialsFilterInput
  ) {
    onCreateCredentials(filter: $filter) {
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
export const onUpdateCredentials = /* GraphQL */ `
  subscription OnUpdateCredentials(
    $filter: ModelSubscriptionCredentialsFilterInput
  ) {
    onUpdateCredentials(filter: $filter) {
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
export const onDeleteCredentials = /* GraphQL */ `
  subscription OnDeleteCredentials(
    $filter: ModelSubscriptionCredentialsFilterInput
  ) {
    onDeleteCredentials(filter: $filter) {
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
export const onCreateToReserve = /* GraphQL */ `
  subscription OnCreateToReserve(
    $filter: ModelSubscriptionToReserveFilterInput
  ) {
    onCreateToReserve(filter: $filter) {
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
export const onUpdateToReserve = /* GraphQL */ `
  subscription OnUpdateToReserve(
    $filter: ModelSubscriptionToReserveFilterInput
  ) {
    onUpdateToReserve(filter: $filter) {
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
export const onDeleteToReserve = /* GraphQL */ `
  subscription OnDeleteToReserve(
    $filter: ModelSubscriptionToReserveFilterInput
  ) {
    onDeleteToReserve(filter: $filter) {
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
