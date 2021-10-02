/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      owner
      addresses {
        items {
          id
          owner
          street1
          street2
          zip
          city
          state
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
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
        addresses {
          items {
            id
            owner
            street1
            street2
            zip
            city
            state
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
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
      commission
      paymentAdvance
      paymentRangeLow
      paymentRangeHigh
      soldPrice
      defects
      year
      model
      make
      wear
      deniedReason
      withdrawnReason
      pickupTime {
        id
        time
        isUsed
        createdAt
        updatedAt
      }
      address {
        id
        owner
        street1
        street2
        zip
        city
        state
        userId
        createdAt
        updatedAt
      }
      listings
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
        commission
        paymentAdvance
        paymentRangeLow
        paymentRangeHigh
        soldPrice
        defects
        year
        model
        make
        wear
        deniedReason
        withdrawnReason
        pickupTime {
          id
          time
          isUsed
          createdAt
          updatedAt
        }
        address {
          id
          owner
          street1
          street2
          zip
          city
          state
          userId
          createdAt
          updatedAt
        }
        listings
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
export const getPickupTime = /* GraphQL */ `
  query GetPickupTime($id: ID!) {
    getPickupTime(id: $id) {
      id
      time
      isUsed
      createdAt
      updatedAt
    }
  }
`;
export const listPickupTimes = /* GraphQL */ `
  query ListPickupTimes(
    $filter: ModelPickupTimeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPickupTimes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        time
        isUsed
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      owner
      street1
      street2
      zip
      city
      state
      userId
      createdAt
      updatedAt
    }
  }
`;
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        street1
        street2
        zip
        city
        state
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPaymentRequest = /* GraphQL */ `
  query GetPaymentRequest($id: ID!) {
    getPaymentRequest(id: $id) {
      id
      status
      appraisal {
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
        commission
        paymentAdvance
        paymentRangeLow
        paymentRangeHigh
        soldPrice
        defects
        year
        model
        make
        wear
        deniedReason
        withdrawnReason
        pickupTime {
          id
          time
          isUsed
          createdAt
          updatedAt
        }
        address {
          id
          owner
          street1
          street2
          zip
          city
          state
          userId
          createdAt
          updatedAt
        }
        listings
        appraisalAdminStatus
        createdAt
        updatedAt
      }
      requestPrice
      actualPrice
      comments
      createdAt
      updatedAt
    }
  }
`;
export const listPaymentRequests = /* GraphQL */ `
  query ListPaymentRequests(
    $filter: ModelPaymentRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        appraisal {
          id
          owner
          name
          description
          pictures {
            nextToken
          }
          appraisalUserStatus
          commission
          paymentAdvance
          paymentRangeLow
          paymentRangeHigh
          soldPrice
          defects
          year
          model
          make
          wear
          deniedReason
          withdrawnReason
          pickupTime {
            id
            time
            isUsed
            createdAt
            updatedAt
          }
          address {
            id
            owner
            street1
            street2
            zip
            city
            state
            userId
            createdAt
            updatedAt
          }
          listings
          appraisalAdminStatus
          createdAt
          updatedAt
        }
        requestPrice
        actualPrice
        comments
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
      id
      owner
      appraisal {
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
        commission
        paymentAdvance
        paymentRangeLow
        paymentRangeHigh
        soldPrice
        defects
        year
        model
        make
        wear
        deniedReason
        withdrawnReason
        pickupTime {
          id
          time
          isUsed
          createdAt
          updatedAt
        }
        address {
          id
          owner
          street1
          street2
          zip
          city
          state
          userId
          createdAt
          updatedAt
        }
        listings
        appraisalAdminStatus
        createdAt
        updatedAt
      }
      paymentRequest {
        id
        status
        appraisal {
          id
          owner
          name
          description
          pictures {
            nextToken
          }
          appraisalUserStatus
          commission
          paymentAdvance
          paymentRangeLow
          paymentRangeHigh
          soldPrice
          defects
          year
          model
          make
          wear
          deniedReason
          withdrawnReason
          pickupTime {
            id
            time
            isUsed
            createdAt
            updatedAt
          }
          address {
            id
            owner
            street1
            street2
            zip
            city
            state
            userId
            createdAt
            updatedAt
          }
          listings
          appraisalAdminStatus
          createdAt
          updatedAt
        }
        requestPrice
        actualPrice
        comments
        createdAt
        updatedAt
      }
      price
      comments
      createdAt
      updatedAt
    }
  }
`;
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          commission
          paymentAdvance
          paymentRangeLow
          paymentRangeHigh
          soldPrice
          defects
          year
          model
          make
          wear
          deniedReason
          withdrawnReason
          pickupTime {
            id
            time
            isUsed
            createdAt
            updatedAt
          }
          address {
            id
            owner
            street1
            street2
            zip
            city
            state
            userId
            createdAt
            updatedAt
          }
          listings
          appraisalAdminStatus
          createdAt
          updatedAt
        }
        paymentRequest {
          id
          status
          appraisal {
            id
            owner
            name
            description
            appraisalUserStatus
            commission
            paymentAdvance
            paymentRangeLow
            paymentRangeHigh
            soldPrice
            defects
            year
            model
            make
            wear
            deniedReason
            withdrawnReason
            listings
            appraisalAdminStatus
            createdAt
            updatedAt
          }
          requestPrice
          actualPrice
          comments
          createdAt
          updatedAt
        }
        price
        comments
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
