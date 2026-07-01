import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/e9c2229d-b15f-4c76-ad6f-2a54f580034d/files/1c15ccf4-b028-4ace-9c12-112c89e5be0a.jpg';

const services = [
  {
    icon: 'Scale',
    code: '01',
    title: 'Фундаменты для грузовых весов',
    desc: 'Монолитные основания под автомобильные и вагонные весы. Точная геометрия, армирование под динамические нагрузки, закладные под весовое оборудование.',
    points: ['Плитные и свайные основания', 'Подготовка приямков', 'Закладные детали и анкеры'],
  },
  {
    icon: 'Cog',
    code: '02',
    title: 'Фундаменты под оборудование',
    desc: 'Виброизолированные фундаменты для станков, прессов, насосных групп и тяжёлых агрегатов. Расчёт под вибрационные и ударные нагрузки.',
    points: ['Виброгасящие основания', 'Анкерные группы по чертежам', 'Высокоточная разметка осей'],
  },
  {
    icon: 'Factory',
    code: '03',
    title: 'Фундаменты для цехов',
    desc: 'Комплексные монолитные работы для производственных цехов: ленточные, столбчатые и плитные фундаменты, ростверки под колонны каркаса.',
    points: ['Ленточные и столбчатые', 'Ростверки под колонны', 'Полы промышленные монолитные'],
  },
  {
    icon: 'Warehouse',
    code: '04',
    title: 'Фундаменты для складов',
    desc: 'Основания под складские комплексы и логистические терминалы. Плиты под стеллажное хранение, зоны погрузки, рампы и пандусы.',
    points: ['Плиты под стеллажи', 'Рампы и пандусы', 'Усиленные зоны погрузки'],
  },
  {
    icon: 'Layers',
    code: '05',
    title: 'Армирование и опалубка',
    desc: 'Вязка арматурных каркасов любой сложности, монтаж щитовой и мелкощитовой опалубки, контроль защитного слоя и проектной геометрии.',
    points: ['Вязка каркасов', 'Щитовая опалубка', 'Контроль геометрии'],
  },
  {
    icon: 'Hammer',
    code: '06',
    title: 'Бетонирование и уход',
    desc: 'Укладка бетонных смесей проектного класса, вибрирование, уход за бетоном в процессе набора прочности, распалубка в срок.',
    points: ['Укладка и вибрирование', 'Уход за бетоном', 'Своевременная распалубка'],
  },
];

const stats = [
  { value: 'B2B', label: 'работа с промышленностью' },
  { value: '24/7', label: 'работа по графику объекта' },
  { value: '100%', label: 'допуск на режимные объекты' },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-3">
            <div className="w-9 h-9 hazard-stripes rounded-sm" />
            <span className="font-display font-bold text-xl tracking-wide">
              МОНОЛИТ<span className="text-primary">·</span>ПРОМ
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-display uppercase text-sm tracking-widest">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="hover:text-primary transition-colors">О нас</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:inline-flex font-display uppercase tracking-wider rounded-sm" asChild>
            <a href="#contacts">Запрос сметы</a>
          </Button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden border-t border-border bg-background flex flex-col p-4 gap-4 font-display uppercase tracking-widest text-sm">
            <a href="#services" onClick={() => setMenuOpen(false)}>Услуги</a>
            <a href="#advantages" onClick={() => setMenuOpen(false)}>О нас</a>
            <a href="#contacts" onClick={() => setMenuOpen(false)}>Контакты</a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Монолитные работы" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 grid-texture opacity-30" />
        </div>

        <div className="container relative z-10 py-24">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 border border-primary/50 px-4 py-1.5 rounded-sm mb-8 font-display uppercase tracking-[0.2em] text-xs text-primary">
              <Icon name="ShieldCheck" size={16} />
              Допуск на режимные объекты
            </div>
            <h1 className="font-display font-bold uppercase leading-[0.95] text-5xl sm:text-6xl lg:text-7xl mb-6">
              Монолитные <br />
              <span className="text-primary">фундаменты</span> <br />
              для промышленности
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-10">
              Выполняем монолитные работы на промышленных объектах: фундаменты
              под грузовые весы, оборудование, цеха и склады. Точная геометрия,
              армирование под нагрузку, работа в срок.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="font-display uppercase tracking-wider rounded-sm h-12 px-8" asChild>
                <a href="#services">
                  <Icon name="ArrowDown" size={18} className="mr-2" />
                  Наши услуги
                </a>
              </Button>
              <Button size="lg" variant="outline" className="font-display uppercase tracking-wider rounded-sm h-12 px-8 border-foreground/30" asChild>
                <a href="#contacts">Связаться</a>
              </Button>
            </div>
          </div>
        </div>

        {/* stats strip */}
        <div className="absolute bottom-0 inset-x-0 z-10 border-t border-border bg-background/70 backdrop-blur-sm">
          <div className="container grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {stats.map((s) => (
              <div key={s.label} className="py-5 flex items-baseline gap-3">
                <span className="font-display font-bold text-2xl text-primary">{s.value}</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 relative">
        <div className="container">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <span className="font-display uppercase tracking-[0.3em] text-primary text-sm">— Спецификация работ</span>
              <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl mt-3">
                Виды монолитных <br /> работ и услуг
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Полный цикл монолитных работ на промышленных объектах — от геодезии
              и опалубки до бетонирования и распалубки под ключ.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {services.map((s) => (
              <article
                key={s.code}
                className="group bg-card p-8 hover:bg-secondary transition-colors duration-300 animate-fade-in"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border border-primary/40 rounded-sm text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon name={s.icon} size={24} />
                  </div>
                  <span className="font-display text-4xl font-bold text-border group-hover:text-primary/40 transition-colors">
                    {s.code}
                  </span>
                </div>
                <h3 className="font-display font-semibold uppercase text-xl mb-3 tracking-wide">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm">
                      <Icon name="ChevronRight" size={16} className="text-primary shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-24 bg-secondary/40 border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 grid-texture opacity-20" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-display uppercase tracking-[0.3em] text-primary text-sm">— Почему мы</span>
              <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl mt-3 mb-6">
                Работаем там, <br /> где доверяют <span className="text-primary">не всем</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Все работники имеют допуск на режимные объекты. Мы соблюдаем
                требования промышленной безопасности, работаем по проектной
                документации и сдаём объекты с полным пакетом исполнительной
                документации.
              </p>
              <div className="hazard-stripes h-3 w-40 rounded-sm" />
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
              {[
                { icon: 'ShieldCheck', title: 'Допуски на режимные объекты', text: 'Персонал оформлен для работы на охраняемых и режимных территориях.' },
                { icon: 'Ruler', title: 'Точная геометрия', text: 'Геодезический контроль осей, отметок и защитного слоя бетона.' },
                { icon: 'HardHat', title: 'Промбезопасность', text: 'Соблюдение норм ОТ и ПБ на всех этапах производства работ.' },
              ].map((a) => (
                <div key={a.title} className="bg-card p-7">
                  <Icon name={a.icon} size={26} className="text-primary mb-4" />
                  <h4 className="font-display font-semibold uppercase text-base mb-2 tracking-wide">{a.title}</h4>
                  <p className="text-sm text-muted-foreground">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 relative">
        <div className="container">
          <div className="border border-border rounded-sm overflow-hidden grid lg:grid-cols-2">
            <div className="p-10 lg:p-14 bg-card">
              <span className="font-display uppercase tracking-[0.3em] text-primary text-sm">— Контакты</span>
              <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl mt-3 mb-8">
                Обсудим ваш объект
              </h2>
              <div className="space-y-6">
                <a href="tel:+79213236151" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center border border-primary/40 rounded-sm text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon name="Phone" size={22} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Телефон · звонок</p>
                    <p className="font-display text-lg">8 (921) 323-61-51</p>
                  </div>
                </a>
                <a href="https://wa.me/79219589230" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center border border-primary/40 rounded-sm text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon name="MessageCircle" size={22} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp · Telegram · Max</p>
                    <p className="font-display text-lg">8 (921) 958-92-30</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-primary/40 rounded-sm text-primary">
                    <Icon name="MapPin" size={22} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">География</p>
                    <p className="font-display text-lg">Работаем по всему региону</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 lg:p-14 bg-secondary/40 relative">
              <div className="absolute inset-0 grid-texture opacity-20" />
              <div className="relative">
                <h3 className="font-display font-semibold uppercase text-xl mb-6 tracking-wide">
                  Оставить заявку
                </h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    className="w-full bg-background border border-border rounded-sm h-12 px-4 outline-none focus:border-primary transition-colors"
                    placeholder="Ваше имя"
                  />
                  <input
                    className="w-full bg-background border border-border rounded-sm h-12 px-4 outline-none focus:border-primary transition-colors"
                    placeholder="Телефон"
                  />
                  <textarea
                    rows={4}
                    className="w-full bg-background border border-border rounded-sm p-4 outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Опишите объект и задачу"
                  />
                  <Button className="w-full h-12 font-display uppercase tracking-wider rounded-sm">
                    Отправить заявку
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 hazard-stripes rounded-sm" />
            <span className="font-display font-bold tracking-wide">
              МОНОЛИТ<span className="text-primary">·</span>ПРОМ
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Монолитные работы на промышленных объектах
          </p>
        </div>
      </footer>
    </div>
  );
}