#!/usr/bin/node
class Rectangle {
	constructor(w, h) {
		if (typeof w !== 'number' || typeof h !== 'number') {
			return {};
		}
		if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
			return {};
		}
		this.width = w;
		this.height = h;
	}
	print() {
		for (let i = 0; i < this.height; i++) {
			for (let j = 0; j < this.width; j++) {
				process.stdout.write('X ');
			}
			console.log();
		}
	}
	rotate() {
		[this.width, this.height] = [this.height, this.width];
	}
	double() {
		this.width *= 2;
		this.height *= 2;
	}
}
export default Rectangle;
