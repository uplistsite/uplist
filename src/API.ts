/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  owner?: string | null,
  balance?: number | null,
};

export type ModelUserConditionInput = {
  balance?: ModelFloatInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type User = {
  __typename: "User",
  id?: string,
  owner?: string | null,
  addresses?: ModelAddressConnection,
  balance?: number | null,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelAddressConnection = {
  __typename: "ModelAddressConnection",
  items?:  Array<Address | null > | null,
  nextToken?: string | null,
};

export type Address = {
  __typename: "Address",
  id?: string,
  owner?: string | null,
  street1?: string,
  street2?: string | null,
  zip?: string,
  city?: string,
  state?: string,
  userId?: string,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateUserInput = {
  id: string,
  owner?: string | null,
  balance?: number | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateAppraisalInput = {
  id?: string | null,
  owner?: string | null,
  name: string,
  description: string,
  appraisalUserStatus?: AppraisalUserStatus | null,
  commission?: number | null,
  paymentAdvance?: number | null,
  paymentRangeLow?: number | null,
  paymentRangeHigh?: number | null,
  soldPrice?: number | null,
  defects?: string | null,
  year?: number | null,
  model?: string | null,
  make?: string | null,
  wear?: Wear | null,
  deniedReason?: string | null,
  withdrawnReason?: string | null,
  listings?: Array< string | null > | null,
  appraisalAdminStatus?: AppraisalAdminStatus | null,
  appraisalPickupTimeId?: string | null,
  appraisalAddressId?: string | null,
};

export enum AppraisalUserStatus {
  WITHDRAWN = "WITHDRAWN",
  ACCEPTED = "ACCEPTED",
}


export enum Wear {
  POOR = "POOR",
  WELL_USED = "WELL_USED",
  USED = "USED",
  LIGHTLY_USED = "LIGHTLY_USED",
  LIKE_NEW = "LIKE_NEW",
  NEW = "NEW",
}


export enum AppraisalAdminStatus {
  APPROVED = "APPROVED",
  DENIED = "DENIED",
  PROCESSING = "PROCESSING",
  LISTED = "LISTED",
  SOLD = "SOLD",
}


export type ModelAppraisalConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  appraisalUserStatus?: ModelAppraisalUserStatusInput | null,
  commission?: ModelIntInput | null,
  paymentAdvance?: ModelFloatInput | null,
  paymentRangeLow?: ModelFloatInput | null,
  paymentRangeHigh?: ModelFloatInput | null,
  soldPrice?: ModelFloatInput | null,
  defects?: ModelStringInput | null,
  year?: ModelIntInput | null,
  model?: ModelStringInput | null,
  make?: ModelStringInput | null,
  wear?: ModelWearInput | null,
  deniedReason?: ModelStringInput | null,
  withdrawnReason?: ModelStringInput | null,
  listings?: ModelStringInput | null,
  appraisalAdminStatus?: ModelAppraisalAdminStatusInput | null,
  and?: Array< ModelAppraisalConditionInput | null > | null,
  or?: Array< ModelAppraisalConditionInput | null > | null,
  not?: ModelAppraisalConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelAppraisalUserStatusInput = {
  eq?: AppraisalUserStatus | null,
  ne?: AppraisalUserStatus | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelWearInput = {
  eq?: Wear | null,
  ne?: Wear | null,
};

export type ModelAppraisalAdminStatusInput = {
  eq?: AppraisalAdminStatus | null,
  ne?: AppraisalAdminStatus | null,
};

export type Appraisal = {
  __typename: "Appraisal",
  id?: string,
  owner?: string | null,
  name?: string,
  description?: string,
  pictures?: ModelS3ObjectConnection,
  appraisalUserStatus?: AppraisalUserStatus | null,
  commission?: number | null,
  paymentAdvance?: number | null,
  paymentRangeLow?: number | null,
  paymentRangeHigh?: number | null,
  soldPrice?: number | null,
  defects?: string | null,
  year?: number | null,
  model?: string | null,
  make?: string | null,
  wear?: Wear | null,
  deniedReason?: string | null,
  withdrawnReason?: string | null,
  pickupTime?: PickupTime,
  address?: Address,
  listings?: Array< string | null > | null,
  appraisalAdminStatus?: AppraisalAdminStatus | null,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelS3ObjectConnection = {
  __typename: "ModelS3ObjectConnection",
  items?:  Array<S3Object | null > | null,
  nextToken?: string | null,
};

export type S3Object = {
  __typename: "S3Object",
  id?: string,
  foreignId?: string,
  key?: string,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type PickupTime = {
  __typename: "PickupTime",
  id?: string,
  time?: string,
  isUsed?: boolean | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateAppraisalInput = {
  id: string,
  owner?: string | null,
  name?: string | null,
  description?: string | null,
  appraisalUserStatus?: AppraisalUserStatus | null,
  commission?: number | null,
  paymentAdvance?: number | null,
  paymentRangeLow?: number | null,
  paymentRangeHigh?: number | null,
  soldPrice?: number | null,
  defects?: string | null,
  year?: number | null,
  model?: string | null,
  make?: string | null,
  wear?: Wear | null,
  deniedReason?: string | null,
  withdrawnReason?: string | null,
  listings?: Array< string | null > | null,
  appraisalAdminStatus?: AppraisalAdminStatus | null,
  appraisalPickupTimeId?: string | null,
  appraisalAddressId?: string | null,
};

export type DeleteAppraisalInput = {
  id?: string | null,
};

export type CreateS3ObjectInput = {
  id?: string | null,
  foreignId: string,
  key: string,
};

export type ModelS3ObjectConditionInput = {
  foreignId?: ModelIDInput | null,
  key?: ModelStringInput | null,
  and?: Array< ModelS3ObjectConditionInput | null > | null,
  or?: Array< ModelS3ObjectConditionInput | null > | null,
  not?: ModelS3ObjectConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateS3ObjectInput = {
  id: string,
  foreignId?: string | null,
  key?: string | null,
};

export type DeleteS3ObjectInput = {
  id?: string | null,
};

export type CreatePickupTimeInput = {
  id?: string | null,
  time: string,
  isUsed?: boolean | null,
};

export type ModelPickupTimeConditionInput = {
  time?: ModelStringInput | null,
  isUsed?: ModelBooleanInput | null,
  and?: Array< ModelPickupTimeConditionInput | null > | null,
  or?: Array< ModelPickupTimeConditionInput | null > | null,
  not?: ModelPickupTimeConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePickupTimeInput = {
  id: string,
  time?: string | null,
  isUsed?: boolean | null,
};

export type DeletePickupTimeInput = {
  id?: string | null,
};

export type CreateAddressInput = {
  id?: string | null,
  owner?: string | null,
  street1: string,
  street2?: string | null,
  zip: string,
  city: string,
  state: string,
  userId: string,
};

export type ModelAddressConditionInput = {
  street1?: ModelStringInput | null,
  street2?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelAddressConditionInput | null > | null,
  or?: Array< ModelAddressConditionInput | null > | null,
  not?: ModelAddressConditionInput | null,
};

export type UpdateAddressInput = {
  id: string,
  owner?: string | null,
  street1?: string | null,
  street2?: string | null,
  zip?: string | null,
  city?: string | null,
  state?: string | null,
  userId?: string | null,
};

export type DeleteAddressInput = {
  id?: string | null,
};

export type CreatePaymentRequestInput = {
  id?: string | null,
  status: PaymentRequestStatus,
  requestPrice: number,
  actualPrice: number,
  comments?: string | null,
};

export enum PaymentRequestStatus {
  APPROVED = "APPROVED",
  DENIED = "DENIED",
  PENDING = "PENDING",
}


export type ModelPaymentRequestConditionInput = {
  status?: ModelPaymentRequestStatusInput | null,
  requestPrice?: ModelFloatInput | null,
  actualPrice?: ModelFloatInput | null,
  comments?: ModelStringInput | null,
  and?: Array< ModelPaymentRequestConditionInput | null > | null,
  or?: Array< ModelPaymentRequestConditionInput | null > | null,
  not?: ModelPaymentRequestConditionInput | null,
};

export type ModelPaymentRequestStatusInput = {
  eq?: PaymentRequestStatus | null,
  ne?: PaymentRequestStatus | null,
};

export type PaymentRequest = {
  __typename: "PaymentRequest",
  id?: string,
  status?: PaymentRequestStatus,
  appraisal?: Appraisal,
  requestPrice?: number,
  actualPrice?: number,
  comments?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdatePaymentRequestInput = {
  id: string,
  status?: PaymentRequestStatus | null,
  requestPrice?: number | null,
  actualPrice?: number | null,
  comments?: string | null,
};

export type DeletePaymentRequestInput = {
  id?: string | null,
};

export type CreatePaymentInput = {
  id?: string | null,
  owner?: string | null,
  price: number,
  comments?: string | null,
};

export type ModelPaymentConditionInput = {
  price?: ModelFloatInput | null,
  comments?: ModelStringInput | null,
  and?: Array< ModelPaymentConditionInput | null > | null,
  or?: Array< ModelPaymentConditionInput | null > | null,
  not?: ModelPaymentConditionInput | null,
};

export type Payment = {
  __typename: "Payment",
  id?: string,
  owner?: string | null,
  appraisal?: Appraisal,
  paymentRequest?: PaymentRequest,
  price?: number,
  comments?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdatePaymentInput = {
  id: string,
  owner?: string | null,
  price?: number | null,
  comments?: string | null,
};

export type DeletePaymentInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelAppraisalFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  appraisalUserStatus?: ModelAppraisalUserStatusInput | null,
  commission?: ModelIntInput | null,
  paymentAdvance?: ModelFloatInput | null,
  paymentRangeLow?: ModelFloatInput | null,
  paymentRangeHigh?: ModelFloatInput | null,
  soldPrice?: ModelFloatInput | null,
  defects?: ModelStringInput | null,
  year?: ModelIntInput | null,
  model?: ModelStringInput | null,
  make?: ModelStringInput | null,
  wear?: ModelWearInput | null,
  deniedReason?: ModelStringInput | null,
  withdrawnReason?: ModelStringInput | null,
  listings?: ModelStringInput | null,
  appraisalAdminStatus?: ModelAppraisalAdminStatusInput | null,
  and?: Array< ModelAppraisalFilterInput | null > | null,
  or?: Array< ModelAppraisalFilterInput | null > | null,
  not?: ModelAppraisalFilterInput | null,
};

export type ModelAppraisalConnection = {
  __typename: "ModelAppraisalConnection",
  items?:  Array<Appraisal | null > | null,
  nextToken?: string | null,
};

export type ModelS3ObjectFilterInput = {
  id?: ModelIDInput | null,
  foreignId?: ModelIDInput | null,
  key?: ModelStringInput | null,
  and?: Array< ModelS3ObjectFilterInput | null > | null,
  or?: Array< ModelS3ObjectFilterInput | null > | null,
  not?: ModelS3ObjectFilterInput | null,
};

export type ModelPickupTimeFilterInput = {
  id?: ModelIDInput | null,
  time?: ModelStringInput | null,
  isUsed?: ModelBooleanInput | null,
  and?: Array< ModelPickupTimeFilterInput | null > | null,
  or?: Array< ModelPickupTimeFilterInput | null > | null,
  not?: ModelPickupTimeFilterInput | null,
};

export type ModelPickupTimeConnection = {
  __typename: "ModelPickupTimeConnection",
  items?:  Array<PickupTime | null > | null,
  nextToken?: string | null,
};

export type ModelAddressFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  street1?: ModelStringInput | null,
  street2?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelAddressFilterInput | null > | null,
  or?: Array< ModelAddressFilterInput | null > | null,
  not?: ModelAddressFilterInput | null,
};

export type ModelPaymentRequestFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelPaymentRequestStatusInput | null,
  requestPrice?: ModelFloatInput | null,
  actualPrice?: ModelFloatInput | null,
  comments?: ModelStringInput | null,
  and?: Array< ModelPaymentRequestFilterInput | null > | null,
  or?: Array< ModelPaymentRequestFilterInput | null > | null,
  not?: ModelPaymentRequestFilterInput | null,
};

export type ModelPaymentRequestConnection = {
  __typename: "ModelPaymentRequestConnection",
  items?:  Array<PaymentRequest | null > | null,
  nextToken?: string | null,
};

export type ModelPaymentFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  comments?: ModelStringInput | null,
  and?: Array< ModelPaymentFilterInput | null > | null,
  or?: Array< ModelPaymentFilterInput | null > | null,
  not?: ModelPaymentFilterInput | null,
};

export type ModelPaymentConnection = {
  __typename: "ModelPaymentConnection",
  items?:  Array<Payment | null > | null,
  nextToken?: string | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items?:  Array< {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    balance?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items?:  Array< {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    balance?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items?:  Array< {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    balance?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAppraisalMutationVariables = {
  input?: CreateAppraisalInput,
  condition?: ModelAppraisalConditionInput | null,
};

export type CreateAppraisalMutation = {
  createAppraisal?:  {
    __typename: "Appraisal",
    id: string,
    owner?: string | null,
    name: string,
    description: string,
    pictures?:  {
      __typename: "ModelS3ObjectConnection",
      items?:  Array< {
        __typename: "S3Object",
        id: string,
        foreignId: string,
        key: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    appraisalUserStatus?: AppraisalUserStatus | null,
    commission?: number | null,
    paymentAdvance?: number | null,
    paymentRangeLow?: number | null,
    paymentRangeHigh?: number | null,
    soldPrice?: number | null,
    defects?: string | null,
    year?: number | null,
    model?: string | null,
    make?: string | null,
    wear?: Wear | null,
    deniedReason?: string | null,
    withdrawnReason?: string | null,
    pickupTime?:  {
      __typename: "PickupTime",
      id: string,
      time: string,
      isUsed?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    address?:  {
      __typename: "Address",
      id: string,
      owner?: string | null,
      street1: string,
      street2?: string | null,
      zip: string,
      city: string,
      state: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    listings?: Array< string | null > | null,
    appraisalAdminStatus?: AppraisalAdminStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAppraisalMutationVariables = {
  input?: UpdateAppraisalInput,
  condition?: ModelAppraisalConditionInput | null,
};

export type UpdateAppraisalMutation = {
  updateAppraisal?:  {
    __typename: "Appraisal",
    id: string,
    owner?: string | null,
    name: string,
    description: string,
    pictures?:  {
      __typename: "ModelS3ObjectConnection",
      items?:  Array< {
        __typename: "S3Object",
        id: string,
        foreignId: string,
        key: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    appraisalUserStatus?: AppraisalUserStatus | null,
    commission?: number | null,
    paymentAdvance?: number | null,
    paymentRangeLow?: number | null,
    paymentRangeHigh?: number | null,
    soldPrice?: number | null,
    defects?: string | null,
    year?: number | null,
    model?: string | null,
    make?: string | null,
    wear?: Wear | null,
    deniedReason?: string | null,
    withdrawnReason?: string | null,
    pickupTime?:  {
      __typename: "PickupTime",
      id: string,
      time: string,
      isUsed?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    address?:  {
      __typename: "Address",
      id: string,
      owner?: string | null,
      street1: string,
      street2?: string | null,
      zip: string,
      city: string,
      state: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    listings?: Array< string | null > | null,
    appraisalAdminStatus?: AppraisalAdminStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAppraisalMutationVariables = {
  input?: DeleteAppraisalInput,
  condition?: ModelAppraisalConditionInput | null,
};

export type DeleteAppraisalMutation = {
  deleteAppraisal?:  {
    __typename: "Appraisal",
    id: string,
    owner?: string | null,
    name: string,
    description: string,
    pictures?:  {
      __typename: "ModelS3ObjectConnection",
      items?:  Array< {
        __typename: "S3Object",
        id: string,
        foreignId: string,
        key: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    appraisalUserStatus?: AppraisalUserStatus | null,
    commission?: number | null,
    paymentAdvance?: number | null,
    paymentRangeLow?: number | null,
    paymentRangeHigh?: number | null,
    soldPrice?: number | null,
    defects?: string | null,
    year?: number | null,
    model?: string | null,
    make?: string | null,
    wear?: Wear | null,
    deniedReason?: string | null,
    withdrawnReason?: string | null,
    pickupTime?:  {
      __typename: "PickupTime",
      id: string,
      time: string,
      isUsed?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    address?:  {
      __typename: "Address",
      id: string,
      owner?: string | null,
      street1: string,
      street2?: string | null,
      zip: string,
      city: string,
      state: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    listings?: Array< string | null > | null,
    appraisalAdminStatus?: AppraisalAdminStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateS3ObjectMutationVariables = {
  input?: CreateS3ObjectInput,
  condition?: ModelS3ObjectConditionInput | null,
};

export type CreateS3ObjectMutation = {
  createS3Object?:  {
    __typename: "S3Object",
    id: string,
    foreignId: string,
    key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateS3ObjectMutationVariables = {
  input?: UpdateS3ObjectInput,
  condition?: ModelS3ObjectConditionInput | null,
};

export type UpdateS3ObjectMutation = {
  updateS3Object?:  {
    __typename: "S3Object",
    id: string,
    foreignId: string,
    key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteS3ObjectMutationVariables = {
  input?: DeleteS3ObjectInput,
  condition?: ModelS3ObjectConditionInput | null,
};

export type DeleteS3ObjectMutation = {
  deleteS3Object?:  {
    __typename: "S3Object",
    id: string,
    foreignId: string,
    key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePickupTimeMutationVariables = {
  input?: CreatePickupTimeInput,
  condition?: ModelPickupTimeConditionInput | null,
};

export type CreatePickupTimeMutation = {
  createPickupTime?:  {
    __typename: "PickupTime",
    id: string,
    time: string,
    isUsed?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePickupTimeMutationVariables = {
  input?: UpdatePickupTimeInput,
  condition?: ModelPickupTimeConditionInput | null,
};

export type UpdatePickupTimeMutation = {
  updatePickupTime?:  {
    __typename: "PickupTime",
    id: string,
    time: string,
    isUsed?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePickupTimeMutationVariables = {
  input?: DeletePickupTimeInput,
  condition?: ModelPickupTimeConditionInput | null,
};

export type DeletePickupTimeMutation = {
  deletePickupTime?:  {
    __typename: "PickupTime",
    id: string,
    time: string,
    isUsed?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAddressMutationVariables = {
  input?: CreateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type CreateAddressMutation = {
  createAddress?:  {
    __typename: "Address",
    id: string,
    owner?: string | null,
    street1: string,
    street2?: string | null,
    zip: string,
    city: string,
    state: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAddressMutationVariables = {
  input?: UpdateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type UpdateAddressMutation = {
  updateAddress?:  {
    __typename: "Address",
    id: string,
    owner?: string | null,
    street1: string,
    street2?: string | null,
    zip: string,
    city: string,
    state: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAddressMutationVariables = {
  input?: DeleteAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type DeleteAddressMutation = {
  deleteAddress?:  {
    __typename: "Address",
    id: string,
    owner?: string | null,
    street1: string,
    street2?: string | null,
    zip: string,
    city: string,
    state: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePaymentRequestMutationVariables = {
  input?: CreatePaymentRequestInput,
  condition?: ModelPaymentRequestConditionInput | null,
};

export type CreatePaymentRequestMutation = {
  createPaymentRequest?:  {
    __typename: "PaymentRequest",
    id: string,
    status: PaymentRequestStatus,
    appraisal:  {
      __typename: "Appraisal",
      id: string,
      owner?: string | null,
      name: string,
      description: string,
      pictures?:  {
        __typename: "ModelS3ObjectConnection",
        items?:  Array< {
          __typename: "S3Object",
          id: string,
          foreignId: string,
          key: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      appraisalUserStatus?: AppraisalUserStatus | null,
      commission?: number | null,
      paymentAdvance?: number | null,
      paymentRangeLow?: number | null,
      paymentRangeHigh?: number | null,
      soldPrice?: number | null,
      defects?: string | null,
      year?: number | null,
      model?: string | null,
      make?: string | null,
      wear?: Wear | null,
      deniedReason?: string | null,
      withdrawnReason?: string | null,
      pickupTime?:  {
        __typename: "PickupTime",
        id: string,
        time: string,
        isUsed?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      address?:  {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      listings?: Array< string | null > | null,
      appraisalAdminStatus?: AppraisalAdminStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    requestPrice: number,
    actualPrice: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePaymentRequestMutationVariables = {
  input?: UpdatePaymentRequestInput,
  condition?: ModelPaymentRequestConditionInput | null,
};

export type UpdatePaymentRequestMutation = {
  updatePaymentRequest?:  {
    __typename: "PaymentRequest",
    id: string,
    status: PaymentRequestStatus,
    appraisal:  {
      __typename: "Appraisal",
      id: string,
      owner?: string | null,
      name: string,
      description: string,
      pictures?:  {
        __typename: "ModelS3ObjectConnection",
        items?:  Array< {
          __typename: "S3Object",
          id: string,
          foreignId: string,
          key: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      appraisalUserStatus?: AppraisalUserStatus | null,
      commission?: number | null,
      paymentAdvance?: number | null,
      paymentRangeLow?: number | null,
      paymentRangeHigh?: number | null,
      soldPrice?: number | null,
      defects?: string | null,
      year?: number | null,
      model?: string | null,
      make?: string | null,
      wear?: Wear | null,
      deniedReason?: string | null,
      withdrawnReason?: string | null,
      pickupTime?:  {
        __typename: "PickupTime",
        id: string,
        time: string,
        isUsed?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      address?:  {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      listings?: Array< string | null > | null,
      appraisalAdminStatus?: AppraisalAdminStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    requestPrice: number,
    actualPrice: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePaymentRequestMutationVariables = {
  input?: DeletePaymentRequestInput,
  condition?: ModelPaymentRequestConditionInput | null,
};

export type DeletePaymentRequestMutation = {
  deletePaymentRequest?:  {
    __typename: "PaymentRequest",
    id: string,
    status: PaymentRequestStatus,
    appraisal:  {
      __typename: "Appraisal",
      id: string,
      owner?: string | null,
      name: string,
      description: string,
      pictures?:  {
        __typename: "ModelS3ObjectConnection",
        items?:  Array< {
          __typename: "S3Object",
          id: string,
          foreignId: string,
          key: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      appraisalUserStatus?: AppraisalUserStatus | null,
      commission?: number | null,
      paymentAdvance?: number | null,
      paymentRangeLow?: number | null,
      paymentRangeHigh?: number | null,
      soldPrice?: number | null,
      defects?: string | null,
      year?: number | null,
      model?: string | null,
      make?: string | null,
      wear?: Wear | null,
      deniedReason?: string | null,
      withdrawnReason?: string | null,
      pickupTime?:  {
        __typename: "PickupTime",
        id: string,
        time: string,
        isUsed?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      address?:  {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      listings?: Array< string | null > | null,
      appraisalAdminStatus?: AppraisalAdminStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    requestPrice: number,
    actualPrice: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePaymentMutationVariables = {
  input?: CreatePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type CreatePaymentMutation = {
  createPayment?:  {
    __typename: "Payment",
    id: string,
    owner?: string | null,
    appraisal:  {
      __typename: "Appraisal",
      id: string,
      owner?: string | null,
      name: string,
      description: string,
      pictures?:  {
        __typename: "ModelS3ObjectConnection",
        items?:  Array< {
          __typename: "S3Object",
          id: string,
          foreignId: string,
          key: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      appraisalUserStatus?: AppraisalUserStatus | null,
      commission?: number | null,
      paymentAdvance?: number | null,
      paymentRangeLow?: number | null,
      paymentRangeHigh?: number | null,
      soldPrice?: number | null,
      defects?: string | null,
      year?: number | null,
      model?: string | null,
      make?: string | null,
      wear?: Wear | null,
      deniedReason?: string | null,
      withdrawnReason?: string | null,
      pickupTime?:  {
        __typename: "PickupTime",
        id: string,
        time: string,
        isUsed?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      address?:  {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      listings?: Array< string | null > | null,
      appraisalAdminStatus?: AppraisalAdminStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    paymentRequest:  {
      __typename: "PaymentRequest",
      id: string,
      status: PaymentRequestStatus,
      appraisal:  {
        __typename: "Appraisal",
        id: string,
        owner?: string | null,
        name: string,
        description: string,
        pictures?:  {
          __typename: "ModelS3ObjectConnection",
          nextToken?: string | null,
        } | null,
        appraisalUserStatus?: AppraisalUserStatus | null,
        commission?: number | null,
        paymentAdvance?: number | null,
        paymentRangeLow?: number | null,
        paymentRangeHigh?: number | null,
        soldPrice?: number | null,
        defects?: string | null,
        year?: number | null,
        model?: string | null,
        make?: string | null,
        wear?: Wear | null,
        deniedReason?: string | null,
        withdrawnReason?: string | null,
        pickupTime?:  {
          __typename: "PickupTime",
          id: string,
          time: string,
          isUsed?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        address?:  {
          __typename: "Address",
          id: string,
          owner?: string | null,
          street1: string,
          street2?: string | null,
          zip: string,
          city: string,
          state: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        listings?: Array< string | null > | null,
        appraisalAdminStatus?: AppraisalAdminStatus | null,
        createdAt: string,
        updatedAt: string,
      },
      requestPrice: number,
      actualPrice: number,
      comments?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    price: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePaymentMutationVariables = {
  input?: UpdatePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type UpdatePaymentMutation = {
  updatePayment?:  {
    __typename: "Payment",
    id: string,
    owner?: string | null,
    appraisal:  {
      __typename: "Appraisal",
      id: string,
      owner?: string | null,
      name: string,
      description: string,
      pictures?:  {
        __typename: "ModelS3ObjectConnection",
        items?:  Array< {
          __typename: "S3Object",
          id: string,
          foreignId: string,
          key: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      appraisalUserStatus?: AppraisalUserStatus | null,
      commission?: number | null,
      paymentAdvance?: number | null,
      paymentRangeLow?: number | null,
      paymentRangeHigh?: number | null,
      soldPrice?: number | null,
      defects?: string | null,
      year?: number | null,
      model?: string | null,
      make?: string | null,
      wear?: Wear | null,
      deniedReason?: string | null,
      withdrawnReason?: string | null,
      pickupTime?:  {
        __typename: "PickupTime",
        id: string,
        time: string,
        isUsed?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      address?:  {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      listings?: Array< string | null > | null,
      appraisalAdminStatus?: AppraisalAdminStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    paymentRequest:  {
      __typename: "PaymentRequest",
      id: string,
      status: PaymentRequestStatus,
      appraisal:  {
        __typename: "Appraisal",
        id: string,
        owner?: string | null,
        name: string,
        description: string,
        pictures?:  {
          __typename: "ModelS3ObjectConnection",
          nextToken?: string | null,
        } | null,
        appraisalUserStatus?: AppraisalUserStatus | null,
        commission?: number | null,
        paymentAdvance?: number | null,
        paymentRangeLow?: number | null,
        paymentRangeHigh?: number | null,
        soldPrice?: number | null,
        defects?: string | null,
        year?: number | null,
        model?: string | null,
        make?: string | null,
        wear?: Wear | null,
        deniedReason?: string | null,
        withdrawnReason?: string | null,
        pickupTime?:  {
          __typename: "PickupTime",
          id: string,
          time: string,
          isUsed?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        address?:  {
          __typename: "Address",
          id: string,
          owner?: string | null,
          street1: string,
          street2?: string | null,
          zip: string,
          city: string,
          state: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        listings?: Array< string | null > | null,
        appraisalAdminStatus?: AppraisalAdminStatus | null,
        createdAt: string,
        updatedAt: string,
      },
      requestPrice: number,
      actualPrice: number,
      comments?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    price: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePaymentMutationVariables = {
  input?: DeletePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type DeletePaymentMutation = {
  deletePayment?:  {
    __typename: "Payment",
    id: string,
    owner?: string | null,
    appraisal:  {
      __typename: "Appraisal",
      id: string,
      owner?: string | null,
      name: string,
      description: string,
      pictures?:  {
        __typename: "ModelS3ObjectConnection",
        items?:  Array< {
          __typename: "S3Object",
          id: string,
          foreignId: string,
          key: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      appraisalUserStatus?: AppraisalUserStatus | null,
      commission?: number | null,
      paymentAdvance?: number | null,
      paymentRangeLow?: number | null,
      paymentRangeHigh?: number | null,
      soldPrice?: number | null,
      defects?: string | null,
      year?: number | null,
      model?: string | null,
      make?: string | null,
      wear?: Wear | null,
      deniedReason?: string | null,
      withdrawnReason?: string | null,
      pickupTime?:  {
        __typename: "PickupTime",
        id: string,
        time: string,
        isUsed?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      address?:  {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      listings?: Array< string | null > | null,
      appraisalAdminStatus?: AppraisalAdminStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    paymentRequest:  {
      __typename: "PaymentRequest",
      id: string,
      status: PaymentRequestStatus,
      appraisal:  {
        __typename: "Appraisal",
        id: string,
        owner?: string | null,
        name: string,
        description: string,
        pictures?:  {
          __typename: "ModelS3ObjectConnection",
          nextToken?: string | null,
        } | null,
        appraisalUserStatus?: AppraisalUserStatus | null,
        commission?: number | null,
        paymentAdvance?: number | null,
        paymentRangeLow?: number | null,
        paymentRangeHigh?: number | null,
        soldPrice?: number | null,
        defects?: string | null,
        year?: number | null,
        model?: string | null,
        make?: string | null,
        wear?: Wear | null,
        deniedReason?: string | null,
        withdrawnReason?: string | null,
        pickupTime?:  {
          __typename: "PickupTime",
          id: string,
          time: string,
          isUsed?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        address?:  {
          __typename: "Address",
          id: string,
          owner?: string | null,
          street1: string,
          street2?: string | null,
          zip: string,
          city: string,
          state: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        listings?: Array< string | null > | null,
        appraisalAdminStatus?: AppraisalAdminStatus | null,
        createdAt: string,
        updatedAt: string,
      },
      requestPrice: number,
      actualPrice: number,
      comments?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    price: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items?:  Array< {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    balance?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      owner?: string | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        items?:  Array< {
          __typename: "Address",
          id: string,
          owner?: string | null,
          street1: string,
          street2?: string | null,
          zip: string,
          city: string,
          state: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      balance?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAppraisalQueryVariables = {
  id?: string,
};

export type GetAppraisalQuery = {
  getAppraisal?:  {
    __typename: "Appraisal",
    id: string,
    owner?: string | null,
    name: string,
    description: string,
    pictures?:  {
      __typename: "ModelS3ObjectConnection",
      items?:  Array< {
        __typename: "S3Object",
        id: string,
        foreignId: string,
        key: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    appraisalUserStatus?: AppraisalUserStatus | null,
    commission?: number | null,
    paymentAdvance?: number | null,
    paymentRangeLow?: number | null,
    paymentRangeHigh?: number | null,
    soldPrice?: number | null,
    defects?: string | null,
    year?: number | null,
    model?: string | null,
    make?: string | null,
    wear?: Wear | null,
    deniedReason?: string | null,
    withdrawnReason?: string | null,
    pickupTime?:  {
      __typename: "PickupTime",
      id: string,
      time: string,
      isUsed?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    address?:  {
      __typename: "Address",
      id: string,
      owner?: string | null,
      street1: string,
      street2?: string | null,
      zip: string,
      city: string,
      state: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    listings?: Array< string | null > | null,
    appraisalAdminStatus?: AppraisalAdminStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAppraisalsQueryVariables = {
  filter?: ModelAppraisalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppraisalsQuery = {
  listAppraisals?:  {
    __typename: "ModelAppraisalConnection",
    items?:  Array< {
      __typename: "Appraisal",
      id: string,
      owner?: string | null,
      name: string,
      description: string,
      pictures?:  {
        __typename: "ModelS3ObjectConnection",
        items?:  Array< {
          __typename: "S3Object",
          id: string,
          foreignId: string,
          key: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      appraisalUserStatus?: AppraisalUserStatus | null,
      commission?: number | null,
      paymentAdvance?: number | null,
      paymentRangeLow?: number | null,
      paymentRangeHigh?: number | null,
      soldPrice?: number | null,
      defects?: string | null,
      year?: number | null,
      model?: string | null,
      make?: string | null,
      wear?: Wear | null,
      deniedReason?: string | null,
      withdrawnReason?: string | null,
      pickupTime?:  {
        __typename: "PickupTime",
        id: string,
        time: string,
        isUsed?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      address?:  {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      listings?: Array< string | null > | null,
      appraisalAdminStatus?: AppraisalAdminStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetS3ObjectQueryVariables = {
  id?: string,
};

export type GetS3ObjectQuery = {
  getS3Object?:  {
    __typename: "S3Object",
    id: string,
    foreignId: string,
    key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListS3ObjectsQueryVariables = {
  filter?: ModelS3ObjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListS3ObjectsQuery = {
  listS3Objects?:  {
    __typename: "ModelS3ObjectConnection",
    items?:  Array< {
      __typename: "S3Object",
      id: string,
      foreignId: string,
      key: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPickupTimeQueryVariables = {
  id?: string,
};

export type GetPickupTimeQuery = {
  getPickupTime?:  {
    __typename: "PickupTime",
    id: string,
    time: string,
    isUsed?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPickupTimesQueryVariables = {
  filter?: ModelPickupTimeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPickupTimesQuery = {
  listPickupTimes?:  {
    __typename: "ModelPickupTimeConnection",
    items?:  Array< {
      __typename: "PickupTime",
      id: string,
      time: string,
      isUsed?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAddressQueryVariables = {
  id?: string,
};

export type GetAddressQuery = {
  getAddress?:  {
    __typename: "Address",
    id: string,
    owner?: string | null,
    street1: string,
    street2?: string | null,
    zip: string,
    city: string,
    state: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAddresssQueryVariables = {
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAddresssQuery = {
  listAddresss?:  {
    __typename: "ModelAddressConnection",
    items?:  Array< {
      __typename: "Address",
      id: string,
      owner?: string | null,
      street1: string,
      street2?: string | null,
      zip: string,
      city: string,
      state: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPaymentRequestQueryVariables = {
  id?: string,
};

export type GetPaymentRequestQuery = {
  getPaymentRequest?:  {
    __typename: "PaymentRequest",
    id: string,
    status: PaymentRequestStatus,
    appraisal:  {
      __typename: "Appraisal",
      id: string,
      owner?: string | null,
      name: string,
      description: string,
      pictures?:  {
        __typename: "ModelS3ObjectConnection",
        items?:  Array< {
          __typename: "S3Object",
          id: string,
          foreignId: string,
          key: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      appraisalUserStatus?: AppraisalUserStatus | null,
      commission?: number | null,
      paymentAdvance?: number | null,
      paymentRangeLow?: number | null,
      paymentRangeHigh?: number | null,
      soldPrice?: number | null,
      defects?: string | null,
      year?: number | null,
      model?: string | null,
      make?: string | null,
      wear?: Wear | null,
      deniedReason?: string | null,
      withdrawnReason?: string | null,
      pickupTime?:  {
        __typename: "PickupTime",
        id: string,
        time: string,
        isUsed?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      address?:  {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      listings?: Array< string | null > | null,
      appraisalAdminStatus?: AppraisalAdminStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    requestPrice: number,
    actualPrice: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPaymentRequestsQueryVariables = {
  filter?: ModelPaymentRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPaymentRequestsQuery = {
  listPaymentRequests?:  {
    __typename: "ModelPaymentRequestConnection",
    items?:  Array< {
      __typename: "PaymentRequest",
      id: string,
      status: PaymentRequestStatus,
      appraisal:  {
        __typename: "Appraisal",
        id: string,
        owner?: string | null,
        name: string,
        description: string,
        pictures?:  {
          __typename: "ModelS3ObjectConnection",
          nextToken?: string | null,
        } | null,
        appraisalUserStatus?: AppraisalUserStatus | null,
        commission?: number | null,
        paymentAdvance?: number | null,
        paymentRangeLow?: number | null,
        paymentRangeHigh?: number | null,
        soldPrice?: number | null,
        defects?: string | null,
        year?: number | null,
        model?: string | null,
        make?: string | null,
        wear?: Wear | null,
        deniedReason?: string | null,
        withdrawnReason?: string | null,
        pickupTime?:  {
          __typename: "PickupTime",
          id: string,
          time: string,
          isUsed?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        address?:  {
          __typename: "Address",
          id: string,
          owner?: string | null,
          street1: string,
          street2?: string | null,
          zip: string,
          city: string,
          state: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        listings?: Array< string | null > | null,
        appraisalAdminStatus?: AppraisalAdminStatus | null,
        createdAt: string,
        updatedAt: string,
      },
      requestPrice: number,
      actualPrice: number,
      comments?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPaymentQueryVariables = {
  id?: string,
};

export type GetPaymentQuery = {
  getPayment?:  {
    __typename: "Payment",
    id: string,
    owner?: string | null,
    appraisal:  {
      __typename: "Appraisal",
      id: string,
      owner?: string | null,
      name: string,
      description: string,
      pictures?:  {
        __typename: "ModelS3ObjectConnection",
        items?:  Array< {
          __typename: "S3Object",
          id: string,
          foreignId: string,
          key: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      appraisalUserStatus?: AppraisalUserStatus | null,
      commission?: number | null,
      paymentAdvance?: number | null,
      paymentRangeLow?: number | null,
      paymentRangeHigh?: number | null,
      soldPrice?: number | null,
      defects?: string | null,
      year?: number | null,
      model?: string | null,
      make?: string | null,
      wear?: Wear | null,
      deniedReason?: string | null,
      withdrawnReason?: string | null,
      pickupTime?:  {
        __typename: "PickupTime",
        id: string,
        time: string,
        isUsed?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      address?:  {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      listings?: Array< string | null > | null,
      appraisalAdminStatus?: AppraisalAdminStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    paymentRequest:  {
      __typename: "PaymentRequest",
      id: string,
      status: PaymentRequestStatus,
      appraisal:  {
        __typename: "Appraisal",
        id: string,
        owner?: string | null,
        name: string,
        description: string,
        pictures?:  {
          __typename: "ModelS3ObjectConnection",
          nextToken?: string | null,
        } | null,
        appraisalUserStatus?: AppraisalUserStatus | null,
        commission?: number | null,
        paymentAdvance?: number | null,
        paymentRangeLow?: number | null,
        paymentRangeHigh?: number | null,
        soldPrice?: number | null,
        defects?: string | null,
        year?: number | null,
        model?: string | null,
        make?: string | null,
        wear?: Wear | null,
        deniedReason?: string | null,
        withdrawnReason?: string | null,
        pickupTime?:  {
          __typename: "PickupTime",
          id: string,
          time: string,
          isUsed?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        address?:  {
          __typename: "Address",
          id: string,
          owner?: string | null,
          street1: string,
          street2?: string | null,
          zip: string,
          city: string,
          state: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        listings?: Array< string | null > | null,
        appraisalAdminStatus?: AppraisalAdminStatus | null,
        createdAt: string,
        updatedAt: string,
      },
      requestPrice: number,
      actualPrice: number,
      comments?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    price: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPaymentsQueryVariables = {
  filter?: ModelPaymentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPaymentsQuery = {
  listPayments?:  {
    __typename: "ModelPaymentConnection",
    items?:  Array< {
      __typename: "Payment",
      id: string,
      owner?: string | null,
      appraisal:  {
        __typename: "Appraisal",
        id: string,
        owner?: string | null,
        name: string,
        description: string,
        pictures?:  {
          __typename: "ModelS3ObjectConnection",
          nextToken?: string | null,
        } | null,
        appraisalUserStatus?: AppraisalUserStatus | null,
        commission?: number | null,
        paymentAdvance?: number | null,
        paymentRangeLow?: number | null,
        paymentRangeHigh?: number | null,
        soldPrice?: number | null,
        defects?: string | null,
        year?: number | null,
        model?: string | null,
        make?: string | null,
        wear?: Wear | null,
        deniedReason?: string | null,
        withdrawnReason?: string | null,
        pickupTime?:  {
          __typename: "PickupTime",
          id: string,
          time: string,
          isUsed?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        address?:  {
          __typename: "Address",
          id: string,
          owner?: string | null,
          street1: string,
          street2?: string | null,
          zip: string,
          city: string,
          state: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        listings?: Array< string | null > | null,
        appraisalAdminStatus?: AppraisalAdminStatus | null,
        createdAt: string,
        updatedAt: string,
      },
      paymentRequest:  {
        __typename: "PaymentRequest",
        id: string,
        status: PaymentRequestStatus,
        appraisal:  {
          __typename: "Appraisal",
          id: string,
          owner?: string | null,
          name: string,
          description: string,
          appraisalUserStatus?: AppraisalUserStatus | null,
          commission?: number | null,
          paymentAdvance?: number | null,
          paymentRangeLow?: number | null,
          paymentRangeHigh?: number | null,
          soldPrice?: number | null,
          defects?: string | null,
          year?: number | null,
          model?: string | null,
          make?: string | null,
          wear?: Wear | null,
          deniedReason?: string | null,
          withdrawnReason?: string | null,
          listings?: Array< string | null > | null,
          appraisalAdminStatus?: AppraisalAdminStatus | null,
          createdAt: string,
          updatedAt: string,
        },
        requestPrice: number,
        actualPrice: number,
        comments?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      price: number,
      comments?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items?:  Array< {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    balance?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items?:  Array< {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    balance?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items?:  Array< {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    balance?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAppraisalSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateAppraisalSubscription = {
  onCreateAppraisal?:  {
    __typename: "Appraisal",
    id: string,
    owner?: string | null,
    name: string,
    description: string,
    pictures?:  {
      __typename: "ModelS3ObjectConnection",
      items?:  Array< {
        __typename: "S3Object",
        id: string,
        foreignId: string,
        key: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    appraisalUserStatus?: AppraisalUserStatus | null,
    commission?: number | null,
    paymentAdvance?: number | null,
    paymentRangeLow?: number | null,
    paymentRangeHigh?: number | null,
    soldPrice?: number | null,
    defects?: string | null,
    year?: number | null,
    model?: string | null,
    make?: string | null,
    wear?: Wear | null,
    deniedReason?: string | null,
    withdrawnReason?: string | null,
    pickupTime?:  {
      __typename: "PickupTime",
      id: string,
      time: string,
      isUsed?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    address?:  {
      __typename: "Address",
      id: string,
      owner?: string | null,
      street1: string,
      street2?: string | null,
      zip: string,
      city: string,
      state: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    listings?: Array< string | null > | null,
    appraisalAdminStatus?: AppraisalAdminStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAppraisalSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateAppraisalSubscription = {
  onUpdateAppraisal?:  {
    __typename: "Appraisal",
    id: string,
    owner?: string | null,
    name: string,
    description: string,
    pictures?:  {
      __typename: "ModelS3ObjectConnection",
      items?:  Array< {
        __typename: "S3Object",
        id: string,
        foreignId: string,
        key: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    appraisalUserStatus?: AppraisalUserStatus | null,
    commission?: number | null,
    paymentAdvance?: number | null,
    paymentRangeLow?: number | null,
    paymentRangeHigh?: number | null,
    soldPrice?: number | null,
    defects?: string | null,
    year?: number | null,
    model?: string | null,
    make?: string | null,
    wear?: Wear | null,
    deniedReason?: string | null,
    withdrawnReason?: string | null,
    pickupTime?:  {
      __typename: "PickupTime",
      id: string,
      time: string,
      isUsed?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    address?:  {
      __typename: "Address",
      id: string,
      owner?: string | null,
      street1: string,
      street2?: string | null,
      zip: string,
      city: string,
      state: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    listings?: Array< string | null > | null,
    appraisalAdminStatus?: AppraisalAdminStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAppraisalSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteAppraisalSubscription = {
  onDeleteAppraisal?:  {
    __typename: "Appraisal",
    id: string,
    owner?: string | null,
    name: string,
    description: string,
    pictures?:  {
      __typename: "ModelS3ObjectConnection",
      items?:  Array< {
        __typename: "S3Object",
        id: string,
        foreignId: string,
        key: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    appraisalUserStatus?: AppraisalUserStatus | null,
    commission?: number | null,
    paymentAdvance?: number | null,
    paymentRangeLow?: number | null,
    paymentRangeHigh?: number | null,
    soldPrice?: number | null,
    defects?: string | null,
    year?: number | null,
    model?: string | null,
    make?: string | null,
    wear?: Wear | null,
    deniedReason?: string | null,
    withdrawnReason?: string | null,
    pickupTime?:  {
      __typename: "PickupTime",
      id: string,
      time: string,
      isUsed?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    address?:  {
      __typename: "Address",
      id: string,
      owner?: string | null,
      street1: string,
      street2?: string | null,
      zip: string,
      city: string,
      state: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    listings?: Array< string | null > | null,
    appraisalAdminStatus?: AppraisalAdminStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateS3ObjectSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateS3ObjectSubscription = {
  onCreateS3Object?:  {
    __typename: "S3Object",
    id: string,
    foreignId: string,
    key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateS3ObjectSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateS3ObjectSubscription = {
  onUpdateS3Object?:  {
    __typename: "S3Object",
    id: string,
    foreignId: string,
    key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteS3ObjectSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteS3ObjectSubscription = {
  onDeleteS3Object?:  {
    __typename: "S3Object",
    id: string,
    foreignId: string,
    key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePickupTimeSubscription = {
  onCreatePickupTime?:  {
    __typename: "PickupTime",
    id: string,
    time: string,
    isUsed?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePickupTimeSubscription = {
  onUpdatePickupTime?:  {
    __typename: "PickupTime",
    id: string,
    time: string,
    isUsed?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePickupTimeSubscription = {
  onDeletePickupTime?:  {
    __typename: "PickupTime",
    id: string,
    time: string,
    isUsed?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAddressSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateAddressSubscription = {
  onCreateAddress?:  {
    __typename: "Address",
    id: string,
    owner?: string | null,
    street1: string,
    street2?: string | null,
    zip: string,
    city: string,
    state: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAddressSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateAddressSubscription = {
  onUpdateAddress?:  {
    __typename: "Address",
    id: string,
    owner?: string | null,
    street1: string,
    street2?: string | null,
    zip: string,
    city: string,
    state: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAddressSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteAddressSubscription = {
  onDeleteAddress?:  {
    __typename: "Address",
    id: string,
    owner?: string | null,
    street1: string,
    street2?: string | null,
    zip: string,
    city: string,
    state: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePaymentRequestSubscription = {
  onCreatePaymentRequest?:  {
    __typename: "PaymentRequest",
    id: string,
    status: PaymentRequestStatus,
    appraisal:  {
      __typename: "Appraisal",
      id: string,
      owner?: string | null,
      name: string,
      description: string,
      pictures?:  {
        __typename: "ModelS3ObjectConnection",
        items?:  Array< {
          __typename: "S3Object",
          id: string,
          foreignId: string,
          key: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      appraisalUserStatus?: AppraisalUserStatus | null,
      commission?: number | null,
      paymentAdvance?: number | null,
      paymentRangeLow?: number | null,
      paymentRangeHigh?: number | null,
      soldPrice?: number | null,
      defects?: string | null,
      year?: number | null,
      model?: string | null,
      make?: string | null,
      wear?: Wear | null,
      deniedReason?: string | null,
      withdrawnReason?: string | null,
      pickupTime?:  {
        __typename: "PickupTime",
        id: string,
        time: string,
        isUsed?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      address?:  {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      listings?: Array< string | null > | null,
      appraisalAdminStatus?: AppraisalAdminStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    requestPrice: number,
    actualPrice: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePaymentRequestSubscription = {
  onUpdatePaymentRequest?:  {
    __typename: "PaymentRequest",
    id: string,
    status: PaymentRequestStatus,
    appraisal:  {
      __typename: "Appraisal",
      id: string,
      owner?: string | null,
      name: string,
      description: string,
      pictures?:  {
        __typename: "ModelS3ObjectConnection",
        items?:  Array< {
          __typename: "S3Object",
          id: string,
          foreignId: string,
          key: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      appraisalUserStatus?: AppraisalUserStatus | null,
      commission?: number | null,
      paymentAdvance?: number | null,
      paymentRangeLow?: number | null,
      paymentRangeHigh?: number | null,
      soldPrice?: number | null,
      defects?: string | null,
      year?: number | null,
      model?: string | null,
      make?: string | null,
      wear?: Wear | null,
      deniedReason?: string | null,
      withdrawnReason?: string | null,
      pickupTime?:  {
        __typename: "PickupTime",
        id: string,
        time: string,
        isUsed?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      address?:  {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      listings?: Array< string | null > | null,
      appraisalAdminStatus?: AppraisalAdminStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    requestPrice: number,
    actualPrice: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePaymentRequestSubscription = {
  onDeletePaymentRequest?:  {
    __typename: "PaymentRequest",
    id: string,
    status: PaymentRequestStatus,
    appraisal:  {
      __typename: "Appraisal",
      id: string,
      owner?: string | null,
      name: string,
      description: string,
      pictures?:  {
        __typename: "ModelS3ObjectConnection",
        items?:  Array< {
          __typename: "S3Object",
          id: string,
          foreignId: string,
          key: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      appraisalUserStatus?: AppraisalUserStatus | null,
      commission?: number | null,
      paymentAdvance?: number | null,
      paymentRangeLow?: number | null,
      paymentRangeHigh?: number | null,
      soldPrice?: number | null,
      defects?: string | null,
      year?: number | null,
      model?: string | null,
      make?: string | null,
      wear?: Wear | null,
      deniedReason?: string | null,
      withdrawnReason?: string | null,
      pickupTime?:  {
        __typename: "PickupTime",
        id: string,
        time: string,
        isUsed?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      address?:  {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      listings?: Array< string | null > | null,
      appraisalAdminStatus?: AppraisalAdminStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    requestPrice: number,
    actualPrice: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePaymentSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePaymentSubscription = {
  onCreatePayment?:  {
    __typename: "Payment",
    id: string,
    owner?: string | null,
    appraisal:  {
      __typename: "Appraisal",
      id: string,
      owner?: string | null,
      name: string,
      description: string,
      pictures?:  {
        __typename: "ModelS3ObjectConnection",
        items?:  Array< {
          __typename: "S3Object",
          id: string,
          foreignId: string,
          key: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      appraisalUserStatus?: AppraisalUserStatus | null,
      commission?: number | null,
      paymentAdvance?: number | null,
      paymentRangeLow?: number | null,
      paymentRangeHigh?: number | null,
      soldPrice?: number | null,
      defects?: string | null,
      year?: number | null,
      model?: string | null,
      make?: string | null,
      wear?: Wear | null,
      deniedReason?: string | null,
      withdrawnReason?: string | null,
      pickupTime?:  {
        __typename: "PickupTime",
        id: string,
        time: string,
        isUsed?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      address?:  {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      listings?: Array< string | null > | null,
      appraisalAdminStatus?: AppraisalAdminStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    paymentRequest:  {
      __typename: "PaymentRequest",
      id: string,
      status: PaymentRequestStatus,
      appraisal:  {
        __typename: "Appraisal",
        id: string,
        owner?: string | null,
        name: string,
        description: string,
        pictures?:  {
          __typename: "ModelS3ObjectConnection",
          nextToken?: string | null,
        } | null,
        appraisalUserStatus?: AppraisalUserStatus | null,
        commission?: number | null,
        paymentAdvance?: number | null,
        paymentRangeLow?: number | null,
        paymentRangeHigh?: number | null,
        soldPrice?: number | null,
        defects?: string | null,
        year?: number | null,
        model?: string | null,
        make?: string | null,
        wear?: Wear | null,
        deniedReason?: string | null,
        withdrawnReason?: string | null,
        pickupTime?:  {
          __typename: "PickupTime",
          id: string,
          time: string,
          isUsed?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        address?:  {
          __typename: "Address",
          id: string,
          owner?: string | null,
          street1: string,
          street2?: string | null,
          zip: string,
          city: string,
          state: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        listings?: Array< string | null > | null,
        appraisalAdminStatus?: AppraisalAdminStatus | null,
        createdAt: string,
        updatedAt: string,
      },
      requestPrice: number,
      actualPrice: number,
      comments?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    price: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePaymentSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePaymentSubscription = {
  onUpdatePayment?:  {
    __typename: "Payment",
    id: string,
    owner?: string | null,
    appraisal:  {
      __typename: "Appraisal",
      id: string,
      owner?: string | null,
      name: string,
      description: string,
      pictures?:  {
        __typename: "ModelS3ObjectConnection",
        items?:  Array< {
          __typename: "S3Object",
          id: string,
          foreignId: string,
          key: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      appraisalUserStatus?: AppraisalUserStatus | null,
      commission?: number | null,
      paymentAdvance?: number | null,
      paymentRangeLow?: number | null,
      paymentRangeHigh?: number | null,
      soldPrice?: number | null,
      defects?: string | null,
      year?: number | null,
      model?: string | null,
      make?: string | null,
      wear?: Wear | null,
      deniedReason?: string | null,
      withdrawnReason?: string | null,
      pickupTime?:  {
        __typename: "PickupTime",
        id: string,
        time: string,
        isUsed?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      address?:  {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      listings?: Array< string | null > | null,
      appraisalAdminStatus?: AppraisalAdminStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    paymentRequest:  {
      __typename: "PaymentRequest",
      id: string,
      status: PaymentRequestStatus,
      appraisal:  {
        __typename: "Appraisal",
        id: string,
        owner?: string | null,
        name: string,
        description: string,
        pictures?:  {
          __typename: "ModelS3ObjectConnection",
          nextToken?: string | null,
        } | null,
        appraisalUserStatus?: AppraisalUserStatus | null,
        commission?: number | null,
        paymentAdvance?: number | null,
        paymentRangeLow?: number | null,
        paymentRangeHigh?: number | null,
        soldPrice?: number | null,
        defects?: string | null,
        year?: number | null,
        model?: string | null,
        make?: string | null,
        wear?: Wear | null,
        deniedReason?: string | null,
        withdrawnReason?: string | null,
        pickupTime?:  {
          __typename: "PickupTime",
          id: string,
          time: string,
          isUsed?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        address?:  {
          __typename: "Address",
          id: string,
          owner?: string | null,
          street1: string,
          street2?: string | null,
          zip: string,
          city: string,
          state: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        listings?: Array< string | null > | null,
        appraisalAdminStatus?: AppraisalAdminStatus | null,
        createdAt: string,
        updatedAt: string,
      },
      requestPrice: number,
      actualPrice: number,
      comments?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    price: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePaymentSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePaymentSubscription = {
  onDeletePayment?:  {
    __typename: "Payment",
    id: string,
    owner?: string | null,
    appraisal:  {
      __typename: "Appraisal",
      id: string,
      owner?: string | null,
      name: string,
      description: string,
      pictures?:  {
        __typename: "ModelS3ObjectConnection",
        items?:  Array< {
          __typename: "S3Object",
          id: string,
          foreignId: string,
          key: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      appraisalUserStatus?: AppraisalUserStatus | null,
      commission?: number | null,
      paymentAdvance?: number | null,
      paymentRangeLow?: number | null,
      paymentRangeHigh?: number | null,
      soldPrice?: number | null,
      defects?: string | null,
      year?: number | null,
      model?: string | null,
      make?: string | null,
      wear?: Wear | null,
      deniedReason?: string | null,
      withdrawnReason?: string | null,
      pickupTime?:  {
        __typename: "PickupTime",
        id: string,
        time: string,
        isUsed?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      address?:  {
        __typename: "Address",
        id: string,
        owner?: string | null,
        street1: string,
        street2?: string | null,
        zip: string,
        city: string,
        state: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      listings?: Array< string | null > | null,
      appraisalAdminStatus?: AppraisalAdminStatus | null,
      createdAt: string,
      updatedAt: string,
    },
    paymentRequest:  {
      __typename: "PaymentRequest",
      id: string,
      status: PaymentRequestStatus,
      appraisal:  {
        __typename: "Appraisal",
        id: string,
        owner?: string | null,
        name: string,
        description: string,
        pictures?:  {
          __typename: "ModelS3ObjectConnection",
          nextToken?: string | null,
        } | null,
        appraisalUserStatus?: AppraisalUserStatus | null,
        commission?: number | null,
        paymentAdvance?: number | null,
        paymentRangeLow?: number | null,
        paymentRangeHigh?: number | null,
        soldPrice?: number | null,
        defects?: string | null,
        year?: number | null,
        model?: string | null,
        make?: string | null,
        wear?: Wear | null,
        deniedReason?: string | null,
        withdrawnReason?: string | null,
        pickupTime?:  {
          __typename: "PickupTime",
          id: string,
          time: string,
          isUsed?: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        address?:  {
          __typename: "Address",
          id: string,
          owner?: string | null,
          street1: string,
          street2?: string | null,
          zip: string,
          city: string,
          state: string,
          userId: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        listings?: Array< string | null > | null,
        appraisalAdminStatus?: AppraisalAdminStatus | null,
        createdAt: string,
        updatedAt: string,
      },
      requestPrice: number,
      actualPrice: number,
      comments?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    price: number,
    comments?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
