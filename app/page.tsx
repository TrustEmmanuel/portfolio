import Image from "next/image";
import Link from "next/link";
import { GetInTouch } from "@/components/MessageBox";
import { ProjectCard } from "@/components/ProjectCard";
import { ResumeDownload } from "@/components/ResumeDownload";
import { isUnfilled, profile, readyProjects } from "@/lib/profile";

const primaryButton =
  "inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800";
const secondaryButton =
  "inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-zinc-950 ring-1 ring-zinc-200 transition-colors hover:bg-zinc-50";

const pill =
  "rounded-full bg-[#f3f1ec] px-3 py-1 text-sm text-zinc-800";

const card =
  "rounded-3xl bg-white shadow-[0_1px_2px_rgba(22,22,22,0.04)]";

// app/page.tsx is the Home route. The URL is /.
export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-5 pb-16 pt-6 sm:px-6 md:gap-20 md:pt-10">
      <Hero />
      <About />
      <TechStack />
      <Services />
      <FeaturedProjects />
      <GitHub />
      <Resume />
      <CallToAction />
    </div>
  );
}

function Hero() {
  return (
    <section className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-16">
      <div>
        <div className="flex items-center gap-4">
          <Image
            src={profile.photo}
            alt={profile.photoAlt}
            width={128}
            height={128}
            priority
            className="h-16 w-16 rounded-2xl object-cover shadow-sm"
          />
          <div>
            <p className="text-sm text-zinc-600">{profile.greeting}</p>
            <p className="mt-1 flex items-center gap-2 text-sm text-zinc-800">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
              {profile.badge}
            </p>
          </div>
        </div>
        <h1 className="mt-8 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          {profile.headline}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
          {profile.bio}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {profile.actions.map((action) => {
            const className =
              action.variant === "primary" ? primaryButton : secondaryButton;
            const external =
              action.href.startsWith("http") || action.href.startsWith("mailto:");

            if (action.href.startsWith("mailto:")) {
              return (
                <GetInTouch
                  key={action.label}
                  className={className}
                  label={action.label}
                />
              );
            }

            if (external) {
              return (
                <a
                  key={action.href}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {action.label}
                </a>
              );
            }

            return (
              <Link key={action.href} href={action.href} className={className}>
                {action.label}
              </Link>
            );
          })}
        </div>
      </div>

      <ul className="grid grid-cols-3 gap-3 lg:grid-cols-1">
        {profile.stats.map((stat) => {
          const body = (
            <>
              <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {stat.value}
              </p>
              {"label" in stat ? (
                <p className="mt-1 text-xs text-zinc-600 sm:text-sm">
                  {stat.label}
                </p>
              ) : null}
            </>
          );
          const className =
            "rounded-2xl bg-white px-3 py-4 shadow-[0_1px_2px_rgba(22,22,22,0.04)] sm:px-5 lg:py-5";

          if ("href" in stat) {
            return (
              <li key={stat.value}>
                <a href={stat.href} className={`block h-full ${className}`}>
                  {body}
                  {"linkLabel" in stat ? (
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-zinc-950">
                      {stat.linkLabel}
                      <svg
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </span>
                  ) : null}
                </a>
              </li>
            );
          }

          return (
            <li key={stat.label} className={className}>
              {body}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function About() {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold tracking-tight">
        {profile.about.title}
      </h2>
      <div className={`mt-5 p-6 sm:p-8 ${card}`}>
        {isUnfilled(profile.about.paragraph) ? null : (
          <p className="max-w-2xl text-base leading-7 text-zinc-600">
            {profile.about.paragraph}
          </p>
        )}
        <h3
          className={`text-sm font-medium text-zinc-950 ${isUnfilled(profile.about.paragraph) ? "" : "mt-6"}`}
        >
          {profile.about.offersTitle}
        </h3>
        <ul className="mt-3 max-w-2xl list-disc space-y-2 pl-5 text-base leading-7 text-zinc-600">
          {profile.about.offers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6 text-base font-medium text-zinc-950">
          {profile.about.closing}
        </p>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold tracking-tight">
        {profile.stackTitle}
      </h2>
      <ul className={`mt-5 divide-y divide-zinc-200 ${card}`}>
        {profile.stack.map((group) => (
          <li
            key={group.category}
            className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-start"
          >
            <p className="shrink-0 text-sm text-zinc-600 sm:w-64">{group.category}</p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className={pill}>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Services() {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold tracking-tight">
        {profile.servicesTitle}
      </h2>
      <ul className={`mt-5 grid gap-2 p-6 sm:grid-cols-2 ${card}`}>
        {profile.services.map((service) => (
          <li key={service.title} className={`${pill} w-fit`}>
            {service.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

function FeaturedProjects() {
  const items = readyProjects().filter((project) => project.showOnHome);

  if (items.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          {profile.featured.title}
        </h2>
        <Link
          href={profile.featured.href}
          className="text-sm font-medium text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-950"
        >
          {profile.featured.allLabel}
        </Link>
      </div>
      <div className="mt-5 flex flex-col gap-6">
        {items.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            imageFirst={index % 2 === 1 && !project.frames?.length}
            showStory={project.storyOnHome === true}
            highlight={project.highlightOnHome === true}
          />
        ))}
      </div>
    </section>
  );
}

function GitHub() {
  return (
    <section className={`flex flex-col items-start gap-6 p-7 sm:p-8 ${card}`}>
      <div>
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          {profile.github.title}
        </h2>
        <p className="mt-2 max-w-md text-zinc-600">{profile.github.text}</p>
      </div>
      <a
        href={profile.github.url}
        target="_blank"
        rel="noopener noreferrer"
        className={primaryButton}
      >
        {profile.github.button}
      </a>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="scroll-mt-24">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            {profile.resume.title}
          </h2>
          <p className="mt-2 max-w-md text-zinc-600">{profile.resume.text}</p>
        </div>
        <ResumeDownload
          href={profile.resume.downloadHref}
          label={profile.resume.downloadLabel}
          fileName={profile.resume.downloadName}
          className={primaryButton}
        />
      </div>

      <ResumeLists />
    </section>
  );
}

function ResumeLists() {
  const experience = profile.experience.filter(
    (item) =>
      !isUnfilled(item.role) &&
      !isUnfilled(item.company) &&
      !isUnfilled(item.dates) &&
      !isUnfilled(item.summary),
  );
  const education = profile.education.filter(
    (item) =>
      !isUnfilled(item.credential) &&
      !isUnfilled(item.school) &&
      !isUnfilled(item.dates),
  );

  if (experience.length === 0 && education.length === 0) {
    return null;
  }

  return (
    <div className="mt-5 grid gap-3 lg:grid-cols-2">
      {experience.length > 0 ? (
        <div className={`p-6 sm:p-8 ${card}`}>
          <h3 className="text-sm text-zinc-600">
            {profile.resume.experienceTitle}
          </h3>
          <ul className="mt-4 space-y-6">
            {experience.map((item) => (
              <li key={item.role}>
                <p className="font-display text-xl font-semibold tracking-tight">
                  {item.role}
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  {item.company} · {item.dates}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {item.summary}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {education.length > 0 ? (
        <div className={`p-6 sm:p-8 ${card}`}>
          <h3 className="text-sm text-zinc-600">
            {profile.resume.educationTitle}
          </h3>
          <ul className="mt-4 space-y-6">
            {education.map((item) => (
              <li key={item.school}>
                <p className="font-display text-xl font-semibold tracking-tight">
                  {item.credential}
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  {item.school} · {item.dates}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function CallToAction() {
  return (
    <section className={`flex flex-col items-start justify-between gap-6 px-7 py-8 sm:flex-row sm:items-center sm:px-8 ${card}`}>
      <h2 className="font-display text-3xl font-semibold tracking-tight">
        {profile.cta.title}
      </h2>
      <GetInTouch className={primaryButton} label={profile.cta.button} />
    </section>
  );
}

