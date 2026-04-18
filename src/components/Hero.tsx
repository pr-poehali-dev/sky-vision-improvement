import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface HeroProps {
  onBooking: () => void;
}

export default function Hero({ onBooking }: HeroProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/55744e2d-4556-4263-8988-12208e6de565/files/9c045950-04f2-4939-92b8-22ae4b3b0e91.jpg"
          alt="A-Frame домик в горах"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm uppercase tracking-widest mb-4 opacity-80">Гостевые дома</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          ЖИВИ<br />В ГОРАХ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Уникальные A-Frame домики в окружении природы. Отдых, который меняет взгляд на жизнь.
        </p>
        <button
          onClick={onBooking}
          className="mt-8 border border-white text-white px-8 py-3 uppercase text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
        >
          Забронировать
        </button>
      </div>
    </div>
  );
}
