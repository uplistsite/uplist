import { createStore } from "vuex";
import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "@/graphql/queries";
import { createUser } from "@/graphql/mutations";
import { GraphQLResult } from "@aws-amplify/api";
import { ListUsersQuery } from "@/API";

async function findUser(): Promise<any> {
  const users = (await API.graphql(
    graphqlOperation(listUsers)
  )) as GraphQLResult<ListUsersQuery>;
  if (users.data.listUsers.items.length > 0) {
    return users.data.listUsers.items[0];
  }
  await API.graphql({
    query: createUser,
    variables: {
      input: {},
    },
  });
  return (
    (await API.graphql(
      graphqlOperation(listUsers)
    )) as GraphQLResult<ListUsersQuery>
  ).data.listUsers.items[0];
}

export default createStore({
  state: {
    cognitoUser: null,
    user: null,
  },
  mutations: {
    setCognitoUser(state, cognitoUser) {
      state.cognitoUser = cognitoUser;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async getCognitoUser({ commit }) {
      const user = await Auth.currentAuthenticatedUser();
      commit("setCognitoUser", user);
    },
    async getUser({ commit }) {
      const user = await findUser();
      console.log(user);
      commit("setUser", user);
    },
  },
  getters: {
    isAuthenticated: (state) => {
      return !!state.cognitoUser;
    },
    getEmail: (state) => {
      return state.cognitoUser?.attributes?.email;
    },
    getBalance: (state) => {
      return "Balance: $" + (state?.user?.balance ? state.user.balance : "0");
    },
  },
});
