import { Item } from './item';
import { ItemUpdater } from './item-updater';
import { ItemNames } from './constants';
import { StandardItemUpdater } from './updaters/standard-item-updater';
import { GoodWineUpdater } from './updaters/good-wine-updater';
import { BackstagePassUpdater } from './updaters/backstage-pass-updater';
import { LegendaryItemUpdater } from './updaters/legendary-item-updater';
import { SmellyItemUpdater } from './updaters/smelly-item-updater';

export class ItemUpdaterFactory {
  private static readonly BACKSTAGE_PASSES: readonly string[] = [
    ItemNames.BACKSTAGE_PASS_REFACTOR,
    ItemNames.BACKSTAGE_PASS_HAXX
  ];

  private static readonly SMELLY_ITEMS: readonly string[] = [
    ItemNames.DUPLICATE_CODE,
    ItemNames.LONG_METHODS,
    ItemNames.UGLY_VARIABLE_NAMES
  ];

  static createUpdater(item: Item): ItemUpdater {
    if (item.name === ItemNames.GOOD_WINE) {
      return new GoodWineUpdater();
    }

    if (this.BACKSTAGE_PASSES.includes(item.name)) {
      return new BackstagePassUpdater();
    }

    if (item.name === ItemNames.LEGENDARY_ITEM) {
      return new LegendaryItemUpdater();
    }

    if (this.SMELLY_ITEMS.includes(item.name)) {
      return new SmellyItemUpdater();
    }

    return new StandardItemUpdater();
  }
}
