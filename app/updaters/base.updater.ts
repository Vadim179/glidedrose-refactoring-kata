import { Item } from "@/main";

export class BaseUpdater {
  public readonly maxQuality = 50;
  public readonly minQuality = 0;

  constructor(public qualityChangeMultiplier = 1) {}

  public hasExpired(item: Item) {
    return item.sellIn < 0;
  }

  private scaleQualityChange(change: number) {
    return change * this.qualityChangeMultiplier;
  }

  protected increaseQuality(item: Item, amount = 1) {
    const scaledAmount = this.scaleQualityChange(amount);
    item.quality = Math.min(this.maxQuality, item.quality + scaledAmount);
    return this;
  }

  protected decreaseQuality(item: Item, amount = 1) {
    const scaledAmount = this.scaleQualityChange(amount);
    item.quality = Math.max(this.minQuality, item.quality - scaledAmount);
    return this;
  }

  protected decreaseSellIn(item: Item, amount = 1) {
    item.sellIn -= amount;
    return this;
  }

  public update(item: Item) {
    this.decreaseSellIn(item);

    const qualityDecreaseAmount = this.hasExpired(item) ? 2 : 1;
    this.decreaseQuality(item, qualityDecreaseAmount);
  }
}
