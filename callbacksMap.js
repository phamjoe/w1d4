var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

function map(words, cb){
  var arr = [];
  for(aWord of words){
    arr.push(cb(aWord));
  }
  console.log(arr);
}