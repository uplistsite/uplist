/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      owner
      balance
      createdAt
      updatedAt
      username
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      owner
      balance
      createdAt
      updatedAt
      username
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      owner
      balance
      createdAt
      updatedAt
      username
    }
  }
`;
export const createAppraisal = /* GraphQL */ `
  mutation CreateAppraisal(
    $input: CreateAppraisalInput!
    $condition: ModelAppraisalConditionInput
  ) {
    createAppraisal(input: $input, condition: $condition) {
      id
      owner
      name
      description
      pictures
      isUserWithdrawn
      appraisalStatus
      createdAt
      updatedAt
      username
    }
  }
`;
export const updateAppraisal = /* GraphQL */ `
  mutation UpdateAppraisal(
    $input: UpdateAppraisalInput!
    $condition: ModelAppraisalConditionInput
  ) {
    updateAppraisal(input: $input, condition: $condition) {
      id
      owner
      name
      description
      pictures
      isUserWithdrawn
      appraisalStatus
      createdAt
      updatedAt
      username
    }
  }
`;
export const deleteAppraisal = /* GraphQL */ `
  mutation DeleteAppraisal(
    $input: DeleteAppraisalInput!
    $condition: ModelAppraisalConditionInput
  ) {
    deleteAppraisal(input: $input, condition: $condition) {
      id
      owner
      name
      description
      pictures
      isUserWithdrawn
      appraisalStatus
      createdAt
      updatedAt
      username
    }
  }
`;
