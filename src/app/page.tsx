import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-linear-to-br from-green-50 via-emerald-100 to-teal-50 dark:from-green-950 dark:via-emerald-900 dark:to-teal-950 animate-gradient text-green-950 dark:text-green-50 selection:bg-emerald-500/30 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 md:px-12 bg-white/40 dark:bg-black/40 backdrop-blur-md border-b border-green-200 dark:border-green-800 animate-fade-in-up">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-green-800 dark:text-green-400">GreenAcres Farm</div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-green-800 dark:text-green-200">
            <a href="#produce" className="hover:text-emerald-600 transition-colors">Our Produce</a>
            <a href="#about" className="hover:text-emerald-600 transition-colors">Our Farm</a>
            <a href="#visit" className="hover:text-emerald-600 transition-colors">Visit Us</a>
          </div>
          <a href="#order" className="px-5 py-2.5 rounded-full bg-green-700 hover:bg-green-800 text-white transition-colors text-sm font-semibold shadow-lg shadow-green-700/20">
            Order Box
          </a>
        </div>
      </nav>

      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="relative px-6 md:px-12 py-12 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 z-10 animate-fade-in-up delay-100">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-black/40 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-300 text-xs font-bold tracking-wide uppercase shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Harvested This Morning
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-green-950 dark:text-green-50">
              Fresh from the <br />
              <span className="text-emerald-700 dark:text-emerald-400">Earth.</span>
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-green-800/80 dark:text-green-200/80 leading-relaxed font-medium">
              We grow organic, seasonal produce with love and sustainable practices. Bring nature's best from our fields straight to your family's table.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#produce" className="px-8 py-4 text-center rounded-full bg-green-800 dark:bg-emerald-500 text-white dark:text-green-950 font-bold hover:scale-105 transition-transform shadow-xl shadow-green-800/20">
                Weekly Box
              </a>
              <a href="#about" className="px-8 py-4 text-center rounded-full border-2 border-green-700/30 text-green-800 dark:text-green-300 font-bold hover:bg-white/50 dark:hover:bg-black/50 transition-colors backdrop-blur-xs">
                Learn More
              </a>
            </div>
          </div>
          <div className="flex-1 relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-green-900/10 animate-fade-in-up delay-200">
            <Image
              src="https://loremflickr.com/1200/1500/farm,vegetables/all"
              alt="Fresh organic vegetables on a farm"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
              unoptimized
            />
          </div>
        </section>

        {/* Featured Items */}
        <section id="produce" className="mt-20 md:mt-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up delay-100">
            <h2 className="text-3xl md:text-5xl font-black text-green-950 dark:text-green-50 tracking-tight">Seasonal Bounties</h2>
            <p className="text-green-800 dark:text-green-300 max-w-2xl mx-auto text-lg font-medium">Picked at peak ripeness for ultimate flavor.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="group relative aspect-square rounded-3xl overflow-hidden shadow-xl border border-white/40 dark:border-black/40 animate-fade-in-up delay-200">
              <Image
                src="https://loremflickr.com/800/800/tomatoes,fresh/all"
                alt="Heirloom Tomatoes"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-950/30 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-emerald-400 font-bold tracking-wider text-sm uppercase mb-2 block">In Season</span>
                <h3 className="text-3xl font-black text-white mb-2">Heirloom Tomatoes</h3>
                <p className="text-green-100 font-medium">Vibrant, sweet, and bursting with summer flavor.</p>
              </div>
            </div>

            <div className="group relative aspect-square rounded-3xl overflow-hidden shadow-xl border border-white/40 dark:border-black/40 animate-fade-in-up delay-300">
              <Image
                src="https://loremflickr.com/800/800/basket,harvest/all"
                alt="Weekly Harvest Box"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-950/30 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-emerald-400 font-bold tracking-wider text-sm uppercase mb-2 block">Subscribe</span>
                <h3 className="text-3xl font-black text-white mb-2">Weekly Harvest Box</h3>
                <p className="text-green-100 font-medium">A curated selection of the farm's best produce delivered to your door.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section id="about" className="mt-24 md:mt-40 rounded-[3rem] bg-white/40 dark:bg-black/30 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-2xl shadow-green-900/5 mx-6 md:mx-12 py-24 px-6 md:px-12 animate-fade-in-up">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-green-950 dark:text-green-50 tracking-tight">Why Choose Our Farm?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "100% Organic", desc: "No synthetic pesticides or fertilizers. Everything is grown the way nature intended." },
                { title: "Regenerative", desc: "We focus on soil health to trap carbon and build a resilient ecosystem." },
                { title: "Locally Sourced", desc: "Supporting our local community and drastically reducing food miles." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/60 dark:bg-green-950/40 shadow-sm border border-white/60 dark:border-green-800/50 hover:border-emerald-500/50 transition-colors backdrop-blur-sm">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mb-6 text-emerald-700 dark:text-emerald-400 font-black text-xl shadow-inner">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-950 dark:text-green-100">{item.title}</h3>
                  <p className="text-green-800 dark:text-green-300/80 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-950 text-green-400 py-16 px-6 md:px-12 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-3xl font-black text-white mb-4 tracking-tighter">GreenAcres Farm</h4>
            <p className="max-w-sm font-medium text-green-200/60">Cultivating community and health through sustainable farming.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Visit Us</h4>
            <address className="not-italic flex flex-col space-y-2 font-medium">
              <span>500 Valley Road</span>
              <span>Farmville, NY 10990</span>
              <span className="pt-2 text-green-300">Farm Stand Open:</span>
              <span>Sat-Sun: 9am - 4pm</span>
            </address>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Connect</h4>
            <div className="flex flex-col space-y-2 font-medium">
              <a href="#" className="hover:text-emerald-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Facebook</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Newsletter</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-green-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <p>© {new Date().getFullYear()} GreenAcres Farm. All rights reserved.</p>
          <div className="flex gap-4 text-green-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
