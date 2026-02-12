import { Item } from '../item';
import { StandardItemUpdater } from './standard-item-updater';
import { SellInThresholds } from '../constants';

export class BackstagePassUpdater extends StandardItemUpdater {
  protected updateQuality(item: Item): void {
    if (item.sellIn < 0) {
      // After the conference, quality drops to 0
      item.quality = 0;
    } else {
      // Quality increases as conference approaches
      let increaseAmount = 1;
      
      if (item.sellIn <= SellInThresholds.BACKSTAGE_HIGH) {
        increaseAmount = 3;
      } else if (item.sellIn <= SellInThresholds.BACKSTAGE_MEDIUM) {
        increaseAmount = 2;
      }
      
      this.increaseQuality(item, increaseAmount);
    }
  }
}
