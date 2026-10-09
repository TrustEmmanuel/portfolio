import type { Metadata } from "next";
import { GetInTouch } from "@/components/MessageBox";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "I'm a Forward Deployed Engineer. Send a message and I will get back to you.",
};

const primaryButton =
  "mt-8 inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800";

// This file is served at /contact.
export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-6 md:py-24">
      <h1 className="font-display text-5xl font-semibold tracking-tight">
        Contact
      </h1>
      <div className="mt-10 rounded-3xl bg-white p-7 shadow-[0_1px_2px_rgba(22,22,22,0.04)] sm:p-10">
        <p className="max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          I&apos;m a Forward Deployed Engineer.
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-800">
          I work from the customer&apos;s constraints, ship something they can
          use, and explain what broke in plain language.
        </p>
        <div className="mt-5 max-w-2xl space-y-3 text-lg leading-8 text-zinc-600">
          <p>I have a passion for the needs I hear.</p>
          <p>
            I&apos;m fluent in AI for business today,
            <br />
            and I stay with the work until it finds its way.
          </p>
          <p>
            Send a message and I will get back to you,
            <br />
            so we can shape the work and see it through.
          </p>
        </div>
        <GetInTouch className={primaryButton} label="Get in touch" />
      </div>
    </section>
  );
}
