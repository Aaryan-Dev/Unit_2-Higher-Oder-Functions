// Given an array of strings print the length of each string

let arr = ["apple", "windows", "ubuntu"];

let length = arr.map(function(el){
  return el.length;

})
console.log(length);