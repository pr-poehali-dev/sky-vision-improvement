export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-neutral-900">
          Термальные источники «Вышка»
        </h2>
        <p className="text-neutral-500 uppercase tracking-widest text-sm mb-12">
          Жемчуг · Тункинский район
        </p>

        <div className="mb-10">
          <h3 className="text-lg font-semibold text-neutral-800 uppercase tracking-wide mb-4">
            Местоположение и история
          </h3>
          <p className="text-neutral-600 leading-relaxed mb-4">
            В 5 километрах от села Жемчуг, на берегу реки Иркут, расположена бальнеологическая
            курортная местность «Вышка». Источники были открыты в 1950-х и 1980-х годах во время
            поисков нефти в Тункинской долине. Нефть так и не нашли, зато обнаружили два термальных
            минеральных источника — они получили название «Жемчуг», а сама местность стала называться «Вышка».
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-neutral-50 rounded-lg p-5 border border-neutral-100">
              <p className="font-semibold text-neutral-800 mb-1">Метановые воды</p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Температура 36–38 °C. Слабоминерализованные, гидрокарбонатные натриевые.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-5 border border-neutral-100">
              <p className="font-semibold text-neutral-800 mb-1">Углекислые воды</p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Температура до 54,4 °C. По составу близки к Джавскому типу и Ессентукским водам №4.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-semibold text-neutral-800 uppercase tracking-wide mb-4">
            Инфраструктура
          </h3>
          <ul className="space-y-2 text-neutral-600">
            <li className="flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0"></span>
              Муниципальный лечебно-оздоровительный комплекс
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0"></span>
              Ванный корпус и два бассейна с минеральной водой
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0"></span>
              Площадка автокемпинга, магазины, кафе и закусочные
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0"></span>
              Источники работают круглогодично
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-neutral-800 uppercase tracking-wide mb-4">
            Лечебные свойства
          </h3>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Воды источников применяются для профилактики и лечения:
          </p>
          <ul className="space-y-2 text-neutral-600 mb-6">
            <li className="flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0"></span>
              Заболеваний опорно-двигательного аппарата
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0"></span>
              Болезней женской и мужской половой сферы
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0"></span>
              Заболеваний нервной системы
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0"></span>
              Кожных болезней
            </li>
          </ul>
          <p className="text-neutral-400 text-sm italic">
            Рекомендуется проконсультироваться с врачом перед посещением.
          </p>
        </div>
      </div>
    </section>
  );
}
