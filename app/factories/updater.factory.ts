import { ItemEnum } from "@/enums";
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
      [ItemEnum.AgedBrie]: AgedBrieUpdater,
      [ItemEnum.BackstagePasses]: BackstagePassesUpdater,
      [ItemEnum.Sulfuras]: SulfurasUpdater,
      [ItemEnum.Conjured]: ConjuredUpdater,
    };

    return new (itemToUpdaterMap[name] || BaseUpdater)();
  }
}
