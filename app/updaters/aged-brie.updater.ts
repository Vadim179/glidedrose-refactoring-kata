import { Item } from "@/main";
import { BaseUpdater } from "./base.updater";

export class AgedBrieUpdater extends BaseUpdater {
  public update(item: Item) {
    this.decreaseSellIn(item);

    const qualityIncreaseAmount = this.hasExpired(item) ? 2 : 1;
    this.increaseQuality(item, qualityIncreaseAmount);
  }
}
