import { createStore } from "vuex";

export default createStore({
  state: {
    activeLang: "es",
    activeComp: 1,
    mobileMode: false,
    darkMode: false,
  },
  mutations: {
    setActiveComp(state, value) {
      state.activeComp = value;
    },
    setMobileMode(state, value) {
      state.mobileMode = value;
    },
    setDarkMode(state, value) {
      state.darkMode = value;
    },
  },
});
