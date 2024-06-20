#!/usr/bin/node
class Rectangle {
	constructor(w, h) {
		if (typeof w !== 'number' || typeof h !==
			'number') {
			return {};
		}
		if (w <= 0 || h <= 0 ||
			!Number.isInteger(w) || !Number.isInteger(h))
		{
			return {};
		}
		this.width = w;
		this.height = h;
		  }
}
