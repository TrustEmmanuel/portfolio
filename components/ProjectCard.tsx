import Image from "next/image";
import type { Project } from "@/lib/profile";

const pill = "rounded-full bg-[#f3f1ec] px-3 py-1 text-sm text-zinc-800";

// One project. Live and Code only render when a URL is set.
export function ProjectCard({
  project,
  headingLevel = 3,
  imageFirst = false,
  showStory = false,
  highlight = false,
}: {
  project: Project;
  headingLevel?: 2 | 3;
  imageFirst?: boolean;
  showStory?: boolean;
  highlight?: boolean;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <article
      id={project.title.toLowerCase().replaceAll(" ", "-")}
      className={
        highlight
          ? "overflow-hidden rounded-3xl bg-white shadow-[0_16px_40px_rgba(22,22,22,0.08)] ring-2 ring-zinc-950"
          : "overflow-hidden rounded-3xl bg-white shadow-[0_1px_2px_rgba(22,22,22,0.04)]"
      }
    >
      <div
        className={
          project.frames?.length
            ? "grid lg:grid-cols-[minmax(0,1.25fr)_minmax(200px,0.68fr)]"
            : imageFirst
              ? "grid lg:grid-cols-[minmax(280px,0.92fr)_minmax(0,1fr)]"
              : "grid lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.92fr)]"
        }
      >
        <div
          className={`flex flex-col p-7 sm:p-10 ${imageFirst ? "lg:order-2" : ""}`}
        >
          {highlight ? (
            <p className="w-fit rounded-full bg-[#f3f1ec] px-3 py-1 text-sm text-zinc-800">
              Highlighted
            </p>
          ) : null}
          {project.liveUrl ? (
            <p className="flex items-center gap-2 text-sm text-zinc-800">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
              Live
            </p>
          ) : null}
          <Heading className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.title}
          </Heading>
          <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-600">
            {project.summary}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600">
            {project.description}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-800">
            {project.audience}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <li key={item} className={pill}>
                {item}
              </li>
            ))}
          </ul>
          {project.liveUrl || project.githubUrl ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
                >
                  View live site
                </a>
              ) : null}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-zinc-950 ring-1 ring-zinc-200 transition-colors hover:bg-zinc-50"
                >
                  View code
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
        {project.frames?.length ? (
          <div className="flex flex-col justify-center gap-3 bg-[#e7f3ec] p-4 sm:p-5">
            {project.frames.map((frame) => (
              <Image
                key={frame.src}
                src={frame.src}
                alt={project.title}
                width={frame.width}
                height={frame.height}
                sizes="(min-width: 1024px) 280px, 100vw"
                className="h-auto w-full rounded-xl shadow-[0_8px_24px_rgba(6,40,30,0.12)]"
              />
            ))}
          </div>
        ) : project.image ? (
          <div
            className={`relative min-h-72 bg-[#f3f1ec] lg:min-h-full ${imageFirst ? "lg:order-1" : ""}`}
          >
            <Image
              src={project.image}
              alt={`${project.title}`}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover object-left-top"
            />
          </div>
        ) : null}
      </div>
      {showStory && project.caseStudy && project.caseStudy.length > 0 ? (
        <dl className="grid gap-x-10 gap-y-6 border-t border-zinc-200 px-7 py-8 sm:px-10 sm:grid-cols-2">
          {project.caseStudy.map((note) => (
            <div key={note.label}>
              <dt className="text-sm text-zinc-600">{note.label}</dt>
              <dd className="mt-2 text-sm leading-6 text-zinc-800">{note.text}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </article>
  );
}
