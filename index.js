// ============================================================
// SECTION 1: Student Profile & Variable Declarations
// ============================================================
const studentName = "Alex";
const studentId = 101;
const isEnrolled = true;

console.log("Student: " + studentName);
console.log(typeof studentName);

// ============================================================
// SECTION 2: Scores & Grade Calculation
// ============================================================
const scores = [85, 90, 78, 92];
let totalScore = 0;

for (let i = 0; i < scores.length; i++) {
  totalScore += scores[i];
}

const average = totalScore / scores.length;

let grade = "F";
if (average >= 90) {
  grade = "A";
} else if (average >= 80) {
  grade = "B";
} else if (average >= 70) {
  grade = "C";
} else {
  grade = "F";
}

console.log("Average: " + average);
console.log("Grade: " + grade);

// ============================================================
// SECTION 3: Budget & Expense Tracking
// ============================================================
const initialBudget = 500;
const expenses = [120, 45, 85];
let totalExpenses = 0;

for (const expense of expenses) {
  totalExpenses += expense;
}

const remainingBalance = initialBudget - totalExpenses;

console.log("Total Expenses: " + totalExpenses);
console.log("Remaining Balance: " + remainingBalance);
