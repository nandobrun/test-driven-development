import { formatDuration } from "./duration";

describe("formatting durations", () => {
  test("0 becomes 0s", () => {
    expect(formatDuration(0)).toBe("0s");
  });

  test("negative throws error", () => {
    expect(() => formatDuration(-1)).toThrow("Seconds cannot be negative");
  });

  test("decimal gets rounded", () => {
    expect(formatDuration(62.7)).toBe("1m3s");
  });

  test.each([
    [33, "33s"],
    [123, "2m3s"],
    [500, "8m20s"],
    [3600, "1h"],
    [3999, "1h6m39s"],
  ])("formatDuration(%f) == %s", (input, expected) => {
    expect(formatDuration(input)).toBe(expected);
  });
});
