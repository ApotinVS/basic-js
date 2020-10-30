const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
	let count = 0
	if (matrix){
		matrix.forEach(row => {
			if(row){
				row.forEach(element => {
					if (element && element.toString() == '^^'){
						count++
					}
				});
			}
			
			
		});
	}
	
	return count
};
