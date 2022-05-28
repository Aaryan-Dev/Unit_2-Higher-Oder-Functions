// Given an array of string generate an array whose first or last character is a
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]


let arr = ["assignment", "problem", "media", "upload"];

let aletter = arr.filter(function(el){
  return el[0]=="a"|| el[el.length-1]=="a";

})
console.log(aletter);