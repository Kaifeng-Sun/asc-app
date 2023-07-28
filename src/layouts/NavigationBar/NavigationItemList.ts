export interface MenuListItem {
  order: number;
  title: string;
  subList: string[];
}
export const menuListItems: MenuListItem[] = [
  {
    order: 0,
    title: "ABOUT AISA",
    subList: [
      "OUR VISION & MISSION",
      "OUR ETHICS & PURPOSE",
      "OUR HISTORY",
      "OUR GOVERNANCE & STRUCTURE",
      "CONSTITUTION EXTRACT",
      "FULL CONSTITUTION",
    ],
  },
  {
    order: 1,
    title: "GET INVOLVED",
    subList: [
      "AN ORGANISATION FOR SENIORS AND EVERYONE",
      "HOW TO JOIN",
      "FUNDRAIDING",
      "DONATIONS",
      "VOLUNTEERING",
    ],
  },
  {
    order: 2,
    title: "OUR IMPACT",
    subList: ["HEALTH", "FITNESS", "THE ENVIRONMENT"],
  },
  {
    order: 3,
    title: "OUR PROGRAMS",
    subList: [
      "BAITHAK",
      "BRIDGE",
      "BADMINTON",
      "TABLE TENNIS",
      "PICNICS & TRIPS",
      "CULTURAL FUNCTIONS",
      "VOLLEYBALL",
      "WOMEN's FORUM",
      "HEALTH SEMINARS",
      "INTRODUCTION TO PROGRAMS",
    ],
  },
  {
    order: 4,
    title: "NEWS AND FEATURES",
    subList: [
      "NEWS",
      "OUR STORIES",
      "AWARDS AND RECOGNITION",
      "USEFUL CONTENT",
    ],
  },
  {
    order: 5,
    title: "KEEP IN TOUCH",
    subList: ["FEEDBACK", "NEW IDEAS / SUGGESTIONS", "CONTACT US"],
  },
];
