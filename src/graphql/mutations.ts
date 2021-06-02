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
      deniedReason
      withdrawnReason
      appraisalAdminStatus
      createdAt
      updatedAt
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
      deniedReason
      withdrawnReason
      appraisalAdminStatus
      createdAt
      updatedAt
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
      deniedReason
      withdrawnReason
      appraisalAdminStatus
      createdAt
      updatedAt
    }
  }
`;
export const createS3Object = /* GraphQL */ `
  mutation CreateS3Object(
    $input: CreateS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    createS3Object(input: $input, condition: $condition) {
      id
      foreignId
      key
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateS3Object = /* GraphQL */ `
  mutation UpdateS3Object(
    $input: UpdateS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    updateS3Object(input: $input, condition: $condition) {
      id
      foreignId
      key
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteS3Object = /* GraphQL */ `
  mutation DeleteS3Object(
    $input: DeleteS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    deleteS3Object(input: $input, condition: $condition) {
      id
      foreignId
      key
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPickup = /* GraphQL */ `
  mutation CreatePickup(
    $input: CreatePickupInput!
    $condition: ModelPickupConditionInput
  ) {
    createPickup(input: $input, condition: $condition) {
      id
      owner
      appraisal {
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
        deniedReason
        withdrawnReason
        appraisalAdminStatus
        createdAt
        updatedAt
      }
      pickupTime {
        id
        time
        isUsed
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePickup = /* GraphQL */ `
  mutation UpdatePickup(
    $input: UpdatePickupInput!
    $condition: ModelPickupConditionInput
  ) {
    updatePickup(input: $input, condition: $condition) {
      id
      owner
      appraisal {
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
        deniedReason
        withdrawnReason
        appraisalAdminStatus
        createdAt
        updatedAt
      }
      pickupTime {
        id
        time
        isUsed
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePickup = /* GraphQL */ `
  mutation DeletePickup(
    $input: DeletePickupInput!
    $condition: ModelPickupConditionInput
  ) {
    deletePickup(input: $input, condition: $condition) {
      id
      owner
      appraisal {
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
        deniedReason
        withdrawnReason
        appraisalAdminStatus
        createdAt
        updatedAt
      }
      pickupTime {
        id
        time
        isUsed
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPickupTime = /* GraphQL */ `
  mutation CreatePickupTime(
    $input: CreatePickupTimeInput!
    $condition: ModelPickupTimeConditionInput
  ) {
    createPickupTime(input: $input, condition: $condition) {
      id
      time
      isUsed
      createdAt
      updatedAt
    }
  }
`;
export const updatePickupTime = /* GraphQL */ `
  mutation UpdatePickupTime(
    $input: UpdatePickupTimeInput!
    $condition: ModelPickupTimeConditionInput
  ) {
    updatePickupTime(input: $input, condition: $condition) {
      id
      time
      isUsed
      createdAt
      updatedAt
    }
  }
`;
export const deletePickupTime = /* GraphQL */ `
  mutation DeletePickupTime(
    $input: DeletePickupTimeInput!
    $condition: ModelPickupTimeConditionInput
  ) {
    deletePickupTime(input: $input, condition: $condition) {
      id
      time
      isUsed
      createdAt
      updatedAt
    }
  }
`;
