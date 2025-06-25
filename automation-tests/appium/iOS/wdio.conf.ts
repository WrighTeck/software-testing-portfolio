import * as fs from 'fs';
import * as path from 'path';

const iosCaps = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './ios.capabilities.json'), 'utf-8')
);

export const config: WebdriverIO.Config = {
  runner: 'local',
  port: 4723,
  specs: ['./test/specs/**/*.ts'],
  maxInstances: 1,
  capabilities: [iosCaps],
  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  services: [
    ['appium', {
      autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
          transpileOnly: true,
          project: './tsconfig.json'
        }
      }
    }]
  ]
};
