import { MinuteToHourUtils } from "@/utils";
describe("Test minutes to hours conversion", () => {
  it("should convert minutes to hours for 140 minutes", () => {
    expect(MinuteToHourUtils(140)).toBe("2h 20min");
  });
  it("should convert minutes to hours for 180 minutes", () => {
    expect(MinuteToHourUtils(180)).toBe("3h");
  });
  it("should convert minutes to hours for 60 minutes", () => {
    expect(MinuteToHourUtils(60)).toBe("1h");
  });
  it("should convert minutes to hours for 50 minutes", () => {
    expect(MinuteToHourUtils(50)).toBe("50 min");
  });
  it("should convert minutes to hours for 10 minutes", () => {
    expect(MinuteToHourUtils(10)).toBe("10 min");
  });
});
