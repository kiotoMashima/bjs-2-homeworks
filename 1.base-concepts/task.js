"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b,2)-4*a*c;
  if (d>0){
    arr.push ((-b + Math.sqrt(d) )/(2*a));
    arr.push ((-b - Math.sqrt(d) )/(2*a));
  } else if(d===0){
    arr.push (-b/(2*a));
  } else if(d<0){
    arr.push ();
  }
  console.log(arr);
  return arr;
}
solveEquation(1,2,10);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const percentMunt = percent/100/12;
  const loanBody = amount - contribution;
  const payment = loanBody * (percentMunt + (percentMunt / (((1 + percentMunt)**countMonths) - 1)));
  const all =(payment * 12).toFixed(2);
  let num = Number(all);
  console.log(num);
  return num;
}
calculateTotalMortgage(10, 0, 50000, 12);
calculateTotalMortgage(10, 1000, 50000, 12);
