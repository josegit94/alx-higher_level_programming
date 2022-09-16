#!/usr/bin/node
/**
* convert argument value to int
* print the integer 
* if the value is not an integer print "Not a number"
*/
const myVar = parseInt(process.argv[2]);

if (isNaN(myVar)) {
	console.log('Not a number');
} else {
	console.log('My number: ' + myVar);
}
