let eventDate = '10/17/17';

let reverseAString = {
  eventDate,
  title: 'Reverse a String',
  info: `The function strRev() should accept a string as an argument, and return the same string in reverse.`,
  tests: [
    { 
      test: `typeof strRev('syrjs') === 'string'`, 
      description: 'strRev("syrjs") should return a string'
    },
    { 
      test: `strRev('syrjs') === 'sjrys'`, 
      description: 'strRev("syrjs") should return "sjrys"'
    }
  ],
  code: `function strRev(str) {
  // Your code goes here:
  return str;
}`
};

export default {
  eventDate,
  challenges: [ reverseAString ]
}