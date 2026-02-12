# Gilded Tros Requirements Specification

## Welcome

Hi fellow adventurer, and welcome to the **Gilded Tros**! 

As you know, we are a small inn with a prime location near the MAS and the world famous Axxes IT Consultancy headquarters in the beautiful city of Antwerp. We buy and sell only the finest goods. 

Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Freddy Goesaert, who has moved on to new adventures. 

**Your task:** Add a new feature to our system so that we can begin selling a new category of items.

---

## System Overview

### Core Properties

All items have two key properties:

- **SellIn** - The number of days we have to sell the item
- **Quality** - How valuable the item is

At the end of each day, our system lowers both values for every item.

---

## Business Rules

### General Rules

- Once the sell by date has passed, Quality degrades **twice as fast**
- The Quality of an item is **never negative**
- The Quality of an item is **never more than 50** (except legendary items)

### Special Items

#### Good Wine
- **Increases** in Quality the older it gets
- Still follows the 50 Quality cap

#### B-DAWG Keychain (Legendary)
- Never has to be sold (SellIn never decreases)
- Never decreases in Quality
- Always has Quality of **80**

#### Backstage Passes
For very interesting conferences, increases in Quality as its SellIn value approaches:
- **Normal**: Quality increases by 1
- **10 days or less**: Quality increases by 2
- **5 days or less**: Quality increases by 3
- **After conference** (SellIn < 0): Quality drops to 0

#### Smelly Items ⚠️ NEW REQUIREMENT
Items: `"Duplicate Code"`, `"Long Methods"`, `"Ugly Variable Names"`

Due to high demand, we signed a contract with a consultancy firm that provides usable items, but they smell kinda strange.

- Degrade in Quality **twice as fast** as normal items

---

## Implementation Constraints

### ⚠️ Important Rules

> **DO NOT** alter the `Item` class or `Items` property!
> 
> These belong to the QA guy in the corner who will insta-rage and one-shot you as he doesn't believe in shared code ownership.

### What You CAN Do

- Make any changes to the `UpdateQuality` method
- Add any new code as long as everything still works correctly
- Make the `UpdateQuality` method and `Items` property static if you like (we'll cover for you)

---

## Quick Reference Table

| Item Type | SellIn Behavior | Quality Change (Before SellIn) | Quality Change (After SellIn) | Quality Limits |
|-----------|-----------------|--------------------------------|-------------------------------|----------------|
| Standard | Decreases by 1 | Decreases by 1 | Decreases by 2 | 0 - 50 |
| Good Wine | Decreases by 1 | Increases by 1 | Increases by 2 | 0 - 50 |
| Backstage Pass | Decreases by 1 | Increases by 1/2/3* | Drops to 0 | 0 - 50 |
| B-DAWG Keychain | Never changes | Never changes | Never changes | Always 80 |
| Smelly Items | Decreases by 1 | Decreases by 2 | Decreases by 4 | 0 - 50 |

_* Backstage passes: +1 normally, +2 when 10 days or less, +3 when 5 days or less_

---

## Clarification

An item can never have its Quality increase above 50, **however legendary items always have Quality 80**.
