module.exports = {
	transform: {
		"^.+\\.(ts|tsx)$": "@swc/jest",
	},
	testEnvironment: "node",
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
};
