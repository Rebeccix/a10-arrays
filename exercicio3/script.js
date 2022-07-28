let arrNum = [ 7, 5, 9, 8, 1];

let arrStrin = ["harder", "better", "stronger"];

let arrSort = [4, "smart" , true];

let arrNumCopia = arrNum.slice();

let arrStrinCopia = arrStrin.slice();

let arrSortCopia = arrSort.slice();

arrNumCopia.push(3)
console.log(arrNumCopia);

arrStrinCopia.pop();
console.log(arrStrinCopia);

arrSortCopia.splice(1, 1);
console.log(arrSortCopia);