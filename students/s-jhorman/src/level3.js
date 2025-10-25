
function calculator(expression) {
  const parts = expression.trim().split(" ");

  const operator = parts[0];
  const a = Number(parts[1]);
  const b = Number(parts[2]);

  if (isNaN(a) || isNaN(b)) {
    throw new Error("Invalid operands");
  }

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) throw new Error("Division by zero");
      return a / b;
    default:
      throw new Error("Invalid operator");
  }
}

function isValidPassword(text) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  return passwordRegex.test(text);
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function findDuplicates(text) {
  const words = text.split(" ");
  const seen = [];
  const duplicates = [];

  for (const word of words) {
    if (seen.includes(word)) {
      if (!duplicates.includes(word)) {
        duplicates.push(word);
      }
    } else {
      seen.push(word);
    }
  }

  return duplicates;
}

module.exports = { calculator, isValidPassword, factorial, findDuplicates };
