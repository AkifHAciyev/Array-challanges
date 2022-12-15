// 1. Write a JavaScript program to compute the union of two arrays.
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7];

function union(a, b) {
	return a.concat(b);
}

console.log(union(arr1, arr2));

// 2 . Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

let arrWithnull = [1, 2, 3, null, 0, '', false, undefined, NaN];

function without(arr) {
	return arr.filter(Boolean);
}

console.log(without(arrWithnull));

// 3. Write a JavaScript function to create a specified number of elements with pre-filled numeric value array.

function array_filled(length, num) {
	let newArr = [];
	for (let i = 0; i < length; i++) {
		newArr.push(num) * i;
	}
	return newArr;
}

console.log(array_filled(6, 0));

// 4. Write a JavaScript function to move an array element from one position to another.

let arr4 = [10, 20, 30, 40, 50];

function move(arr, num1, num2) {
	const element = arr.splice(num1, 1)[0];
	arr.splice(num2, 0, element);
	return arr;
}

console.log(move(arr4, 0, 2));

// [20, 30, 10, 40, 50]

// 5. Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position.

function array_range(num1, num2) {
	let newArr = [];
	for (let i = num1; i < num2 + num1; i++) {
		newArr.push(i);
	}
	return newArr;
}

console.log(array_range(1, 4));

// 6. Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.
let arr6_1 = [2, 3, 5, 7];
let arr6_2 = [2, 3, 5, 7, 8];

function integers(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 2 && arr[i] % 2 === 0) {
			newArr.push(arr[i]);
		} else if (arr[i] > 3 && arr[i] % 3 === 0) {
			newArr.push(arr[i]);
		}
	}
	if (newArr.length !== 0) {
		return false;
	} else if (newArr.length === 0) {
		return true;
	}
}

console.log(integers(arr6_1));

//      ([2,3,5,7]) -> true     ([2,3,5,7,8]) -> false

// 7. Write a JavaScript program to find all unique values in an given array of numbers.

let arr7_1 = [1, 2, 2, 3, 4, 4, 5];
let arr7_2 = [1, 2, 3, 4, 5];
let arr7_3 = [1, -2, -2, 3, 4, -5, -6, -5];

function findUniq(arr) {
	let newArr = arr.filter((e, i, arr) => arr.indexOf(e) === i);
	return newArr;
}

console.log(findUniq(arr7_1));

//       Expected Output:
//       [1,2,3,4,5]
//       [1,2,3,4,5]
//       [1,-2,3,4,-5,-6]

// 8. Write a JavaScript function to find the unique elements from two arrays.

let arr8_1 = [1, 2, 3];
let arr8_2 = [100, 2, 1, 10];

function findUniqPart2(arr, arr2) {
	let concat = arr.concat(arr2);
	let newArr = concat.filter((e, i, arr) => arr.indexOf(e) === i);
	return newArr.map(String);
}

console.log(findUniqPart2(arr8_1, arr8_2));

//       console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//      ["1", "2", "3", "10", "100"]

// 9. Write a JavaScript function to find the difference of two arrays
let arr9_1 = [1, 2, 3];
let arr9_2 = [100, 2, 1, 10];

function differenceArr(arr1, arr2) {
	let difference = arr1.filter((e) => !arr2.includes(e)).concat(arr2.filter((e) => !arr1.includes(e)));
	return difference.map(String);
}

console.log(differenceArr(arr9_1, arr9_2));

//        console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//        ["3", "10", "100"]

// 10. Write a JavaScript program to shuffle an array
let arr10_1 = [100, 2, 1, 10, 2, 4, 65];

function shuffle(arr) {
	return arr.sort(() => Math.random() - 0.5);
}

console.log(shuffle(arr10_1));
