		/* 
      'bold'      : ['\x1B[1m',  '\x1B[22m'],
      'italic'    : ['\x1B[3m',  '\x1B[23m'],
      'underline' : ['\x1B[4m',  '\x1B[24m'],
      'inverse'   : ['\x1B[7m',  '\x1B[27m'],
      'strikethrough' : ['\x1B[9m',  '\x1B[29m'],
      //text colors
      //grayscale
      'white'     : ['\x1B[37m', '\x1B[39m'],
      'grey'      : ['\x1B[90m', '\x1B[39m'],
      'black'     : ['\x1B[30m', '\x1B[39m'],
      //colors
      'blue'      : ['\x1B[34m', '\x1B[39m'],
      'cyan'      : ['\x1B[36m', '\x1B[39m'],
      'green'     : ['\x1B[32m', '\x1B[39m'],
      'magenta'   : ['\x1B[35m', '\x1B[39m'],
      'red'       : ['\x1B[31m', '\x1B[39m'],
      'yellow'    : ['\x1B[33m', '\x1B[39m'],
      //background colors
      //grayscale
      'whiteBG'     : ['\x1B[47m', '\x1B[49m'],
      'greyBG'      : ['\x1B[49;5;8m', '\x1B[49m'],
      'blackBG'     : ['\x1B[40m', '\x1B[49m'],
      //colors
      'blueBG'      : ['\x1B[44m', '\x1B[49m'],
      'cyanBG'      : ['\x1B[46m', '\x1B[49m'],
      'greenBG'     : ['\x1B[42m', '\x1B[49m'],
      'magentaBG'   : ['\x1B[45m', '\x1B[49m'],
      'redBG'       : ['\x1B[41m', '\x1B[49m'],
      'yellowBG'    : ['\x1B[43m', '\x1B[49m']
		*/

var GREEN = '\x1B[32m',
	RED   = '\x1B[31m',
	NC	  = '\x1B[39m';



var logger = function(options) {
	this.subjects = {/* no defaults */};
	/* TODO grab env stuff */

	for (var i in options) this.subjects[i] = options[i];

	var date_log_with_subject = function() {
		var ts = new Date();
		var timestamp = GREEN + ts.getHours() + ':' +
						ts.getMinutes() + ':' +
						ts.getSeconds() + ':' +
						ts.getMilliseconds() + ' ' +
						ts.getDate() + '/' +
						ts.getMonth() + '/' +
						ts.getFullYear() + ' --' ;
		Array.prototype.unshift.call(arguments, timestamp);
		arguments[1] = arguments[1]+' => ' + NC;
		console.log.apply(this,arguments);

	}	

	this.log = function( subject ) {
		if (!!this.subjects[subject]) date_log_with_subject.apply(this, arguments);
	}

	this.spit = function( ) {
		if (this.subjects['spit'] !== false)
		console.log.apply(this,arguments);
	}

	this.delve = function(object, property, dodge) {
		if (!dodge) dodge = object;
		for (var i in object) {
			if (object[i] === dodge) continue;
			if (typeof(object[i]) == typeof({})) this.delve(object[i], property, dodge)
			if (i == property) console.log(object[i]);
		}
	}
	
	this.start = function(name) {
		this[name] = Date.now();
	}

	this.timesince = function(name) {
		return Date.now() - this[name];
	}
}


module.exports = logger;