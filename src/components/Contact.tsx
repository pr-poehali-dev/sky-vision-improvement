export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-100 py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-neutral-900">
        Контакты
      </h2>
      <div className="flex flex-col items-center gap-4">
        <a
          href="tel:+79503889103"
          className="text-2xl md:text-3xl font-light text-neutral-800 hover:text-neutral-500 transition-colors duration-300"
        >
          +7 950 388-91-03
        </a>
        <a
          href="tel:+79503995599"
          className="text-2xl md:text-3xl font-light text-neutral-800 hover:text-neutral-500 transition-colors duration-300"
        >
          +7 950 399-55-99
        </a>
      </div>
    </section>
  );
}
