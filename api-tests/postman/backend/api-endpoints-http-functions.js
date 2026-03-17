
import { ok } from 'wix-http-functions';
import { getServicesData } from 'backend/services';
import { getCheatSheetsData } from 'backend/cheatSheets';
import { getGuidesData } from 'backend/guides';
import { getArticlesData } from 'backend/articles';
import { saveContactMessage } from 'backend/contacts';
import { badRequest, serverError, created } from 'wix-http-functions';

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
// Services endpoint
export function get_services(request) {
  return ok({
    headers: {
      "Content-Type": "application/json"
    },
    body: getServicesData()
  });
}
// Cheat-Sheet endpoint
export function get_cheat_sheets(request) {
  return ok({
    headers: { "Content-Type": "application/json" },
    body: getCheatSheetsData()
  });
}
export function get_guides(request) {
  return ok({
    headers: { "Content-Type": "application/json" },
    body: getGuidesData()
  });
}
export function get_articles(request) {
  return ok({
    headers: { "Content-Type": "application/json" },
    body: getArticlesData()
  });
}
  export async function post_contacts(request) {
  try {
    const body = await request.body.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return badRequest({
        headers: { "Content-Type": "application/json" },
        body: {
          error: "Missing required fields: name, email, subject, and message are required."
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
    console.error("post_contacts error:", error);

    return serverError({
      headers: { "Content-Type": "application/json" },
      body: {
        success: false,
        error: "Unable to submit contact message."
      }
    });
  }
}
