import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * LoadingSequence — a brief branded intro shown on first paint.
 * The "617" mark animates in, the wordmark letter-spaces open, a progress
 * bar fills, then the whole thing fades to reveal the site.
 *
 * Skipped entirely when the user prefers reduced motion (instant content).
 */
export function LoadingSequence() {
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setDone(true);
      return;
    }
    setMounted(true);
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[var(--color-void)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <span className="font-display text-5xl font-semibold tracking-tight text-[var(--color-paper)]">
              617
            </span>
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.05em" }}
              animate={{ opacity: 1, letterSpacing: "0.35em" }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-3 text-[0.7rem] font-medium uppercase text-[var(--color-brass)]"
            >
              East Trust
            </motion.span>
          </motion.div>

          <motion.div
            className="mt-8 h-[2px] w-40 overflow-hidden rounded-full bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="h-full bg-[var(--color-brass)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.4, duration: 0.9, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default LoadingSequence;
