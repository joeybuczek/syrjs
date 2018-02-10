// Import/Export all code challenges through this file.
// This makes it easier so that the Vuex store doesn't
// have to be manually updated with every new event.

// Import new dated events here
import event_101717 from './event_101717';
import event_112117 from './event_112117';

// Export for Vuex store to utilize here
// Be sure to extract both challenges and events
export const challenges = [
  ...event_101717.challenges,
  ...event_112117.challenges
];
export const events = [
  event_101717.eventDate,
  event_112117.eventDate
];