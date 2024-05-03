"use strict";


// Input elements
const inputPickupDate = document.getElementById("inputPickupDate");
const inputNumOfDays = document.getElementById("inputNumOfDays");
const inputOptElecTollTagCheckbox = document.getElementById("inputOptElecTollTagCheckbox");
const inputOptGPSCheckbox = document.getElementById("inputOptGPSCheckbox");
const inputOptRoadsideAsstCheckbox = document.getElementById("inputOptRoadsideAsstCheckbox");
const inputUnder25NoRadio = document.getElementById("inputUnder25NoRadio");
const inputUnder25YesRadio = document.getElementById("inputUnder25YesRadio");

// Button
const estimateTotalCostButton = document.getElementById("estimateTotalCostButton");

// Output elements
const outputCarRental = document.getElementById("outputCarRental");
const outputOptions = document.getElementById("outputOptions");
const outputSurcharge = document.getElementById("outputSurcharge");
const outputTotal = document.getElementById("outputTotal");


window.onload = function(){
    inputNumOfDays.onchange = performCalculations;
    inputOptElecTollTagCheckbox.onchange = performCalculations;
    inputOptGPSCheckbox.onchange = performCalculations;
    inputOptRoadsideAsstCheckbox.onchange = performCalculations;
    estimateTotalCostButton.onclick = performCalculations;

    performCalculations();
}


function  performCalculations(){


    //known values

let numofDays = Number(inputNumOfDays.value);

let isOptElecTollTag = inputOptElecTollTagCheckbox.checked;
let isOptGPS = inputOptGPSCheckbox.checked;
let isOptRoadAsst = inputOptRoadsideAsstCheckbox.checked;


let isUnder25 = inputUnder25YesRadio.checked;

console.log(numofDays);
console.log(isOptElecTollTag);
console.log(isOptGPS);
console.log(isOptRoadAsst);
console.log(isUnder25);

//calculate unknown values
let carRentalAmount = 29.99 * numofDays;

let optionsAmount = 0;

if(isOptElecTollTag){
    optionsAmount += (3.95 * numofDays);
}

if(isOptGPS){
    optionsAmount += (2.95 * numofDays);
}

if(isOptRoadAsst){
    optionsAmount += (2.95 * numofDays);
}

let surchargeAmount;

if(isUnder25){
    surchargeAmount = 0/30 * (carRentalAmount + optionsAmount);
}
else{
    surchargeAmount = 0;
}

let totalDueAmount = carRentalAmount + optionsAmount + surchargeAmount;

//display results
outputCarRental.innerHTML = carRentalAmount;
outputOptions.innerHTML = optionsAmount;
outputSurcharge.innerHTML = surchageAmount;
outputTotal.innerHTML = totalDueAmount;
    

}