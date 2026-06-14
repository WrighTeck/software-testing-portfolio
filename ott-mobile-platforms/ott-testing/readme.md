---

# 📺 OTT / Streaming Testing

This section focuses on testing streaming applications across platforms such as Roku, FireTV, AppleTV, and AndroidTV.

## Tools Used
- Charles Proxy (network tracking)
- Device logs (Roku, FireTV, AppleTV)
- Analytics tools (Google Analytics, JW Player)
- OTT devices (real-world testing)

## Key Testing Areas
- Video playback validation
- Adaptive Bitrate (ABR) behavior
- Ad insertion and beacon tracking
- Analytics validation

## Debugging Workflow Example

Issue: Ad not playing before video

Steps:
1. Capture traffic using Charles Proxy
2. Filter ad-related network calls
3. Validate beacon requests
4. Check response status codes
5. Confirm ad service response

## Real-World Focus
This reflects real production testing for streaming platforms, including playback reliability, ad validation, and analytics tracking.
