/** F-Task: Shunday function tuzing, unga string argument pass bolsin.
 *  Function ushbu agrumentdagi faqat digitlarni yangi stringda return qilsin! */

/**  Masalan: findDigits('ad5we34jkf89')
 * return qilishi kerak bolgan qiymat '53489' */

//  1 - usul
// const findDigits1 = (ele) => {
//   let number = "";
//   for (let i = 1; i < ele.length; i++) {
//     if (!isNaN(ele[i])) number += ele[i];
//   }
//   return Number(number);
// };

// const result1 = findDigits1("ad5we34jkf89");
// console.log(result1);

// // **********************************************

// //  2 - usul
// const findDigits = (ele) => {
//   let numberArr = ele.split("").filter((value) => !isNaN(value));
//   let number = numberArr.join("");
//   return Number(number);
// };

// const result = findDigits("ad5we34jkf89");
// console.log(result);

// function opposite(number) {
//   if (number > 0) return -number;
//   else if (number < 0) return +number;
//   else return 0;
// }

function opposite(number) {
  if(number < 0){
    return Math.abs(number)
  }
  if(number > 0) {
    return -Math.abs(number)
  } else return 0
}

console.log(opposite(0));
