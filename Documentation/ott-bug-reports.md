# Sample Bug Reports: Web, Mobile, OTT

---

## 🌐 Web Bug Report

### Bug Title
Purchase Teck Guide from Teck Education page

### Environment
- **Browser:** Chrome 125  
- **OS:** macOS Sonoma 14.5  
- **Resolution:** 1440x900  

### Steps to Reproduce
1. Navigate to [https://wrighteck.com](https://wrighteck.com) 
2. Click Teck Education menu
3. Locate Coding & Development Tips section
4. Click on the “Buy Guide” button  

### ✅ Expected Result
- "Make a Payment" dialog pops up to buy guide

### Actual Result
- Link returns a 404 Page Not Found error - Looks like there’s nothing here.

### Severity & Priority
- **Severity:** Medium  
- **Priority:** High  

###  Attachments
- Screenshot of 404 page

### 🧾 Gherkin Format

```gherkin
Feature: Purchase Tech Guide from Teck Education

Scenario: User buys the Coding & Development Tips guide
  Given the user navigates to "https://wrighteck.com"
  When they click on the "Teck Education" menu
  And locate the "Coding & Development Tips" section
  And click on the "Buy Guide" button
  Then the user should be presented with a Make a Payment dialog
  And the guide should be available for purchase
```

# 📱 Mobile Bug Report

## 🐛 Bug Title
App crashes on tapping "Text Verify" on Menu

---

## 🧪 Environment
- **Device:** iPhone 16  
- **OS Version:** iOS 18.3  
- **App Environment:** iPhone Simulator
- **App Name:** UIKitCatalog

---

## 🔁 Steps to Reproduce
1. Launch the app  
2. Scroll down and click "Text Verify" 

---

## ✅ Expected Result
Text Verify page opens 

## ❌ Actual Result
App crashes and closes immediately

---

## 🚦 Severity & Priority
- **Severity:** Critical  
- **Priority:** High  

---

## 📎 Attachments
- Screen recording  
- iOS crash log

---

## 🧾 Gherkin Format

```gherkin
Feature: Accessing the Text Verify page

  As a mobile app user
  I want to access the "Text Verify" page
  So that I can verify text messages without the app crashing

  Scenario: Open Text Verify page without crashing
    Given the user has launched the mobile app
    When the user scrolls down the main screen
    And taps on the "Text Verify" option
    Then the "Text Verify" page should be displayed
    And the app should remain stable without crashing
```
# 📺 OTT Bug Report

## 🐛 Bug Title
Mid-roll Ad Skips Main Content on Roku Ultra

---

## 🧪 Environment
- **Platform:** Roku Ultra (4800X)  
- **OS Version:** Roku OS 11.5  
- **App Version:** 5.2.4  

---

## 🔁 Steps to Reproduce
1. Launch the app on Roku Ultra  
2. Play *Episode 2* of *"Test Series"*  
3. Watch until the mid-roll ad at the 10-minute mark  
4. Let the ad finish playing  

---

## ✅ Expected Result
Playback resumes at the 10-minute mark of the episode

## ❌ Actual Result
Playback jumps ahead to the 14-minute mark, skipping 4 minutes of content

---

## 🚦 Severity & Priority
- **Severity:** High  
- **Priority:** Critical  

---

## 📎 Attachments
- Video recording  
- Roku debug logs

---

## 🧾 Gherkin Format

```gherkin
Feature: Mid-roll Ad Playback

Scenario: Ad resumes playback at correct timestamp
  Given the user is watching Episode 2 of "Test Series" on Roku
  When a mid-roll ad plays at the 10-minute mark
  And the ad finishes
  Then the content should resume from the 10-minute timestamp
  And no part of the main content should be skipped
