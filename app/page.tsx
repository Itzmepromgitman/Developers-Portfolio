// app/page.tsx
"use client";

import { motion } from "framer-motion";
import GlowCard from "@/components/GlowCard";

const projects = [
  {
    title: "FFmpeg Telegram Bot",
    description:
      "Async queue, progress UI, and robust error handling for high-volume video encoding workflows.",
    tags: ["Python", "FFmpeg", "AsyncIO"]
  },
  {
    title: "AniList GraphQL Proxy",
    description:
      "Edge-friendly proxy with clean API for client apps and dashboards on Vercel.",
    tags: ["Next.js", "GraphQL", "Vercel"]
  },
  {
    title: "Stocks Analyzer",
    description:
      "Lightweight technicals dashboard with cache-first data and smart intervals.",
    tags: ["TypeScript", "Next.js", "Charts"]
  }
];

export default function Page() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 1 },
            show: {
              transition: { staggerChildren: 0.08 }
            }
          }}
          className="text-center"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}
            className="inline-block text-sm tracking-widest text-indigo-300/80"
          >
            DEV PORTFOLIO
          </motion.span>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
            className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Building performant tools with
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-fuchsia-400 to-violet-400">
              {" "}clean code & motion
            </span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
            className="mt-4 text-slate-300/80 max-w-2xl mx-auto"
          >
            Next.js, Tailwind, and Motion animations for delightful developer experiences and strong UX foundations.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-md bg-indigo-500/90 hover:bg-indigo-400 text-white font-medium transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-200 ring-1 ring-white/10 rounded font-medium transition"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 max-w-6xl mx-auto px-6 pb-16 md:pb-24">
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
          <p className="text-slate-300/80">A selection of recent work and experiments.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <GlowCard key={p.title} delay={i * 0.1}>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-300/80">{p.description}</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {p.tags.map(t => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs bg-white/5 ring-1 ring-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-16 md:pb-24">
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
          <p className="text-slate-300/80">Web stacks, scripting, and infra automation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <GlowCard>
            <h3 className="font-semibold">Frontend</h3>
            <p className="mt-2 text-slate-300/80">Next.js, React, Tailwind, Motion/Framer Motion</p>
          </GlowCard>
          <GlowCard delay={0.05}>
            <h3 className="font-semibold">Backend</h3>
            <p className="mt-2 text-slate-300/80">Node.js, APIs, GraphQL, Caching</p>
          </GlowCard>
          <GlowCard delay={0.1}>
            <h3 className="font-semibold">Tools</h3>
            <p className="mt-2 text-slate-300/80">Git, Docker, CI, Vercel</p>
          </GlowCard>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 max-w-3xl mx-auto px-6 pb-24">
        <GlowCard className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Let’s collaborate</h2>
          <p className="mt-2 text-slate-300/80">
            Open for freelance, consulting, and interesting product collabs.
          </p>
          <div className="mt-5">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center px-5 py-2.5 rounded-md bg-sky-500/90 hover:bg-sky-400 text-white font-medium transition"
            >
              hello@example.com
            </a>
          </div>
        </GlowCard>
      </section>
    </main>
  );
}
