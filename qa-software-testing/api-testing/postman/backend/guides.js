// backend/guides.js
// Returns paid and free technology guides with pricing,
// format, URL, and availability details.
export function getGuidesData() {
  return {
 // Array of WrighTeck tech guides.
    guides: [
      {
        id: 1,
        title: "Software Testing Hacks Tech Guide",
        category: "Software Testing",
        type: "Paid",
        price: 10.99,
        format: "PDF",
        url: "https://www.wrighteck.com/tech-guides",
        availability: "Online"
      },
      {
        id: 2,
        title: "Coding & Development Tips Tech Guide",
        category: "Coding & Development",
        type: "Paid",
        price: 7.99,
        format: "PDF",
        url: "https://www.wrighteck.com/tech-guides",
        availability: "Online"
      },
      {
        id: 3,
        title: "AI & Automation Hacks Tech Guide",
        category: "AI & Automation",
        type: "Paid",
        price: 10.99,
        format: "PDF",
        url: "https://www.wrighteck.com/tech-guides",
        availability: "Online"
      },
      {
        id: 4,
        title: "Cybersecurity & Privacy Hacks Tech Guide",
        category: "Cybersecurity",
        type: "Paid",
        price: 10.99,
        format: "PDF",
        url: "https://www.wrighteck.com/tech-guides",
        availability: "Online"
      },
      {
        id: 5,
        title: "Tech Productivity Boosters Tech Guide",
        category: "Tech Productivity",
        type: "Paid",
        price: 7.99,
        format: "PDF",
        url: "https://www.wrighteck.com/tech-guides",
        availability: "Online"
      },
      {
        id: 6,
        title: "Gadgets & Hardware Tech Guide",
        category: "Gadgets & Hardware",
        type: "Free",
        price: 0,
        format: "PDF",
        url: "https://www.wrighteck.com/tech-guides",
        availability: "Online"
      }
    ]
  };
}
