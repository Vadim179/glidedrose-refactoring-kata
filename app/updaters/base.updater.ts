import { Item } from "@/main";

export class BaseUpdater {
  public readonly maxQuality = 50;
  public readonly minQuality = 0;

  constructor(public qualityChangeMultiplier = 1) {}

  public hasExpired(item: Item) {
    return item.sellIn < 0;
  }

  protected increaseQuality(item: Item, amount = 1) {
    item.quality = Math.min(this.maxQuality, item.quality + amount);
    return this;
  }

  protected decreaseQuality(item: Item, amount = 1) {
    item.quality = Math.max(this.minQuality, item.quality - amount);
    return this;
  }

  protected scaleQualityChange(change: number) {
    return change * this.qualityChangeMultiplier;
  }

  public update(item: Item) {}
}
