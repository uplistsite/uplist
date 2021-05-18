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
      pictures {
        id
        owner
        bucket
        region
        key
        createdAt
        updatedAt
      }
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
      pictures {
        id
        owner
        bucket
        region
        key
        createdAt
        updatedAt
      }
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
      pictures {
        id
        owner
        bucket
        region
        key
        createdAt
        updatedAt
      }
      isUserWithdrawn
      appraisalStatus
      createdAt
      updatedAt
    }
  }
`;
export const onCreateS3Object = /* GraphQL */ `
  subscription OnCreateS3Object($owner: String) {
    onCreateS3Object(owner: $owner) {
      id
      owner
      bucket
      region
      key
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateS3Object = /* GraphQL */ `
  subscription OnUpdateS3Object($owner: String) {
    onUpdateS3Object(owner: $owner) {
      id
      owner
      bucket
      region
      key
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteS3Object = /* GraphQL */ `
  subscription OnDeleteS3Object($owner: String) {
    onDeleteS3Object(owner: $owner) {
      id
      owner
      bucket
      region
      key
      createdAt
      updatedAt
    }
  }
`;
