/* no this isn't a very special test, but it does the trick */

var loggerlib = require('./index.js');

var logger = new loggerlib({
	subject:true
});

var ex = {
	j : {
		yay : {
			something: 'sup'
		}
	},
	k : {
		yay : 'sudo'
	},
	y : [
		{},
		{ yay : 'sure'}
	]
}
// checking circular defense
ex.yay = ex;

logger.log('subject','sup','three','four');
// logger.spit('sup','yup','bleh');
logger.delve(ex,'yay');