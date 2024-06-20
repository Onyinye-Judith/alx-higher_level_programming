#!/usr/bin/node
import Square from './5-square.js';
class Square extends Square {
	charPrint(c) {
		let char = c === undefined ? 'X' : c;
		for (let i = 0; i < this.height; i++) {
			for (let j = 0; j < this.width; j++) {
				process.stdout.write(`${char} `);
			}
			console.log();
		}
	}
}
export default Square;
