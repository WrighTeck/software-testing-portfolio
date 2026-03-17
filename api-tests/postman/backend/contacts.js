// backend/contact.js
import wixData from 'wix-data';

export async function saveContactMessage(data) {
  const item = {
    name: data.name,
    email: data.email,
    subject: data.subject,
    message: data.message,
    submittedAt: new Date(),
    status: "New",
    source: "API"
  };

  return await wixData.insert("Contacts", item, {
    suppressAuth: true
  });
}
