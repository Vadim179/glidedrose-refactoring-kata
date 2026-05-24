import { ItemName } from "@/enums";
import { Item } from "@/main";
import { updateOnce } from "../helpers/update-once.helper";

describe(ItemName.Sulfuras, () => {
  it("never changes sellIn", () => {
    const item = updateOnce(new Item(ItemName.Sulfuras, 5, 80));
    expect(item.sellIn).toBe(5);
  });

  it("never changes quality", () => {
    const item = updateOnce(new Item(ItemName.Sulfuras, 5, 80));
    expect(item.quality).toBe(80);
  });
});
