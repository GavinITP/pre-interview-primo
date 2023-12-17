import { merge } from "../src/merge";

describe("merge", () => {
  it("should merge two sorted arrays", () => {
    const result = merge([1, 3, 5], [2, 4, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle empty arrays", () => {
    const result1 = merge([], [2, 4, 6]);
    const result2 = merge([1, 3, 5], []);
    const result3 = merge([], []);

    expect(result1).toEqual([2, 4, 6]);
    expect(result2).toEqual([1, 3, 5]);
    expect(result3).toEqual([]);
  });

  it("should handle arrays of different lengths", () => {
    const result = merge([1, 3, 5], [2, 4, 6, 8]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 8]);
  });

  it("should handle a list consisting of the same element", () => {
    const result = merge([2, 2, 2], [2, 2, 2]);
    expect(result).toEqual([2, 2, 2, 2, 2, 2]);
  });

  it("should handle a list containing duplicate elements", () => {
    const result = merge([1, 3, 3, 5], [2, 3, 4, 6]);
    expect(result).toEqual([1, 2, 3, 3, 3, 4, 5, 6]);
  });
});
