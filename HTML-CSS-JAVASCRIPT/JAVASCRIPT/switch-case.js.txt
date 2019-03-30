
// function getDay() {
//   var day = 6

//   if (day == 0) {
//    console.log("Sunday")
//   } 
//   else if (day == 1) {
//    console.log("Monday")
//   } 
//   else if (day == 2) {
//    console.log("Tuesday")
//   } 
//   else if (day == 3) {
//    console.log("Wednesday")
//   }
//   else {
//    console.log("You entered an invalid number") 
//   }
// }

function getDay() {
  var day = 2

  switch(day) {
    case 0: 
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2: 
      console.log("Tuesday");
      break;
    case 6:
       console.log("Saturday");
      break;
    default: 
      console.log("You Entered an invalid day number");
  }
}
getDay()
