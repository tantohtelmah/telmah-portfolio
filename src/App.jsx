import { useEffect, useState } from "react";
import {
  ArrowUp, Github, Linkedin, Mail, MapPin, Moon, Sun, ExternalLink,
  Cloud, Code2, Database, Sparkles, Shield, BriefcaseBusiness, Award
} from "lucide-react";
import { roles, stats, skills, experience, projects, certifications, achievements } from "./data/portfolio";

function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setWidth((scrollTop / height) * 100);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="fixed left-0 top-0 z-[100] h-1 bg-gradient-to-r from-sky-400 to-purple-500" style={{ width: `${width}%` }} />;
}

function Navbar({ dark, setDark }) {
  const links = ["About", "Skills", "Experience", "Projects", "Contact"];
  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-full glass px-5 py-3">
      <div className="flex items-center justify-between gap-4">
        <a href="#home" className="text-lg font-black gradient-text">TT</a>
        <div className="hidden gap-6 md:flex">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-slate-300 transition hover:text-sky-300">
              {link}
            </a>
          ))}
        </div>
        <button onClick={() => setDark(!dark)} className="rounded-full border border-white/10 p-2 transition hover:border-sky-300">
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % roles.length), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,.22),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,.22),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,.14),transparent_35%)]" />
      <div className="absolute left-10 top-32 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl animate-pulseGlow" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl animate-pulseGlow" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.1fr_.9fr]">
        <div className="animate-fadeUp">
          <p className="mb-4 inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
            Available for software engineering opportunities
          </p>
          <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
            Telmah Kinyuy <span className="gradient-text">Tantoh</span>
          </h1>
          <h2 className="mt-5 text-2xl font-bold text-slate-200 md:text-4xl">
            {roles[index]}<span className="text-sky-300">|</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Building scalable software, intelligent automation, and AI-powered systems that solve real-world problems.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a className="btn-primary" href="#projects">View Projects</a>
            <a className="btn-secondary" href="/Telmah-Tantoh-Resume.pdf" download>Download Resume</a>
            <a className="btn-secondary" href="#contact">Contact Me</a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-float rounded-[2rem] glass p-6">
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 font-mono text-sm text-slate-300">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <p><span className="text-purple-300">const</span> developer = {"{"}</p>
            <p className="pl-5">name: <span className="text-sky-300">"Telmah"</span>,</p>
            <p className="pl-5">skills: [<span className="text-sky-300">"React"</span>, <span className="text-sky-300">"AWS"</span>, <span className="text-sky-300">"AI"</span>],</p>
            <p className="pl-5">mission: <span className="text-sky-300">"build reliable systems"</span></p>
            <p>{"}"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="mb-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <SectionTitle eyebrow="About" title="Engineer. Builder. Problem Solver." />
      <div className="grid gap-8 md:grid-cols-[1.2fr_.8fr]">
        <div className="glass rounded-3xl p-8">
          <p className="text-lg leading-8 text-slate-300">
            I am a Computer Science graduate from the University of Guelph with experience in software engineering,
            backend development, cloud deployment, automation, and AI systems. I build scalable applications using
            Python, Java, SQL, React, AWS, and modern automation tools. My passion lies in solving complex problems
            through software, cloud infrastructure, and intelligent agent systems.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map(item => (
            <div key={item.label} className="glass rounded-3xl p-6 text-center">
              <p className="gradient-text text-3xl font-black">{item.value}</p>
              <p className="mt-2 text-sm text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const icons = [Code2, Sparkles, Cloud, Database, Shield, BriefcaseBusiness, Award];
  return (
    <section id="skills" className="section">
      <SectionTitle eyebrow="Skills" title="Technical Toolkit" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={group.title} className="glass rounded-3xl p-6 transition hover:-translate-y-2 hover:border-sky-300/40">
              <Icon className="mb-4 text-sky-300" />
              <h3 className="mb-4 text-xl font-bold text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle eyebrow="Experience" title="Career Timeline" />
      <div className="mx-auto max-w-4xl">
        {experience.map((item, i) => (
          <div key={item.role} className="relative border-l border-sky-400/30 pl-8 pb-10">
            <span className="absolute -left-3 top-0 h-6 w-6 rounded-full border-4 border-slate-950 bg-gradient-to-r from-sky-400 to-purple-500" />
            <div className="glass rounded-3xl p-6">
              <p className="text-sm text-sky-300">{item.date}</p>
              <h3 className="mt-1 text-2xl font-bold text-white">{item.role}</h3>
              <p className="text-slate-400">{item.company}</p>
              <ul className="mt-4 grid gap-2 text-slate-300 md:grid-cols-2">
                {item.points.map(point => <li key={point}>• {point}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle eyebrow="Projects" title="Featured Work" />
      <div className="grid gap-7 lg:grid-cols-3">
        {projects.map(project => (
          <article key={project.title} className={`glass rounded-3xl p-6 transition hover:-translate-y-2 ${project.featured ? "lg:col-span-2" : ""}`}>
            <div className="mb-5 flex h-44 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/20 to-purple-500/20">
              <Code2 size={52} className="text-sky-200" />
            </div>
            <h3 className="text-2xl font-black text-white">{project.title}</h3>
            <p className="mt-3 text-slate-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map(t => <span key={t} className="rounded-full bg-sky-400/10 px-3 py-1 text-xs text-sky-200">{t}</span>)}
            </div>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              {project.features.map(feature => <li key={feature}>✓ {feature}</li>)}
            </ul>
            <div className="mt-6 flex gap-3">
              <a href={project.live} className="btn-primary px-4 py-2 text-sm">Live Demo <ExternalLink size={14} /></a>
              <a href={project.github} className="btn-secondary px-4 py-2 text-sm"><Github size={14} /> GitHub</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CardsSection({ id, eyebrow, title, items }) {
  return (
    <section id={id} className="section">
      <SectionTitle eyebrow={eyebrow} title={title} />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {items.map(item => (
          <div key={item} className="glass rounded-3xl p-6">
            <Award className="mb-4 text-purple-300" />
            <p className="font-semibold text-white">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <SectionTitle eyebrow="Contact" title="Let's Build Something" />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="glass rounded-3xl p-8">
          <p className="mb-6 text-slate-300">
            Open to software engineering, cloud development, automation, and AI-focused roles.
          </p>
          <div className="space-y-4 text-slate-300">
            <p className="flex gap-3"><MapPin className="text-sky-300" /> Toronto, Ontario, Canada</p>
            <p className="flex gap-3"><Mail className="text-sky-300" /> <a href="mailto:tantohtelmah@gmail.com">tantohtelmah@gmail.com</a></p>
            <p className="flex gap-3"><Linkedin className="text-sky-300" /> <a href="https://www.linkedin.com" target="_blank">LinkedIn</a></p>
            <p className="flex gap-3"><Github className="text-sky-300" /> <a href="https://github.com/tantohtelmah" target="_blank">github.com/tantohtelmah</a></p>
          </div>
        </div>

        <form name="contact" method="POST" data-netlify="true" className="glass rounded-3xl p-8">
          <input type="hidden" name="form-name" value="contact" />
          <label className="mb-2 block text-sm text-slate-300">Name</label>
          <input name="name" required className="mb-4 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-sky-300" />
          <label className="mb-2 block text-sm text-slate-300">Email</label>
          <input name="email" type="email" required className="mb-4 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-sky-300" />
          <label className="mb-2 block text-sm text-slate-300">Message</label>
          <textarea name="message" rows="5" required className="mb-5 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-sky-300" />
          <button className="btn-primary w-full" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

function GithubWidget() {
  return (
    <section className="section pt-0">
      <div className="glass rounded-3xl p-8">
        <h3 className="mb-5 text-2xl font-black text-white">GitHub Activity</h3>
        <div className="grid grid-cols-12 gap-2">
          {Array.from({ length: 96 }).map((_, i) => (
            <span key={i} className={`h-4 rounded ${i % 5 === 0 ? "bg-purple-400/70" : i % 3 === 0 ? "bg-sky-400/50" : "bg-white/10"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 z-50 rounded-full bg-sky-500 p-4 text-white shadow-xl">
      <ArrowUp />
    </button>
  );
}

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  return (
    <>
      <ScrollProgress />
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CardsSection id="certifications" eyebrow="Certifications" title="Professional Development" items={certifications} />
      <CardsSection id="achievements" eyebrow="Achievements" title="Highlights" items={achievements} />
      <GithubWidget />
      <Contact />
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Telmah Kinyuy Tantoh. Built with React, Tailwind CSS, and Vite.
      </footer>
      <BackToTop />
    </>
  );
}
