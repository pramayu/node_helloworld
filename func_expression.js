//normal function
function hi_1(){
  console.log("Hi Normal");
};

//passed function
function func(fun) {
  fun();
};

//expresion function

var hi_2 = function(){
  console.log("Hi Expression");
};

func(hi_2);
