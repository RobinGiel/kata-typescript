import { Item } from '../item';
import { ItemUpdater } from '../item-updater';

export class LegendaryItemUpdater implements ItemUpdater {
  update(item: Item): void {
    // Legendary items never change
    // SellIn doesn't decrease, Quality stays at 80
  }
}
