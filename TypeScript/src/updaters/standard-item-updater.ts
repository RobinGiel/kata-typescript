import { Item } from '../item';
import { ItemUpdater } from '../item-updater';
import { QualityLimits } from '../constants';

export class StandardItemUpdater implements ItemUpdater {
  constructor(private qualityDegradationRate: number = 1) {}

  update(item: Item): void {
    this.decreaseSellIn(item);
    this.updateQuality(item);
  }

  protected decreaseSellIn(item: Item): void {
    item.sellIn -= 1;
  }

  protected updateQuality(item: Item): void {
    const degradationRate = item.sellIn < 0 
      ? this.qualityDegradationRate * 2 
      : this.qualityDegradationRate;
    
    this.decreaseQuality(item, degradationRate);
  }

  protected decreaseQuality(item: Item, amount: number): void {
    item.quality = Math.max(QualityLimits.MIN, item.quality - amount);
  }

  protected increaseQuality(item: Item, amount: number): void {
    item.quality = Math.min(QualityLimits.MAX, item.quality + amount);
  }
}
