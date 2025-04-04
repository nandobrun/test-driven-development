export function play(p1: string, p2: string): number {
  const normalize = (move: string) => move.trim().toLowerCase();

  const validMoves = ["rock", "paper", "scissors"];
  const m1 = normalize(p1);
  const m2 = normalize(p2);

  if (!validMoves.includes(m1) || !validMoves.includes(m2)) {
    throw new Error("Invalid move");
  }

  if (m1 === m2) return 0;

  if (
    (m1 === "rock" && m2 === "scissors") ||
    (m1 === "scissors" && m2 === "paper") ||
    (m1 === "paper" && m2 === "rock")
  ) {
    return 1;
  }

  return 2;
}
