'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const phrases = ['Computer Teacher', 'CSIT Student', 'Tech Enthusiast', 'Lifelong Learner'];

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  { label: 'Months Teaching', value: '15+' },
  { label: 'Current Status', value: 'CSIT Student' },
  { label: 'Languages', value: '3 Spoken' },
];

const softwareSkills = ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Microsoft Outlook', 'MS Office Suite'];
const technicalSkills = ['Computer Fundamentals', 'Programming Basics', 'Information Technology', 'Digital Communication', 'Computer Education'];
const softSkills = ['Excellent Communication', 'Punctuality', 'Flexibility', 'Dynamic & Hardworking', 'Patience', 'Goal Oriented', 'Social Intelligence', 'Emotional Intelligence', 'Active Listening', 'Empathy', 'Decision Making', 'Positive Attitude', 'Self-Motivation', 'Teamwork', 'Collaboration'];
const languages = [
  { name: 'Nepali', level: 98 },
  { name: 'English', level: 84 },
  { name: 'Hindi', level: 82 },
];

const education = [
  {
    title: 'SEE',
    institution: 'Ideal English Boarding Secondary School',
    board: 'NEB',
    year: '2075',
    gpa: '3.35',
  },
  {
    title: '+2 Science',
    institution: 'Oxford Secondary School',
    board: 'NEB',
    year: '2078',
    gpa: '2.68',
  },
  {
    title: 'BSc. CSIT',
    institution: 'Bhairahawa Multiple Campus',
    board: 'Tribhuvan University (TU)',
    year: 'Running 8th Semester',
    gpa: 'Ongoing',
  },
];

const experience = {
  title: 'Computer Teacher',
  organization: 'Shree Nawaratna Secondary School',
  duration: '15 Months',
  responsibilities: [
    'Teaching computer fundamentals',
    'Guiding lower secondary students',
    'Classroom management',
    'Practical computer lab support',
    'Student mentoring',
  ],
};

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typed, setTyped] = useState('');

  const activePhrase = phrases[currentPhrase];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typingIndex < activePhrase.length) {
        setTyped((prev) => prev + activePhrase[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      } else {
        const pause = setTimeout(() => {
          setTyped('');
          setTypingIndex(0);
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }, 1400);
        return () => clearTimeout(pause);
      }
    }, typingIndex === activePhrase.length ? 1200 : 120);

    return () => clearTimeout(timeout);
  }, [activePhrase, typingIndex]);

  useEffect(() => {
    setDisplayText(typed);
  }, [typed]);

  const accentGradient = 'bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-500';

  const timelineItems = useMemo(
    () =>
      education.map((item, index) => (
        <motion.li
          key={item.title}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.12 }}
          className="relative rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-soft backdrop-blur-xl"
        >
          <span className="absolute -left-2 top-6 h-4 w-4 rounded-full border-2 border-cyan-300 bg-slate-950" />
          <p className="text-cyan-300 text-sm uppercase tracking-[0.3em]">{item.title}</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-100">{item.institution}</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
            <p><span className="font-semibold text-slate-100">Board:</span> {item.board}</p>
            <p><span className="font-semibold text-slate-100">Year:</span> {item.year}</p>
            <p><span className="font-semibold text-slate-100">GPA:</span> {item.gpa}</p>
          </div>
        </motion.li>
      )),
    [education],
  );

  const onCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard`);
  };

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_25%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.14),_transparent_18%)]" />
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <section className="relative min-h-screen px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
              Modern glassmorphism portfolio
            </span>
            <h1 className="text-5xl font-semibold leading-tight tracking-[-0.05em] text-slate-100 sm:text-6xl">
              Aftab Ahamed Bhat
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Computer Science Student | Computer Teacher | Technology Enthusiast
            </p>
            <p className="mt-6 max-w-xl text-slate-400 sm:text-lg">
              Dedicated and goal-oriented Computer Science student with teaching experience and strong technical skills in computer applications, programming fundamentals, communication, and teamwork.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:shadow-glow">
                Contact Me
              </a>
              <a href="#" className="inline-flex rounded-full border border-slate-600 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:bg-slate-800/80">
                Download CV
              </a>
            </div>
            <div className="mt-10 flex flex-col gap-2 rounded-3xl border border-cyan-300/10 bg-slate-950/60 p-6 shadow-soft backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm uppercase text-slate-500">Highlight:</span>
              <div className="text-lg font-semibold text-cyan-300">{displayText}<span className="blinking inline-block w-1 bg-slate-100 align-middle">&nbsp;</span></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="group relative mx-auto flex w-full max-w-sm items-center justify-center"
          >
            <div className="absolute -left-8 top-20 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="absolute -right-8 bottom-16 h-36 w-36 rounded-full bg-violet-400/15 blur-3xl" />
            <div className="relative z-10 aspect-square w-80 rounded-[48px] border border-cyan-400/20 bg-slate-900/80 p-6 shadow-soft backdrop-blur-2xl transition group-hover:-translate-y-2">
              <div className="flex h-full flex-col items-center justify-center gap-6">
                <div className="grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-cyan-400/20 via-slate-800 to-violet-500/20 ring-1 ring-cyan-400/30 shadow-glow">
                  <span className="text-5xl text-cyan-200">👨🏽‍💻</span>
                </div>
                <div className="space-y-2 text-center">
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Profile</p>
                  <h2 className="text-2xl font-semibold text-slate-100">Aftab Ahamed</h2>
                  <p className="text-sm text-slate-400">Nepal-based student and educator building future-ready technology skills.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        transition={{ duration: 0.6 }}
        className="relative border-t border-white/10 px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">About Me</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-100">Personal profile & details</h2>
              <p className="mt-4 max-w-2xl text-slate-400">
                A dedicated Computer Science student and computer teacher from Nepal with a strong academic foundation, hands-on teaching experience, and a passion for technology education.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-soft backdrop-blur-xl">
                <p className="text-sm text-cyan-300">Full Name</p>
                <p className="mt-2 text-lg font-semibold text-slate-100">Aftab Ahamed Bhat</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-soft backdrop-blur-xl">
                <p className="text-sm text-cyan-300">Nationality</p>
                <p className="mt-2 text-lg font-semibold text-slate-100">Nepali</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-soft backdrop-blur-xl">
                <p className="text-sm text-cyan-300">Gender</p>
                <p className="mt-2 text-lg font-semibold text-slate-100">Male</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-soft backdrop-blur-xl">
                <p className="text-sm text-cyan-300">Marital Status</p>
                <p className="mt-2 text-lg font-semibold text-slate-100">Unmarried</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-soft backdrop-blur-xl sm:col-span-2">
                <p className="text-sm text-cyan-300">Address</p>
                <p className="mt-2 text-lg font-semibold text-slate-100">Butwal-7, Rupandehi, Nepal</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-soft backdrop-blur-xl sm:col-span-2">
                <p className="text-sm text-cyan-300">Languages</p>
                <p className="mt-2 text-lg font-semibold text-slate-100">Nepali, English, Hindi</p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-cyan-300/10 bg-slate-900/80 p-6 text-center shadow-soft backdrop-blur-xl transition"
              >
                <p className="text-3xl font-semibold text-cyan-300">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative border-t border-white/10 px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Education</p>
              <h2 className="mt-3 text-4xl font-semibold text-slate-100">Academic timeline</h2>
            </div>
            <p className="max-w-xl text-slate-400">Scroll-triggered timeline animations highlighting the educational path of a dedicated student and educator.</p>
          </div>

          <ul className="relative space-y-6 pl-6 before:absolute before:left-3 before:top-8 before:h-[calc(100%-3rem)] before:w-px before:bg-white/10">
            {timelineItems}
          </ul>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative border-t border-white/10 px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Experience</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-100">Professional teaching journey</h2>
              <p className="mt-4 max-w-2xl text-slate-400">Hands-on classroom experience delivering computer fundamentals and mentoring students with care and structure.</p>

              <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-soft backdrop-blur-xl">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{experience.title}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-100">{experience.organization}</h3>
                  </div>
                  <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">{experience.duration}</span>
                </div>
                <div className="mt-6 space-y-3 text-slate-300">
                  {experience.responsibilities.map((item) => (
                    <p key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <motion.div whileHover={{ y: -6 }} className="rounded-3xl border border-cyan-300/10 bg-slate-900/80 p-6 shadow-soft backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Achievements</p>
                <div className="mt-6 space-y-4 text-slate-300">
                  <p className="text-xl font-semibold text-slate-100">Classroom Mentoring</p>
                  <p className="leading-7">Guided lower secondary students through project-based computer lessons.</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ y: -6 }} className="rounded-3xl border border-cyan-300/10 bg-slate-900/80 p-6 shadow-soft backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Impact</p>
                <div className="mt-6 space-y-4 text-slate-300">
                  <p className="text-xl font-semibold text-slate-100">Student Growth</p>
                  <p className="leading-7">Created a supportive lab environment for hands-on computer learning.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative border-t border-white/10 px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Technical Skills</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-100">Professional software and technical strengths</h2>
              <p className="mt-4 max-w-xl text-slate-400">Organized skills with interactive glass cards and glowing progress bars to show technical fluency and tool mastery.</p>
            </div>
            <div className="grid gap-4">
              {[...softwareSkills, ...technicalSkills].map((skill, index) => (
                <motion.div key={skill} whileHover={{ x: 6 }} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-soft backdrop-blur-xl transition">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-lg font-semibold text-slate-100">{skill}</p>
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">Pro</span>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className={`h-full rounded-full ${accentGradient}`} style={{ width: `${70 + (index * 2) % 20}%` }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="relative border-t border-white/10 px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Soft Skills</p>
            <h2 className="mt-4 text-4xl font-semibold text-slate-100">Professional and interpersonal strengths</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {softSkills.map((skill) => (
              <motion.div key={skill} whileHover={{ scale: 1.03, y: -4 }} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-center shadow-soft backdrop-blur-xl transition">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative border-t border-white/10 px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Languages</p>
              <h2 className="mt-3 text-4xl font-semibold text-slate-100">Communicative proficiency</h2>
            </div>
            <p className="max-w-xl text-slate-400">Animated circular indicators show language confidence for daily teaching and communication.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {languages.map((language) => (
              <motion.div key={language.name} whileHover={{ y: -6 }} className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 text-center shadow-soft backdrop-blur-xl">
                <div className="relative mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-full bg-slate-950/80">
                  <div className="absolute inset-0 rounded-full border border-white/5" />
                  <svg viewBox="0 0 36 36" className="h-32 w-32">
                    <path
                      className="stroke-slate-700"
                      d="M18 2.0845a15.9155 15.9155 0 1 1 0 31.831 15.9155 15.9155 0 0 1 0-31.831"
                      fill="none"
                      strokeWidth="2"
                    />
                    <path
                      className="stroke-cyan-400"
                      d="M18 2.0845a15.9155 15.9155 0 1 1 0 31.831 15.9155 15.9155 0 0 1 0-31.831"
                      fill="none"
                      strokeWidth="2"
                      strokeDasharray={`${language.level}, 100`}
                    />
                  </svg>
                  <span className="relative text-sm font-semibold uppercase tracking-[0.24em] text-slate-100">{language.level}%</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-100">{language.name}</h3>
                <p className="mt-2 text-slate-400">{language.name === 'Nepali' ? 'Native' : 'Professional'}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="relative border-t border-white/10 px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-100">Get in touch with Aftab</h2>
              <p className="mt-4 max-w-xl text-slate-400">Reach out by phone or email, or copy contact information for quick follow-up.</p>
            </div>

            <div className="rounded-[42px] border border-white/10 bg-slate-900/80 p-8 shadow-soft backdrop-blur-xl">
              <div className="grid gap-6">
                <div className="rounded-3xl border border-cyan-300/10 bg-slate-950/70 p-6">
                  <h3 className="text-lg font-semibold text-slate-100">Contact Information</h3>
                  <div className="mt-6 space-y-4 text-slate-300">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Phone</p>
                      <p className="mt-2">9765310667</p>
                      <p>9811570273</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Email</p>
                      <p className="mt-2">aftabahamed12312@gmail.com</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Location</p>
                      <p className="mt-2">Butwal-7, Rupandehi, Nepal</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <a href="mailto:aftabahamed12312@gmail.com" className="rounded-3xl bg-cyan-400/10 px-4 py-5 text-center text-sm font-semibold text-cyan-200 transition hover:-translate-y-1 hover:bg-cyan-400/15">Email</a>
                  <a href="tel:+9779765310667" className="rounded-3xl bg-violet-500/10 px-4 py-5 text-center text-sm font-semibold text-violet-200 transition hover:-translate-y-1 hover:bg-violet-500/15">Call</a>
                  <button onClick={() => onCopy('aftabahamed12312@gmail.com')} className="rounded-3xl bg-white/5 px-4 py-5 text-sm font-semibold text-slate-100 transition hover:-translate-y-1 hover:bg-white/10">Copy Email</button>
                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Map Illustration</p>
                  <div className="mt-5 h-48 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-5 shadow-inner">
                    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/5">
                      <div className="absolute left-[15%] top-[20%] h-16 w-16 rounded-3xl bg-cyan-500/20 blur-2xl" />
                      <div className="absolute right-[15%] top-[15%] h-10 w-10 rounded-3xl bg-violet-400/20 blur-2xl" />
                      <div className="absolute inset-0 grid place-items-center text-sm text-slate-500">Map preview placeholder</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative border-t border-white/10 px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[42px] border border-white/10 bg-slate-900/80 p-10 shadow-soft backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Declaration</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-100">Statement of authenticity</h2>
            <p className="mt-6 max-w-3xl text-slate-400 leading-8">I hereby declare that all the above-mentioned information is true and correct to the best of my knowledge.</p>
          </div>
        </div>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="border-t border-white/10 px-6 py-10 sm:px-10 lg:px-16"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Aftab Ahamed Bhat</p>
            <p className="mt-3 text-sm text-slate-400">© 2026 Aftab Ahamed Bhat. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span className="text-sm">Social</span>
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-3xl border border-white/10 bg-white/5 text-center leading-10 transition hover:bg-cyan-400/15">F</div>
              <div className="h-10 w-10 rounded-3xl border border-white/10 bg-white/5 text-center leading-10 transition hover:bg-purple-500/15">L</div>
              <div className="h-10 w-10 rounded-3xl border border-white/10 bg-white/5 text-center leading-10 transition hover:bg-sky-400/15">G</div>
            </div>
          </div>
          <a href="#top" className="inline-flex rounded-full bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:-translate-y-1 hover:bg-cyan-400/20">Back to top</a>
        </div>
      </motion.footer>
    </main>
  );
}
