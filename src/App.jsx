import { useState } from "react";
import "./App.css";

const EMAIL = "joell.yesudass@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/joel-yesudas/";
const GITHUB = "https://github.com/joelyesudas";
const projects = [
  { id: "01", label: "FULL-STACK · SECURITY", title: "Vigilia AI", description: "A security operations dashboard built to analyze uploaded logs, flag suspicious activity, calculate risk, and map detections to MITRE ATT&CK techniques.", stack: ["React", "Node.js", "Express", "MongoDB", "JWT"], href: GITHUB, icon: "◈" },
  { id: "02", label: "PYTHON · WEB SECURITY", title: "Web Vulnerability Scanner", description: "A Python-based security tool that checks websites for basic security issues, including exposed ports, security-header weaknesses, and website information. Built with Python, Requests, and socket programming.", stack: ["Python", "Requests", "Socket Programming", "Web Security"], href: "https://github.com/joelyesudas/web_vulnerability_scanner", icon: "⌕" },
  { id: "03", label: "WEB DEVELOPMENT · SECURITY", title: "Phishing Link Detector", description: "A security-focused web project exploring URL risk indicators and clear explanations to help users assess suspicious links. Update this description to match the current implementation before publishing.", stack: ["Python", "Flask", "HTML", "CSS", "JavaScript"], href: GITHUB, icon: "⛨" },
];
const skillGroups = [
  { title: "Programming", status: "CORE", skills: ["Python", "C", "JavaScript", "SQL"] },
  { title: "Development", status: "BUILDING", skills: ["React", "Node.js", "Express", "Flask", "HTML", "CSS"] },
  { title: "Systems & Security", status: "PRACTICAL LEARNING", skills: ["Linux", "Kali Linux", "Web Security", "Log Analysis", "Networking"] },
  { title: "Tools & Foundations", status: "IN USE", skills: ["Git", "GitHub", "VS Code", "MongoDB", "OOP", "DSA"] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <header className="site-header">
      <a className="wordmark" href="#home" onClick={closeMenu} aria-label="JYx0 home">JY<span>x0</span><b>_</b></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? "✕" : "☰"}</button>
      <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>
        {["About", "Projects", "Skills", "Achievements", "Education", "Contact"].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
        <a className="nav-cta" href="/resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
      </nav>
    </header>
    <main>
      <section className="hero page-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow-pill"><span className="pulse-dot" /> COMPUTER ENGINEERING · 2027</div>
          <p className="overline">SOFTWARE · PROBLEM SOLVING · SECURITY</p>
          <h1>Building <em>software.</em><br />Solving problems.<br /><em>Securing systems.</em></h1>
          <p className="hero-name">JOEL YESUDAS <span>// JYx0</span></p>
          <p className="hero-description">I'm a Computer Engineering student who enjoys building practical applications, solving technical problems, and exploring how to make systems more secure.</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#projects">Explore projects <span>↗</span></a><a className="btn btn-ghost" href="/resume.pdf" download="Joel_Yesudas_Resume.pdf">Download resume <span>↓</span></a></div>
          <div className="social-row"><a href={GITHUB} target="_blank" rel="noreferrer">GitHub ↗</a><i /><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn ↗</a><i /><a href={`mailto:${EMAIL}`}>Email ↗</a></div>
        </div>
        <div className="hero-visual">
          <div className="visual-grid" />
          <div className="corner corner-tl" /><div className="corner corner-tr" /><div className="corner corner-bl" /><div className="corner corner-br" />
          <div className="photo-frame"><div className="frame-top"><span>PROFILE / 001</span><span className="live-label"><span className="pulse-dot" /> AVAILABLE</span></div><img src="/images/joel.png" alt="Joel Yesudas" className="hero-photo" /><div className="photo-caption"><div><small>OPERATOR</small><strong>Joel Yesudas</strong></div><div><small>FOCUS</small><strong>Build · Learn · Improve</strong></div></div></div>
          <div className="float-chip chip-one"><span className="chip-symbol">⌘</span><span>Problem solver</span></div><div className="float-chip chip-two"><span className="pulse-dot" /><span>Open to opportunities</span></div><div className="visual-code code-left">&#123; &#125;</div><div className="visual-code code-right">&lt;/&gt;</div>
        </div>
        <div className="hero-stats"><div><small>PROFILE</small><strong>Computer Engineering</strong></div><div><small>INTERESTS</small><strong>Software + Security</strong></div><div><small>BASE</small><strong>Mumbai, India</strong></div><div><small>STATUS</small><strong><span className="pulse-dot" /> Exploring opportunities</strong></div></div>
      </section>

      <section className="section page-wrap" id="about"><div className="section-head"><p className="section-index">01 / ABOUT</p><h2>Curious by nature.<br /><em>Builder by practice.</em></h2><p className="section-intro">A balanced mix of software engineering, technical curiosity, and security-minded thinking.</p></div>
        <div className="about-layout"><article className="panel about-panel"><div className="panel-label"><span>◈</span> PROFILE / JOEL YESUDAS</div><p className="about-lead">I like understanding how things work — then using that understanding to build something useful.</p><p>I'm pursuing Computer Engineering at Fr. C. Rodrigues Institute of Technology, Vashi. My interests span application development, problem-solving, and cybersecurity. I learn by building projects, experimenting with tools, and taking on technical challenges.</p><p>I'm looking for opportunities where I can contribute, learn from a team, and grow as a versatile engineer.</p></article>
        <aside className="panel terminal-panel"><div className="terminal-bar"><span>jyx0@portfolio:~</span><span className="window-dots">● ● ●</span></div><div className="terminal-lines"><p><b>$</b> whoami</p><p className="terminal-result">Joel Yesudas</p><p><b>$</b> interests --list</p><p className="terminal-result">[ software, problem-solving, security ]</p><p><b>$</b> current_mode</p><p className="terminal-result">learning_and_building<span className="cursor">_</span></p></div></aside></div>
      </section>

      <section className="section page-wrap" id="projects"><div className="section-head section-head-row"><div><p className="section-index">02 / SELECTED WORK</p><h2>Projects built to <em>learn by doing.</em></h2></div><a className="text-link" href={GITHUB} target="_blank" rel="noreferrer">All repositories ↗</a></div>
        <div className="project-grid">{projects.map(project => <article className="project-card" key={project.id}><div className="project-card-top"><span className="project-number">PROJECT / {project.id}</span><span className="project-icon">{project.icon}</span></div><p className="project-label">{project.label}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tag-row">{project.stack.map(item => <span key={item}>{item}</span>)}</div><a className="project-link" href={project.href} target="_blank" rel="noreferrer">View repository <span>↗</span></a></article>)}</div>
        <p className="note-line"><span>NOTE</span> Project descriptions and repository links should be checked against each project's current implementation before the site goes public.</p>
      </section>

      <section className="section page-wrap" id="skills"><div className="section-head section-head-row"><div><p className="section-index">03 / SKILLS & TOOLING</p><h2>Tools for the <em>work ahead.</em></h2></div><p className="section-intro">A growing toolkit across development, core CS, and security.</p></div><div className="skill-grid">{skillGroups.map((group,index) => <article className="skill-panel" key={group.title}><div className="skill-panel-top"><span>0{index+1} / {group.title}</span><small>{group.status}</small></div><div className="tag-row">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div></section>

      <section className="section page-wrap" id="achievements"><div className="section-head"><p className="section-index">04 / MILESTONES</p><h2>Progress worth <em>sharing.</em></h2></div><div className="achievement-grid">
        <article className="achievement-card"><div className="achievement-top"><span>01 / CERTIFICATION</span><span className="achievement-mark">↗</span></div><p className="achievement-highlight">ISC² CC</p><h3>Certified in Cybersecurity</h3><p>Foundational cybersecurity certification covering security principles and practices.</p><small>COMPLETED · 2025</small></article>
        <article className="achievement-card"><div className="achievement-top"><span>02 / CTF COMPETITION</span><span className="achievement-mark">⌘</span></div><p className="achievement-highlight">1st place</p><h3>HackerForge CTF</h3><p>Secured 1st position in HackerForge Capture The Flag, organized by Agnel Cybercell at Fr. C. Rodrigues Institute of Technology, Vashi.</p><small>SEPTEMBER · 2025</small></article>
        <article className="achievement-card"><div className="achievement-top"><span>03 / CTF COMPETITION</span><span className="achievement-mark">⌘</span></div><p className="achievement-highlight">1st place</p><h3>The Daltons Break Through CTF</h3><p>Won 1st place as part of Team FL4M3 K4153R in this time-bound cybersecurity CTF organized by AGNEL CYBER CELL (ACC) on 14 October.</p><small>COMPETITION WINNER · 14 OCTOBER 2026</small></article>
        <article className="achievement-card"><div className="achievement-top"><span>04 / CTF COMPETITION</span><span className="achievement-mark">⌘</span></div><p className="achievement-highlight">3,210 points</p><h3>MIT Bengaluru CTF</h3><p>Earned 3,210 points while competing in cybersecurity challenges at the MIT Bengaluru CTF.</p><small>CTF PARTICIPATION</small></article>
      </div></section>

      <section className="section page-wrap" id="education"><div className="section-head"><p className="section-index">05 / EDUCATION</p><h2>Building the <em>foundation.</em></h2></div><div className="education-list">
        <article className="education-item"><span className="education-dot"/><div><small>JUL 2023 — PRESENT</small><h3>Fr. C. Rodrigues Institute of Technology</h3><p>Bachelor of Engineering · Computer Engineering</p></div><strong>2027</strong></article>
        <article className="education-item"><span className="education-dot"/><div><small>2021 — 2023</small><h3>Fr. Agnel Multipurpose School and Junior College</h3><p>Higher Secondary Certificate · Science</p></div><strong>HSC</strong></article>
        <article className="education-item"><span className="education-dot"/><div><small>2009 — 2021</small><h3>Carmel Convent High School</h3><p>Secondary School Certificate</p></div><strong>SSC</strong></article>
      </div></section>

      <section className="contact-section page-wrap" id="contact"><div className="contact-copy"><p className="section-index">06 / CONTACT</p><h2>Let's build something <em>meaningful.</em></h2><p>Have an opportunity, project, or idea to discuss? I'd be glad to connect.</p><a className="btn btn-primary" href={`mailto:${EMAIL}?subject=Let's%20connect`}>Start a conversation ↗</a></div><div className="contact-panel panel"><div className="terminal-bar"><span>CONTACT.EXE</span><span className="live-label"><span className="pulse-dot"/> READY</span></div><a href={`mailto:${EMAIL}`}><small>EMAIL</small><strong>{EMAIL}</strong><span>↗</span></a><a href={LINKEDIN} target="_blank" rel="noreferrer"><small>LINKEDIN</small><strong>linkedin.com/in/joel-yesudas</strong><span>↗</span></a><a href={GITHUB} target="_blank" rel="noreferrer"><small>GITHUB</small><strong>github.com/joelyesudas</strong><span>↗</span></a><a href="/resume.pdf" download="Joel_Yesudas_Resume.pdf"><small>RESUME</small><strong>Download PDF</strong><span>↓</span></a></div></section>
    </main>
    <footer className="site-footer page-wrap"><a className="wordmark" href="#home">JY<span>x0</span><b>_</b></a><p>Built with curiosity. Designed for what comes next.</p><a href="#home">Back to top ↑</a></footer>
  </>;
}
export default App;
