// Created by Nelson Kan on Sep 16, 2023

// Prompt the user to enter a number
var userNumber = parseInt(prompt("Choose any whole number:"));

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
