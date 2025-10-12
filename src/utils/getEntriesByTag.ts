import { slugifyAll } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getEntriesByTag = (
  entries: CollectionEntry<"blog">[] | CollectionEntry<"project">[],
  tag: string,
) => entries.filter((entry) => slugifyAll(entry.data.tags).includes(tag));

export default getEntriesByTag;
