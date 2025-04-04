import { isValid } from "./isbn13";

describe("valid ISBN-13 numbers", () => {
  test("valid ISBN 9780306406157", () => {
    expect(isValid("9780306406157")).toBe(true);
  });

  test("valid ISBN 9791234567896", () => {
    expect(isValid("9791234567896")).toBe(true);
  });
});

describe("invalid ISBN-13 numbers", () => {
  test("invalid check digit", () => {
    expect(isValid("9780306406158")).toBe(false);
  });

  test("too short", () => {
    expect(isValid("97803064061")).toBe(false);
  });

  test("too long", () => {
    expect(isValid("97803064061579")).toBe(false);
  });

  test("contains non-digit characters", () => {
    expect(isValid("97803A6406157")).toBe(false);
  });
});
