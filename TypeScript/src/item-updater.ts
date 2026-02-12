import type { Item } from "./item";

export interface ItemUpdater {
	update(item: Item): void;
}
