// app/app.config.ts
export type Repo = {
  name: string;
  description: string;
  url: string;
  tech: string[];
};

export type ChannelLink = { label: string; url: string };
export type Channel = { name: string; info: string; links: ChannelLink[] };

export type LanguageStat = { name: string; percent: number };

export type SiteConfig = {
  profile: {
    name: string;
    role: string;
    intro: string;
    location?: string;
    avatarUrl?: string;
  };
  socials: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
  contact: {
    email?: string;          // public email (or use a form endpoint)
    telegramId?: string;     // public Telegram handle or link
  };
  links: {
    resumeUrl?: string;
    repoOrgOrUser?: string;  // e.g., GitHub username/org
    portfolioRepo?: string;  // this site repo link
  };
  languages: LanguageStat[]; // “total earned languages” breakdown
  repos: Repo[];             // pinned/highlighted repositories
  channels: Channel[];       // separate channels section
};

// Optional client-exposed env overrides (NEXT_PUBLIC_*)
const ENV = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_ID,
  website: process.env.NEXT_PUBLIC_WEBSITE_URL,
};

const config: SiteConfig = {
  profile: {
    name: "Dev Name",
    role: "Software Developer",
    intro:
      "Building performant tools in Next.js, Python, and FFmpeg with attention to UX and motion.",
    location: "India",
    avatarUrl: "/favicon.ico",
  },
  socials: {
    github: "https://github.com/yourname",
    twitter: "https://x.com/yourhandle",
    linkedin: "https://www.linkedin.com/in/yourprofile",
    website: ENV.website ?? "https://yourdomain.com",
  },
  contact: {
    email: ENV.email ?? "hello@example.com",
    telegramId: ENV.telegram ?? "t.me/your_telegram",
  },
  links: {
    resumeUrl: "https://yourdomain.com/resume.pdf",
    repoOrgOrUser: "yourname",
    portfolioRepo: "https://github.com/yourname/devfolio-dark",
  },
  languages: [
    { name: "TypeScript", percent: 45 },
    { name: "Python", percent: 30 },
    { name: "Shell", percent: 10 },
    { name: "Other", percent: 15 },
  ],
  repos: [
    {
      name: "ffmpeg-telegram-bot",
      description:
        "Async queue, progress UI, and robust error handling for high-volume video encoding.",
      url: "https://github.com/yourname/ffmpeg-telegram-bot",
      tech: ["Python", "FFmpeg", "AsyncIO"],
    },
    {
      name: "anilist-graphql-proxy",
      description:
        "Edge-friendly GraphQL proxy for AniList with caching and typed responses.",
      url: "https://github.com/yourname/anilist-graphql-proxy",
      tech: ["Next.js", "GraphQL", "Vercel"],
    },
    {
      name: "stocks-analyzer",
      description:
        "Lightweight technicals dashboard with cache-first data and smart intervals.",
      url: "https://github.com/yourname/stocks-analyzer",
      tech: ["TypeScript", "Next.js", "Charts"],
    },
  ],
  channels: [
    {
      name: "Dev Updates",
      info: "Announcements, release notes, and roadmaps.",
      links: [
        { label: "Telegram", url: "https://t.me/your_updates" },
        { label: "GitHub Discussions", url: "https://github.com/yourname/.github/discussions" },
      ],
    },
    {
      name: "Support",
      info: "Bugs, issues, and feature requests.",
      links: [
        { label: "Issue Tracker", url: "https://github.com/yourname/ffmpeg-telegram-bot/issues" },
        { label: "Email", url: "mailto:hello@example.com" },
      ],
    },
  ],
};

export default config;
