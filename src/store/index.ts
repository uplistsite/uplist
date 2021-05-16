import { createStore } from "vuex";
import { Auth } from "aws-amplify";

export default createStore({
  state: {
    cognitoUser: null,
  },
  mutations: {
    setCognitoUser(state, cognitoUser) {
      state.cognitoUser = cognitoUser;
    },
  },
  actions: {
    async getCognitoUser({ commit }) {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user);
      commit("setCognitoUser", user);
    },
  },
  getters: {
    isAuthenticated: (state) => {
      return !!state.cognitoUser;
    },
    getEmail: (state) => {
      return state.cognitoUser?.attributes?.email;
    }
  },
});
