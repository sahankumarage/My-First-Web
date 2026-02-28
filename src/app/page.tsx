import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-linear-to-br from-orange-50 via-amber-100 to-yellow-50 dark:from-orange-950 dark:via-amber-900 dark:to-yellow-950 animate-gradient text-orange-950 dark:text-orange-50 selection:bg-amber-500/30 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 md:px-12 bg-white/40 dark:bg-black/40 backdrop-blur-md border-b border-orange-200 dark:border-orange-800 animate-fade-in-up">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-orange-800 dark:text-orange-400">Sweet Crumb Bakery</div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-orange-800 dark:text-orange-200">
            <a href="#pastries" className="hover:text-amber-600 transition-colors">Pastries & Bread</a>
            <a href="#about" className="hover:text-amber-600 transition-colors">Our Kitchen</a>
            <a href="#visit" className="hover:text-amber-600 transition-colors">Visit Us</a>
          </div>
          <a href="#order" className="px-5 py-2.5 rounded-full bg-orange-700 hover:bg-orange-800 text-white transition-colors text-sm font-semibold shadow-lg shadow-orange-700/20">
            Order Online
          </a>
        </div>
      </nav>

      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="relative px-6 md:px-12 py-12 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 z-10 animate-fade-in-up delay-100">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-black/40 border border-orange-300 dark:border-orange-700 text-orange-800 dark:text-orange-300 text-xs font-bold tracking-wide uppercase shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Fresh Out the Oven
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-orange-950 dark:text-orange-50">
              Baked with <br />
              <span className="text-amber-700 dark:text-amber-400">Love & Butter.</span>
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-orange-800/80 dark:text-orange-200/80 leading-relaxed font-medium">
              Artisanal breads, decadent pastries, and custom cakes made from scratch daily. Life is short, make it sweet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#pastries" className="px-8 py-4 text-center rounded-full bg-orange-800 dark:bg-amber-500 text-white dark:text-orange-950 font-bold hover:scale-105 transition-transform shadow-xl shadow-orange-800/20">
                View Menu
              </a>
              <a href="#about" className="px-8 py-4 text-center rounded-full border-2 border-orange-700/30 text-orange-800 dark:text-orange-300 font-bold hover:bg-white/50 dark:hover:bg-black/50 transition-colors backdrop-blur-xs">
                Our Story
              </a>
            </div>
          </div>
          <div className="flex-1 relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-orange-900/10 animate-fade-in-up delay-200">
            <Image
              src="https://loremflickr.com/1200/1500/bakery,croissant/all"
              alt="Freshly baked croissants"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
              unoptimized
            />
          </div>
        </section>

        {/* Featured Items */}
        <section id="pastries" className="mt-20 md:mt-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up delay-100">
            <h2 className="text-3xl md:text-5xl font-black text-orange-950 dark:text-orange-50 tracking-tight">Our Specialties</h2>
            <p className="text-orange-800 dark:text-orange-300 max-w-2xl mx-auto text-lg font-medium">Handcrafted daily using traditional techniques and premium ingredients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="group relative aspect-square rounded-3xl overflow-hidden shadow-xl border border-white/40 dark:border-black/40 animate-fade-in-up delay-200">
              <Image
                src="https://loremflickr.com/800/800/bread,sourdough/all"
                alt="Artisan Sourdough"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950/90 via-orange-950/30 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-amber-400 font-bold tracking-wider text-sm uppercase mb-2 block">Signature Loaf</span>
                <h3 className="text-3xl font-black text-white mb-2">Artisan Sourdough</h3>
                <p className="text-orange-100 font-medium">Naturally leavened with our 10-year-old starter for the perfect tang and crust.</p>
              </div>
            </div>

            <div className="group relative aspect-square rounded-3xl overflow-hidden shadow-xl border border-white/40 dark:border-black/40 animate-fade-in-up delay-300">
              <Image
                src="https://loremflickr.com/800/800/pastry,tart/all"
                alt="Seasonal Fruit Tarts"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950/90 via-orange-950/30 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-amber-400 font-bold tracking-wider text-sm uppercase mb-2 block">Sweet Treats</span>
                <h3 className="text-3xl font-black text-white mb-2">Seasonal Fruit Tarts</h3>
                <p className="text-orange-100 font-medium">Buttery shortcrust pastry filled with vanilla bean custard and fresh local fruit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section id="about" className="mt-24 md:mt-40 rounded-[3rem] bg-white/40 dark:bg-black/30 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-2xl shadow-orange-900/5 mx-6 md:mx-12 py-24 px-6 md:px-12 animate-fade-in-up">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-orange-950 dark:text-orange-50 tracking-tight">The Sweet Crumb Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Real Ingredients", desc: "We use only real butter, pure vanilla extract, and unbleached flour. No artificial preservatives." },
                { title: "Baked Fresh Daily", desc: "Our bakers arrive at 3 AM every day to ensure you get the absolute freshest pastries." },
                { title: "Community Crafted", desc: "We love our neighborhood and take pride in being the centerpiece of your morning routine." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/60 dark:bg-orange-950/40 shadow-sm border border-white/60 dark:border-orange-800/50 hover:border-amber-500/50 transition-colors backdrop-blur-sm">
                  <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center mb-6 text-amber-700 dark:text-amber-400 font-black text-xl shadow-inner">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-orange-950 dark:text-orange-100">{item.title}</h3>
                  <p className="text-orange-800 dark:text-orange-300/80 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-orange-950 text-orange-400 py-16 px-6 md:px-12 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-3xl font-black text-white mb-4 tracking-tighter">Sweet Crumb Bakery</h4>
            <p className="max-w-sm font-medium text-orange-200/60">Baking happiness into every bite, right here in the neighborhood.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Visit Us</h4>
            <address className="not-italic flex flex-col space-y-2 font-medium">
              <span>12 Baker Lane</span>
              <span>Sugarville, FL 33021</span>
              <span className="pt-2 text-orange-300">Shop Hours:</span>
              <span>Mon-Sun: 6am - 4pm</span>
            </address>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Connect</h4>
            <div className="flex flex-col space-y-2 font-medium">
              <a href="#" className="hover:text-amber-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Facebook</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Newsletter</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-orange-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <p>© {new Date().getFullYear()} Sweet Crumb Bakery. All rights reserved.</p>
          <div className="flex gap-4 text-orange-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
