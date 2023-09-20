// Prompt the user to enter a number
var userNumber;

// Keep prompting until a valid number is entered
do {
    userNumber = prompt("Choose any whole number:");
} while (!isValidNumber(userNumber));

// Parse the input as an integer
userNumber = parseInt(userNumber);

// Function to validate if input is a valid whole number
function isValidNumber(input) {
    if (/^\d+$/.test(input)) {
        return true;
    } else {
        // Display an error message to the user
        alert("Invalid input. Please enter a valid whole number.");
        return false;
    }
}

// Perform the magic number trick
var step1 = userNumber + 9;
var step2 = step1 * 2;
var step3 = step2 - 4;
var step4 = step3 / 2;
var finalNumber = step4 - userNumber;

// Display the output using document.write
document.write("<p>You chose the number: " + userNumber + "</p>");
document.write("<ul>");
document.write("<li>I added 9 to " + userNumber + ". The new number is " + step1 + ".</li>");
document.write("<li>I multiplied " + step1 + " by 2. The new number is " + step2 + ".</li>");
document.write("<li>I subtracted 4 from " + step2 + ". The new number is " + step3 + ".</li>");
document.write("<li>I divided " + step3 + " by 2. The new number is " + step4 + ".</li>");
document.write("<li>I subtracted " + userNumber + " by the original number, which is " + finalNumber + ".</li>");
document.write("</ul>");

// Display the final result using an alert
alert("Your final number is: " + finalNumber);
