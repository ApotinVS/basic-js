const CustomError = require("../extensions/custom-error");
	
module.exports = class DepthCalculator {
  calculateDepth(arr, count = 1) {	
	let subarrays = arr.filter(element => Array.isArray(element))
	if (subarrays.length){		
		return this.calculateDepth(subarrays.flat(), ++count)		
	}
	else return count	
  }
};