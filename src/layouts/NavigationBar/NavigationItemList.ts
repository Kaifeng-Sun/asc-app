export interface MenuListItem {
  order: number;
  title: string;
  url: string;
  subList: MenuListSubItem[];
}
export interface MenuListSubItem {
  title: string;
  url: string;
}
export const menuListItems: MenuListItem[] = [
  {
    order: 0,
    title: "ABOUT AISA",
    url: "/aboutaisa",
    subList: [
      { title: "OUR VISION & MISSION", url: "/aboutaisa/mission" },
      { title: "OUR ETHICS & PURPOSE", url: "/aboutaisa/purpose" },
      { title: "OUR HISTORY", url: "/aboutaisa/history" },
      { title: "OUR GOVERNANCE & STRUCTURE", url: "" },
      { title: "CONSTITUTION EXTRACT", url: "" },
      { title: "FULL CONSTITUTION", url: "" },
    ],
  },
  {
    order: 1,
    title: "GET INVOLVED",
    url: "",
    subList: [
      { title: "AN ORGANISATION FOR SENIORS AND EVERYONE", url: "" },
      { title: "HOW TO JOIN", url: "" },
      { title: "FUNDRAIDING", url: "" },
      { title: "DONATIONS", url: "" },
      { title: "VOLUNTEERING", url: "" },
    ],
  },
  {
    order: 2,
    title: "OUR IMPACT",
    url: "",
    subList: [
      { title: "HEALTH", url: "" },
      { title: "FITNESS", url: "" },
      { title: "THE ENVIRONMENT", url: "" },
    ],
  },
  {
    order: 3,
    title: "OUR PROGRAMS",
    url: "",
    subList: [
      { title: "BAITHAK", url: "" },
      { title: "BRIDGE", url: "" },
      { title: "BADMINTON", url: "" },
      { title: "TABLE TENNIS", url: "" },
      { title: "PICNICS & TRIPS", url: "" },
      { title: "CULTURAL FUNCTIONS", url: "" },
      { title: "VOLLEYBALL", url: "" },
      { title: "WOMEN's FORUM", url: "" },
      { title: "HEALTH SEMINARS", url: "" },
      { title: "INTRODUCTION TO PROGRAMS", url: "" },
    ],
  },
  {
    order: 4,
    title: "NEWS AND FEATURES",
    url: "",
    subList: [
      { title: "NEWS", url: "" },
      { title: "OUR STORIES", url: "" },
      { title: "AWARDS AND RECOGNITION", url: "" },
      { title: "USEFUL CONTENT", url: "" },
    ],
  },
  {
    order: 5,
    title: "KEEP IN TOUCH",
    url: "",
    subList: [
      { title: "FEEDBACK", url: "" },
      { title: "NEW IDEAS / SUGGESTIONS", url: "" },
      { title: "CONTACT US", url: "" },
    ],
  },
];
