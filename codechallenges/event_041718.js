let eventDate = '041718';

let canFit = {
  eventDate,
  title: "Viable Container",
  info: "Create the function canFit(), which accepts two array arguments that each represent the length, width, and height of an object: [l, w, h]. The function should return a boolean that determines whether object 1 can fit inside object 2.",
  tests: [
    {
      test: "typeof canFit([1,1,1],[2,2,2]) === 'boolean'",
      description: "canFit should return a boolean"
    },
    {
      test: "canFit([1,1,1],[2,2,2])",
      description: "canFit([1,1,1],[2,2,2]) should return true"
    },
    {
      test: "canFit([3,3,3],[3,3,3]) === false",
      description: "canFit([3,3,3],[3,3,3]) should return false"
    },
    {
      test: "canFit([5,11,3],[13,6,2]) === false",
      description: "canFit([5,11,3],[13,6,2]) should return false"
    },
    {
      test: "canFit([4,3,4],[5,4,10])",
      description: "canFit([4,3,4],[5,4,10]) should return true"
    },
    {
      test: "canFit([38,24,32],[25,31,42]) === false",
      description: "canFit([38,24,32],[25,31,42]) should return false"
    },
  ],
  resources: [
    { source: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array', description: 'Array' }
  ],
  code: `function canFit(obj1, obj2) {
  // Your code goes here:
  
}`
};

let permNum = {
  eventDate,
  title: "Permission Query",
  info: "Create the function permNum(), which accepts one argument as a string. Given a set of permissions, such as 'rwx' or 'r-x', return the numeric representation for the permission level.",
  tests: [
    {
      test: "typeof permNum('rwx') === 'number'",
      description: "permNum should return a number"
    },
    {
      test: "permNum('rwx') === 7",
      description: "permNum('rwx') should return 7"
    },
    {
      test: "permNum('r-x') === 5",
      description: "permNum('r-x') should return 5"
    },
    {
      test: "permNum('-wx') === 3",
      description: "permNum('-wx') should return 3"
    },
    {
      test: "permNum('-w-') === 2",
      description: "permNum('-w-') should return 2"
    },
    {
      test: "permNum('---') === 0",
      description: "permNum('---') should return 0"
    }
  ],
  code: `function permNum(str) {
  // Your code goes here:
  
}`
};

let lifePathNum = {
  eventDate,
  title: "Life Path Number",
  info: "Create the function lifePathNum(), which has one parameter that holds a string representing a birth date in the format 'MM/DD/YYYY'. Using this date, calculate the life path number for that date. Output should be a number type.",
  tests: [
    {
      test: "typeof lifePathNum('10/02/1869') === 'number'",
      description: "lifePathNum should return a number"
    },
    {
      test: "lifePathNum('10/02/1869') === 9",
      description: "lifePathNum('10/02/1869') should return 9"
    },
    {
      test: "lifePathNum('12/25/1981') === 11",
      description: "lifePathNum('12/25/1981') should return 11"
    },
    {
      test: "lifePathNum('07/08/1978') === 22",
      description: "lifePathNum('07/08/1978') should return 22"
    }
  ],
  resources: [
    { source: 'https://www.gaia.com/article/life-path-number-report', description: 'Life Path Number' },
  ],
  code: `function lifePathNum(dateStr) { 
  // Valid life path numbers: 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22
  // Your code goes here:
  
}`
};

export default {
  eventDate,
  challenges: [canFit, permNum, lifePathNum]
}