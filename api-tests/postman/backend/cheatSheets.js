// backend/cheatSheets.js
// Backend data source for the Cheat Sheets endpoint.
// Returns a list of free cheat sheets available on WrighTeck.
export function getCheatSheetsData() {
  return {
// Array of downloadable cheat sheets.
    cheatSheets: [
      {
        id: 1,
        title: "Software Testing Cheat Sheet",
        category: "Software Testing",
        type: "Free"
      },
  
      {
        id: 2,
        title: "AI & Automation Cheat Sheet",
        category: "AI & Automation",
        type: "Free"
      },
      {
        id: 3,
        title: "Cybersecurity & Privacy Cheat Sheet",
        category: "Cybersecurity",
        type: "Free"
      },
      {
        id: 4,
        title: "Tech Productivity Cheat Sheet",
        category: "Tech Productivity",
        type: "Free"
      },
      {
        id: 5,
        title: "Coding & Development Cheat Sheet",
        category: "Coding & Development",
        type: "Free"
      }
    ]
  };
}
