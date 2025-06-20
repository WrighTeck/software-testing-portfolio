# OTT Ad Validation – Sample Test Case (Roku / FireTV)

## Test Title: Validate Pre-roll and Mid-roll Ads on Roku App

**Objective:**  
Ensure ads play at correct time intervals during playback and meet ad platform specs.

**Test Steps:**
1. Install the latest build on Roku device.
2. Launch the app on Roku.
3. Select a video that is ad-supported.
4. Click Play.
5. Observe pre-roll ad:
   - [ ] Ad plays before content
   - [ ] Duration matches expected (e.g., 15s or 30s)
   - [ ] Can’t skip unless allowed
   - [ ] No black screen or freezing
6. Let video play to mid-roll cue point (timestamp configured for ad insertion).
7. Observe mid-roll ad behavior:
   - [ ] Ad loads within 2 seconds
   - [ ] Video resumes after ad
8. Log ad tracking events using Charles Proxy or Datadog:
   - [ ] Ad request sent
   - [ ] Impression / click trackers fired correctly
9. Repeat test for different video content

**Expected Result:**
- Ads appear at expected intervals
- Tracked events are triggered
- Playback resumes seamlessly after ad

**Devices Tested:**
- Roku Ultra (10.x)
- FireTV Stick 4K (OS 6+)

**Notes:**
- Check ad tags are correct (Google DAI, Freewheel, etc.)
- Validate volume levels and mute behavior
