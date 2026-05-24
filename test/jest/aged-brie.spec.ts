import { ItemName } from "@/enums";
import { Item } from "@/main";
import { updateOnce } from "../helpers/update-once.helper";

describe(ItemName.AgedBrie, () => {
  it("increases quality by 1 before sell date", () => {
    const item = updateOnce(new Item(ItemName.AgedBrie, 5, 10));
    expect(item.quality).toBe(11);
  });

  it("increases quality by 2 after sell date", () => {
    const item = updateOnce(new Item(ItemName.AgedBrie, 0, 10));
    expect(item.quality).toBe(12);
  });

  it("quality never exceeds 50", () => {
    const item = updateOnce(new Item(ItemName.AgedBrie, 5, 50));
    expect(item.quality).toBe(50);
  });

  it("quality caps at 50 even when increasing by 2 after sell date", () => {
    const item = updateOnce(new Item(ItemName.AgedBrie, 0, 49));
    expect(item.quality).toBe(50);
  });
});
