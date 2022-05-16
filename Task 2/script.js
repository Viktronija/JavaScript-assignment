/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let btnEl = document.getElementById("btn__element");

btnEl.addEventListener("click", clicks);

function clicks() {
  let btnClickCounter = document.getElementById("btn__state");
  let clicks = Number.parseInt(btnClickCounter.textContent) + 1;
  btnClickCounter.textContent = clicks;
}
