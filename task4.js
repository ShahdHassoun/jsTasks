
// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. For example 
// answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] 
// should return [[1,2], ["2", "3"]]
function clean(arr) {
	let i = 0;
	let pos = 0;
	let duplicateArray = [];
	let newArray = [];
	arr.sort((a, b) => a - b);
	while (i < arr.length) {
		if ( arr[0] === arr[1] ) {
			pos = arr.lastIndexOf(arr[0]) + 1;
			duplicateArray = arr.splice(0, pos);
			newArray.push(duplicateArray);
		} else {
			newArray.push(arr[0]);
			arr.shift();
		}
	}
	return newArray;
}
let array=[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
array=[1, "2", "3", 2] ;
console.log(clean(array));

// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find 
// two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)
// should return [1,3]


 function find(array,target){
    const numsMap = new Map();
    for (let i = 0; i < array.length; i++) {
        if(numsMap.has(target - array[i])) {
            return [target-array[i], array[i]];
        } else {
            numsMap.set(array[i], i);
        }
    }
 }
let answer =find([1,2,3], 4);

console.log(answer);

//write a function that converts HEX to RGB then make that function auto -dect
String.prototype.convertToRGB = function(){
    if(this.length != 6){
        throw "Only six-digit hex colors are allowed.";
    }
    var aRgbHex = this.match(/.{1,2}/g);  
    var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return aRgb;
}
console.log('123456'.convertToRGB());

function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
//   console.log(rgbToHex(28, 135, 201)); // #1c89c9