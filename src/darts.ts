export function calcPoints(input) {
  const parts = input.split(" ");
  let total = 0;
  if (parts.length % 2 !== 0) return 0;

  for (let i = 0; i < parts.length; i += 2) {
    const f = Number(parts[i]);
    const v = Number(parts[i + 1]);
    total = total + f * v;
  }

  return total;
}

export function possibleCheckout(score) {
  const left = 501 - score;

  if (left === 0) return "Already finished";
  if (left % 2 !== 0) return "No checkout possible";

  const d = left / 2;

  if (d <= 20) return "Double " + d;

  return "No checkout possible";
}