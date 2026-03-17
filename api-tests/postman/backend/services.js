// backend/services.js

// Backend data source for the Services endpoint.
// Returns a structured list of WrighTeck services
// that can be consumed by the public API.
export function getServicesData() {
// Array of services currently offered through WrighTeck.
  return {
// Notary services available remotely and in person.
    services: [
      {
        id: 1,
        name: "Notary Services",
        type: "Professional Service",
        availability: "Remote and In-Person"
      },
  // Educational video content published online.
      {
        id: 2,
        name: "Videos",
        type: "Educational Content",
        availability: "Online"
      },
  // Downloadable digital tech guides.
      {
        id: 3,
        name: "Tech Guides",
        type: "Digital Product",
        availability: "Online"
      },
   // Quick-reference cheat sheets.
       {
        id: 4,
        name: "Cheat Sheets",
        type: "Quick Reference",
        availability: "Online"
      },
  // AI-powered tools and solutions.
      {
        id: 5,
        name: "AI Solutions",
        type: "Technology",
        availability: "Online"
      }
    ]
  };
}
