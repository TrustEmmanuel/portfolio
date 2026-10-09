import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js would otherwise write AGENTS.md and CLAUDE.md on startup.
  agentRules: false,
  // GitHub Pages serves the exported files. It does not run a Node server.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
