import Vuex from 'vuex';

// Import challenges [c][e]
import { challenges, events } from '../codechallenges';

// Default select/option placeholders
const challengeDefault = {
  eventDate: '',
  tests: [], 
  code: '', 
  info: '', 
  title: 'Select Challenge' 
};
const eventDefault = {
  value: '',
  text: 'Select Event'
};

const createStore = () => {
  return new Vuex.Store({
    state: {
      challenges, // [c]
      events      // [e]
    },
    getters: {
      codeChallenges (state) {
        return [challengeDefault].concat(state.challenges);
      },
      codeEvents (state) {
        return [eventDefault].concat(
          state.events.map(event => ({ value: event, text: event }))
        );
      }
    }
  })
};

export default createStore;