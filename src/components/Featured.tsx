interface FeaturedProps {
  onBooking: () => void;
}

export default function Featured({ onBooking }: FeaturedProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/55744e2d-4556-4263-8988-12208e6de565/files/19fac157-46d3-4768-a0da-157b4b4c1c51.jpg"
          alt="Интерьер A-Frame домика"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему A-Frame</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Треугольная архитектура, панорамные окна и запах хвои с утра. Каждый домик — это отдельная история,
          вписанная в ландшафт так, будто он всегда здесь был.
        </p>
        <button
          onClick={onBooking}
          className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
        >
          Забронировать
        </button>
      </div>
    </div>
  );
}
