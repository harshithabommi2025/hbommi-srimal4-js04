/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: 
      Date:   

      Filename: project04-03.js
*/

// Maximum Length of Review
const MAX_REVIEW = 1000;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elements in the web page
let wordCountBox = document.getElementById("countValue");
let warningBox = document.getElementById("warningBox");

// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount);

// Function to update the count with each keyup event
function updateCount() {
   // Set the warning box to an empty text string 
   warningBox.innerHTML = "";
   
   // Count the number of characters in the comment box
   let commentText = document.getElementById("comment").value;
   let charCount = countCharacters(commentText);

   // Update the character count display
   wordCountBox.innerHTML = charCount;

   // Show warning if the character count exceeds the maximum limit
   if (charCount > MAX_REVIEW) {
      warningBox.innerHTML = "You have exceeded the character limit!";
      warningBox.style.color = "red";
   }
}

/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
   return textStr.length; // Counts all characters, including spaces
}
