import type { ProjectFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: ProjectFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, description, image, link } = frontmatter;
  return (
    <li className="my-6">
      <a
        href={href}
        className="group relative inline-block text-lg text-skin-accent decoration-dashed decoration-2 underline-offset-4 hover:underline focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 className="text-lg">{title}</h2>
        ) : (
          <h3 className="text-lg">{title}</h3>
        )}
      </a>
      <p>{description}</p>
    </li>
  );
}
