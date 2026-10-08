import Image from "next/image";
import type { Project } from "@/lib/profile";

// One project card. Live and Code only render when a URL is set.
export function ProjectCard({
  project,
  headingLevel = 3,
}: {
  project: Project;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_1px_2px_rgba(22,22,22,0.04)]">
      {project.image ? (
        <div className="relative aspect-[16/10] bg-zinc-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <Heading className="font-display text-xl font-semibold tracking-tight">
          {project.title}
        </Heading>
        <p className="mt-2 text-sm leading-6 text-zinc-600">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <li
              key={item}
              className="rounded-full bg-[#f3f1ec] px-3 py-1 text-xs text-zinc-800"
            >
              {item}
            </li>
          ))}
        </ul>
        {project.liveUrl || project.githubUrl ? (
          <div className="mt-5 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-full bg-zinc-950 px-4 text-sm font-medium text-white"
              >
                Live
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-full bg-white px-4 text-sm font-medium text-zinc-950 ring-1 ring-zinc-200"
              >
                Code
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
