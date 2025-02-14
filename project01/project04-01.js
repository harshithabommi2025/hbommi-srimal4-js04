/*    JavaScript 7th Edition
      Chapter 4
      Project 04-01

      Application to calculate total moving cost
      Author: Harshitha Bommi
      Date:  02/14/2025 

      Filename: project04-01.js
*/

// Global Constants
const COST_PER_LB = 50;
const COST_PER_MILE = 75;
const SETUP_COST = 500;

// Global Variables
let wgtBox = document.getElementById("wgtBox");
let distBox = document.getElementById("distBox");
let msgBox = document.getElementById("msgBox");

// Event Handlers
document.getElementById("wgtBox").onchange = calcTotal;
document.getElementById("distBox").onchange = calcTotal;
document.getElementById("setupBox").onclick = calcTotal;

// Function to calculate an estimate of the total moving cost
function calcTotal() {
    let totalCost = 0; // Set the initial estimate to $0
    msgBox.innerHTML = ""; // Erase any warnings in the message box

    try {
        // Parse the values and check if they're positive numbers
        let weight = parseFloat(wgtBox.value);
        let distance = parseFloat(distBox.value);

        // Check if the values are greater than 0
        if (weight <= 0 || distance <= 0) {
            throw new Error("Please enter a valid number greater than 0 for both weight and distance.");
        }

        // Add the cost for weight, distance, and setup fee (if selected)
        totalCost += weight * COST_PER_LB;
        totalCost += distance * COST_PER_MILE;

        if (document.getElementById("setupBox").checked) {
            totalCost += SETUP_COST;
        }

        // Display the moving cost estimate in the totalBox, formatted as currency
        document.getElementById("totalBox").innerHTML = formatCurrency(totalCost);
    } catch (error) {
        // Display the error message if the input is invalid
        msgBox.innerHTML = error.message;
        // Clear the total box since we had an error
        document.getElementById("totalBox").innerHTML = "$0.00";
        alert("Please enter a valid number greater than 0 for both weight and distance.");
    }
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
    return "$" + value.toFixed(2);
}
