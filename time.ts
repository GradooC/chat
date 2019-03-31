// const time = new Date();
// console.log(time.getHours())
// console.log(time.getMinutes())

// var myDate = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
var myDate = new Date().toTimeString().replace(/(\d{2}:\d{2}).*/, '$1');
console.log(myDate)