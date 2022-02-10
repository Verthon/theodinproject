import { formatPrice } from "../../src/js/utils/formatPrice"

describe("formatPrice", () => {
  it("should format price to USD", () => {
    expect(formatPrice(123)).toEqual("$1.23");
  })
})