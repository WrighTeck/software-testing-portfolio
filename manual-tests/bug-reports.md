# Sample Bug Reports – Web, OTT & Mobile QA

This file includes sample bug reports based on issues discovered during manual or exploratory testing. These are simplified versions based on real QA workflows.

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
  4. Click "Teck Videos" from the drop down menu
- **Expected Result:**  
   `/teck-videos` page should display a list of embedded Technical Videos  
- **Actual Result:**  
  Place holder text 'Tech Videos Coming Soon' is displayed.
- **Screenshot:** _[screenshot attachment]_
- **Screenrecording:** _[screenrecording attachment]_
- **Status:** Open  
- **Reported By:** Jean Wright  
- **Date:** June 18, 2025  

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
