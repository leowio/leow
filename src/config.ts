import type { Project, Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://leow.io",
  author: "Leo Wang",
  desc: "Leo Wang's personal blog",
  title: "leow.io",
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
  {
    name: "Mail",
    href: "mailto:meimprankster@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Henry Social",
    desc: "Developed and scaled a cash-back product (henry.social) to over 60,000 registered users",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    href: "https://henry.social/",
  },
  {
    title: "KNN3",
    desc: "Developed frontend applications using React and blockchain tools for Knexus (knexus.xyz) and LOTR (lotr.world)",
    tech: ["React", "Tailwind CSS"],
    href: "https://knexus.xyz/",
  },
  {
    title: "Flight Management System",
    desc: "A simple flight management system simulation for airports, developed for the CSCI-SHU 213 Database class",
    tech: ["Next.js", "PostgreSQL", "Drizzle SQL", "Tailwind CSS"],
    href: "https://github.com/ImPrankster/flight-management-system/",
  },
  {
    title: "leow.io",
    desc: "This is my personal blog",
    tech: ["Astro", "Tailwind CSS"],
    href: "https://leow.io/",
  },
];
