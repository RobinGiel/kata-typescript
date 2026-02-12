import { ItemNames } from "./constants";
import type { Item } from "./item";
import type { ItemUpdater } from "./item-updater";
import { BackstagePassUpdater } from "./updaters/backstage-pass-updater";
import { GoodWineUpdater } from "./updaters/good-wine-updater";
import { LegendaryItemUpdater } from "./updaters/legendary-item-updater";
import { SmellyItemUpdater } from "./updaters/smelly-item-updater";
import { StandardItemUpdater } from "./updaters/standard-item-updater";

export class ItemUpdaterFactory {
	private static readonly BACKSTAGE_PASSES: readonly string[] = [
		ItemNames.BACKSTAGE_PASS_REFACTOR,
		ItemNames.BACKSTAGE_PASS_HAXX,
	];

	private static readonly SMELLY_ITEMS: readonly string[] = [
		ItemNames.DUPLICATE_CODE,
		ItemNames.LONG_METHODS,
		ItemNames.UGLY_VARIABLE_NAMES,
	];

	static createUpdater(item: Item): ItemUpdater {
		if (item.name === ItemNames.GOOD_WINE) {
			return new GoodWineUpdater();
		}

		if (ItemUpdaterFactory.BACKSTAGE_PASSES.includes(item.name)) {
			return new BackstagePassUpdater();
		}

		if (item.name === ItemNames.LEGENDARY_ITEM) {
			return new LegendaryItemUpdater();
		}

		if (ItemUpdaterFactory.SMELLY_ITEMS.includes(item.name)) {
			return new SmellyItemUpdater();
		}

		return new StandardItemUpdater();
	}
}
