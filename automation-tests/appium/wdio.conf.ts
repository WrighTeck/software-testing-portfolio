// Detect platform from env
const platform = process.env.PLATFORM ?? 'android';

const configCapabilities =
  platform === 'android'
    ? [
        {
          platformName: 'Android',
          'appium:platformVersion': '12.0',
          'appium:deviceName': 'Android Emulator',
          'appium:browserName': 'Chrome',
          'appium:automationName': 'UiAutomator2'
        }
      ]
    : [
        {
          platformName: 'iOS',
          'appium:platformVersion': '16.2',
          'appium:deviceName': 'iPhone 14',
          'appium:browserName': 'Safari',
          'appium:automationName': 'XCUITest'
        }
      ];

export const config = {
  runner: 'local',
  specs: ['./test/specs/**/*.ts'],
  maxInstances: 1,

  capabilities: configCapabilities,

  logLevel: 'info',
  bail: 0,
  baseUrl: 'https://www.wrighteck.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 1,

  services: ['appium'],

  framework: 'mocha',
  reporters: ['spec'],

  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: './tsconfig.json'
    }
  },

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};
