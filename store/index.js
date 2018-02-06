import Vuex from 'vuex';

// Tests in here for now, until retrieved via AJAX
import ch01 from '../codechallenges/reverse_a_string';
import ch02 from '../codechallenges/validate_a_palindrome';

// Default challenge placeholder
const challengeDefault = { 
  tests: [], 
  code: '', 
  info: '', 
  title: 'Select a Challenge!' 
};

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedTests: [
        challengeDefault, 
        ch01, 
        ch02
      ]
    },
    getters: {
      codeChallenges (state) {
        return state.loadedTests;
      }
    }
  })
};

export default createStore;