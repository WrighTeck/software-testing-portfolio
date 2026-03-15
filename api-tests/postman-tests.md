# API Testing Using Postman

API endpoints were tested using Postman to validate request and response behavior.

## Steps

1. Create a POST request
2. Set endpoint:

https://www.wrighteck.com/_functions/contacts

3. Add header

Content-Type: application/json

4. Add request body
```json

{
  "name": "Tinkerbell Wright",
  "email": "test@example.com",
  "subject": "Guide Question",
  "message": "Testing the WrighTeck contact API."
}
```
5. Send request.

## Expected Result

Status Code: 201 Created

Response:
```json

{
  "success": true,
  "message": "Contact message submitted successfully."
}
```
Verify record appears in Wix CMS Contacts collection.
