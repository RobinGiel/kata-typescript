export const ItemNames = {
	GOOD_WINE: "Good Wine",
	BACKSTAGE_PASS_REFACTOR: "Backstage passes for Re:Factor",
	BACKSTAGE_PASS_HAXX: "Backstage passes for HAXX",
	LEGENDARY_ITEM: "B-DAWG Keychain",
	DUPLICATE_CODE: "Duplicate Code",
	LONG_METHODS: "Long Methods",
	UGLY_VARIABLE_NAMES: "Ugly Variable Names",
} as const;

export const QualityLimits = {
	MIN: 0,
	MAX: 50,
	LEGENDARY: 80,
} as const;

export const SellInThresholds = {
	BACKSTAGE_MEDIUM: 10,
	BACKSTAGE_HIGH: 5,
	EXPIRED: 0,
} as const;
