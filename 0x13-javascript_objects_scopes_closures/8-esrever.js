#!/usr/bin/node
eports.esrever = function (list) {
	  let reversedList = [];
	  for (let i = list.length - 1; i >= 0; i--) {
		      reversedList.push(list[i]);
		    }
	  return reversedList;
}
