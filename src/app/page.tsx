import Image from "next/image";

export default function Home() {
  



  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-orange-500/30">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-500/10 blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-yellow-500/10 blur-[120px] animate-float [animation-delay:-5s]" />
      </div>

      <nav className="fixed top-0 w-full z-50 px-6 py-4 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter">SAHAN.</div>
          <div className="flex gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <a href="#" className="hover:text-orange-500 transition-colors">Work</a>
            <a href="#" className="hover:text-orange-500 transition-colors">About</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="flex flex-col items-center text-center space-y-8 py-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/5 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-semibold tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Available for new projects
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.1]">
              Hello, My name is <br />
              <span className="text-gradient">Sahan.</span>
            </h1>

            <p className="max-w-2xl text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I'm a Next.js developer and designer crafting premium digital experiences.
              Focused on building beautiful, functional, and high-performance applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 rounded-full bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 font-bold hover:scale-105 transition-transform">
                View My Work
              </button>
              <button className="px-8 py-4 rounded-full border border-zinc-200 dark:border-zinc-800 font-bold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                Contact Me
              </button>
            </div>
          </section>

          {/* Featured Sections (Simple Grid) */}
          <section className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Clean Design", desc: "Minimalist and functional interfaces that prioritize user experience." },
              { title: "Modern Tech", desc: "Built with Next.js, Tailwind CSS, and Framer Motion for peak performance." },
              { title: "Aesthetics", desc: "Vibrant colors and smooth animations to make your project stand out." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all group">
                <h3 className="text-xl font-bold mb-4 group-hover:text-orange-500 transition-colors">{item.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </section>
          {/* Projects Section */}
          <section className="mt-40 space-y-12">
            <h2 className="text-3xl font-bold tracking-tight">Recent Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[1, 2].map((i) => (
                <div key={i} className="group relative aspect-video rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2">Project Name {i}</h3>
                    <p className="text-zinc-300">A brief description of the innovative solution developed for this client.</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="py-12 px-6 md:px-12 border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-zinc-500">© 2026 Sahan. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm font-medium hover:text-orange-500">Twitter</a>
            <a href="#" className="text-sm font-medium hover:text-orange-500">GitHub</a>
            <a href="#" className="text-sm font-medium hover:text-orange-500">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
