import type { CollectionEntry } from "astro:content";

const getSortedProject = (posts: CollectionEntry<"project">[]) =>
  posts.sort((a, b) => (b.data.priority ?? 0) - (a.data.priority ?? 0));

export default getSortedProject;
