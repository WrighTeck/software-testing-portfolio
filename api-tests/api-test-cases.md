# API Test Cases

This document outlines test scenarios executed against the WrighTeck API.

## Endpoint: POST /_functions/contacts

### Test Case 1 — Valid Request
```json
Method: POST  
Endpoint: /_functions/contacts
```
Request Body:
```json
{
  "name": "Tinkerbell Wright",
  "email": "test@example.com",
  "subject": "Guide Question",
  "message": "Testing the WrighTeck contact API."
}
```
Expected Result:
```json
Status Code: 201  
Response contains: success = true  
Record inserted into Contacts collection.
```

### Test Case 2 — Missing Email

Request:
```json
{
  "name": "Tinkerbell Wright",
  "subject": "Guide Question",
  "message": "Testing validation."
}
```
Expected Result:
```json
Status Code: 400  
Error returned for missing required fields.
```
---

### Test Case 3 — Empty Request Body

Request:
```json
{}
```
Expected Result:
```json
Status Code: 400 or validation error  
No record inserted into database.
```
