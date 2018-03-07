import Vuex from 'vuex';

// ========================[TESTING]===========================
// Import challenges (Testing only. Production uses API action)
import { codeChallenges } from '../codechallenges';

// Format code challenges into challenge/eventdate arrays,
// given the following shape:
// { 
//   data: [
//     { eventDate: '', challenges: [{}, {}, ...] }
//   ]
// }
const challenges = codeChallenges.data
  .map(c => c.challenges)
  .reduce((p,n) => [...p, ...n], []);
const events = codeChallenges.data.map(c => c.eventDate);
// ============================================================

// Default select/option placeholders
const challengeDefault = {
  eventDate: '',
  title: 'Select Challenge' ,
  info: '', 
  tests: [], 
  code: ''
};
const eventDefault = {
  value: '',
  text: 'Select Event'
};

// Vuex Store
const createStore = () => {
  return new Vuex.Store({
    state: {
      challenges: [],
      events: []
    },
    getters: {
      codeChallenges (state) {
        return [challengeDefault].concat(state.challenges);
      },
      codeEvents (state) {
        return [eventDefault].concat(
          state.events.map(event => ({ 
            value: event, 
            text: `${event.slice(0,2)}/${event.slice(2,4)}/${event.slice(4)}` 
          }))
        );
      }
    },
    mutations: {
      loadChallenges (state, payload) {
        state.challenges = payload;
      },
      loadEvents (state, payload) {
        state.events = payload;
      }
    },
    actions: {
      async loadChallenges ({commit, state}) {
        // Only load challenges from API if not already loaded
        if (state.challenges.length === 0) {
          const apiResult = await this.$axios.$get('https://syrjs-api.herokuapp.com/api/codechallenge');
          let challenges = apiResult.data
            .map(c => c.challenges)
            .reduce((p,n) => [...p, ...n], []);
          let events = apiResult.data.map(c => c.eventDate);
          commit('loadChallenges', challenges);
          commit('loadEvents', events);
        } else {
          console.log('Challenges already loaded...')
        }
      }
    }
  })
};

export default createStore;