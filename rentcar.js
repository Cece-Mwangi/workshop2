"use strict";

console.log("hello world");

console.log("start");
const estimateBtn = document.getElementById("Estimate");
estimateBtn.onclick = onestimateBtnClicked;

function onestimateBtnClicked() {
  console.log("click");
  const numDays = +document.getElementById("numDays").value;
  const costPerDay = 29.99;

  const baseCost = numDays * costPerDay;
  document.getElementById("baseCost").innerHTML = baseCost.toFixed(2);

  let extraDailyCost = 0;
  if (document.getElementById("tollTag").checked) {
    extraDailyCost += 3.95;
  }
  if (document.getElementById("GPS").checked) {
    extraDailyCost += 2.95;
  }
  if (document.getElementById("roadside").checked) {
    extraDailyCost += 2.95;
  }

  const optionsCost = extraDailyCost * numDays;
  document.getElementById("optionsCost").innerHTML = optionsCost.toFixed(2);

  let under25surcharge = 0;
  if (document.getElementById("yes").checked) {
    under25surcharge = baseCost * 0.3;
  }
  document.getElementById("under25surcharge").innerHTML =
    under25surcharge.toFixed(2);

  const totalCost = baseCost + optionsCost + under25surcharge;
  document.getElementById("totalDue").innerHTML = totalCost.toFixed(2);
}
