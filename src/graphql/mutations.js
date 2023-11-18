/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCredentials = /* GraphQL */ `
  mutation CreateCredentials(
    $input: CreateCredentialsInput!
    $condition: ModelCredentialsConditionInput
  ) {
    createCredentials(input: $input, condition: $condition) {
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
export const updateCredentials = /* GraphQL */ `
  mutation UpdateCredentials(
    $input: UpdateCredentialsInput!
    $condition: ModelCredentialsConditionInput
  ) {
    updateCredentials(input: $input, condition: $condition) {
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
export const deleteCredentials = /* GraphQL */ `
  mutation DeleteCredentials(
    $input: DeleteCredentialsInput!
    $condition: ModelCredentialsConditionInput
  ) {
    deleteCredentials(input: $input, condition: $condition) {
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
export const createToReserve = /* GraphQL */ `
  mutation CreateToReserve(
    $input: CreateToReserveInput!
    $condition: ModelToReserveConditionInput
  ) {
    createToReserve(input: $input, condition: $condition) {
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
export const updateToReserve = /* GraphQL */ `
  mutation UpdateToReserve(
    $input: UpdateToReserveInput!
    $condition: ModelToReserveConditionInput
  ) {
    updateToReserve(input: $input, condition: $condition) {
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
export const deleteToReserve = /* GraphQL */ `
  mutation DeleteToReserve(
    $input: DeleteToReserveInput!
    $condition: ModelToReserveConditionInput
  ) {
    deleteToReserve(input: $input, condition: $condition) {
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
