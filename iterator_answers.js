const words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];

words.forEach(function(){
  console.log(words)
  });


//Map
const more_words = ["Joe", "Overeats", "Eggs"];
//map takes an argument as a function 
// so somehow using map we iterate through the array and capture just the first letter of every index.
more_words.map(function() {
  console.log(more_words)
})

//reduce
// read the mdn and dont really understand how it works 
// reduce is a function
const arr = [8, 8, 8, 8, 8, 8, 8, 8];
arr.reduce(function(){
  for(i=0;9<arr.length;i++){
    arr[i] * arr[i + 1]
    console.log(arr)
  }
})