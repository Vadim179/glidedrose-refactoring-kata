import { ItemName } from "@/enums";
import { Item } from "@/main";

export class SulfurasItem extends Item {
  constructor(sellIn: number) {
    super(ItemName.Sulfuras, sellIn, 80);
  }
}
