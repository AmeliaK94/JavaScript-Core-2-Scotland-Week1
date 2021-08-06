
let student1 = {
    name: "Reshma Saujani",
    attendance: 90,
    examScore: 65,
    hasPassed: false
};

let student2 = {
    name: "Lisa Su",
    attendance: 86,
    examScore: 75,
    hasPassed: false
};

let student3 = {
    name: "Susan Wojcicki",
    attendance: 95,
    examScore: 55,
    hasPassed: false
};

// Write a function which takes a student Object as an input parameter
// If attendance is equal or greater than 90 AND exam score is above 60,
// set hasPassed to true and return the String 
// "Student " + name + " has passed"
// Otherwise return the String "Student " + name + " has failed"
function ifPassed (student) {
    if (student.attendance >= 90 && student.examScore > 60) {
        student.hasPassed = true;
        return "Student " + student.name + " has passed.";
    } else {
        return "Student " + student.name + " has failed.";
    }
}

// Call the function for each student and console.log the results

console.log(ifPassed(student1));
console.log(ifPassed(student2));
console.log(ifPassed(student3));

