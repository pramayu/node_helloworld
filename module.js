var counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array'
};

var sum = function(a, b){
  return a + ' + ' + b + ' = ' + (a+b);
}

module.exports = {
  counter: counter,
  sum: sum
}
