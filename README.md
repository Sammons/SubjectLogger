Install directly from github:

	npm install --save Sammons/SubjectLogger

SubjectLogger
=============

Node.js custom logger, logs by subject, and dives for properties.

Really not a huge module, but who actually likes the many layer''DEBUG WARNING NOTICE ERROR' system for small personal projects

Simple logging:
----
	var Logger = require('SubjectLogger');
	
	var logger = new Logger({
		subjectA: true,
		subjectB: false
	})
	logger.log('subjectA', 'what is up?') // logs with timestamp
	
	logger.log('subjectB', 'what is up?') // does nothing
	
	logger.log('subjectC', 'what is up?') // does nothing

Object delver
-----

	var testObj = {
		a : {
			b : {
				c : {
					d : 5
				}
			},
			d : 6
		}
	}
	
	//even circular is fine
	testObj.x = testObj
	
	logger.delve(testObj, 'd'); // logs both 5 and 6

Time
-------

	logger.start('something');
	
	logger.timesince('something') <-- returns time in milliseconds since the start;

