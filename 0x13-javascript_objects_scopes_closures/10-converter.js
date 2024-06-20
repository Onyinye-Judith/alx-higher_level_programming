#!/usr/bin/node
exports.converter = function (base) {
	return function (num) {
		const digits = [];
		while (num > 0) {
			digits.push(num % base);
			num = Math.floor(num / base);
		}
		return digits.reverse().join('');
	}
}
