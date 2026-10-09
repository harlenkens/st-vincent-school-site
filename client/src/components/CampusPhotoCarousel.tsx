import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export type CampusSlide = {
  src: string;
  alt: string;
  label: string;
  title: string;
};

type CampusPhotoCarouselProps = {
  slides: CampusSlide[];
};

const SWIPE_DISTANCE = 56;
const SWIPE_VELOCITY = 450;

export default function CampusPhotoCarousel({ slides }: CampusPhotoCarouselProps) {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    slides.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
      img.decoding = "async";
    });
  }, [slides]);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return;

    const measure = () => setWidth(node.offsetWidth);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const goTo = (next: number) => {
    setIndex(Math.min(slides.length - 1, Math.max(0, next)));
  };

  const slide = slides[index];

  return (
    <div
      className="campus-photo-wrap campus-photo-wrap--carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Campus photo gallery"
    >
      <div className="campus-photo-stack" ref={viewportRef}>
        <motion.div
          className="campus-carousel-track"
          drag={width > 0 ? "x" : false}
          dragElastic={0.16}
          dragMomentum={false}
          dragConstraints={
            width > 0
              ? {
                  left: -(slides.length - 1) * width,
                  right: 0,
                }
              : undefined
          }
          animate={{ x: width > 0 ? -index * width : 0 }}
          transition={{ type: "spring", stiffness: 420, damping: 38, mass: 0.65 }}
          onDragEnd={(_, info) => {
            const projected = -index * width + info.offset.x;
            let next = index;

            if (info.offset.x < -SWIPE_DISTANCE || info.velocity.x < -SWIPE_VELOCITY) {
              next = index + 1;
            } else if (info.offset.x > SWIPE_DISTANCE || info.velocity.x > SWIPE_VELOCITY) {
              next = index - 1;
            } else if (width > 0) {
              next = Math.round(-projected / width);
            }

            goTo(Math.min(slides.length - 1, Math.max(0, next)));
          }}
        >
          {slides.map((item) => (
            <img
              key={item.src}
              src={item.src}
              alt={item.alt}
              draggable={false}
              loading="eager"
              decoding="async"
              style={width > 0 ? { width, minWidth: width } : undefined}
            />
          ))}
        </motion.div>

        <span className="campus-photo-hint">Swipe left or right</span>
        <span className="campus-photo-dots" aria-hidden="true">
          {slides.map((item, i) => (
            <i key={item.src} className={i === index ? "is-active" : undefined} />
          ))}
        </span>
      </div>

      <div className="campus-tag">
        <span>{slide.label}</span>
        <strong>{slide.title}</strong>
      </div>
      <div className="campus-doodle" aria-hidden="true">
        ↗
      </div>

      <div className="campus-carousel-controls">
        <button
          type="button"
          className="campus-carousel-btn"
          aria-label="Previous campus photo"
          onClick={() => goTo(index - 1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="campus-carousel-btn"
          aria-label="Next campus photo"
          onClick={() => goTo(index + 1)}
        >
          ›
        </button>
      </div>
    </div>
  );
}
