# Test Automation Environment Setup Guide for macOS  
**WebdriverIO, Appium, Playwright, TypeScript, and Postman**

This guide provides step-by-step instructions for setting up a QA test automation environment on a Mac.

It is intended for QA testers who want to setup their Mac environment for web and mobile automation using:

- WebdriverIO
- Appium
- Playwright
- TypeScript
- Postman
- Xcode

---

## 1. Overview

This setup guide covers:

- Installing core development tools
- Configuring Node.js and npm
- Setting up Visual Studio Code
- Installing WebdriverIO
- Installing Playwright
- Installing Appium
- Installing TypeScript
- Installing Postman
- Verifying your environment

---

## 2. macOS Prerequisites

Before installing automation tools, confirm the following:

- You are using a supported version of macOS
- You have administrator access to install software
- You have a stable internet connection
- Terminal is available on your Mac

To check your macOS version:

```bash
sw_vers
```
## 3. Install Homebrew

Homebrew is a package manager for macOS and is commonly used to install development tools.

### Install Homebrew

Open Terminal and run:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Verify Homebrew Installation

```bash
brew --version
```

## 4. Install Xcode Command Line Tools

These tools are required for many development and automation dependencies.

Install Xcode:
```
xcode-select --install
```

To verify installation:
```bash
xcode-select -p
```

## 5. Install Node.js and npm

Node.js is required for WebdriverIO, Playwright, Appium, and TypeScript.

Install Node.js
```bash
brew install node
```

Verify Node.js and npm
```bash
node -v
npm -v
```
## 6. Install Visual Studio Code

Visual Studio Code is a lightweight IDE commonly used for test automation.

Install via Homebrew
```bash
brew install --cask visual-studio-code
```

Verify Homebrew Installation:

- Open VS Code and confirm it launches correctly.

Optional: install the code command in Terminal from within VS Code:
	1.	Open VS Code
	2.	Press ```Command + Shift + P```
	3.	Search for: Shell Command: ```Install 'code' command in PATH```

## 7. Create a Working Directory

Create a folder for your automation projects.
```bash
mkdir qa-automation
cd qa-automation
```

## 8. Install TypeScript

TypeScript improves code structure and is commonly used with WebdriverIO and Playwright.

Install TypeScript Globally:
```bash
npm install -g typescript
```

Verify TypeScript:
```bash
tsc -v
```

## 9. Set Up a Node Project

Initialize a Node project before installing framework dependencies.
```bash
npm init -y
```

This creates a package.json file for managing dependencies.

## 10. Install WebdriverIO

WebdriverIO is used for browser and mobile automation.

### Create a WebdriverIO Project:

Inside your project folder, run:
```bash
npm init wdio@latest .
```

During setup, select options such as:
	•	TypeScript
	•	Local runner
	•	Mocha or Cucumber
	•	Page Object pattern (optional)
	•	Browser testing or mobile testing as needed

Verify Installation:

Check that files such as the following are created:
	•	wdio.conf.ts
	•	package.json
	•	test/specs/

## 11. Install Playwright

Playwright is used for modern browser automation.

Install Playwright:
```bash
npm init playwright@latest
```

- Follow the setup prompts:

Recommended selections:
	•	TypeScript
	•	GitHub Actions optional
	•	Install browsers automatically

Verify Playwright Installation:
```bash
npx playwright test --version
```

## 12. Install Appium

Appium is used for Android and iOS mobile automation.

Install Appium Globally:
```bash
npm install -g appium
```

Verify Appium:
```bash
appium -v
```

## 13. Install Appium Doctor

Appium Doctor helps verify mobile automation dependencies.
```bash
npm install -g appium-doctor
```

Verify Appium Environment:

For Android:
```bash
appium-doctor --android
```

For iOS:
```bash
appium-doctor --ios
```

## 14. Android Setup for Appium

To automate Android apps, install Android Studio.

Install Android Studio:
```bash
brew install --cask android-studio
```

After installation:
	1.	Open Android Studio
	2.	Install the Android SDK
	3.	Install Android SDK Platform Tools
	4.	Install an Android Emulator (optional)
	5.	Accept required licenses

Verify adb:
```bash
adb version
```
If adb is not found, add Android SDK platform-tools to your PATH.

Example:
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator
```

Add these lines to your shell profile:
```bash
	•	~/.zshrc for zsh
	•	~/.bash_profile for bash
```

Then reload:
```bash
source ~/.zshrc
```

## 15. iOS Setup for Appium

For iOS automation, you need Xcode.

Install Xcode
- Install Xcode from the App Store.

After installation, verify:
```bash
xcodebuild -version
```
Install iOS dependencies

Appium may require:
	•	Xcode
	•	WebDriverAgent
	•	iOS simulator
	•	Developer signing setup

Run:
```bash
appium-doctor --ios
```
Note: iOS automation requires macOS and works best with a valid Apple development setup.

## 16. Install Postman

Postman is used for API testing and request validation.

Install via Homebrew:
```bash
brew install --cask postman
```
Verify

Launch Postman and confirm it opens successfully.

Recommended first steps:
	•	Create a workspace
	•	Create Dev / Stage / Prod environments
	•	Add variables such as:
	•	base_url
	•	auth_token

## 17. Recommended VS Code Extensions

Install helpful extensions for QA automation:
	•	TypeScript and JavaScript Language Features
	•	Playwright Test for VS Code
	•	Appium extension (if desired)
	•	REST Client (optional)
	•	Prettier
	•	ESLint

## 18. Verify Your Full Automation Environment

Run the following commands to confirm your setup:
```bash
node -v
npm -v
tsc -v
appium -v
appium-doctor --android
npx playwright --version
```

Optional WebdriverIO verification:
```bash
npx wdio --version
```
## 19. Common Setup Issues

Node command not found

Make sure Node.js is installed correctly:
```bash
node -v
```
if you get this error: 
```bash
adb command not found
```
- Confirm Android SDK platform-tools are installed and added to PATH.

Appium Doctor shows missing dependencies

Install the missing tools and re-run:
```bash
appium-doctor --android
appium-doctor --ios
```
Install browsers manually:
```bash
npx playwright install
```

# Xcode & XCUITest Setup for Appium (iOS Automation)

Appium uses the **XCUITest driver** to automate iOS applications.  
This requires Xcode, iOS simulators, and WebDriverAgent to be configured properly.

---

## 1. Install Xcode

Xcode is required for building and running iOS automation tests.

### Install via App Store

1. Open **App Store**
2. Search for **Xcode**
3. Click **Install**

After installation, verify Xcode is available:

```bash
xcodebuild -version
```
## 2. Install Xcode Command Line Tools

Command line tools are required for building and running automation dependencies.
```bash
xcode-select --install
```
Verify installation:
```bash
xcode-select -p
```
Expected output example:
```bash
/Applications/Xcode.app/Contents/Developer
```
## 3. Accept Xcode License

Run the following command:
```bash
sudo xcodebuild -license accept
```
## 4. Install iOS Simulators

1.	Open Xcode
2.	Navigate to:
```
Xcode → Settings → Platforms
```
3.	Install one or more iOS simulator versions.

Common choices include:
- iPhone 15
- iPhone 14
- iPhone SE

## 5. Install Appium XCUITest Driver

Install the Appium XCUITest driver required for iOS automation.
```bash
appium driver install xcuitest
```
Verify installation:
```bash
appium driver list --installed
```
Expected output should include:
```bash
xcuitest
```
## 6. Install WebDriverAgent Dependencies

WebDriverAgent is the iOS automation framework used by Appium.

Navigate to the Appium XCUITest driver folder:
```bash
cd ~/.appium/node_modules/appium-xcuitest-driver/node_modules/appium-webdriveragent
```
Install dependencies:
```bash
npm install
```
## 7. Open WebDriverAgent in Xcode

Open the WebDriverAgent project:
```bash
open WebDriverAgent.xcodeproj
```
Inside Xcode:
	1.	Select WebDriverAgentRunner
	2.	Choose a development team
	3.	Select a simulator device
	4.	Build the project

This step ensures WebDriverAgent builds correctly.

## 8. Verify iOS Devices and Simulators

List available devices:
```bash
xcrun simctl list devices
```
Example output:
```
iPhone 15 (Booted)
iPhone 14
iPhone SE
```
## 9. Start Appium Server

Start the Appium server:
```bash
appium
```
The server should start successfully and listen on the default port:
```bash
http://127.0.0.1:4723
```
### 10. Example iOS Capabilities

Example Appium capabilities for iOS automation:
```json
{
  "platformName": "iOS",
  "appium:deviceName": "iPhone 15",
  "appium:platformVersion": "17.0",
  "appium:automationName": "XCUITest",
  "appium:app": "/path/to/your/app.app"
}
```

## 11. Verify Environment with Appium Doctor

Run the following command to confirm all iOS dependencies are installed correctly:
```bash
appium-doctor --ios
```
Appium Doctor will report any missing tools or configuration issues.

## 12. Common Issues

### Xcode not detected

Verify developer path:
```bash
xcode-select -p
```
Reset if necessary:
```bash
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

### WebDriverAgent build failure

Open the project in Xcode and ensure:
	•	Development Team is selected
	•	Signing certificates are valid
	•	Simulator device is selected

### iOS Simulator not available

Install additional simulators through:
```
Xcode → Settings → Platforms
```
## Summary

To enable iOS automation with Appium, the following components must be configured:
	•	Xcode
	•	Xcode Command Line Tools
	•	iOS Simulators
	•	Appium
	•	Appium XCUITest Driver
	•	WebDriverAgent
	•	Appium Doctor verification
