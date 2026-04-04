# Sample Bug Reports – Web, Desktop, OTT & Mobile QA

This file includes sample bug reports based on issues discovered during manual or exploratory testing. These are simplified test steps and specifics for reproducing actual results.

---

## 🐞 Bug Report 001: Tech Videos Not Available (Web)

- **Bug ID:** BUG-WEB-001  
- **Title:** Videos are missing from Tech Videos page 
- **Severity:** Medium  
- **Priority:** High  
- **Environment:**  
  - OS: macOS Sonoma 14.5  
  - Browser: Safari 17.5  
- **Steps to Reproduce:**  
  1. Go to [https://www.wrighteck.com](https://www.wrighteck.com)  
  2. Hover “Teck Education” in the top navigation menu
  3. Observe drop down menu
  4. Locate "Teck Videos" on the drop down menu
- **Expected Result:**  
   `/teck-videos` menu option is displayed on the drop down menu  
- **Actual Result:**  
  `/teck-videos` menu option is not displayed on the drop down menu.
- **Screenshot:** _[screenshot attachment]_
- **Screenrecording:** _[screenrecording attachment]_
- **Status:** Open  
- **Reported By:** Jean Wright  
- **Date:** Mar 21, 2026

---

## 🐞 Bug Report 002: Ad Fails to Play on Roku Device

- **Bug ID:** BUG-OTT-001  
- **Title:** Mid-roll ad fails to play on Roku app 
- **Severity:** High  
- **Priority:** Critical  
- **Environment:**  
  - Device: Roku Ultra  
  - App Version: v4.8.0  
  - Network: WiFi (Xfinity, 100 Mbps)  
- **Steps to Reproduce:**  
  1. Launch the OTT app on Roku  
  2. Start live stream from the “Tech News Live” channel  
  3. Wait for mid-roll ad to trigger (approx. 8 mins)  
- **Expected Result:**  
  Ad plays smoothly, then stream resumes  
- **Actual Result:**  
  Black screen displays during ad slot; stream hangs after 20 seconds  
- **Log Reference:** `adPlayerTimeoutError - code 1022`  
- **Screenshot/Log:** _[attach if available]_  
- **Status:** Open  
- **Reported By:** Jean Wright  
- **Date:** June 18, 2025
  
---

## Bug Report 003: Search Filter Does Not Return Matching Results (Web)
- Bug ID: BUG-WEB-002
- Title: Search filter returns no results for valid keyword
- Severity: Medium
- Priority: High
- Environment:
  - OS: macOS Sonoma 14.5
  - Browser: Chrome 135
  - URL: [sample web application]
- Steps to Reproduce:
  1. Launch the web application
  2. Navigate to the search or product listing page
  3. Enter a valid keyword in the search field
  4. Click Search or press Enter
- Expected Result:  
Matching results are displayed based on the entered keyword.
- Actual Result:  
No results are returned even though matching records exist.
- Screenshot: [screenshot attachment]
- Screenrecording: [screenrecording attachment]
- Status: Open
- Reported By: Jean Wright
- Date: Apr 4, 2026

---

## Bug Report 004: Record Saves Successfully but Updated Value Is Not Displayed (Desktop)
- Bug ID: BUG-DESKTOP-001
- Title: Updated record value is not reflected in desktop application UI after save
- Severity: High
- Priority: High
- Environment:
  - OS: Windows 11
  - Application: Desktop Sample App
  - Build Version: v1.0.0
- Steps to Reproduce:
  1. Launch the desktop application
  2. Open an existing customer or account record
  3. Update one or more editable fields
  4. Click Save
  5. Reopen the same record
- Expected Result:  
The updated values are saved and displayed correctly in the UI.
- Actual Result:  
The save confirmation appears, but the previous values continue to display in the UI.
- Log Reference: `recordRefreshWarning - cachedDataDisplayed`
- Screenshot: [screenshot attachment]
- Screenrecording: [screenrecording attachment]
- Status: Open
- Reported By: Jean Wright
- Date: Apr 4, 2026

---

## Bug Report 005: App Crashes When Submitting Form on Android Device (Mobile)
- Bug ID: BUG-MOBILE-001
- Title: Android app crashes when submitting completed form
- Severity: Critical
- Priority: Critical
- Environment:
  - Device: Pixel 7 Emulator
  - OS: Android 16
  - App Version: v2.3.1
  - Network: WiFi
- Steps to Reproduce:
  1. Launch the mobile application
  2. Navigate to the registration or profile form
  3. Enter valid data in all required fields
  4. Tap Submit
- Expected Result:  
Form submits successfully and user is redirected to the confirmation or next screen.
- Actual Result:  
Application closes immediately after tapping Submit.
- Log Reference: `Fatal Exception: java.lang.NullPointerException`
- Screenshot/Log: [attach if available]
- Status: Open
- Reported By: Jean Wright
- Date: Apr 4, 2026

---

## Bug Report 006: Playback Freezes After Resuming From Pause (OTT)
- Bug ID: BUG-OTT-002
- Title: Video playback freezes after resuming paused content on streaming device
- Severity: High
- Priority: High
- Environment:
  - Device: Fire TV Stick 4K
  - App Version: v5.1.2
  - Network: WiFi (Xfinity, 150 Mbps)
- Steps to Reproduce:
  1. Launch the OTT application
  2. Start playback of any on-demand video
  3. Pause the video for 10-15 seconds
  4. Press Play to resume playback
- Expected Result:  
Video resumes playback normally from the paused position.
- Actual Result:  
Video remains frozen while audio does not resume, requiring the user to exit playback and relaunch content.
- Log Reference: `playbackStateError - resumeBufferTimeout`
- Screenshot/Log: [attach if available]
- Status: Open
- Reported By: Jean Wright
- Date: Apr 4, 2026
