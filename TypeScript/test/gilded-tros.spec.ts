import { Item } from '../src/item';
import { GildedTros } from '../src/gilded-tros';
import { ItemNames, QualityLimits } from '../src/constants';

describe('GildedTros', () => {
  describe('Standard Items', () => {
    it('should decrease quality and sellIn for standard items', () => {
      const items = [new Item('Standard Item', 10, 20)];
      const app = new GildedTros(items);
      
      app.updateQuality();
      
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(19);
    });

    it('should decrease quality twice as fast after sell by date', () => {
      const items = [new Item('Standard Item', 0, 20)];
      const app = new GildedTros(items);
      
      app.updateQuality();
      
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(18);
    });

    it('should never have negative quality', () => {
      const items = [new Item('Standard Item', 5, 0)];
      const app = new GildedTros(items);
      
      app.updateQuality();
      
      expect(items[0].quality).toBe(0);
    });
  });

  describe('Good Wine', () => {
    it('should increase in quality as it ages', () => {
      const items = [new Item(ItemNames.GOOD_WINE, 10, 20)];
      const app = new GildedTros(items);
      
      app.updateQuality();
      
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(21);
    });

    it('should increase quality twice as fast after sell by date', () => {
      const items = [new Item(ItemNames.GOOD_WINE, 0, 20)];
      const app = new GildedTros(items);
      
      app.updateQuality();
      
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(22);
    });

    it('should never exceed quality of 50', () => {
      const items = [new Item(ItemNames.GOOD_WINE, 10, 50)];
      const app = new GildedTros(items);
      
      app.updateQuality();
      
      expect(items[0].quality).toBe(50);
    });
  });

  describe('B-DAWG Keychain (Legendary)', () => {
    it('should never decrease in sellIn or quality', () => {
      const items = [new Item(ItemNames.LEGENDARY_ITEM, 10, QualityLimits.LEGENDARY)];
      const app = new GildedTros(items);
      
      app.updateQuality();
      
      expect(items[0].sellIn).toBe(10);
      expect(items[0].quality).toBe(QualityLimits.LEGENDARY);
    });

    it('should maintain quality at 80 even past sell date', () => {
      const items = [new Item(ItemNames.LEGENDARY_ITEM, -1, QualityLimits.LEGENDARY)];
      const app = new GildedTros(items);
      
      app.updateQuality();
      
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(QualityLimits.LEGENDARY);
    });
  });

  describe('Backstage Passes', () => {
    it('should increase quality by 1 when more than 10 days remain', () => {
      const items = [new Item(ItemNames.BACKSTAGE_PASS_REFACTOR, 15, 20)];
      const app = new GildedTros(items);
      
      app.updateQuality();
      
      expect(items[0].sellIn).toBe(14);
      expect(items[0].quality).toBe(21);
    });

    it('should increase quality by 2 when 10 days or less remain', () => {
      const items = [new Item(ItemNames.BACKSTAGE_PASS_HAXX, 10, 20)];
      const app = new GildedTros(items);
      
      app.updateQuality();
      
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(22);
    });

    it('should increase quality by 3 when 5 days or less remain', () => {
      const items = [new Item(ItemNames.BACKSTAGE_PASS_REFACTOR, 5, 20)];
      const app = new GildedTros(items);
      
      app.updateQuality();
      
      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(23);
    });

    it('should drop quality to 0 after the conference', () => {
      const items = [new Item(ItemNames.BACKSTAGE_PASS_HAXX, 0, 20)];
      const app = new GildedTros(items);
      
      app.updateQuality();
      
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(0);
    });

    it('should never exceed quality of 50', () => {
      const items = [new Item(ItemNames.BACKSTAGE_PASS_REFACTOR, 5, 49)];
      const app = new GildedTros(items);
      
      app.updateQuality();
      
      expect(items[0].quality).toBe(50);
    });
  });

  describe('Smelly Items', () => {
    it('should degrade quality twice as fast for Duplicate Code', () => {
      const items = [new Item(ItemNames.DUPLICATE_CODE, 10, 20)];
      const app = new GildedTros(items);
      
      app.updateQuality();
      
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(18);
    });

    it('should degrade quality twice as fast for Long Methods', () => {
      const items = [new Item(ItemNames.LONG_METHODS, 10, 20)];
      const app = new GildedTros(items);
      
      app.updateQuality();
      
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(18);
    });

    it('should degrade quality twice as fast for Ugly Variable Names', () => {
      const items = [new Item(ItemNames.UGLY_VARIABLE_NAMES, 10, 20)];
      const app = new GildedTros(items);
      
      app.updateQuality();
      
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(18);
    });

    it('should degrade four times as fast after sell by date', () => {
      const items = [new Item(ItemNames.DUPLICATE_CODE, 0, 20)];
      const app = new GildedTros(items);
      
      app.updateQuality();
      
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(16);
    });

    it('should never have negative quality', () => {
      const items = [new Item(ItemNames.LONG_METHODS, 5, 1)];
      const app = new GildedTros(items);
      
      app.updateQuality();
      
      expect(items[0].quality).toBe(0);
    });
  });

  describe('Multiple Updates', () => {
    it('should handle multiple days correctly', () => {
      const items = [new Item('Standard Item', 5, 10)];
      const app = new GildedTros(items);
      
      for (let day = 0; day < 3; day++) {
        app.updateQuality();
      }
      
      expect(items[0].sellIn).toBe(2);
      expect(items[0].quality).toBe(7);
    });

    it('should handle multiple items of different types', () => {
      const items = [
        new Item('Standard Item', 5, 10),
        new Item(ItemNames.GOOD_WINE, 5, 10),
        new Item(ItemNames.LEGENDARY_ITEM, 5, QualityLimits.LEGENDARY),
        new Item(ItemNames.DUPLICATE_CODE, 5, 10)
      ];
      const app = new GildedTros(items);
      
      app.updateQuality();
      
      expect(items[0].quality).toBe(9);  // Standard: -1
      expect(items[1].quality).toBe(11); // Good Wine: +1
      expect(items[2].quality).toBe(QualityLimits.LEGENDARY); // Legendary: unchanged
      expect(items[3].quality).toBe(8);  // Smelly: -2
    });
  });
});

