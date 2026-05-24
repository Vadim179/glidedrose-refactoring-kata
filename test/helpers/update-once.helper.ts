import { GildedRose, Item } from "@/main";

export function updateOnce(item: Item) {
  return new GildedRose([item]).updateQuality()[0];
}
