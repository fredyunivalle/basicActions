function textToTitleCase(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


function fizzBuzz(n) {
  const output = [];
  let i = 1;

  while (i <= n) {
    const divBy3 = i % 3 === 0;
    const divBy5 = i % 5 === 0;

    if (divBy3 && divBy5) {
      output.push("FizzBuzz");
    } else if (divBy3) {
      output.push("Fizz");
    } else if (divBy5) {
      output.push("Buzz");
    } else {
      output.push(i.toString());
    }

    i++;
  }

  return output;
}


function isIsogram(word) {
  str = word.toLowerCase();
  let len = str.length;
  let arr = str.split("");

  arr.sort();
  for (let i = 0; i < len - 1; i++) {
    if (arr[i] == arr[i + 1])
      return false;
  }

  return true;
}

function uniqueWordFinder(text) {
  const arr = text.split(" ");
  const uniqueWords = [];

  for (const word of arr) {
    if (!uniqueWords.includes(word)) {
      uniqueWords.push(word);
    }
  }

  return uniqueWords;
}

function isValidEmail(text) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(text);
}

module.exports = { textToTitleCase, fizzBuzz, isIsogram, uniqueWordFinder, isValidEmail };
