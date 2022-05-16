/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
let outputDivEl = document.getElementById("output");

let btnShowUsers = document.getElementById("btn");
btnShowUsers.addEventListener("click", getUsers);

async function getUsers() {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  outputDivEl.textContent = "";
  data.forEach((element) => {
    const cardOutput = document.createElement("div");
    cardOutput.classList.add("card");
    cardOutput.textContent = element.login + " " + element.avatar_url;
    outputDivEl.appendChild(cardOutput);
  });
}
