import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://leow.io",
  author: "Leo Wang",
  desc: "Leo Wang's personal blog",
  title: "LEOW.IO",
  ogImage: "og.jpg",
  lightAndDarkMode: true,
  postPerPage: 4,
};

export const LOCALE = ["en-EN"];

export const SOCIALS: SocialObjects = [
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/leow.io",
    linkTitle: `${SITE.title} on Bluesky`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/ImPrankster",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
];
