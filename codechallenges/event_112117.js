let eventDate = '112117';

let characterCounter = {
  eventDate,
  title: 'Character Counter',
  info: `Create function charCount() which accepts a string and returns an array of objects where the key of the object is the character and the value is the number of those characters in the string.`,
  tests: [
    { 
      test: `Array.isArray(charCount("syrjs"))`, 
      description: 'charCount("syrjs") should return an array'
    },
    { 
      test: `(charCount("syrjs")).length === 4`, 
      description: 'charCount("syrjs") should return an array with four elements'
    },
    { 
      test: `(charCount("syrjs")).filter(o => (o.hasOwnProperty('s') && o.s === 2)).length === 1`, 
      description: 'charCount("syrjs") should contain the following object: { s: 2 }'
    }
  ],
  resources: [
    { source: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array', description: 'JavaScript Arrays' }
  ],
  code: `function charCount(str) {
  // Your code goes here:
  return str;
}`
};

let validateAPalidrome = {
  eventDate,
  title: 'Validate a Palindrome',
  info: `The function isPalindrome() should accept a string, and return a boolean idicating if the argument passed was a valid palindrome.`,
  tests: [
    { 
      test: `typeof isPalindrome('racecar') === 'boolean'`, 
      description: 'isPalindrome("racecar") should return a boolean'
    },
    { 
      test: `isPalindrome('racecar')`, 
      description: 'isPalindrome("racecar") should return true'
    }
  ],
  code: `function isPalindrome(str) {
  // Your code goes here:
  return false;
}`
};

export default {
  eventDate,
  challenges: [ characterCounter, validateAPalidrome ] 
};