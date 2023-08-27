function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
		if (min > arr[i]) {
			min = arr[i];
		}
		if (max < arr[i]) {
			max = arr[i];
		}
	}
	let avg = sum / arr.length
	avg = Number(avg.toFixed(2))
	return {min: min,max: max,avg: avg};
}
console.log(getArrayParams(-99, 99, 10));

function summElementsWorker(...arr) {
 let sum = arr.reduce((acc, c) => acc + c);
  return sum;
}
console.log(summElementsWorker(10, 10, 11, 20, 10));

function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let dif = max - min;
  return dif;
}
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));

function differenceEvenOddWorker(...arr){
if (arr.length > 0) {
		let sumEvenElement = 0;
		let sumOddElement = 0;
		for (let i = 0; i < arr.length; i++) {
			if ((arr[i] % 2) === 0) {
				sumEvenElement = sumEvenElement + arr[i];
			} else {
				sumOddElement = sumOddElement + arr[i];
			}
		}
		return sumEvenElement - sumOddElement;
	} else {
		return 0;
	}
}
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));

function averageEvenElementsWorker(...arr) {
	if (arr.length > 0) {
		let sumEvenElement = 0
		let countEvenElement = 0
		for (let i = 0; i < arr.length; i++) {
			if ((arr[i] % 2) === 0) {
				sumEvenElement = sumEvenElement + arr[i];
				countEvenElement = countEvenElement + 1
			}
		}
		if (Number.isNaN(sumEvenElement / countEvenElement)) {
			return 0;
		} else {
			return sumEvenElement / countEvenElement;
		}
	} else {
		return 0;
	}
}
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
	let addArr = [];
	for (let i = 0; i < arrOfArr.length; i++) {
		addArr.push(func(...arrOfArr[i]))
	}
	for (let i = 0; i < addArr.length; i++) {
		if (maxWorkerResult < addArr[i]) {
			maxWorkerResult = addArr[i]
		}
	}
	return maxWorkerResult;
}
console.log(makeWork([
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
], summElementsWorker))


