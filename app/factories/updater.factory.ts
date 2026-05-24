import { ItemName } from "@/enums";
import {
  AgedBrieUpdater,
  BackstagePassesUpdater,
  BaseUpdater,
  ConjuredUpdater,
  SulfurasUpdater,
} from "@/updaters";

export class UpdaterFactory {
  public static create(name: string) {
    const itemToUpdaterMap = {
      [ItemName.AgedBrie]: AgedBrieUpdater,
      [ItemName.BackstagePasses]: BackstagePassesUpdater,
      [ItemName.Sulfuras]: SulfurasUpdater,
      [ItemName.Conjured]: ConjuredUpdater,
    };

    return new (itemToUpdaterMap[name] || BaseUpdater)();
  }
}
