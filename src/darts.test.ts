import { calcPoints, possibleCheckout } from "./darts";

describe("calcPoints", () => {
  test("Triple 20, Single 17, Double 4", () => {
    expect(calcPoints("3 20 1 17 2 4")).toBe(85);
  });

  test("Double 15, Single 18, Triple 19", () => {
    expect(calcPoints("2 15 1 18 3 19")).toBe(105);
  });

  test("Triple 20, Single 5, Miss", () => {
    expect(calcPoints("3 20 1 5")).toBe(65);
  });

  test("Empty input = 0", () => {
    expect(calcPoints("")).toBe(0);
  });

  test("Invalid input (odd number of tokens)", () => {
    expect(calcPoints("3 20 1")).toBe(0);
  });
});

describe("possibleCheckout", () => {
  test("Checkout possible: 501 - 477 = 24 → Double 12", () => {
    expect(possibleCheckout(477)).toBe("Double 12");
  });

  test("Checkout not possible: 501 - 480 = 21 → ungerade", () => {
    expect(possibleCheckout(480)).toBe("No checkout possible");
  });

  test("Checkout not possible: 501 - 470 = 31 → Double 15.5 = too high", () => {
    expect(possibleCheckout(470)).toBe("No checkout possible");
  });

  test("Already finished: 501", () => {
    expect(possibleCheckout(501)).toBe("Already finished");
  });
});
