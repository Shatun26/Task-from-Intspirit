const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [6, 5, 4, 3, 2, 1];
const arr3 = [1, 6, 5, 10, 8, 7];
const arr4 = [1, 2, 10, 4, 6];
const arr5 = [10, 7, 6, 5, 9, 1];
const arr6 = [1, 1, 1, 1, 1];
const arr7 = [10, 9, 8, 7, 8];

const sale = (buy, max) => {
  const s = buy.reduce((partial_sum, a) => partial_sum + a, 0);
  const z = s * max;
  const result = z - s;
  return result;
};

const firstMax = (arr, max, i) => {
  let n_arr = arr;
  while (true) {
    if (n_arr[i] === max) {
      n_arr = n_arr.slice(i + 1, n_arr.length);
    } else {
      break;
    }
  }
  return n_arr;
};

const Calc = (array) => {
  let arr = array;
  let max = Math.max(...arr);
  let buy = [];
  let pribil = [];

  if (max < 0) {
    return 'Nothing to buy and to sale';
  } else {
    arr.forEach((element, i) => {
      if (element === max && element !== arr[arr.length - 1]) {
        pribil.push(Calc(arr.slice(i + 1, arr.length)));
      }
      if (element !== max) {
        buy.push(element);
      }
      if (arr[i + 1] === max) {
        pribil.push(sale(buy, max));
        buy = [];
      }
    });
  }
  return pribil.flat().reduce((partial_sum, a) => partial_sum + a, 0);
};

console.log(Calc(arr1));
console.log(Calc(arr2));
console.log(Calc(arr3));
console.log(Calc(arr4));
console.log(Calc(arr5));
console.log(Calc(arr6));
console.log(Calc(arr7));
