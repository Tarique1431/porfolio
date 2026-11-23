import { useEffect, useState } from "react";
import { Rocket, Wrench, Lock, Mail, Phone, MapPin } from "lucide-react";
import { categories, stats } from "./projects";
import ProjectCard from "./ProjectCard";

const SECTION_ICONS = { Rocket, Wrench, Lock };

function BlurWord({ text, delay = 0 }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <span
      className="inline-block transition-all duration-700 ease-out"
      style={{
        filter: show ? "blur(0px)" : "blur(14px)",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(-16px)",
      }}
    >
      {text}
    </span>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090d] text-slate-200 selection:bg-[#4d8dff]">
      {/* ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#1a2740] opacity-40 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-[#15314d] opacity-30 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 sm:px-10">
        {/* HERO */}
        <header className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <img
            src="/headshot.jpg"
            alt="Tarique Mahmood"
            className="h-20 w-20 flex-shrink-0 rounded-full border-2 border-[#4d8dff] object-cover shadow-[0_0_30px_rgba(77,141,255,0.3)] sm:h-24 sm:w-24"
          />
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              <BlurWord text="Tarique" delay={80} />{" "}
              <BlurWord text="Mahmood" delay={220} />
            </h1>
            <p className="mt-2 text-[15px] font-semibold text-[#4d8dff] fade-up" style={{ animationDelay: "350ms", opacity: 0 }}>
              Full-Stack Developer &amp; Systems Builder
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-slate-400">
              <a href="tel:+919123297576" className="flex items-center gap-1.5 hover:text-[#4d8dff]">
                <Phone className="h-3.5 w-3.5" /> +91-9123297576
              </a>
              <a href="mailto:tarique1431@gmail.com" className="flex items-center gap-1.5 hover:text-[#4d8dff]">
                <Mail className="h-3.5 w-3.5" /> tarique1431@gmail.com
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> Jeddah, Saudi Arabia
              </span>
            </div>
          </div>
        </header>

        <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-slate-400 fade-up" style={{ animationDelay: "450ms", opacity: 0 }}>
          I design and ship <strong className="text-white">full-stack business systems end-to-end</strong> — from
          database schema to production deployment — across ERP integration, inventory &amp; asset tracking,
          collections, HR analytics and internal tooling. Most of what's below is{" "}
          <strong className="text-white">live in production</strong> today, used daily by real teams across the
          SWAG group of companies and its brands (LAROUCHE, OUTFIT).
        </p>

        {/* STATS */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {stats.map((s) => (
            <div
              key={s.l}
              className="rounded-xl border border-white/10 bg-[#121722] px-3 py-4 text-center"
            >
              <div className="text-xl font-extrabold text-[#4d8dff] sm:text-2xl">{s.n}</div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* CATEGORY SECTIONS */}
        {categories.map((cat) => {
          const SIcon = SECTION_ICONS[cat.icon] || Rocket;
          return (
            <section key={cat.id} className="mt-16">
              <div className="flex items-baseline gap-3">
                <SIcon className="h-5 w-5 text-[#4d8dff]" />
                <h2 className="text-lg font-bold text-white">{cat.title}</h2>
                <span className="text-[12.5px] text-slate-500">{cat.note}</span>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {cat.projects.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            </section>
          );
        })}

        {/* FOOTER */}
        <footer className="mt-20 border-t border-white/10 pt-8 text-center">
          <p className="text-[13px] text-slate-500">
            Built and maintained end-to-end by Tarique Mahmood
          </p>
          <div className="mt-3 flex items-center justify-center gap-4 text-slate-500">
            <a href="mailto:tarique1431@gmail.com" className="hover:text-[#4d8dff]" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
            <a href="tel:+919123297576" className="hover:text-[#4d8dff]" aria-label="Phone">
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
