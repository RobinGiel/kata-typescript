import type { Item } from "@/item";
import { ItemUpdaterFactory } from "@/item-updater-factory";

export class GildedTros {
	constructor(public items: Array<Item>) {}

	public updateQuality(): void {
		for (const item of this.items) {
			const updater = ItemUpdaterFactory.createUpdater(item);
			updater.update(item);
		}
	}
}
