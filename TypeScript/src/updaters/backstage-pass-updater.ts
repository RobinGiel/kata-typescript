import { SellInThresholds } from "@/constants";
import type { Item } from "@/item";
import { StandardItemUpdater } from "@/updaters/standard-item-updater";

export class BackstagePassUpdater extends StandardItemUpdater {
    protected updateQuality(item: Item): void {
        if (item.sellIn < 0) {
            item.quality = 0;
            return;
        }

        const increaseAmount = this.getQualityIncreaseAmount(item.sellIn);
        this.increaseQuality(item, increaseAmount);
    }

    private getQualityIncreaseAmount(sellIn: number): number {
        if (sellIn <= SellInThresholds.BACKSTAGE_HIGH) {
            return 3;
        }
        if (sellIn <= SellInThresholds.BACKSTAGE_MEDIUM) {
            return 2;
        }
        return 1;
    }
}
