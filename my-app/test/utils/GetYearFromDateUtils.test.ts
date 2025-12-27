import { extractYear } from "@/utils";

describe("dateFormatUtils", () => {
  it("should return the year when given a date in YYYY-MM-DD format", () => {
    expect(extractYear("2025-11-06")).toBe("2025");
  });

  it("should return the first segment even if date format is different", () => {
    expect(extractYear("2024/11/06")).toBe("2024/11/06");
  });

  it("should handle invalid or empty strings gracefully", () => {
    expect(extractYear("")).toBe("");
  });
});
