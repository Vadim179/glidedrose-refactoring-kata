import { ItemName } from "@/enums";
import { Item } from "@/main";
import { updateOnce } from "../helpers/update-once.helper";

describe(ItemName.BackstagePasses, () => {
  it("increases quality by 1 when more than 10 days remaining", () => {
    const item = updateOnce(new Item(ItemName.BackstagePasses, 15, 20));
    expect(item.quality).toBe(21);
  });

  it("increases quality by 2 when exactly 10 days remaining", () => {
    const item = updateOnce(new Item(ItemName.BackstagePasses, 10, 20));
    expect(item.quality).toBe(22);
  });

  it("increases quality by 2 when between 6 and 10 days remaining", () => {
    const item = updateOnce(new Item(ItemName.BackstagePasses, 7, 20));
    expect(item.quality).toBe(22);
  });

  it("increases quality by 3 when exactly 5 days remaining", () => {
    const item = updateOnce(new Item(ItemName.BackstagePasses, 5, 20));
    expect(item.quality).toBe(23);
  });

  it("increases quality by 3 when between 1 and 5 days remaining", () => {
    const item = updateOnce(new Item(ItemName.BackstagePasses, 3, 20));
    expect(item.quality).toBe(23);
  });

  it("drops quality to 0 after the concert", () => {
    const item = updateOnce(new Item(ItemName.BackstagePasses, 0, 40));
    expect(item.quality).toBe(0);
  });

  it("quality never exceeds 50", () => {
    const item = updateOnce(new Item(ItemName.BackstagePasses, 5, 49));
    expect(item.quality).toBe(50);
  });

  it("decreases sellIn by 1 each day", () => {
    const item = updateOnce(new Item(ItemName.BackstagePasses, 10, 20));
    expect(item.sellIn).toBe(9);
  });
});
