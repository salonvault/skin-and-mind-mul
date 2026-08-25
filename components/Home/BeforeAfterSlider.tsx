"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";

type BeforeAfterSliderProps = {
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
};

export default function BeforeAfterSlider({
  title,
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <article className="overflow-hidden rounded-[8px] bg-[var(--color-primary-3)] shadow-[var(--shadow-card)]">
      <div className="relative aspect-[4/3] select-none overflow-hidden has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-inset has-[:focus-visible]:ring-[var(--color-primary-1)]">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          sizes="(max-width: 640px) 90vw, 280px"
          className="object-cover"
        />

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            sizes="(max-width: 640px) 90vw, 280px"
            className="object-cover"
          />
        </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(24,24,27,0.12),transparent_28%,transparent_62%,rgba(24,24,27,0.28)_100%)]" />

        <span className="pointer-events-none absolute left-2 top-2 rounded-full bg-zinc-950/72 px-2 py-1 text-[8px] font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          Before
        </span>
        <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-white/84 px-2 py-1 text-[8px] font-extrabold uppercase tracking-[0.12em] text-[var(--color-foreground)] backdrop-blur-sm">
          After
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_8px_rgba(24,24,27,0.35)]"
          style={{ left: `${position}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[var(--color-foreground)] text-white shadow-lg">
            <ChevronsLeftRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label={`Compare before and after images for ${title}`}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />

        <div className="pointer-events-none absolute bottom-3 left-3 right-3 z-30 flex justify-center">
      <p className="inline-flex min-h-7 items-center rounded-full border border-zinc-900/20 bg-white/90 px-3 text-center text-[10px] font-extrabold uppercase tracking-[0.06em] text-[var(--color-foreground)] backdrop-blur">
            {title}
          </p>
        </div>
      </div>
    </article>
  );
}
