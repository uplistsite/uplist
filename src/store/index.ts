import { createStore } from "vuex";
import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "@/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";
import { ListUsersQuery } from "@/API";

async function findUser(): Promise<any> {
  const users = (await API.graphql(
    graphqlOperation(listUsers)
  )) as GraphQLResult<ListUsersQuery>;
  return users.data.listUsers.items[0];
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
      try {
        const user = await Auth.currentAuthenticatedUser();
        commit("setCognitoUser", user);
      } catch (e) {
        commit("setCognitoUser", null);
      }
    },
    async getUser({ commit }) {
      const user = await findUser();
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
    isAdminUser: (state) => {
      const groups =
        state.cognitoUser?.signInUserSession?.accessToken?.payload[
          "cognito:groups"
        ];
      return groups?.includes("admin");
    },
  },
});
