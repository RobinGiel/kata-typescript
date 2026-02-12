import { StandardItemUpdater } from "@/updaters/standard-item-updater";

export class SmellyItemUpdater extends StandardItemUpdater {
	constructor() {
		// Smelly items degrade twice as fast as normal items
		super(2);
	}
}
