
const studentName = "Chahana Karki Doli";
const studentID = "3076214";
const labGroup = "CN5006-18";
const programmingLanguage = "JavaScript";

const currentDateTime = new Date();

// Get the last four digits of the student ID
const lastFourDigits = studentID.slice(-4);

console.log("Portfolio Activity: Learning Development and Reflection Log");
console.log("----------------------------------------------------------");

console.log("Student Name: " + studentName);
console.log("Student ID: " + studentID);
console.log("Lab Group Number: " + labGroup);
console.log("Current Date and Time: " + currentDateTime.toLocaleString());
console.log("Favourite Programming Language: " + programmingLanguage);
console.log("Last Four Digits of Student ID: " + lastFourDigits);
