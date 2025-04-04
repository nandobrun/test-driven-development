export function isValid(isbn) {

  if (isbn.length !== 13) return false;

  for (let i = 0; i < isbn.length; i++) {
    const char = isbn[i];
    if (char < "0" || char > "9") return false;
  }

  let sum = 0;
  for (let i = 0; i < 12; i++) {
    const digit = Number(isbn[i]);
    if (i % 2 === 0) {
      sum = sum + digit;
    } else {
      sum = sum + digit * 3;
    }
  }

  const checkDigit = (10 - (sum % 10)) % 10;
  const lastDigit = Number(isbn[12]);

  return checkDigit === lastDigit;
}