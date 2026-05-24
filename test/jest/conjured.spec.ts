import { ItemName } from "@/enums";
import { Item } from "@/main";
import { updateOnce } from "../helpers/update-once.helper";

describe(ItemName.Conjured, () => {
  it("decreases quality by 2 before sell date", () => {
    const item = updateOnce(new Item(ItemName.Conjured, 5, 20));
    expect(item.quality).toBe(18);
  });

  it("decreases quality by 4 after sell date", () => {
    const item = updateOnce(new Item(ItemName.Conjured, 0, 20));
    expect(item.quality).toBe(16);
  });

  it("quality never goes below 0", () => {
    const item = updateOnce(new Item(ItemName.Conjured, 5, 1));
    expect(item.quality).toBe(0);
  });
});
