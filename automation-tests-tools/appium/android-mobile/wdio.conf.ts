import type { Options } from '@wdio/types'

const mappingData: Record<string, { platformVersion: string; deviceName: string; udid?: string }> = require('./mapping.json')
// Choose target device environment (defaults to api13 if none specified)
const target = process.env.DEVICE_ENV ?? 'api13';
const map = mappingData[target];

export const config: WebdriverIO.Config = {
  runner: 'local',
  path: '/',
  port: 4723,

  specs: ['./test/specs/android/*.ts'], // adjust location URL if location is different

  maxInstances: 1,

 capabilities: [
  {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:platformVersion': map.platformVersion,
    'appium:deviceName': map.deviceName,
    'appium:udid': map.udid,
    'appium:app': '/.../..../appium-mobile-tests/ApiDemos-debug/ApiDemos-debug.apk',
    'appium:autoGrantPermissions': true,
    'appium:appPackage': 'io.appium.android.apis',
    'appium:appActivity': '.ApiDemos',        // Use what ADB returned
    'appium:appWaitActivity': '*',
    'appium:appWaitForLaunch': true
  }
],

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  services: [
  ['visual', {
    baselineFolder: './__snapshots__',
    screenshotPath: './.tmp',
    savePerInstance: true,
    formatImageName: '{tag}-{logName}-{width}x{height}'
  }]
],

  framework: 'mocha',
  reporters: ['spec'],

  tsConfigPath: './tsconfig.json',

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};
