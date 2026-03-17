// backend/contacts.js

// Backend helper for saving contact form submissions.
// Inserts validated contact data into the Wix CMS Contacts collection.
import wixData from 'wix-data';

export async function saveContactMessage(data) {
// Build the contact record to store in the database.
  const item = {
    name: data.name,
    email: data.email,
    subject: data.subject,
    message: data.message,
 // Store the submission timestamp.
    submittedAt: new Date(),
 // Default workflow status for new contact entries.
    status: "New",
 // Track where the submission came from.
    source: "API"
  };
  // Insert the record into the Contacts collection.
  // suppressAuth allows the backend function to save the record
  // even when the request originates from a public API call.
  return await wixData.insert("Contacts", item, {
    suppressAuth: true
  });
}
