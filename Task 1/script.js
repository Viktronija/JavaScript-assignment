/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

let kgInput = document.getElementById("search");
let calculateEl = document.getElementById("submit-btn");
let outputDivEl = document.getElementById("output");

calculateEl.addEventListener("click", kgConverter);

function kgConverter(c) {
  c.preventDefault();
  outputDivEl.innerHTML = "";
  if (Number.isNaN(Number.parseFloat(kgInput.value))) {
    let inputErrorEl = document.createElement("p");
    inputErrorEl.textContent = "Error: Enter a number!";
    outputDivEl.appendChild(inputErrorEl);
    inputErrorEl.style.color = "red";
  } else {
    let lbOutput = kgInput.value * 2.2046;
    let gOutput = kgInput.value / 0.001;
    let ozOutput = kgInput.value * 35.274;

    const lbOutputEl = document.createElement("div");
    lbOutputEl.textContent =
      kgInput.value + " kg = " + Math.round(lbOutput * 100) / 100 + " lb";
    outputDivEl.appendChild(lbOutputEl);

    const gOutputEl = document.createElement("div");
    gOutputEl.textContent =
      kgInput.value + " kg = " + Math.round(gOutput * 100) / 100 + " g";
    outputDivEl.appendChild(gOutputEl);

    const ozOutputEl = document.createElement("div");
    ozOutputEl.textContent =
      kgInput.value + " kg = " + Math.round(ozOutput * 100) / 100 + " oz";
    outputDivEl.appendChild(ozOutputEl);
  }
}
