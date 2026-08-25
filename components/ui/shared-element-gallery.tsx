"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteIdentity } from "@/configurations";

interface ImageData {
  id: string;
  src: string;
  alt?: string;
}

interface GalleryContextType {
  selectedImage: ImageData | null;
  setSelectedImage: (image: ImageData | null) => void;
}

const GalleryContext = React.createContext<GalleryContextType | null>(null);

const spring = {
  type: "spring" as const,
  stiffness: 350,
  damping: 35,
  mass: 1,
};

export function Gallery({ children }: { children: React.ReactNode }) {
  const [selectedImage, setSelectedImage] = React.useState<ImageData | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  React.useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = selectedImage ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  return (
    <GalleryContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
      <GalleryModal />
    </GalleryContext.Provider>
  );
}

export function GalleryGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("columns-1 gap-3 sm:columns-2 lg:columns-4", className)}>{children}</div>;
}

export function GalleryImage({
  src,
  alt,
  id,
  className,
}: {
  src: string;
  alt?: string;
  id: string;
  className?: string;
}) {
  const context = React.useContext(GalleryContext);
  if (!context) throw new Error("GalleryImage must be used within a Gallery");

  return (
    <motion.div
      whileHover="hover"
      whileTap="tap"
      className={cn(
        "relative mb-3 break-inside-avoid cursor-zoom-in overflow-hidden rounded-[8px] bg-[linear-gradient(135deg,#f5edec_0%,#fffaf7_48%,#e7d5d1_100%)]",
        "shadow-[0_12px_30px_rgba(62,57,53,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_48px_rgba(62,57,53,0.14)]",
        className
      )}
      onClick={() => context.setSelectedImage({ id, src, alt })}
    >
      <motion.img
        layoutId={`image-${id}`}
        src={src}
              alt={alt || `${siteIdentity.brandName} gallery image`}
        className="h-auto w-full rounded-[8px] object-cover"
        variants={{
          hover: { scale: 0.985 },
          tap: { scale: 0.965 },
        }}
        transition={spring}
      />

      <motion.div
        variants={{
          hover: { opacity: 1 },
          tap: { opacity: 1 },
        }}
        initial={{ opacity: 0 }}
        className="pointer-events-none absolute inset-0 rounded-[8px] bg-[rgba(62,57,53,0.12)]"
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}

function GalleryModal() {
  const context = React.useContext(GalleryContext);
  if (!context) return null;

  const { selectedImage, setSelectedImage } = context;

  return (
    <AnimatePresence>
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="absolute inset-0 bg-[rgba(62,57,53,0.72)] backdrop-blur-2xl"
            onClick={() => setSelectedImage(null)}
          />

          <motion.div
            className="relative z-10 flex h-full w-full cursor-zoom-out items-center justify-center p-5"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.75}
            onDragEnd={(_, info) => {
              if (Math.abs(info.offset.y) > 100 || Math.abs(info.velocity.y) > 300) {
                setSelectedImage(null);
              }
            }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              layoutId={`image-${selectedImage.id}`}
              src={selectedImage.src}
              alt={selectedImage.alt || `Selected ${siteIdentity.brandName} gallery image`}
              className="h-auto max-h-[88vh] w-auto max-w-[94vw] rounded-[8px] bg-[linear-gradient(135deg,#f5edec_0%,#fffaf7_48%,#e7d5d1_100%)] object-contain shadow-2xl"
              draggable={false}
              transition={spring}
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ delay: 0.08, duration: 0.2 }}
            className="absolute right-5 top-5 z-50 rounded-full border border-white/40 bg-white/20 p-2.5 text-white backdrop-blur-md transition-colors hover:bg-white/30"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
