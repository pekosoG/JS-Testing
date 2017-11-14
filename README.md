## Testing JavaScript for Node.js with Mocha
---------

The following code and documentation is the result of [Testing JavaScript for Node.js with Mocha](https://app.pluralsight.com/library/courses/mocha-javascript-testing-nodejs) Course.

__Types of Testing__

- Unit Tests
- Integration Tests
- Functional Test


__Unit Test__

Find the smallest available piece, just that, mock everything else.

You might Test a function, just to know if that does eactly what you wanted it to do... 

_"Does it returns true?"_

__Integration Tests__

Lest's tie some things together, test teir interactions. Mock the outside resources.

Your function needs to work with something else and we need to know if it actually happens.

_"Hey make sure this thing calls this other thing"_

__Functional Tests__

All together now, start on the outside, end on the outside, blackbox testing, make sure everything fits together.

_"I have no idea what this box does, but if i send this, it returns a number..."