export interface MenuListItem {
  order: number;
  label: string;
  url: string;
  subList: MenuListSubItem[];
}
export interface MenuListSubItem {
  label: string;
  url: string;
}
export const menuListItems: MenuListItem[] = [
  {
    order: 0,
    label: "ABOUT AISA",
    url: "/aboutaisa",
    subList: [
      { label: "OUR VISION & MISSION", url: "/aboutaisa/mission" },
      { label: "OUR ETHICS & PURPOSE", url: "/aboutaisa/purpose" },
      { label: "OUR HISTORY", url: "/aboutaisa/history" },
      { label: "OUR GOVERNANCE & STRUCTURE", url: "/aboutaisa/structure" },
      { label: "CONSTITUTION EXTRACT", url: "/aboutaisa/extract" },
      { label: "FULL CONSTITUTION", url: "/aboutaisa/constitution" },
    ],
  },
  {
    order: 1,
    label: "GET INVOLVED",
    url: "/getinvolved",
    subList: [
      { label: "AN ORGANISATION FOR SENIORS AND EVERYONE", url: "/getinvolved" },
      { label: "HOW TO JOIN", url: "/getinvolved/join" },
      { label: "FUNDRAIDING", url: "/getinvolved" },
      { label: "DONATIONS", url: "/getinvolved" },
      { label: "VOLUNTEERING", url: "/getinvolved" },
    ],
  },
  {
    order: 2,
    label: "OUR IMPACT",
    url: "/ourimpact",
    subList: [
      { label: "HEALTH", url: "/ourimpact" },
      { label: "FITNESS", url: "/ourimpact" },
      { label: "THE ENVIRONMENT", url: "/ourimpact" },
    ],
  },
  {
    order: 3,
    label: "OUR PROGRAMS",
    url: "/ourprograms",
    subList: [
      { label: "BAITHAK", url: "/ourprograms/baithak" },
      { label: "BRIDGE", url: "/ourprograms/bridge" },
      { label: "BADMINTON", url: "/ourprograms/badminton" },
      { label: "VOLLEYBALL", url: "/ourprograms/volleyball" },
      { label: "Special-Purpose Initiatives", url: "/ourprograms/special" },
      { label: "CULTURAL FUNCTIONS", url: "/ourprograms/culture" },
    ],
  },
  {
    order: 4,
    label: "NEWS AND FEATURES",
    url: "/news",
    subList: [
      { label: "NEWS", url: "/news" },
      { label: "OUR STORIES", url: "/news/stories" },
      // { label: "AWARDS AND RECOGNITION", url: "" },
      { label: "USEFUL CONTENT", url: "/news/content" },
    ],
  },
  {
    order: 5,
    label: "KEEP IN TOUCH",
    url: "/keepintouch",
    subList: [
      { label: "FEEDBACK", url: "/keepintouch" },
      { label: "NEW IDEAS / SUGGESTIONS", url: "" },
      { label: "CONTACT US", url: "" },
    ],
  },
];
