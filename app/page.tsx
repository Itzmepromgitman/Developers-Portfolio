// app/page.tsx
"use client";

import { motion } from "framer-motion";
import GlowCard from "../components/GlowCard";
import config from "./app.config";

export default function Page() {
  const { profile, repos, contact, languages, channels } = config;

  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: { opacity: 1 }, show: { transition: { staggerChildren: 0.08 } } }}
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
            {profile.name} — {profile.role}
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
            className="mt-4 text-slate-300/80 max-w-2xl mx-auto"
          >
            {profile.intro}
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
              href="#channels"
              className="px-5 py-2.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-200 ring-1 ring-white/10 font-medium transition"
            >
              Channels
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 max-w-6xl mx-auto px-6 pb-16 md:pb-24">
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
          <p className="text-slate-300/80">Pinned repositories and highlights.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {repos.map((p, i) => (
            <GlowCard key={p.name} delay={i * 0.1}>
              <h3 className="text-lg font-semibold">
                <a className="hover:underline" href={p.url} target="_blank" rel="noreferrer">
                  {p.name}
                </a>
              </h3>
              <p className="mt-2 text-slate-300/80">{p.description}</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {p.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-xs bg-white/5 ring-1 ring-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-16 md:pb-24">
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Top Languages</h2>
          <p className="text-slate-300/80">Overall language share from work and projects.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {languages.map((l, i) => (
            <GlowCard key={l.name} delay={i * 0.08} className="text-center">
              <div className="text-3xl font-extrabold">{l.percent}%</div>
              <div className="mt-1 text-slate-300/80">{l.name}</div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Channels */}
      <section id="channels" className="relative z-10 max-w-6xl mx-auto px-6 pb-16 md:pb-24">
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Channels</h2>
          <p className="text-slate-300/80">News, updates, and support hubs.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {channels.map((c, i) => (
            <GlowCard key={c.name} delay={i * 0.08}>
              <h3 className="text-lg font-semibold">{c.name}</h3>
              <p className="mt-2 text-slate-300/80">{c.info}</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {c.links.map((lnk) => (
                  <a
                    key={lnk.label}
                    href={lnk.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded-md text-xs bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
                  >
                    {lnk.label}
                  </a>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 max-w-3xl mx-auto px-6 pb-24">
        <GlowCard className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
          <p className="mt-2 text-slate-300/80">
            Email or Telegram for collabs and inquiries.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center px-5 py-2.5 rounded-md bg-sky-500/90 hover:bg-sky-400 text-white font-medium transition"
              >
                {contact.email}
              </a>
            )}
            {contact.telegramId && (
              <a
                href={`https://${contact.telegramId.startsWith("t.me/") ? contact.telegramId : `t.me/${contact.telegramId}`}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-200 ring-1 ring-white/10 transition"
              >
                Telegram
              </a>
            )}
          </div>
        </GlowCard>
      </section>
    </main>
  );
}
