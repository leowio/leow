import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getUniqueTags = (
  entries: CollectionEntry<"blog">[] | CollectionEntry<"project">[],
) => {
  const filteredEntries = entries.filter(({ data }) =>
    "draft" in data ? !data.draft : true,
  );
  const tags: string[] = filteredEntries
    .flatMap((entry) => entry.data.tags)
    .map((tag) => slugifyStr(tag))
    .filter(
      (value: string, index: number, self: string[]) =>
        self.indexOf(value) === index,
    )
    .sort((tagA: string, tagB: string) => tagA.localeCompare(tagB));
  return tags;
};

export default getUniqueTags;
