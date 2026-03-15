# API Test Cases

This document outlines test scenarios executed against the WrighTeck API.

## Endpoint: POST /_functions/contacts

### Test Case 1 — Valid Request

Method: POST  
Endpoint: /_functions/contacts

Request Body:

{
  "name": "Jean Wright",
  "email": "test@example.com",
  "subject": "Guide Question",
  "message": "Testing the WrighTeck contact API."
}

Expected Result:

Status Code: 201  
Response contains: success = true  
Record inserted into Contacts collection.

---

### Test Case 2 — Missing Email

Request:

{
  "name": "Jean Wright",
  "subject": "Guide Question",
  "message": "Testing validation."
}

Expected Result:

Status Code: 400  
Error returned for missing required fields.

---

### Test Case 3 — Empty Request Body

Request:

{}

Expected Result:

Status Code: 400 or validation error  
No record inserted into database.
