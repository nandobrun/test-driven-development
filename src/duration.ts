export function formatDuration(seconds: number): string {
  if (seconds < 0) throw new Error("Seconds cannot be negative"); 
  seconds = Math.round(seconds);
  if (seconds === 0) return "0s";

  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  let result = "";

if (h) {
  result += h + "h";
}

if (m) {
  result += m + "m";
}

if (s) {
  result += s + "s";
}

return result;
}
