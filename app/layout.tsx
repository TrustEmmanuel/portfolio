import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Outfit, Syne } from "next/font/google";
import Link from "next/link";
import { profile } from "@/lib/profile";
import "./globals.css";

// Outfit is the body font. Syne is used for headlines.
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const title = `${profile.name} — ${profile.headline}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description: profile.bio,
  openGraph: {
    title,
    description: profile.bio,
    siteName: profile.name,
    type: "website",
    url: profile.siteUrl,
  },
};

// This layout wraps every page. {children} is whichever page is open.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#f3f1ec] font-sans text-zinc-950">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <header className="sticky top-0 z-50 bg-[#f3f1ec]/90 backdrop-blur-md">
          <nav
            aria-label="Primary"
            className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-4 sm:px-6"
          >
            <Link href="/" className="font-medium tracking-tight">
              {profile.name}
            </Link>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-600">
              {profile.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-zinc-950"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        <main id="content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <footer className="mx-auto w-full max-w-5xl px-5 pb-16 sm:px-6">
          <div className="flex flex-col gap-4 border-t border-zinc-300/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-600">{profile.name}</p>
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-600">
                {profile.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-zinc-950"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {profile.socials.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-700 transition-colors hover:text-zinc-950"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
