const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let repeatTimes, separator, addition, additionRepeatTimes, additionSeparator

	repeatTimes = options.repeatTimes
	!options.separator ? separator = '+' : separator = options.separator
	addition = options.addition
	additionRepeatTimes = options.additionRepeatTimes
	options.additionSeparator ? additionSeparator = options.additionSeparator : additionSeparator = '|';
	let result = ''
	let sep = options.addition
	if (options.addition + '' && options.addition !== undefined) {
		for (let i = 1; i < additionRepeatTimes; i++) {
			sep += `${additionSeparator}${addition}`;
		}
		for (let i = 1; i < repeatTimes; i++) {
			result += `${separator}${str}${sep}`;
		}
		return `${str}${sep}${result}`;
	} else{
		for (let i = 1; i < repeatTimes; i++) {
			result += str + '' + separator
		}
		return result += str + ''
	}
	

};
