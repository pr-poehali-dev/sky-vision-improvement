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
          src="https://cdn.poehali.dev/projects/55744e2d-4556-4263-8988-12208e6de565/bucket/111770eb-e681-4892-b11f-e6abaebab7ae.png"
          alt="A-Frame домики Эко-Хаус"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center px-6 absolute bottom-4 left-0 right-0">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4 leading-tight text-green-700">
          ЭКО-ХАУС
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase opacity-90 mb-2 text-green-700">
          Отдых&nbsp;&nbsp;·&nbsp;&nbsp;Вышка&nbsp;&nbsp;·&nbsp;&nbsp;Жемчуг
        </p>
        <a
          href="https://eco-house.ru"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block border border-green-700 text-green-700 px-8 py-3 uppercase text-sm tracking-wide hover:bg-green-700 hover:text-white transition-all duration-300"
        >
          Забронировать
        </a>
      </div>
    </div>
  );
}