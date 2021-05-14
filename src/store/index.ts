import { createStore } from "vuex";
import { Auth } from "aws-amplify";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user);
      commit("setUser", user);
    },
  },
  getters: {
    isAuthenticated: (state) => {
      return !!state.user;
    },
  },
});
