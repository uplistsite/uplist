/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      owner
      balance
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        balance
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAppraisal = /* GraphQL */ `
  query GetAppraisal($id: ID!) {
    getAppraisal(id: $id) {
      id
      owner
      name
      description
      pictures {
        items {
          id
          foreignId
          key
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      appraisalUserStatus
      paymentAdvance
      paymentRangeLow
      paymentRangeHigh
      defects
      year
      model
      make
      wear
      appraisalAdminStatus
      createdAt
      updatedAt
    }
  }
`;
export const listAppraisals = /* GraphQL */ `
  query ListAppraisals(
    $filter: ModelAppraisalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppraisals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        name
        description
        pictures {
          nextToken
        }
        appraisalUserStatus
        paymentAdvance
        paymentRangeLow
        paymentRangeHigh
        defects
        year
        model
        make
        wear
        appraisalAdminStatus
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getS3Object = /* GraphQL */ `
  query GetS3Object($id: ID!) {
    getS3Object(id: $id) {
      id
      foreignId
      key
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listS3Objects = /* GraphQL */ `
  query ListS3Objects(
    $filter: ModelS3ObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listS3Objects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        foreignId
        key
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
