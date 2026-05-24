import { UpdaterFactory } from "./factories";

export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number,
  ) {}
}

export class GildedRose {
  constructor(public items: Array<Item> = []) {}

  public updateQuality() {
    this.items.forEach((item) => UpdaterFactory.create(item.name).update(item));
    return this.items;
  }
}
