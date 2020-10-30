const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	let result = ''
	if (Array.isArray(members)) {
		members.forEach(element => {
			if (typeof element === 'string') {
				result += element.trim().substring(0, 1).toLocaleUpperCase()
			}
		});
		return result.split('').sort().join('');
	}
	else return false


}
