"use client";

import Image from "next/image";
import { useState } from "react";

const experiences = [
  {
    name: "The Tea Maker's Trail",
    days: "3 days",
    location: "Ella / Haputale",
    price: "$1,200",
    desc: "Live with a hill country family, pick tea alongside them, and learn the full craft from leaf to cup.",
    img: "tea,srilanka,plantation",
    tier: "Immersion",
  },
  {
    name: "Monsoon Kitchen",
    days: "2 days",
    location: "Galle / South Coast",
    price: "$850",
    desc: "Cook with grandmothers across 4 homes, learning family recipes that aren't written in any book.",
    img: "cooking,spices,kitchen",
    tier: "Immersion",
  },
  {
    name: "Silent Dawn",
    days: "4 days",
    location: "Kandy / Knuckles Range",
    price: "$1,800",
    desc: "A meditation retreat with forest monks. Sleep in a 200-year-old monastery. Wake before the world does.",
    img: "monastery,meditation,buddhist",
    tier: "Immersion",
  },
  {
    name: "Wild Leopard Diary",
    days: "3 days",
    location: "Yala / Tissamaharama",
    price: "$2,200",
    desc: "Wildlife journaling and photography in Yala, guided by a naturalist.",
    img: "leopard,safari,wildlife",
    tier: "Immersion",
  },
  {
    name: "Fisherman's Moon",
    days: "1 day",
    location: "Weligama",
    price: "$450",
    desc: "Night fishing with stilt fishermen, followed by a beach bonfire feast cooked from the catch.",
    img: "fishing,beach,ocean",
    tier: "Taster",
  },
  {
    name: "The Spice Whisperer",
    days: "2 days",
    location: "Matale",
    price: "$950",
    desc: "Walk through a spice garden with a 4th-generation grower, ending with an Ayurvedic cooking session.",
    img: "spices,garden,herbs",
    tier: "Immersion",
  },
  {
    name: "Lost Kingdoms",
    days: "3 days",
    location: "Cultural Triangle",
    price: "$1,600",
    desc: "A private archaeological walk through Anuradhapura and Polonnaruwa with a resident historian.",
    img: "ancient,temple,ruins",
    tier: "Immersion",
  },
  {
    name: "Woven Stories",
    days: "2 days",
    location: "Dumbara Valley",
    price: "$780",
    desc: "Learn handloom weaving with rural artisans and create your own piece to take home.",
    img: "weaving,textile,crafts",
    tier: "Immersion",
  },
  {
    name: "The Toddy Tapper's Climb",
    days: "1 day",
    location: "Balapitiya",
    price: "$400",
    desc: "Climb coconut palms with toddy tappers, learn fermentation, taste arrack at the source.",
    img: "coconut,palm,tropical",
    tier: "Taster",
  },
  {
    name: "Blue Whale Passage",
    days: "1 day",
    location: "Mirissa",
    price: "$500",
    desc: "Ethical whale watching with a marine biologist. Includes an ocean conservation briefing.",
    img: "whale,ocean,marine",
    tier: "Taster",
  },
  {
    name: "Temple of Tooth to Table",
    days: "1 day",
    location: "Kandy",
    price: "$600",
    desc: "A Kandy heritage walk ending with a royal Kandyan feast in a private walauwa.",
    img: "kandy,temple,heritage",
    tier: "Taster",
  },
  {
    name: "Full Island Odyssey",
    days: "10 days",
    location: "Island-wide",
    price: "$3,500",
    desc: "Pick any 5 experiences and we'll stitch them into one seamless island journey.",
    img: "srilanka,island,landscape",
    tier: "Odyssey",
  },
];

const faqs = [
  {
    q: "What's included in the price?",
    a: "Accommodation, meals, local transport, your guide, community fees, and a contribution to our Community Fund.",
  },
  {
    q: "How big are the groups?",
    a: "Never more than 6 people. Most experiences are private or couples-only.",
  },
  {
    q: "Can I combine multiple experiences?",
    a: "Yes — that's what the Full Island Odyssey is for. Or we can build a custom itinerary.",
  },
  {
    q: "What if I need to cancel?",
    a: "We offer flexible cancellation. Details are shared at booking.",
  },
  {
    q: "Is this suitable for solo travelers?",
    a: "Absolutely. Many of our guests travel solo.",
  },
  {
    q: "Do I need to be physically fit?",
    a: "It depends on the experience. We'll let you know what to expect when you book.",
  },
  {
    q: "How do I know my money is going to the community?",
    a: "Every guest receives a transparent breakdown after their trip.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const visibleExperiences = showAllExperiences
    ? experiences
    : experiences.slice(0, 4);

  return (
    <div className="relative min-h-screen bg-linear-to-br from-emerald-50 via-stone-50 to-amber-50 dark:from-emerald-950 dark:via-stone-950 dark:to-amber-950 animate-gradient text-stone-900 dark:text-stone-100 selection:bg-emerald-500/30 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 md:px-12 bg-white/70 dark:bg-black/60 backdrop-blur-xl border-b border-emerald-200/50 dark:border-emerald-800/50 animate-fade-in-up">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-emerald-800 dark:text-emerald-400">
            Ceylon<span className="text-amber-600 dark:text-amber-400">Curated</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-stone-700 dark:text-stone-300">
            <a href="#experiences" className="hover:text-emerald-600 transition-colors">Experiences</a>
            <a href="#about" className="hover:text-emerald-600 transition-colors">About</a>
            <a href="#impact" className="hover:text-emerald-600 transition-colors">Impact</a>
            <a href="#faq" className="hover:text-emerald-600 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white transition-colors text-sm font-semibold shadow-lg shadow-emerald-700/20"
          >
            Plan Your Journey
          </a>
        </div>
      </nav>

      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="relative px-6 md:px-12 py-12 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 z-10 animate-fade-in-up delay-100">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-black/40 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-wide uppercase shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Max 6 Guests Per Journey
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-stone-900 dark:text-stone-50">
              Travel that changes{" "}
              <br />
              <span className="text-gradient">both the traveler</span>
              <br />
              and the place.
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-stone-600 dark:text-stone-300 leading-relaxed font-medium">
              Handcrafted, immersive journeys across Sri Lanka. You don&apos;t
              just visit — you&apos;re welcomed in. Pick tea with a hill country
              family. Cook with grandmothers. Sit with monks at dawn.
            </p>

            {/* Trust Points */}
            <div className="grid grid-cols-2 gap-3 max-w-lg pt-2">
              {[
                { num: "6", label: "Max group size" },
                { num: "20%", label: "Goes to community" },
                { num: "12", label: "Signature experiences" },
                { num: "100%", label: "Co-designed locally" },
              ].map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/50 dark:bg-white/5 border border-emerald-200/50 dark:border-emerald-800/50 backdrop-blur-sm"
                >
                  <span className="text-2xl font-black text-emerald-700 dark:text-emerald-400">
                    {t.num}
                  </span>
                  <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 leading-tight">
                    {t.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#experiences"
                className="px-8 py-4 text-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white font-bold hover:scale-105 transition-transform shadow-xl shadow-emerald-800/20"
              >
                Explore Our Experiences
              </a>
              <a
                href="#about"
                className="px-8 py-4 text-center rounded-full border-2 border-emerald-700/30 text-emerald-800 dark:text-emerald-300 font-bold hover:bg-white/50 dark:hover:bg-black/50 transition-colors backdrop-blur-xs"
              >
                Our Story
              </a>
            </div>
          </div>
          <div className="flex-1 relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/10 animate-fade-in-up delay-200">
            <Image
              src="https://loremflickr.com/1200/1500/srilanka,tea,landscape/all"
              alt="Scenic Sri Lanka landscape"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
              unoptimized
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
              <p className="text-white/90 text-sm font-semibold">Every journey is co-designed with the people you&apos;ll meet</p>
            </div>
          </div>
        </section>

        {/* Experiences Section */}
        <section
          id="experiences"
          className="mt-20 md:mt-32 px-6 md:px-12 max-w-7xl mx-auto"
        >
          <div className="text-center space-y-4 mb-6 animate-fade-in-up delay-100">
            <h2 className="text-3xl md:text-5xl font-black text-stone-900 dark:text-stone-50 tracking-tight">
              Our Experiences
            </h2>
            <p className="text-stone-600 dark:text-stone-300 max-w-2xl mx-auto text-lg font-medium">
              Each experience is a story, not a schedule. Built alongside the
              communities who host them — they decided what to share, and we
              handle every detail so you can simply be present.
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { tier: "Taster", range: "$400–$600", note: "Single-day" },
              { tier: "Immersion", range: "$780–$1,800", note: "Multi-day" },
              { tier: "Odyssey", range: "$3,500", note: "Full island" },
            ].map((t, i) => (
              <div
                key={i}
                className="px-5 py-2.5 rounded-full bg-white/60 dark:bg-white/5 border border-emerald-200/50 dark:border-emerald-700/50 text-sm font-semibold text-stone-700 dark:text-stone-300 backdrop-blur-sm"
              >
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">{t.tier}</span>{" "}
                · {t.range}{" "}
                <span className="text-stone-400 dark:text-stone-500">({t.note})</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {visibleExperiences.map((exp, i) => (
              <div
                key={i}
                className="experience-card group relative rounded-3xl overflow-hidden shadow-xl border border-white/40 dark:border-white/10 animate-fade-in-up"
                style={{ animationDelay: `${(i % 4) * 100 + 200}ms` }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`https://loremflickr.com/800/600/${exp.img}/all`}
                    alt={exp.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />

                  {/* Tier badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                    {exp.tier}
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-2 text-emerald-300 text-sm font-semibold">
                      <span>{exp.days}</span>
                      <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                      <span>{exp.location}</span>
                      <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                      <span className="text-amber-300">{exp.price}/person</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                      {exp.name}
                    </h3>
                    <p className="text-stone-200 font-medium text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-lg">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!showAllExperiences && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllExperiences(true)}
                className="px-8 py-4 rounded-full bg-emerald-700 dark:bg-emerald-600 text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-emerald-800/20 cursor-pointer"
              >
                View All 12 Experiences
              </button>
            </div>
          )}

          <p className="text-center text-sm text-stone-500 dark:text-stone-400 mt-8 font-medium max-w-xl mx-auto">
            All prices include accommodation, meals, local transport, your guide,
            community fees, and a contribution to our Community Fund.
          </p>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="mt-24 md:mt-40 rounded-[3rem] bg-white/40 dark:bg-black/30 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-2xl shadow-emerald-900/5 mx-6 md:mx-12 py-24 px-6 md:px-12 animate-fade-in-up"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-6 text-stone-900 dark:text-stone-50 tracking-tight">
              About Ceylon Curated
            </h2>
            <p className="text-center text-stone-600 dark:text-stone-300 max-w-2xl mx-auto text-lg font-medium mb-16">
              A boutique travel company based in Sri Lanka. We create small-group,
              immersive experiences that go beyond sightseeing — connecting
              travelers with real people, real skills, and real stories.
            </p>

            {/* Beliefs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {[
                {
                  title: "Intimacy Over Scale",
                  desc: "Groups never exceed 6. Every journey feels personal, not packaged.",
                  icon: "🤝",
                },
                {
                  title: "Reciprocity",
                  desc: "Every community co-designs their experience and gets a fair, transparent cut.",
                  icon: "🌿",
                },
                {
                  title: "Depth Over Distance",
                  desc: "Better to spend 3 days in one village than race through 5 cities.",
                  icon: "🏡",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white/60 dark:bg-emerald-950/40 shadow-sm border border-white/60 dark:border-emerald-800/50 hover:border-emerald-500/50 transition-colors backdrop-blur-sm"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mb-6 text-2xl shadow-inner">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-stone-900 dark:text-stone-100">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-300/80 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* How We Build */}
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-black text-center mb-10 text-stone-800 dark:text-stone-100">
                How We Build Experiences
              </h3>
              <div className="space-y-6">
                {[
                  "We spend weeks embedded in a community, getting to know the people and their stories.",
                  "We co-create the experience together — the community decides what they're comfortable sharing.",
                  "We run pilot trips to get the pacing and details right.",
                  "We refine based on feedback from both guests and hosts.",
                  "We launch it on our platform.",
                ].map((step, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-5 p-5 rounded-2xl bg-white/50 dark:bg-white/5 border border-emerald-200/30 dark:border-emerald-800/30"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-700 dark:bg-emerald-600 text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow-md">
                      {i + 1}
                    </div>
                    <p className="text-stone-700 dark:text-stone-300 font-medium leading-relaxed pt-1.5">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section
          id="impact"
          className="mt-24 md:mt-40 px-6 md:px-12 max-w-7xl mx-auto animate-fade-in-up"
        >
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-stone-900 dark:text-stone-50 tracking-tight">
              Tourism that works <span className="text-gradient">for</span>{" "}
              communities
            </h2>
            <p className="text-stone-600 dark:text-stone-300 max-w-xl mx-auto text-lg font-medium">
              Not just through them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Revenue Sharing */}
            <div className="p-8 md:p-10 rounded-3xl bg-emerald-800 dark:bg-emerald-900 text-white shadow-2xl">
              <h3 className="text-2xl font-black mb-6 text-emerald-100">
                Revenue Sharing
              </h3>
              <ul className="space-y-4">
                {[
                  "20% of every experience fee goes directly to the host community.",
                  "Community members set their own rates.",
                  "Guests receive a transparent breakdown of where their money went.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                      ✓
                    </span>
                    <span className="text-emerald-100/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Fund */}
            <div className="p-8 md:p-10 rounded-3xl bg-amber-600 dark:bg-amber-800 text-white shadow-2xl">
              <h3 className="text-2xl font-black mb-6 text-amber-100">
                Community Fund
              </h3>
              <ul className="space-y-4">
                {[
                  "An additional 5% of net profit goes into the Ceylon Curated Community Fund.",
                  "Governed by community representatives and company members.",
                  "Supports education sponsorships, infrastructure, and cultural preservation.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                      ✓
                    </span>
                    <span className="text-amber-100/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Impact Numbers */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: "40+", label: "Families directly supported" },
              { num: "$55k+", label: "Community revenue target (Year 1)" },
              { num: "12", label: "Experiences co-created" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-3xl bg-white/50 dark:bg-white/5 border border-emerald-200/50 dark:border-emerald-800/50 backdrop-blur-sm"
              >
                <div className="text-4xl md:text-5xl font-black text-emerald-700 dark:text-emerald-400 mb-2">
                  {stat.num}
                </div>
                <div className="text-sm font-semibold text-stone-500 dark:text-stone-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Cultural Preservation */}
          <div className="mt-12 p-8 md:p-10 rounded-3xl bg-white/50 dark:bg-white/5 border border-emerald-200/50 dark:border-emerald-800/50 backdrop-blur-sm">
            <h3 className="text-xl font-black text-stone-800 dark:text-stone-100 mb-4">
              Cultural Preservation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "We document and archive oral histories, recipes, and craft techniques.",
                "We partner with local universities and cultural organizations.",
                "No experience commodifies sacred or private practices.",
              ].map((item, i) => (
                <p
                  key={i}
                  className="text-stone-600 dark:text-stone-300 font-medium leading-relaxed"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Trips Section */}
        <section className="mt-24 md:mt-40 px-6 md:px-12 max-w-7xl mx-auto animate-fade-in-up">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://loremflickr.com/800/1000/srilanka,honeymoon,travel/all"
                alt="Custom Sri Lanka trip"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-5xl font-black text-stone-900 dark:text-stone-50 tracking-tight">
                Want something designed just for you?
              </h2>
              <p className="text-stone-600 dark:text-stone-300 text-lg font-medium leading-relaxed">
                Not every trip fits neatly into a menu. Whether it&apos;s a
                honeymoon, a milestone celebration, a solo reset, or a group trip
                — tell us what you&apos;re after and we&apos;ll build it from
                scratch. Same philosophy, same community partnerships, fully
                tailored to you.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-4 rounded-full bg-emerald-700 dark:bg-emerald-600 text-white font-bold hover:scale-105 transition-transform shadow-xl shadow-emerald-800/20"
              >
                Start a Custom Trip
              </a>
            </div>
          </div>
        </section>

        {/* Corporate Retreats */}
        <section className="mt-24 md:mt-40 mx-6 md:mx-12 rounded-[3rem] overflow-hidden relative animate-fade-in-up">
          <div className="absolute inset-0">
            <Image
              src="https://loremflickr.com/1400/600/teamwork,nature,retreat/all"
              alt="Corporate retreat background"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-emerald-950/80" />
          </div>
          <div className="relative z-10 py-20 px-8 md:px-16 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
              Team experiences that actually mean something.
            </h2>
            <p className="text-emerald-100/80 text-lg font-medium leading-relaxed mb-8 max-w-xl">
              Skip the hotel conference room. We design retreats for teams who want
              to connect, reset, and come back with a shared story — not just a
              shared slide deck. Cook together in a village kitchen, hike through
              tea country, or build something alongside local artisans.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 rounded-full bg-white text-emerald-800 font-bold hover:scale-105 transition-transform shadow-xl"
            >
              Design Your Retreat
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="mt-24 md:mt-40 px-6 md:px-12 max-w-3xl mx-auto animate-fade-in-up"
        >
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-stone-900 dark:text-stone-50 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item rounded-2xl border border-emerald-200/50 dark:border-emerald-800/50 bg-white/50 dark:bg-white/5 backdrop-blur-sm overflow-hidden ${
                  openFaq === i ? "open" : ""
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
                >
                  <span className="font-bold text-stone-800 dark:text-stone-100 text-base md:text-lg pr-4">
                    {faq.q}
                  </span>
                  <span className="faq-chevron text-emerald-600 dark:text-emerald-400 text-xl flex-shrink-0">
                    ▾
                  </span>
                </button>
                <div className="faq-answer px-5 md:px-6 pb-5 md:pb-6">
                  <p className="text-stone-600 dark:text-stone-300 font-medium leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="mt-24 md:mt-40 px-6 md:px-12 max-w-7xl mx-auto animate-fade-in-up"
        >
          <div className="rounded-[3rem] bg-white/40 dark:bg-black/30 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-2xl shadow-emerald-900/5 p-8 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-5xl font-black text-stone-900 dark:text-stone-50 tracking-tight mb-4">
                    Let&apos;s plan your journey.
                  </h2>
                  <p className="text-stone-600 dark:text-stone-300 text-lg font-medium">
                    Reach out and we&apos;ll start planning the trip of a
                    lifetime.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Email", value: "hello@ceyloncurated.com", href: "mailto:hello@ceyloncurated.com" },
                    { label: "Instagram", value: "@ceyloncurated", href: "https://instagram.com/ceyloncurated" },
                    { label: "TikTok", value: "@ceyloncurated", href: "https://tiktok.com/@ceyloncurated" },
                  ].map((contact, i) => (
                    <a
                      key={i}
                      href={contact.href}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-emerald-200/30 dark:border-emerald-800/30 hover:border-emerald-500/50 transition-colors group"
                    >
                      <span className="text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 w-20">
                        {contact.label}
                      </span>
                      <span className="text-stone-700 dark:text-stone-300 font-medium group-hover:text-emerald-600 transition-colors">
                        {contact.value}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
              <form
                className="space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/60 dark:bg-white/5 border border-emerald-200/50 dark:border-emerald-800/50 text-stone-800 dark:text-stone-200 font-medium focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/60 dark:bg-white/5 border border-emerald-200/50 dark:border-emerald-800/50 text-stone-800 dark:text-stone-200 font-medium focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/60 dark:bg-white/5 border border-emerald-200/50 dark:border-emerald-800/50 text-stone-800 dark:text-stone-200 font-medium focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your dream trip..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-full bg-emerald-700 dark:bg-emerald-600 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-emerald-800/20 cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 dark:bg-stone-950 text-stone-400 py-16 px-6 md:px-12 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-3xl font-black text-white mb-4 tracking-tighter">
              Ceylon<span className="text-emerald-400">Curated</span>
            </h4>
            <p className="max-w-sm font-medium text-stone-400">
              Travel that changes both the traveler and the place.
            </p>
            {/* Newsletter */}
            <div className="mt-6 flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder="One story from Sri Lanka, once a month."
                className="flex-1 px-4 py-3 rounded-full bg-stone-800 border border-stone-700 text-stone-200 text-sm font-medium placeholder:text-stone-500 focus:border-emerald-500 focus:outline-none transition-colors"
              />
              <button className="px-5 py-3 rounded-full bg-emerald-700 text-white text-sm font-bold hover:bg-emerald-600 transition-colors cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Explore
            </h4>
            <div className="flex flex-col space-y-2 font-medium">
              <a href="#experiences" className="hover:text-emerald-400 transition-colors">Experiences</a>
              <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
              <a href="#impact" className="hover:text-emerald-400 transition-colors">Impact</a>
              <a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Connect
            </h4>
            <div className="flex flex-col space-y-2 font-medium">
              <a href="https://instagram.com/ceyloncurated" className="hover:text-emerald-400 transition-colors">Instagram</a>
              <a href="https://tiktok.com/@ceyloncurated" className="hover:text-emerald-400 transition-colors">TikTok</a>
              <a href="mailto:hello@ceyloncurated.com" className="hover:text-emerald-400 transition-colors">hello@ceyloncurated.com</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <p>
            © {new Date().getFullYear()} Ceylon Curated. All rights reserved.
          </p>
          <div className="flex gap-4 text-stone-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
