
## Contact Submission Endpoint

This endpoint accepts JSON contact submissions, validates required fields, inserts the data into the **Wix CMS Contacts collection**, and returns a structured JSON response.

### Endpoint
```javascript
// backend/http-functions.js

import { ok, badRequest, serverError, created } from 'wix-http-functions';
import { saveContactMessage } from 'backend/contact';

export async function post_contacts(request) {

  try {

    const body = await request.body.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return badRequest({
        headers: { "Content-Type": "application/json" },
        body: {
          error: "Missing required fields"
        }
      });
    }

    const savedItem = await saveContactMessage({
      name,
      email,
      subject,
      message
    });

    return created({
      headers: { "Content-Type": "application/json" },
      body: {
        success: true,
        message: "Contact message submitted successfully.",
        contactId: savedItem._id
      }
    });

  } catch (error) {

    return serverError({
      headers: { "Content-Type": "application/json" },
      body: {
        success: false,
        error: "Unable to submit contact message."
      }
    });

  }

}
```
