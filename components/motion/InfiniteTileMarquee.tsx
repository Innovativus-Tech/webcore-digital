"use client";
import { motion, useReducedMotion } from "framer-motion";

interface InfiniteTileMarqueeProps {
  /** Items rendered 3× internally for a seamless loop */
  children: React.ReactNode[];
  /** Duration for one full cycle (seconds). Default 32 */
  duration?: number;
  /** Scroll direction. Default "left" */
  direction?: "left" | "right";
  /** Gap between tiles in px. Default 12 */
  gap?: number;
  /** Show edge fades. Default true */
  edgeFade?: boolean;
  /** Color that the edge fades blend into. Tailwind bg class. Default "from-white" */
  fadeColor?: string;
  className?: string;
}

/**
 * Reusable infinite horizontal scrolling tile row.
 * Wrap each tile in a <div> — this component renders them 3× for
 * a seamless -33.333% loop.  Respects prefers-reduced-motion.
 */
export function InfiniteTileMarquee({
  children,
  duration = 32,
  direction = "left",
  gap = 12,
  edgeFade = true,
  fadeColor = "from-white",
  className,
}: InfiniteTileMarqueeProps) {
  const prefersReduced = useReducedMotion();

  // Triple the tiles so we can loop by jumping exactly -33.333%
  const tripled = [...children, ...children, ...children];

  const xFrom = direction === "left" ? "0%" : "-33.333%";
  const xTo = direction === "left" ? "-33.333%" : "0%";

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {edgeFade && (
        <>
          <div
            className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r ${fadeColor} to-transparent`}
          />
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l ${fadeColor} to-transparent`}
          />
        </>
      )}

      <motion.div
        className="flex"
        style={{ gap }}
        animate={prefersReduced ? {} : { x: [xFrom, xTo] }}
        transition={
          prefersReduced
            ? {}
            : {
                duration,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }
        }
      >
        {tripled.map((child, i) => (
          <div key={i} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
