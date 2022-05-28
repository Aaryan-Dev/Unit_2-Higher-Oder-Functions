// Given an array of numbers find the sum of odd elements Sample Input - [1, 2, 3, 4] Sample Output - 4

let arr = [1, 2, 3, 4];

let odd  = arr.filter(function(el){
  return el%2!==0;
})

let add = odd.reduce(function(acc, el){
  return acc+el
})

console.log(add);