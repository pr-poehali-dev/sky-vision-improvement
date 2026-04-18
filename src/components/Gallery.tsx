import { useState } from "react";

const tabs = [
  {
    label: "Дом 1",
    images: [
      "https://cdn.poehali.dev/projects/55744e2d-4556-4263-8988-12208e6de565/bucket/111770eb-e681-4892-b11f-e6abaebab7ae.png",
      "https://cdn.poehali.dev/projects/55744e2d-4556-4263-8988-12208e6de565/bucket/8f0b8d75-902b-4e3d-ba80-6ac5c2de2fd5.png",
    ],
  },
  {
    label: "Дом 2",
    images: [
      "https://cdn.poehali.dev/projects/55744e2d-4556-4263-8988-12208e6de565/bucket/8f0b8d75-902b-4e3d-ba80-6ac5c2de2fd5.png",
      "https://cdn.poehali.dev/projects/55744e2d-4556-4263-8988-12208e6de565/bucket/111770eb-e681-4892-b11f-e6abaebab7ae.png",
    ],
  },
  {
    label: "Дом 3",
    images: [
      "https://cdn.poehali.dev/projects/55744e2d-4556-4263-8988-12208e6de565/bucket/111770eb-e681-4892-b11f-e6abaebab7ae.png",
      "https://cdn.poehali.dev/projects/55744e2d-4556-4263-8988-12208e6de565/bucket/8f0b8d75-902b-4e3d-ba80-6ac5c2de2fd5.png",
    ],
  },
];

export default function Gallery() {
  const [active, setActive] = useState(0);

  return (
    <section id="houses" className="bg-neutral-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-neutral-900">
          Наши дома
        </h2>

        <div className="flex gap-2 mb-8 border-b border-neutral-200">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-3 text-sm uppercase tracking-wide transition-all duration-300 border-b-2 -mb-px ${
                active === i
                  ? "border-neutral-900 text-neutral-900 font-semibold"
                  : "border-transparent text-neutral-400 hover:text-neutral-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tabs[active].images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${tabs[active].label} — фото ${i + 1}`}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
