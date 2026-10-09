import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { profile, readyProjects } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Projects",
  description: `Projects by ${profile.name}.`,
};

// This file is served at /projects.
export default function ProjectsPage() {
  const items = readyProjects();

  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-6 md:py-24">
      <h1 className="font-display text-5xl font-semibold tracking-tight">
        Projects
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-600">
        The notes under each project cover the job, the scope, the rule, the
        recovery, and the limit.
      </p>
      {items.length > 0 ? (
        <div className="mt-10 flex flex-col gap-6">
          {items.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              headingLevel={2}
              imageFirst={index % 2 === 1}
              showStory
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
