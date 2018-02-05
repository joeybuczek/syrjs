import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      testing: 'successful'
    },
    getters: {
      getSuccessfulTest (state) {
        return `Testing was ${state.testing}! LEFT OFF HERE!!!`
      }
    }
  })
};

export default createStore;