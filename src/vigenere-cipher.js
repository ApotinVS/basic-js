const CustomError = require("../extensions/custom-error");
const CODE_OF_A = 65;
const LETTERS_IN_ALPHABET = 26;

class VigenereCipheringMachine {
	constructor(type) {
		this.reverseType = type === false;
	}
	encrypt(message, key) {
		if (message === undefined || key === undefined) {
			throw new Error()
		}
		message = message.toUpperCase().split('');
		key = key.toUpperCase().split('');
		for (let i = 0; i < key.length; i++) {
			key[i] = key[i].charCodeAt(0) - CODE_OF_A;
		}
		let shift = 0
		for (let i = 0; i < message.length; i++) {
			if (!/[A-Z]/.test(message[i])) {				
				shift++;
				continue;
			}
			message[i] = String.fromCharCode((message[i].charCodeAt(0) - CODE_OF_A + key[(i - shift) % key.length])
				% LETTERS_IN_ALPHABET + CODE_OF_A)
		}
		return this.reverseType ? message.reverse().join`` : message.join``;
	}
	decrypt(message, key) {
		if (message === undefined || key === undefined) {
			throw new Error()
		}
		let shift = 0;
		key = key.toUpperCase().split('');
		message = message.toUpperCase().split('');
		for (let i = 0; i < key.length; i++) {
			key[i] = key[i].charCodeAt(0) - CODE_OF_A;
		}
		for (let i = 0; i < message.length; i++) {
			if (!/[A-Z]/.test(message[i])) {
				shift++;
				continue;
			}
			message[i] = String.fromCharCode((message[i].charCodeAt(0) - CODE_OF_A + LETTERS_IN_ALPHABET - key[(i - shift) % key.length])
				% LETTERS_IN_ALPHABET + CODE_OF_A)
		}
		return this.reverseType ? message.reverse().join`` : message.join``
	}
}


module.exports = VigenereCipheringMachine;
