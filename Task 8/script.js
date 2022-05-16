/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function calculator(a, b) {
  let calculations = new Object();
  calculations.sum = a + b;
  calculations.substraction = a - b;
  calculations.multiplication = a * b;
  calculations.division = a / b;
  return calculations;
}

console.log("Object:\n", calculator(12, 2));
