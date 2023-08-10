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
      { title: "OUR GOVERNANCE & STRUCTURE", url: "/aboutaisa/structure" },
      { title: "CONSTITUTION EXTRACT", url: "/aboutaisa/extract" },
      { title: "FULL CONSTITUTION", url: "/aboutaisa/constitution" },
    ],
  },
  {
    order: 1,
    title: "GET INVOLVED",
    url: "/getinvolved",
    subList: [
      { title: "AN ORGANISATION FOR SENIORS AND EVERYONE", url: "/getinvolved" },
      { title: "HOW TO JOIN", url: "/getinvolved/join" },
      { title: "FUNDRAIDING", url: "/getinvolved" },
      { title: "DONATIONS", url: "/getinvolved" },
      { title: "VOLUNTEERING", url: "/getinvolved" },
    ],
  },
  {
    order: 2,
    title: "OUR IMPACT",
    url: "/ourimpact",
    subList: [
      { title: "HEALTH", url: "/ourimpact" },
      { title: "FITNESS", url: "/ourimpact" },
      { title: "THE ENVIRONMENT", url: "/ourimpact" },
    ],
  },
  {
    order: 3,
    title: "OUR PROGRAMS",
    url: "/ourprograms",
    subList: [
      { title: "BAITHAK", url: "/ourprograms/baithak" },
      { title: "BRIDGE", url: "/ourprograms/bridge" },
      { title: "BADMINTON", url: "/ourprograms/badminton" },
      { title: "VOLLEYBALL", url: "/ourprograms/volleyball" },
      { title: "Special-Purpose Initiatives", url: "/ourprograms/special" },
      { title: "CULTURAL FUNCTIONS", url: "/ourprograms/culture" },
    ],
  },
  {
    order: 4,
    title: "NEWS AND FEATURES",
    url: "/news",
    subList: [
      { title: "NEWS", url: "/news" },
      { title: "OUR STORIES", url: "/news/stories" },
      // { title: "AWARDS AND RECOGNITION", url: "" },
      { title: "USEFUL CONTENT", url: "/news/content" },
    ],
  },
  {
    order: 5,
    title: "KEEP IN TOUCH",
    url: "/keepintouch",
    subList: [
      { title: "FEEDBACK", url: "/keepintouch" },
      { title: "NEW IDEAS / SUGGESTIONS", url: "" },
      { title: "CONTACT US", url: "" },
    ],
  },
];
