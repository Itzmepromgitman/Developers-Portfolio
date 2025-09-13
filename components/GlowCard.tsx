// components/GlowCard.tsx
"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export default function GlowCard({ children, className = "", delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`glow-border bg-[#0e1420]/70 backdrop-blur-md p-6 md:p-7 ${className}`}
    >
      {children}
    </motion.div>
  );
}
