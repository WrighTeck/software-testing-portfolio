# WrighTeck API Endpoints

The following endpoints were created using Wix Velo HTTP functions and tested using Postman.

## Health Check

GET /_functions/health

Purpose:
Verify the API is operational.

Expected Response:

{
  "status": "ok",
  "api": "WrighTeck API",
  "message": "API is running"
}

---

## Services Endpoint

GET /_functions/services

Returns available services on WrighTeck.com.

Example Response Structure:

{
  "services": [
    {
      "name": "Notary Services",
      "type": "Professional Service",
      "availability": "Remote and In-Person"
    }
  ]
}

---

## Cheat Sheets

GET /_functions/cheat_sheets

Returns available technical cheat sheets.

---

## Tech Guides

GET /_functions/guides

Returns both free and paid technology guides.

---

## Tech Articles

GET /_functions/articles

Returns article metadata for external technology resources.

---

## Contact Submission

POST /_functions/contacts

Used to submit inquiries through the API.

Example Request:

{
  "name": "Jean Wright",
  "email": "test@example.com",
  "subject": "Guide Question",
  "message": "Testing the WrighTeck contact API."
}

Expected Result

Status Code: 201

{
  "success": true,
  "message": "Contact message submitted successfully."
}
