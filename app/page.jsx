'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Code2,
  ExternalLink,
  Gamepad2,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Star,
} from 'lucide-react';
import Playground from '@/components/sections/Playground';

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    items: ['Python', 'Flask', 'SQL', 'MongoDB'],
  },
  {
    title: 'Core Programming',
    items: ['Python', 'C++', 'JavaScript'],
  },
  {
    title: 'Deployment & Tools',
    items: ['Git', 'Netlify', 'Vercel', 'Render'],
  },
  {
    title: 'Professional Skills',
    items: ['Technical Communication', 'Problem Solving', 'Teamwork'],
  },
];

const projects = [
  {
    title: 'Currency Converter',
    tag: 'Currency Exchange API',
    image:
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=900&q=80',
    description:
      'Developed a full-stack financial utility integrating third-party REST APIs with a Python Flask backend to securely fetch, cache, and display real-time exchange rates.',
      liveUrl:'',
      githubUrl:''
  },
  {
    title: 'EduSphere Tutor Workspace',
    tag: 'PeerTutor WebApp',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    description:
      'Engineered a peer-tutoring web platform using modern frontend frameworks to connect students and tutors, streamlining interactive educational workflows and scheduling.',
  },
  {
    title: 'shamiraryal.com.np',
    tag: 'Portfolio Website',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    description:
      'Built a highly responsive personal website leveraging Next.js and Tailwind CSS to effectively showcase software projects and technical writing.',
  },
  {
    title: 'BlogPost Ideas Worth Sharing',
    tag: 'BlogPost FullStack',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    description:
      'Engineered a full-stack content publishing web application with secure user authentication, dynamic Markdown rendering, and role-based access control.',
  },
  {
    title: 'Pro Coder Typing Club',
    tag: 'Typing Practice Platform',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80',
    description:
      'Architected a customizable DSA code-typing platform featuring over 100 interactive lessons, real-time syntax highlighting, and WPM/accuracy tracking.',
  },
];

const education = [
  {
    title: 'Bachelors Degree',
    place: 'Amrit Science Campus, Thamel KTM',
    years: '2022 - Present',
    detail:
      'Cleared all semesters with an average around 3.40 up to the 6th semester and am currently in the 8th semester.',
  },
  {
    title: 'SLC',
    place: 'VS Niketan Higher Secondary School, Tinkune KTM',
    years: '2020 - 2022',
    detail: 'Completed SLC with an excellent 3.79 GPA.',
  },
  {
    title: 'SEE',
    place: 'Dharai Thanti Secondary School, Palpa',
    years: 'Batch 2020',
    detail: 'Completed with an excellent 3.85 GPA.',
  },
];

const certifications = [
  'Meta Front-End Developer (Coursera)',
  'Google IT Automation with Python (Coursera)',
  "CS50's Web Programming (edX)",
  'FreeCodeCamp Front End Libraries',
];

const stats = [
  { value: '8th', label: 'Semester running' },
  { value: '3.40', label: 'Avg GPA to 6th sem' },
  { value: '100+', label: 'Typing lessons built' },
  { value: '4+', label: 'Major full-stack projects' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [gameOpen, setGameOpen] = useState(false);
  const [moreGamesOpen, setMoreGamesOpen] = useState(true);

  return (
    <main className="relative overflow-x-hidden bg-slate-50 text-slate-900">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),_transparent_30%)]" />

      <header className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-10 lg:px-12">
        <nav className="flex items-center justify-between rounded-full border border-slate-200/80 bg-white/80 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">SA</div>
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-slate-900 uppercase">Shamir</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-slate-900">About</a>
            <a href="#skills" className="transition hover:text-slate-900">Skills</a>
            <a href="#projects" className="transition hover:text-slate-900">Projects</a>
            <a href="#education" className="transition hover:text-slate-900">Education</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
            <a
              href="#play-games"
              onClick={() => setGameOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
            >
              <Gamepad2 size={15} />
              Play Games
            </a>
          </div>

          <a
            href="mailto:samiraryal449@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            <Mail size={16} />
            Email me
          </a>
        </nav>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium tracking-[0.2em] text-blue-700 uppercase">
              <Sparkles size={14} />
              BSc CSIT Student · Amrit Science Campus
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.06em] text-slate-900 sm:text-6xl lg:text-7xl">
              Shamir
              <span className="block text-blue-600">Aryal</span>
            </h1>

            <p className="mt-5 max-w-xl text-xl font-medium text-slate-700 sm:text-2xl">
              Full-Stack Developer Intern building elegant, responsive web experiences with React, Next.js, Tailwind, Python, Flask, SQL, and MongoDB.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Actively seeking 8th Sem Internship', 'Frontend + Backend', 'UI/UX minded engineering'].map((tag) => (
                <span key={tag} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(37,99,235,0.24)] transition hover:bg-blue-500"
              >
                View my work
                <ArrowRight size={17} />
              </a>
              <a
                href="https://github.com/Shamir-dev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
              >
                <Globe size={17} />
                GitHub
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-slate-500"><Mail size={15} /> Email</div>
                <p className="mt-2 text-sm font-semibold text-slate-800 break-all">samiraryal449@gmail.com</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-slate-500"><Phone size={15} /> Phone</div>
                <p className="mt-2 text-sm font-semibold text-slate-800">+977 974252521092</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-slate-500"><MapPin size={15} /> Location</div>
                <p className="mt-2 text-sm font-semibold text-slate-800">Lainchaur, Kathmandu</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-blue-200 blur-3xl" />
            <div className="absolute -right-8 bottom-6 h-32 w-32 rounded-full bg-cyan-200 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-[0_32px_80px_rgba(15,23,42,0.12)]">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-50 to-transparent" />

              <div className="relative rounded-[26px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4">
                <div className="flex items-center justify-between px-2 py-1">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">Portfolio</span>
                </div>

                <div className="mt-4 overflow-hidden rounded-[24px] border border-slate-200 bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
                    alt="Samir Aryal"
                    className="h-[420px] w-full object-cover"
                  />
                </div>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-slate-500">Profile summary</p>
                    <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                      Open to work
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-2xl font-bold text-slate-900">Shamir Aryal</p>
                      <p className="text-sm text-slate-600">Full-stack developer intern</p>
                    </div>
                    <a href="https://www.linkedin.com/in/shamir-aryal/" target="_blank" rel="noreferrer" className="rounded-full bg-slate-900 p-2.5 text-white transition hover:bg-slate-700">
                      <Globe size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12">
        <div className="grid gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-slate-50 p-5 text-center">
              <p className="text-3xl font-black tracking-[-0.05em] text-slate-900">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
            <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase">About Me</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900">I build clean digital products with strong engineering thinking.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              I am a BSc CSIT student at Amrit Science Campus and a full-stack developer intern focused on creating accessible, responsive, and high-conversion web experiences. I enjoy turning product ideas into polished interfaces backed by solid backend systems.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              My work bridges frontend creativity and backend reliability—whether it is a full-stack app, a portfolio system, or a utility API with data flow and performance in mind.
            </p>
          </div>

          <div className="rounded-[28px] border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 shadow-[0_20px_60px_rgba(59,130,246,0.08)]">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white p-2 text-blue-600 shadow-sm"><Briefcase size={18} /></div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Career Focus</p>
            </div>
            <ul className="mt-6 space-y-4 text-base text-slate-700">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> React, Next.js, Tailwind CSS</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Python Flask, SQL, MongoDB</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Responsive web apps and polished UX</li>
            </ul>
            <p className="mt-6 rounded-2xl bg-white/80 p-4 text-sm leading-7 text-slate-600">
              Open to internship opportunities where I can contribute to product quality, system design, and UI/UX execution from the start.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="skills" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase">Skills</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900">Technical and professional strengths that help me ship real products.</h2>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
                className="rounded-[26px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-xl bg-white p-2 text-blue-600 shadow-sm"><Code2 size={18} /></div>
                <h3 className="text-lg font-bold text-slate-900">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase">Projects</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900">Selected work built end-to-end with product thinking.</h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.04)]"
            >
              <div className="overflow-hidden">
                <img src={project.image} alt={project.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-700">{project.tag}</span>
                <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-slate-900">{project.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{project.description}</p>
                <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                  <span className="inline-flex items-center gap-2"><Star size={14} className="text-amber-500" /> Full-stack build</span>
                  <ExternalLink size={15} className="transition group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="education" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase">Education</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900">Academic foundation and performance.</h2>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {education.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.04)]"
              >
                <div className="mb-5 inline-flex rounded-xl bg-blue-50 p-3 text-blue-600"><GraduationCap size={18} /></div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-lg font-semibold text-slate-800">{item.place}</p>
                <p className="mt-2 text-sm font-medium text-slate-500">{item.years}</p>
                <p className="mt-4 leading-7 text-slate-600">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)]"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase">Certifications</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900">Learning focused on modern engineering and product execution.</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {certifications.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                <div className="mb-3 h-2 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <footer id="contact" className="mx-auto max-w-7xl px-6 pb-8 pt-8 md:px-10 lg:px-12">
        <div className="rounded-[30px] border border-slate-200 bg-gradient-to-r from-slate-900 to-blue-900 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-blue-200 uppercase">Let&apos;s collaborate</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] md:text-5xl">Let&apos;s build something impactful together.</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="mailto:samiraryal449@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                <Mail size={16} />
                Email Me
              </a>
              <a href="https://www.linkedin.com/in/shamir-aryal/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                <Globe size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>

      <section id="play-games" className="mx-auto max-w-7xl px-6 pb-20 pt-6 md:px-10 lg:px-12">
        <div className="rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
          <button
            type="button"
            onClick={() => setGameOpen((v) => !v)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm">
                <Gamepad2 size={18} />
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-blue-600 uppercase">Play</p>
                <h3 className="mt-1 text-2xl font-black tracking-[-0.04em] text-slate-900">Play Games</h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 md:inline-flex">
                <Gamepad2 size={15} />
                <span>Open</span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-slate-300 hover:bg-slate-100">
                {gameOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
            </div>
          </button>

          <AnimatePresence initial={false}>
            {gameOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="overflow-hidden border-t border-slate-200"
              >
                <div className="grid gap-5 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-4 md:grid-cols-[minmax(0,1fr)_auto] md:p-6">
                  <div className="min-w-0 rounded-[26px] border border-slate-200 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] md:p-5">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">Mini challenge</p>
                        <h4 className="mt-1 text-2xl font-black tracking-[-0.05em] text-slate-900">Math Quiz</h4>
                      </div>
                      <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                        🧠 Active
                      </span>
                    </div>
                    <Playground />
                  </div>

                  <div
                    className={`overflow-hidden rounded-[26px] border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50 shadow-inner shadow-blue-100/60 transition-all duration-300 ease-out ${
                      moreGamesOpen ? 'w-full md:w-[300px]' : 'w-[72px]'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setMoreGamesOpen((value) => !value)}
                      className={`flex w-full items-center ${
                        moreGamesOpen ? 'justify-between gap-3 p-4' : 'justify-center p-3'
                      } text-left`}
                    >
                      {moreGamesOpen ? (
                        <>
                          <div className="flex min-w-0 items-center gap-2 text-slate-900">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                              <Gamepad2 size={16} />
                            </div>
                            <span className="truncate text-sm font-semibold text-slate-700">More games</span>
                          </div>

                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm">
                            <ChevronRight size={16} />
                          </div>
                        </>
                      ) : (
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm">
                          <ChevronLeft size={16} />
                        </div>
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {moreGamesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden px-4 pb-4"
                        >
                          <p className="text-sm leading-7 text-slate-600">
                            Puzzle, typing, and logic games will be added here in future updates to keep the portfolio playful and interactive.
                          </p>

                          <div className="mt-5 space-y-3">
                            {[
                              { emoji: '🧩', label: 'Puzzle' },
                              { emoji: '⌨️', label: 'Typing' },
                              { emoji: '🧠', label: 'Logic' },
                            ].map((item) => (
                              <div key={item.label} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm">
                                <div className="flex items-center gap-2 text-slate-700">
                                  <span className="text-lg">{item.emoji}</span>
                                  <span className="text-sm font-medium">{item.label}</span>
                                </div>
                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Soon</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
