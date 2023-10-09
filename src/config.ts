import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://leow.io",
  author: "Leo Wang",
  desc: "Leo Wang's personal blog",
  title: "leow.io",
  ogImage: "og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/ImPrankster",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/leo-wang-585a6624a/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:meimprankster@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
