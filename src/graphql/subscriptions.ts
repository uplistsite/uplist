/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      owner
      balance
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      owner
      balance
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      owner
      balance
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAppraisal = /* GraphQL */ `
  subscription OnCreateAppraisal($owner: String) {
    onCreateAppraisal(owner: $owner) {
      id
      owner
      name
      description
      pictures
      isUserWithdrawn
      appraisalStatus
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAppraisal = /* GraphQL */ `
  subscription OnUpdateAppraisal($owner: String) {
    onUpdateAppraisal(owner: $owner) {
      id
      owner
      name
      description
      pictures
      isUserWithdrawn
      appraisalStatus
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAppraisal = /* GraphQL */ `
  subscription OnDeleteAppraisal($owner: String) {
    onDeleteAppraisal(owner: $owner) {
      id
      owner
      name
      description
      pictures
      isUserWithdrawn
      appraisalStatus
      createdAt
      updatedAt
    }
  }
`;
