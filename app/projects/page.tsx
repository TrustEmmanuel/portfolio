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
      {items.length > 0 ? (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              headingLevel={2}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
