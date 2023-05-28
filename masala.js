

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
