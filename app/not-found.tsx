import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page does not exist.",
};

export default function NotFound() {
  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-6 md:py-24">
      <h1 className="font-display text-5xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-6 max-w-md text-lg leading-8 text-zinc-600">
        This page does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
      >
        Back to Home
      </Link>
    </section>
  );
}
