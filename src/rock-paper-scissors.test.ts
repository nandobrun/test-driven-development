import { play } from "./rock-paper-scissors";

describe("draws", () => {
  test("rock vs rock is draw", () => {
    expect(play("rock", "rock")).toBe(0);
  });

  test("paper vs paper is draw", () => {
    expect(play("paper", "paper")).toBe(0);
  });

  test("scissors vs scissors is draw", () => {
    expect(play("scissors", "scissors")).toBe(0);
  });
});

describe("player 1 wins", () => {
  test("rock beats scissors", () => {
    expect(play("rock", "scissors")).toBe(1);
  });

  test("scissors beats paper", () => {
    expect(play("scissors", "paper")).toBe(1);
  });

  test("paper beats rock", () => {
    expect(play("paper", "rock")).toBe(1);
  });
});

describe("player 2 wins", () => {
  test("scissors loses to rock", () => {
    expect(play("scissors", "rock")).toBe(2);
  });

  test("paper loses to scissors", () => {
    expect(play("paper", "scissors")).toBe(2);
  });

  test("rock loses to paper", () => {
    expect(play("rock", "paper")).toBe(2);
  });
});

describe("input normalization", () => {
  test("whitespace and case are ignored - case 1", () => {
    expect(play(" Rock ", "sCiSsOrs ")).toBe(1);
  });

  test("whitespace and case are ignored - case 2", () => {
    expect(play(" PAPER", "   Rock")).toBe(1);
  });
});

describe("invalid inputs", () => {
  test("throws error for invalid move by player 1", () => {
    expect(() => play("lizard", "rock")).toThrow("Invalid move");
  });

  test("throws error for invalid move by player 2", () => {
    expect(() => play("rock", "spock")).toThrow("Invalid move");
  });
});
