import { Item } from "@/main";
import { BaseUpdater } from "./base.updater";

export class BackstagePassesUpdater extends BaseUpdater {
  private getQualityIncreaseAmount(item: Item) {
    if (item.sellIn < 5) return 3;
    if (item.sellIn < 10) return 2;
    return 1;
  }

  public update(item: Item) {
    this.decreaseSellIn(item);

    if (this.hasExpired(item)) {
      item.quality = 0;
      return;
    }

    const qualityIncreaseAmount = this.getQualityIncreaseAmount(item);
    this.increaseQuality(item, qualityIncreaseAmount);
  }
}
