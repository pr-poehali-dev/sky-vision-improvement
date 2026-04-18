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
          src="https://cdn.poehali.dev/projects/55744e2d-4556-4263-8988-12208e6de565/files/2c4a25f4-6e90-4f75-a587-35a00921a4fe.jpg"
          alt="A-Frame домики на фоне Саян"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 leading-tight">
          ЭКО-ХАУС
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase opacity-90 mb-2">
          Отдых&nbsp;&nbsp;·&nbsp;&nbsp;Вышка&nbsp;&nbsp;·&nbsp;&nbsp;Жемчуг
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