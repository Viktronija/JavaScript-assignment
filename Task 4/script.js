/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
let outputDivEl = document.getElementById("output");

window.addEventListener("load", getCars());

async function getCars() {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  console.log(data);
  data.forEach((element) => {
    const cardOutput = document.createElement("div");
    const brand = document.createElement("h2");
    const modelIntro = document.createElement("h4");
    const models = document.createElement("p");

    brand.textContent = element.brand;
    modelIntro.textContent = element.brand + " existing models:";
    models.textContent = element.models.join(", ") + ".";

    outputDivEl.appendChild(cardOutput);
    cardOutput.appendChild(brand);
    cardOutput.appendChild(modelIntro);
    cardOutput.appendChild(models);

    cardOutput.style.margin = "0 50px";
    brand.style.marginTop = "40px";
    brand.style.marginBottom = "20px";
    modelIntro.style.marginBottom = "10px";
    models.style.textAlign = "justify";
  });
}
