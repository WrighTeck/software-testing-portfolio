### AI, Automation & API Tools

## 🧠 AI in QA Workflows
I actively use AI tools like ChatGPT and Claude to support my QA and documentation tasks. Typical use cases include:

- Generating test cases and edge scenarios
- Writing bug report summaries
- Reviewing error messages and logs
- Create test scripts for Web & Mobile Automation
- Drafting user-facing test documentation

**Example Prompts:**
```text
"Write edge case test scenarios for a password reset feature that includes CAPTCHA and email verification."
```
```
"Summarize this bug report for a mobile login failure into 3 bullet points for a QA status meeting:
- App version: 5.2.1 (Android)
- Steps: Open app > Tap Login > Enter valid email/password > Tap Submit
- Expected: Login success
- Actual: App crashes with error code 500
- Notes: Issue replicates only on Android 14 devices"
```
```
"Generate functional and negative test cases for a 'Change Password' feature with the following rules:
- Current password is required
- New password must be 8+ characters with at least one symbol
- Confirmation field must match new password
- Lock the account after 5 failed attempts"
```
---

## 🤖 Automation Tools
My automation testing workflow includes writing scripts in **TypeScript** using tools such as:

- **Appium** for Android & iOS mobile UI testing
- **Playwright** for browser automation
- **WebDriverIO** for hybrid web/mobile testing

**Example from an Appium test (Android API Demos):**
```ts
const webviewOption = await $('android=new UiSelector().text("Views/WebView")');
await expect(webviewOption).toBeDisplayed();
```

---

## 🔌 API Testing (Self Taught)
Although I haven’t used Postman professionally, I’ve taught myself through LinkedIn Learning and personal projects.

**Tools Used:**
- Postman for sending and validating REST API requests
- Swagger UI for understanding and testing documented endpoints

**What I Practice:**
- Testing `GET`, `POST`, `PUT`, `DELETE` methods
- Checking status codes (200, 400, 404, etc.)
- Validating JSON responses and headers

**Sample API Test:**
```http
GET /api/products
Expected: 200 OK
Response: JSON with product list and metadata
```

---

## 🔄 Version Control & Collaboration
I manage my TypeScript-based test automation projects using Git and Bitbucket.

**Common Git Workflow:**
```bash
# Clone the repo from Bitbucket
git clone https://bitbucket.org/my-qa-repo/project-name.git

# Create a feature branch
git checkout -b feature/add-new-tests

# Add changes (e.g., new test files)
git add tests/sampleTest.ts

# Commit changes with a message
git commit -m "Added new test cases for login and signup"

# Push the branch to Bitbucket
git push origin feature/add-new-tests
```

**Pulling Latest Changes:**
```bash
# Switch to the main branch
git checkout main

# Pull updates from the remote repo
git pull origin main
```

**Other Tasks:**
- Opened pull requests for test reviews
- Merged branches after approval
- Resolved simple merge conflicts when syncing branches
