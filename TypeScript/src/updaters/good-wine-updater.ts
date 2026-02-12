import { Item } from '../item';
import { StandardItemUpdater } from './standard-item-updater';

export class GoodWineUpdater extends StandardItemUpdater {
  protected updateQuality(item: Item): void {
    // Good Wine increases in quality as it ages
    const increaseRate = item.sellIn < 0 ? 2 : 1;
    this.increaseQuality(item, increaseRate);
  }
}
