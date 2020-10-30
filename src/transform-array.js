const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	let result = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '--discard-next') {
			if (arr[i + 2] && arr[i + 2].toString().includes('-prev'))
				i += 2
			else
				i += 1
		} else if (arr[i] === '--discard-prev') {
			if (result.length)
				result.pop()
		} else if (arr[i] === '--double-prev') {
			if (result.length)
				result.push(result[result.length - 1])
		} else if (arr[i] === '--double-next') {
			if (i + 1 < arr.length)
				result.push(arr[i + 1])
		} else
			result.push(arr[i])
	}
	return result
};
