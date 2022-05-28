// Given an array of strings print the sum of lengths if the characters in the string are odd
// Sample Input - ["A", "Good", "Problem"]
// Sample Output - 8


let arr = ["A", "Good", "Problem"];

let aletter = arr.filter(function(el){
  return el.length%2!==0;

})


let now = aletter.reduce(function(acc, el){
  return acc.length+el.length
});

console.log(now);