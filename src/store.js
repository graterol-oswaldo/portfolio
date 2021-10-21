import { createStore } from "vuex";

export default createStore({
  state: {
    activeComp: 1,
    mobileMode: false,
  },
  mutations: {
    setActiveComp(state, value) {
      state.activeComp = value;
    },
    setMobileMode(state, value) {
      state.mobileMode = value;
    },
  },
});
