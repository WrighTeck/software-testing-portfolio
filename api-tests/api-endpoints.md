# WrighTeck API Endpoints

The following endpoints were created using Wix Velo HTTP functions and tested using Postman.

## Health Check

```json
GET /_functions/health
```

Purpose:
Verify the API is operational.

Expected Response:
```json
{
  "status": "ok",
  "api": "WrighTeck API",
  "message": "API is running"
}

---
```
## Services Endpoint
```json
GET /_functions/services
```

Returns available services on WrighTeck.com.

Example Response Structure:
```json
{
  "services": [
    {
      "name": "Notary Services",
      "type": "Professional Service",
      "availability": "Remote and In-Person"
    }
  ]
}
```
---

## Cheat Sheets
```json
GET /_functions/cheat_sheets
```
Returns available technical cheat sheets.

---

## Tech Guides
```json
GET /_functions/guides
```
Returns both free and paid technology guides.

---

## Tech Articles
```json
GET /_functions/articles
```
Returns article metadata for external technology resources.

---

## Contact Submission
```json
POST /_functions/contacts
```
Used to submit inquiries through the API.

Example Request:
```json
{
  "name": "Jean Wright",
  "email": "test@example.com",
  "subject": "Guide Question",
  "message": "Testing the WrighTeck contact API."
}
```
Expected Result
```json
Status Code: 201
{
  "success": true,
  "message": "Contact message submitted successfully."
}
```
