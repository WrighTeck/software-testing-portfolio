// backend/services.js

export function getServicesData() {
  return {
    services: [
      {
        id: 1,
        name: "Notary Services",
        type: "Professional Service",
        availability: "Remote and In-Person"
      },
      {
        id: 2,
        name: "Videos",
        type: "Educational Content",
        availability: "Online"
      },
      {
        id: 3,
        name: "Tech Guides",
        type: "Digital Product",
        availability: "Online"
      },
       {
        id: 4,
        name: "Cheat Sheets",
        type: "Quick Reference",
        availability: "Online"
      },
      {
        id: 5,
        name: "AI Solutions",
        type: "Technology",
        availability: "Online"
      }
    ]
  };
}
