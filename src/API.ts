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
  username?: string | null,
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
  pictures?: Array< string | null > | null,
  isUserWithdrawn?: boolean | null,
  appraisalStatus?: AppraisalStatus | null,
};

export enum AppraisalStatus {
  approved = "approved",
  denied = "denied",
}


export type ModelAppraisalConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  pictures?: ModelStringInput | null,
  isUserWithdrawn?: ModelBooleanInput | null,
  appraisalStatus?: ModelAppraisalStatusInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelAppraisalStatusInput = {
  eq?: AppraisalStatus | null,
  ne?: AppraisalStatus | null,
};

export type Appraisal = {
  __typename: "Appraisal",
  id?: string,
  owner?: string | null,
  name?: string,
  description?: string,
  pictures?: Array< string | null > | null,
  isUserWithdrawn?: boolean | null,
  appraisalStatus?: AppraisalStatus | null,
  createdAt?: string,
  updatedAt?: string,
  username?: string | null,
};

export type UpdateAppraisalInput = {
  id: string,
  owner?: string | null,
  name?: string | null,
  description?: string | null,
  pictures?: Array< string | null > | null,
  isUserWithdrawn?: boolean | null,
  appraisalStatus?: AppraisalStatus | null,
};

export type DeleteAppraisalInput = {
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
  pictures?: ModelStringInput | null,
  isUserWithdrawn?: ModelBooleanInput | null,
  appraisalStatus?: ModelAppraisalStatusInput | null,
  and?: Array< ModelAppraisalFilterInput | null > | null,
  or?: Array< ModelAppraisalFilterInput | null > | null,
  not?: ModelAppraisalFilterInput | null,
};

export type ModelAppraisalConnection = {
  __typename: "ModelAppraisalConnection",
  items?:  Array<Appraisal | null > | null,
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
    balance?: number | null,
    createdAt: string,
    updatedAt: string,
    username?: string | null,
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
    username?: string | null,
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
    username?: string | null,
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
    pictures?: Array< string | null > | null,
    isUserWithdrawn?: boolean | null,
    appraisalStatus?: AppraisalStatus | null,
    createdAt: string,
    updatedAt: string,
    username?: string | null,
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
    pictures?: Array< string | null > | null,
    isUserWithdrawn?: boolean | null,
    appraisalStatus?: AppraisalStatus | null,
    createdAt: string,
    updatedAt: string,
    username?: string | null,
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
    pictures?: Array< string | null > | null,
    isUserWithdrawn?: boolean | null,
    appraisalStatus?: AppraisalStatus | null,
    createdAt: string,
    updatedAt: string,
    username?: string | null,
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
    username?: string | null,
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
      username?: string | null,
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
    pictures?: Array< string | null > | null,
    isUserWithdrawn?: boolean | null,
    appraisalStatus?: AppraisalStatus | null,
    createdAt: string,
    updatedAt: string,
    username?: string | null,
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
      pictures?: Array< string | null > | null,
      isUserWithdrawn?: boolean | null,
      appraisalStatus?: AppraisalStatus | null,
      createdAt: string,
      updatedAt: string,
      username?: string | null,
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
    username?: string | null,
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
    username?: string | null,
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
    username?: string | null,
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
    pictures?: Array< string | null > | null,
    isUserWithdrawn?: boolean | null,
    appraisalStatus?: AppraisalStatus | null,
    createdAt: string,
    updatedAt: string,
    username?: string | null,
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
    pictures?: Array< string | null > | null,
    isUserWithdrawn?: boolean | null,
    appraisalStatus?: AppraisalStatus | null,
    createdAt: string,
    updatedAt: string,
    username?: string | null,
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
    pictures?: Array< string | null > | null,
    isUserWithdrawn?: boolean | null,
    appraisalStatus?: AppraisalStatus | null,
    createdAt: string,
    updatedAt: string,
    username?: string | null,
  } | null,
};
