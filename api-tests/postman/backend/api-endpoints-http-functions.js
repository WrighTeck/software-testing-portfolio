// Main HTTP functions file for the WrighTeck API.
// This file exposes all public API endpoints used for testing in Postman.

// Import Wix HTTP response helpers.
import { ok } from 'wix-http-functions';
import { badRequest, serverError, created } from 'wix-http-functions';

// Import backend data providers for each endpoint.
import { getServicesData } from 'backend/services';
import { getCheatSheetsData } from 'backend/cheatSheets';
import { getGuidesData } from 'backend/guides';
import { getArticlesData } from 'backend/articles';
import { saveContactMessage } from 'backend/contacts';

// Health check endpoint.
// Used to verify that the API is online and responding correctly.
export function get_health(request) {
  return ok({
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      status: "ok",
      api: "WrighTeck API",
      message: "API is running"
    }
  });
}

// Services endpoint.
// Returns the list of services offered on WrighTeck.com.
export function get_services(request) {
  return ok({
    headers: {
      "Content-Type": "application/json"
    },
    body: getServicesData()
  });
}
// Cheat sheets endpoint.
// Returns available quick-reference cheat sheets.
export function get_cheat_sheets(request) {
  return ok({
    headers: { "Content-Type": "application/json" },
    body: getCheatSheetsData()
  });
}

// Guides endpoint.
// Returns free and paid tech guides with pricing and metadata.
export function get_guides(request) {
  return ok({
    headers: { "Content-Type": "application/json" },
    body: getGuidesData()
  });
}

// Articles endpoint.
// Returns article metadata for content listed on the Tech Articles page.
export function get_articles(request) {
  return ok({
    headers: { "Content-Type": "application/json" },
    body: getArticlesData()
  });
}

// Contact submission endpoint.
// Accepts a JSON request body, validates required fields,
// stores the message in the Contacts collection,
// and returns a success or error response.
  export async function post_contacts(request) {
  try {
    const body = await request.body.json();
    const { name, email, subject, message } = body;

// Validate required fields before saving the contact message.
    if (!name || !email || !subject || !message) {
      return badRequest({
        headers: { "Content-Type": "application/json" },
        body: {
          error: "Missing required fields: name, email, subject, and message are required."
        }
      });
    }
// Save valid contact data to the Wix CMS Contacts collection.
    const savedItem = await saveContactMessage({
      name,
      email,
      subject,
      message
    });
    
// Return a 201 Created response when the contact message is saved successfully.
    return created({
      headers: { "Content-Type": "application/json" },
      body: {
        success: true,
        message: "Contact message submitted successfully.",
        contactId: savedItem._id
      }
    });
} catch (error) {
    console.error("post_contacts error:", error);
    
// Return a generic server error if something goes wrong during processing.
    return serverError({
      headers: { "Content-Type": "application/json" },
      body: {
        success: false,
        error: "Unable to submit contact message."
      }
    });
  }
}
