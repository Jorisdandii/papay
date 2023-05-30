console.log("Task bajarishni boshladik");


let arr = [200,12, 23, null, 34, null, 32, null];
let filteredNum = arr.filter((value) => value !== null).sort((a, b) => a - b);
let filteredNull = arr.filter((value) => value === null).map((value) => value);
let result = filteredNum.concat(filteredNull);

console.log(result);

const detail_list = [ 12, 23, null, 32, null, 34, null, null];
const result1 = moveNullsKeepOeder(detail_list);
console.log("result:", result1);


function moveNullsKeepOeder(detail_list) {
  let sortNull = detail_list.sort((a,b) => a - b);
  return sortNull.sort()
};