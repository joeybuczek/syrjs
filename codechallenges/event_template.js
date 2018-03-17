/************************************************************
  Use this file as a template for creating code challenges.
  Each challenge is represented as a JS object, and should
  be in the following shape:

  {
    eventDate: 'DDMMYY',
    title: 'Title of code challenge',
    info: 'Description and any other relevant info',
    tests: [ // Array of tests to be performed
      {
        test: 'String of JavaScript code to be evaluated',
        description: 'Display text for the test'
      }
    ],
    code: 'Initial code to be displayed in the editor'
  }

  There can be as many tests per event as necessary, and they
  should be exported as an array (even if there is only one).
  
  Be sure to add the reference to the challenge module to the
  index.js file in this folder so it is properly exported.

  Modify the below to get started!
 ************************************************************/

let eventDate = 'DDMMYY';

let exampleChallengeOne = {
  eventDate,
  title: "Example Challenge One",
  info: "This is the description for Challenge One",
  tests: [
    {
      test: "typeof exampleOne() === 'boolean'",
      description: "exampleOne() should return a boolean",
      bulletStyle: "⚪"
    }
  ],
  resources: [
    { source: 'http://www.google.com', description: 'Google' }
  ],
  code: "function exampleOne() { return undefined; }"
};

let exampleChallengeTwo = {
  eventDate,
  title: "Example Challenge Two",
  info: "This is the description for Challenge Two",
  tests: [
    {
      test: "typeof exampleTwo() === 'string'",
      description: "exampleTwo should return a string"
    },
    {
      test: "exampleTwo().length === 3",
      description: "exampleTwo should return a string of length 3"
    }
  ],
  resources: [
    { source: 'http://www.google.com', description: 'Google' }
  ],
  code: "function exampleTwo() { return undefined; }"
};

export default {
  eventDate,
  challenges: [exampleChallengeOne, exampleChallengeTwo]
}