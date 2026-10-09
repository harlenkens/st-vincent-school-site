import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";

export type CampusSlide = {
  src: string;
  alt: string;
  label: string;
  title: string;
};

type CampusPhotoCarouselProps = {
  slides: CampusSlide[];
};

const SWIPE_DISTANCE = 88;
const SWIPE_VELOCITY = 0.55;

function SwipeCard({
  slide,
  active,
  stackIndex,
  onSwiped,
}: {
  slide: CampusSlide;
  active: boolean;
  stackIndex: number;
  onSwiped: () => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-280, 280], [-22, 22]);
  const leaveOpacity = useTransform(x, [-280, -70, 0, 70, 280], [0.3, 1, 1, 1, 0.3]);
  const rightStamp = useTransform(x, [18, 95], [0, 1]);
  const leftStamp = useTransform(x, [-95, -18], [1, 0]);

  const leavingRef = useRef(false);
  const originRef = useRef({ x: 0, y: 0 });
  const lastRef = useRef({ x: 0, t: 0 });
  const unbindRef = useRef<(() => void) | null>(null);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    return () => {
      unbindRef.current?.();
      unbindRef.current = null;
    };
  }, []);

  const finishSwipe = (direction: 1 | -1) => {
    if (leavingRef.current) return;
    leavingRef.current = true;
    setLeaving(true);
    unbindRef.current?.();
    unbindRef.current = null;

    const flyX = direction * Math.max(window.innerWidth * 1.15, 640);
    let done = false;
    const complete = () => {
      if (done) return;
      done = true;
      onSwiped();
    };

    // Safety: never leave the deck stuck if the motion tween doesn't settle.
    const safety = window.setTimeout(complete, 320);

    animate(x, flyX, {
      duration: 0.24,
      ease: "easeOut",
      onComplete: () => {
        window.clearTimeout(safety);
        complete();
      },
    });
    animate(y, direction * 24, { duration: 0.24, ease: "easeOut" });
  };

  const settleBack = () => {
    void animate(x, 0, { type: "spring", stiffness: 520, damping: 34 });
    void animate(y, 0, { type: "spring", stiffness: 520, damping: 34 });
  };

  const beginDrag = (clientX: number, clientY: number) => {
    if (!active || leavingRef.current) return;

    unbindRef.current?.();
    originRef.current = { x: clientX, y: clientY };
    lastRef.current = { x: clientX, t: performance.now() };

    const onMove = (clientXMove: number, clientYMove: number) => {
      if (leavingRef.current) return;
      x.set(clientXMove - originRef.current.x);
      y.set((clientYMove - originRef.current.y) * 0.35);
      lastRef.current = { x: clientXMove, t: performance.now() };
    };

    const onUp = (clientXUp: number) => {
      unbindRef.current?.();
      unbindRef.current = null;
      if (leavingRef.current) return;

      const dx = clientXUp - originRef.current.x;
      const dt = Math.max(performance.now() - lastRef.current.t, 1);
      const velocity = (clientXUp - lastRef.current.x) / dt;
      const shouldSwipe =
        Math.abs(dx) > SWIPE_DISTANCE || Math.abs(velocity) > SWIPE_VELOCITY;

      if (shouldSwipe) {
        finishSwipe(dx + velocity * 40 >= 0 ? 1 : -1);
        return;
      }

      settleBack();
    };

    const handleMouseMove = (ev: MouseEvent) => onMove(ev.clientX, ev.clientY);
    const handleMouseUp = (ev: MouseEvent) => onUp(ev.clientX);
    const handleTouchMove = (ev: TouchEvent) => {
      if (!ev.touches[0]) return;
      onMove(ev.touches[0].clientX, ev.touches[0].clientY);
    };
    const handleTouchEnd = (ev: TouchEvent) => {
      const touch = ev.changedTouches[0];
      onUp(touch ? touch.clientX : lastRef.current.x);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);

    unbindRef.current = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
    };
  };

  const scale = 1 - stackIndex * 0.05;
  const offsetY = stackIndex * 14;

  if (!active) {
    return (
      <div
        className="campus-swipe-card campus-swipe-card--back"
        style={{
          transform: `translateY(${offsetY}px) scale(${scale})`,
          zIndex: 10 - stackIndex,
        }}
        aria-hidden="true"
      >
        <img src={slide.src} alt="" draggable={false} loading="eager" decoding="async" />
      </div>
    );
  }

  return (
    <motion.div
      className={`campus-swipe-card campus-swipe-card--front${leaving ? " is-leaving" : ""}`}
      style={{
        x,
        y,
        rotate,
        opacity: leaveOpacity,
        zIndex: 20,
      }}
      onMouseDown={(event) => {
        event.preventDefault();
        beginDrag(event.clientX, event.clientY);
      }}
      onTouchStart={(event) => {
        const touch = event.touches[0];
        if (!touch) return;
        beginDrag(touch.clientX, touch.clientY);
      }}
    >
      <img
        src={slide.src}
        alt={slide.alt}
        draggable={false}
        loading="eager"
        decoding="async"
      />
      <motion.span
        className="campus-swipe-stamp campus-swipe-stamp--right"
        style={{ opacity: rightStamp }}
        aria-hidden="true"
      >
        Next
      </motion.span>
      <motion.span
        className="campus-swipe-stamp campus-swipe-stamp--left"
        style={{ opacity: leftStamp }}
        aria-hidden="true"
      >
        Next
      </motion.span>
    </motion.div>
  );
}

export default function CampusPhotoCarousel({ slides }: CampusPhotoCarouselProps) {
  const [index, setIndex] = useState(0);
  const [frontKey, setFrontKey] = useState(0);

  useEffect(() => {
    slides.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
      img.decoding = "async";
    });
  }, [slides]);

  if (!slides.length) return null;

  const front = slides[index % slides.length];
  const stack = [0, 1, 2].map((offset) => {
    const slide = slides[(index + offset) % slides.length];
    return {
      slide,
      offset,
      key: `${slide.src}-${index + offset}-${offset === 0 ? frontKey : "back"}`,
    };
  });

  const advance = () => {
    setIndex((current) => (current + 1) % slides.length);
    setFrontKey((key) => key + 1);
  };

  return (
    <div
      className="campus-photo-wrap campus-photo-wrap--carousel"
      role="region"
      aria-roledescription="swipe deck"
      aria-label="Campus photo stack. Swipe left or right for the next photo."
    >
      <div className="campus-photo-stack campus-photo-deck">
        {stack
          .slice()
          .reverse()
          .map(({ slide, offset, key }) => (
            <SwipeCard
              key={key}
              slide={slide}
              active={offset === 0}
              stackIndex={offset}
              onSwiped={advance}
            />
          ))}

        <span className="campus-photo-hint">Swipe left or right</span>
        <span className="campus-photo-dots" aria-hidden="true">
          {slides.map((item, i) => (
            <i
              key={item.src}
              className={i === index % slides.length ? "is-active" : undefined}
            />
          ))}
        </span>
      </div>

      <div className="campus-tag">
        <span>{front.label}</span>
        <strong>{front.title}</strong>
      </div>
      <div className="campus-doodle" aria-hidden="true">
        ↗
      </div>

      <div className="campus-carousel-controls">
        <button
          type="button"
          className="campus-carousel-btn"
          aria-label="Show next campus photo"
          onClick={advance}
        >
          ‹
        </button>
        <button
          type="button"
          className="campus-carousel-btn"
          aria-label="Show next campus photo"
          onClick={advance}
        >
          ›
        </button>
      </div>
    </div>
  );
}
