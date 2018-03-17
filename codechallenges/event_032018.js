let eventDate = '032018';

let dataTyper = {
  eventDate,
  title: "Data Type Analyzer",
  info: "Create the function dataTyper(), which has two parameters: The first to hold any type of value, and the second a function to be used as a callback. The dataTyper function should evaluate the data type of the first argument, then execute the callback, passing in the data type result as an argument.",
  tests: [
    {
      test: "'number' === (() => { let dt; dataTyper(24, result => (dt = result)); return dt; })()",
      description: "let dt; dataTyper(24, result => (dt = result)); should assign the value 'number' to variable dt"
    },
    {
      test: "'string' === (() => { let dt; dataTyper('syrjs', result => (dt = result)); return dt; })()",
      description: "let dt; dataTyper('syrjs', result => (dt = result)); should assign the value 'string' to variable dt"
    },
    {
      test: "'object' === (() => { let dt; dataTyper({ js: true }, result => (dt = result)); return dt; })()",
      description: "let dt; dataTyper({ js: true}, result => (dt = result)); should assign the value 'object' to variable dt"
    },
    {
      test: "'array' === (() => { let dt; dataTyper([1,2,3], result => (dt = result)); return dt; })()",
      description: "let dt; dataTyper([1,2,3], result => (dt = result)); should assign the value 'array' to variable dt"
    }
  ],
  resources: [
    { source: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof', description: 'typeof' },
    { source: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array', description: 'Array' }
  ],
  code: `function dataTyper(value, callback) { 
  // Your code goes here:
  
}`
};

let timedTyper = {
  eventDate,
  title: "Timed Data Analyzer",
  info: "Callbacks are handy for further processing asynchronous results. Create the function timedTyper() which has three parameters: the first to hold any value, the second to hold a number, and the third a callback function. The timedTyper function should evaluate the data type of the first argument, wait the amount of time in milliseconds from the second argument, and finally send the result into the callback as an argument.",
  tests: [
    {
      test: "timedTyper(24, 1000, result => alert(result));",
      description: "timedTyper(24, 1000, result => alert(result)); should alert the value 'number' after 1 second",
      bulletStyle: "⚪"
    },
    {
      test: "timedTyper('syrjs', 2000, result => alert(result));",
      description: "timedTyper('syrjs', 2000, result => alert(result)); should alert the value 'string' after 2 seconds",
      bulletStyle: "⚪"
    }
  ],
  resources: [
    { source: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof', description: 'typeof' },
    { source: 'https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout', description: 'setTimeout' }
  ],
  code: `function timedTyper(value, delay, callback) {
  // Your code goes here:
  
}`
};

let apiGet = {
  eventDate,
  title: "HTTP GET Request Wrapper",
  info: "HTTP GET requests made against external APIs are prime examples of asynchronous programming. Create the function apiGet(), which accepts two arguments: a url string that represents an API query, and a callback to handle the response once received.",
  tests: [
    {
      test: "apiGet.toString().toLowerCase().indexOf('axios.get') > 0",
      description: "apiGet() should issue a GET request via axios"
    },
    {
      test: "apiGet('https://api.punkapi.com/v2/beers?beer_name=Pumpkin_King', res => alert(res.data[0].name) );",
      description: "apiGet('https://api.punkapi.com/v2/beers?beer_name=Pumpkin_King', res => alert(res.data[0].name) ); should result in 'Pumpkin King' being alerted to the screen.",
      bulletStyle: "⚪"
    }
  ],
  resources: [
    { source: 'https://github.com/axios/axios', description: 'axios' },
    { source: 'https://punkapi.com/documentation/v2', description: 'punkapi' }
  ],
  code: `const apiGet = (url, callback) => {
  /*****************************************************************
    The axios library is available globally for this challenge.
    To use it, simply invoke the axios['method name'] in your code.
   *****************************************************************/

  // Your code goes here:
  
}`
};

export default {
  eventDate,
  challenges: [dataTyper, timedTyper, apiGet]
}