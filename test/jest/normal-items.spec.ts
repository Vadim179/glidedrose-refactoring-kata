import { Item } from "@/main";
import { updateOnce } from "../helpers/update-once.helper";

describe("Normal items", () => {
  it("decreases sellIn by 1 each day", () => {
    const item = updateOnce(new Item("Elixir", 10, 20));
    expect(item.sellIn).toBe(9);
  });

  it("decreases quality by 1 before sell date", () => {
    const item = updateOnce(new Item("Elixir", 5, 20));
    expect(item.quality).toBe(19);
  });

  it("decreases quality by 2 after sell date", () => {
    const item = updateOnce(new Item("Elixir", 0, 20));
    expect(item.quality).toBe(18);
  });

  it("quality never goes below 0", () => {
    const item = updateOnce(new Item("Elixir", 5, 0));
    expect(item.quality).toBe(0);
  });

  it("quality never goes below 0 after sell date", () => {
    const item = updateOnce(new Item("Elixir", 0, 1));
    expect(item.quality).toBe(0);
  });
});
