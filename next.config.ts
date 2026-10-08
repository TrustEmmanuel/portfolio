import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js would otherwise write AGENTS.md and CLAUDE.md on startup.
  agentRules: false,
};

export default nextConfig;
