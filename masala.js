




// * CHALLENGE 4: CAN YOU SORT ME*/

// const detail_list = [12, 23, null, 32, null, 34, null, null];
// const result1 = moveNullsKeepOeder(detail_list);
// console.log("result:", result1);

// function moveNullsKeepOeder(detail_list) {
//   let sortNull = detail_list.sort((a, b) => a - b);
//   return sortNull.sort();
// }

// ************** Dean & Belli *** 2023.05.27 *****************
// Integral son berilgan bo‘lsa, uning kvadrat son ekanligini aniqlang:
// n darajali nonlarni topish: n = 2;

let isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0;
};

let result = isSquare(7);
console.log(result);

function isSquare_1(n) {
  return Number.isInteger(Math.sqrt(n));
}

let result1 = isSquare_1(9);
console.log(result1);
