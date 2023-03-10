const config = {
  rootDir: '.',
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testMatch: ['**/?(*.)+(test).ts?(x)'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/mocks/image.ts',
    '.*\\.(css|less|styl|scss|sass)$': 'identity-obj-proxy',
  },
};

module.exports = config;
