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
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

### Verify Homebrew Installation

```brew --version```

## 4. Install Xcode Command Line Tools

These tools are required for many development and automation dependencies.
xcode-select --install

To verify installation:
```xcode-select -p```

## 5. Install Node.js and npm

Node.js is required for WebdriverIO, Playwright, Appium, and TypeScript.

Install Node.js
```brew install node```

Verify Node.js and npm
```
node -v
npm -v
```
## 6. Install Visual Studio Code

Visual Studio Code is a lightweight IDE commonly used for test automation.

Install via Homebrew
```brew install --cask visual-studio-code```

Verify

Open VS Code and confirm it launches correctly.

Optional: install the code command in Terminal from within VS Code:
	1.	Open VS Code
	2.	Press Command + Shift + P
	3.	Search for: Shell Command: Install 'code' command in PATH

## 7. Create a Working Directory

Create a folder for your automation projects.
```
mkdir qa-automation
cd qa-automation
```

## 8. Install TypeScript

TypeScript improves code structure and is commonly used with WebdriverIO and Playwright.

Install TypeScript Globally
```npm install -g typescript```

Verify TypeScript
```tsc -v```

## 9. Set Up a Node Project

Initialize a Node project before installing framework dependencies.
```npm init -y```

This creates a package.json file for managing dependencies.

## 10. Install WebdriverIO

WebdriverIO is used for browser and mobile automation.

Create a WebdriverIO Project

Inside your project folder, run:
```npm init wdio@latest . ```

During setup, select options such as:
	•	TypeScript
	•	Local runner
	•	Mocha or Cucumber
	•	Page Object pattern (optional)
	•	Browser testing or mobile testing as needed

Verify Installation

Check that files such as the following are created:
	•	wdio.conf.ts
	•	package.json
	•	test/specs/

## 11. Install Playwright

Playwright is used for modern browser automation.

Install Playwright:
```npm init playwright@latest```

Follow the setup prompts

Recommended selections:
	•	TypeScript
	•	GitHub Actions optional
	•	Install browsers automatically

Verify Playwright Installation:
```npx playwright test --version```

## 12. Install Appium

Appium is used for Android and iOS mobile automation.

Install Appium Globally:
```npm install -g appium```

Verify Appium
```appium -v```

## 13. Install Appium Doctor

Appium Doctor helps verify mobile automation dependencies.
```npm install -g appium-doctor```

Verify Appium Environment

For Android:
```appium-doctor --android```

For iOS:
```appium-doctor --ios```

## 14. Android Setup for Appium

To automate Android apps, install Android Studio.

Install Android Studio:
```brew install --cask android-studio```

After installation:
	1.	Open Android Studio
	2.	Install the Android SDK
	3.	Install Android SDK Platform Tools
	4.	Install an Android Emulator (optional)
	5.	Accept required licenses

Verify adb:
```adb version```
If adb is not found, add Android SDK platform-tools to your PATH.

Example:
```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator
```

Add these lines to your shell profile:
```
	•	~/.zshrc for zsh
	•	~/.bash_profile for bash
```

Then reload:
```source ~/.zshrc```


