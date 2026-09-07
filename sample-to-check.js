// mathUtils.js
// ฟังก์ชันง่ายๆ ไว้ให้ฝึกเขียน test ด้วย Jest

//test attempt 3
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function isEven(num) {
  return num % 2 === 0;
}

function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ฟังก์ชันจำลอง async (เช่น เรียก API หรือ database)
function fetchUserAsync(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) {
        reject(new Error("Invalid user id"));
      } else {
        resolve({ id, name: `User${id}` });
      }
    }, 100);
  });
}

module.exports = { add, subtract, divide, isEven, capitalize, fetchUserAsync };
