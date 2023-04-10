const { log } = require('console');
const url = require('url')

const urlSample = new URL('http://tkurian2.com:8000/home.html?/name=sagar&age=30')

console.log(urlSample.href);
console.log(urlSample);
console.log(urlSample.origin);