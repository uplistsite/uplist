/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateAppraisal = /* GraphQL */ `
  subscription OnCreateAppraisal($owner: String) {
    onCreateAppraisal(owner: $owner) {
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
export const onUpdateAppraisal = /* GraphQL */ `
  subscription OnUpdateAppraisal($owner: String) {
    onUpdateAppraisal(owner: $owner) {
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
export const onDeleteAppraisal = /* GraphQL */ `
  subscription OnDeleteAppraisal($owner: String) {
    onDeleteAppraisal(owner: $owner) {
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
export const onCreateS3Object = /* GraphQL */ `
  subscription OnCreateS3Object($owner: String) {
    onCreateS3Object(owner: $owner) {
      id
      foreignId
      key
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateS3Object = /* GraphQL */ `
  subscription OnUpdateS3Object($owner: String) {
    onUpdateS3Object(owner: $owner) {
      id
      foreignId
      key
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteS3Object = /* GraphQL */ `
  subscription OnDeleteS3Object($owner: String) {
    onDeleteS3Object(owner: $owner) {
      id
      foreignId
      key
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePickupTime = /* GraphQL */ `
  subscription OnCreatePickupTime {
    onCreatePickupTime {
      id
      time
      isUsed
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePickupTime = /* GraphQL */ `
  subscription OnUpdatePickupTime {
    onUpdatePickupTime {
      id
      time
      isUsed
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePickupTime = /* GraphQL */ `
  subscription OnDeletePickupTime {
    onDeletePickupTime {
      id
      time
      isUsed
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($owner: String) {
    onCreateAddress(owner: $owner) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($owner: String) {
    onUpdateAddress(owner: $owner) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($owner: String) {
    onDeleteAddress(owner: $owner) {
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
export const onCreatePaymentRequest = /* GraphQL */ `
  subscription OnCreatePaymentRequest {
    onCreatePaymentRequest {
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
export const onUpdatePaymentRequest = /* GraphQL */ `
  subscription OnUpdatePaymentRequest {
    onUpdatePaymentRequest {
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
export const onDeletePaymentRequest = /* GraphQL */ `
  subscription OnDeletePaymentRequest {
    onDeletePaymentRequest {
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
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment($owner: String) {
    onCreatePayment(owner: $owner) {
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
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment($owner: String) {
    onUpdatePayment(owner: $owner) {
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
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment($owner: String) {
    onDeletePayment(owner: $owner) {
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
