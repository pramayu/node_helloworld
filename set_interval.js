//setInterval
time = 0;
var timer = setInterval(function(){
  time += 2;
  console.log(time + 'second have passed');
  if (time > 10){
    clearInterval(timer);
  }
}, 2000);
