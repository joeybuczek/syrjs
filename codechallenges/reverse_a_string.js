let title = 'Reverse a String';

let info = `The function strRev() should accept a string as an argument, and return the same string in reverse.`;

let code = `function strRev(str) {
  // Your code goes here:
  return str;
}`;

let tests = [
  { 
    test: `typeof strRev('syrjs') === 'string'`, 
    description: 'strRev("syrjs") should return a string'
  },
  { 
    test: `strRev('syrjs') === 'sjrys'`, 
    description: 'strRev("syrjs") should return "sjrys"'
  }
];

export default { 
  tests, 
  code, 
  info,
  title 
};