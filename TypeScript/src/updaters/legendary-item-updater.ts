import type { Item } from "../item";
import type { ItemUpdater } from "../item-updater";

export class LegendaryItemUpdater implements ItemUpdater {
	update(_item: Item): void {
		// Legendary items never change
		// SellIn doesn't decrease, Quality stays at 80
	}
}
