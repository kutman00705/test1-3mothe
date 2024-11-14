 //Задания 1

// function Numbers(str) {
//     return /^\d+$/.test(str);
// }
// console.log(Numbers("12345"));
// console.log(Numbers("123a45"));
// console.log(Numbers(""));


 //Задания 2

 // function logEverySecond() {
 //     setInterval(() => {
 //         console.log("Прошла секунда");
 //     }, 1000);
 // }
 //
 // logEverySecond();


 
//Задания 3

//  function printNumbers() {
//      let number = 1;
//      const intervalId = setInterval(() => {
//          console.log(number);
//          number++;
//          if (number > 10) {
//              clearInterval(intervalId);
//          }
//      }, 1000);
//  }
//
//  printNumbers();



//Задания 4

//  const colorBox = document.getElementById("colorBox");
//  colorBox.addEventListener("click", () => {
//      colorBox.classList.toggle("active-background");
//  });