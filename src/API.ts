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
  balance?: number | null,
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
  paymentAdvance?: number | null,
  paymentRangeLow?: number | null,
  paymentRangeHigh?: number | null,
  defects?: string | null,
  year?: string | null,
  model?: string | null,
  make?: string | null,
  wear?: Wear | null,
  appraisalAdminStatus?: AppraisalAdminStatus | null,
};

export enum AppraisalUserStatus {
  CREATED = "CREATED",
  WITHDRAWN = "WITHDRAWN",
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
  LIST = "LIST",
  SOLD = "SOLD",
}


export type ModelAppraisalConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  appraisalUserStatus?: ModelAppraisalUserStatusInput | null,
  paymentAdvance?: ModelFloatInput | null,
  paymentRangeLow?: ModelFloatInput | null,
  paymentRangeHigh?: ModelFloatInput | null,
  defects?: ModelStringInput | null,
  year?: ModelStringInput | null,
  model?: ModelStringInput | null,
  make?: ModelStringInput | null,
  wear?: ModelWearInput | null,
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
  paymentAdvance?: number | null,
  paymentRangeLow?: number | null,
  paymentRangeHigh?: number | null,
  defects?: string | null,
  year?: string | null,
  model?: string | null,
  make?: string | null,
  wear?: Wear | null,
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

export type UpdateAppraisalInput = {
  id: string,
  owner?: string | null,
  name?: string | null,
  description?: string | null,
  appraisalUserStatus?: AppraisalUserStatus | null,
  paymentAdvance?: number | null,
  paymentRangeLow?: number | null,
  paymentRangeHigh?: number | null,
  defects?: string | null,
  year?: string | null,
  model?: string | null,
  make?: string | null,
  wear?: Wear | null,
  appraisalAdminStatus?: AppraisalAdminStatus | null,
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
  paymentAdvance?: ModelFloatInput | null,
  paymentRangeLow?: ModelFloatInput | null,
  paymentRangeHigh?: ModelFloatInput | null,
  defects?: ModelStringInput | null,
  year?: ModelStringInput | null,
  model?: ModelStringInput | null,
  make?: ModelStringInput | null,
  wear?: ModelWearInput | null,
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

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
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
    paymentAdvance?: number | null,
    paymentRangeLow?: number | null,
    paymentRangeHigh?: number | null,
    defects?: string | null,
    year?: string | null,
    model?: string | null,
    make?: string | null,
    wear?: Wear | null,
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
    paymentAdvance?: number | null,
    paymentRangeLow?: number | null,
    paymentRangeHigh?: number | null,
    defects?: string | null,
    year?: string | null,
    model?: string | null,
    make?: string | null,
    wear?: Wear | null,
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
    paymentAdvance?: number | null,
    paymentRangeLow?: number | null,
    paymentRangeHigh?: number | null,
    defects?: string | null,
    year?: string | null,
    model?: string | null,
    make?: string | null,
    wear?: Wear | null,
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

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
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
    paymentAdvance?: number | null,
    paymentRangeLow?: number | null,
    paymentRangeHigh?: number | null,
    defects?: string | null,
    year?: string | null,
    model?: string | null,
    make?: string | null,
    wear?: Wear | null,
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
        nextToken?: string | null,
      } | null,
      appraisalUserStatus?: AppraisalUserStatus | null,
      paymentAdvance?: number | null,
      paymentRangeLow?: number | null,
      paymentRangeHigh?: number | null,
      defects?: string | null,
      year?: string | null,
      model?: string | null,
      make?: string | null,
      wear?: Wear | null,
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

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
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
    paymentAdvance?: number | null,
    paymentRangeLow?: number | null,
    paymentRangeHigh?: number | null,
    defects?: string | null,
    year?: string | null,
    model?: string | null,
    make?: string | null,
    wear?: Wear | null,
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
    paymentAdvance?: number | null,
    paymentRangeLow?: number | null,
    paymentRangeHigh?: number | null,
    defects?: string | null,
    year?: string | null,
    model?: string | null,
    make?: string | null,
    wear?: Wear | null,
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
    paymentAdvance?: number | null,
    paymentRangeLow?: number | null,
    paymentRangeHigh?: number | null,
    defects?: string | null,
    year?: string | null,
    model?: string | null,
    make?: string | null,
    wear?: Wear | null,
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
