import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://leow.io",
  author: "Leo Wang",
  desc: "Leo Wang | Software Engineer, Designer",
  title: "LEOW.IO",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerPage: 4,
};

export const LOCALE = ["en-EN"];

export const SOCIALS: SocialObjects = [
  // {
  //   name: "Bluesky",
  //   href: "https://bsky.app/profile/leow.io",
  //   linkTitle: `${SITE.title} on Bluesky`,
  //   active: true,
  // },
  {
    name: "Github",
    href: "https://github.com/leowio",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
];
