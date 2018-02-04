let title = 'Validate a Palindrome';

let info = `The function isPalindrome() should accept a string, and return a boolean idicating if the argument passed was a valid palindrome.`

let code = `function isPalindrome(str) {
  // Your code goes here:
  return false;
}`;

let tests = [
  { 
    test: `typeof isPalindrome('racecar') === 'boolean'`, 
    description: 'isPalindrome("racecar") should return a boolean'
  },
  { 
    test: `isPalindrome('racecar')`, 
    description: 'isPalindrome("racecar") should return true'
  }
];

export default { 
  tests, 
  code, 
  info,
  title 
};