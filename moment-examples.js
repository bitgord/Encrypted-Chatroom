var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.format('X'));
console.log(now.valueOf());

var timestamp = 1444247486704;
var timestampMoment = moment.utc(timestamp); // 10:10 am

console.log(timestampMoment.local().format('h:mm a'));

// now subtract(1, 'year');

console.log(now.format());
console.log(now.format('MMM Do YYYY, h:mna')); // Oct 5th 2015, 6:45 pm
