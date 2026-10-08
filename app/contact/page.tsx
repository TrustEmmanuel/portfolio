import type { Metadata } from "next";
import { GetInTouch } from "@/components/MessageBox";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send a message and I will get back to you.",
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
      <p className="mt-6 max-w-md text-lg leading-8 text-zinc-600">
        Send a message and I will get back to you.
      </p>
      <GetInTouch className={primaryButton} label="Get in touch" />
    </section>
  );
}
