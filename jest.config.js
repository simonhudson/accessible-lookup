module.exports = {
	testEnvironment: 'jsdom',
	snapshotSerializers: ['enzyme-to-json/serializer'],
	setupFiles: ['./config/tests/jestsetup.js'],
	setupFilesAfterEnv: ['./config/tests/jestsetup-after.js'],
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
	},
	moduleNameMapper: {
		'^\\~(.*)$': '<rootDir>/src/js$1',
	},
	coverageDirectory: 'coverage/jest',
	collectCoverageFrom: ['src/**/*.js', '!src/config/**/*.js'],
	coverageReporters: ['json', 'lcov', 'text-summary', 'clover'],
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 95,
			lines: 97,
			statements: 97,
		},
		'./components/**/*.js': {
			branches: 80,
			functions: 80,
			lines: 85,
			statements: 85,
		},
	},
};
