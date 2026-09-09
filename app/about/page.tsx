import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components";

export const metadata: Metadata = { title: "About Jordi Sanchez" };

const socialLinks = [
  ["GitHub", "@jsanchezmir", "https://github.com/jsanchezmir", "github"],
  ["LinkedIn", "Connect with me", "https://www.linkedin.com/in/jordisanchezmir/", "linkedin"],
  ["Instagram", "@j00ye", "https://www.instagram.com/j00ye/", "instagram"],
  ["Email", "jordi.sanchez@cubbe.app", "mailto:jordi.sanchez@cubbe.app", "email"],
];

function SocialIcon({ name }: { name: string }) {
  if (name === "github") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0 1 12 8.01c.85 0 1.71.11 2.51.33 1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>;
  if (name === "linkedin") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.08 7.1a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1ZM3.7 20.5h2.76V9.15H3.7V20.5ZM8.2 9.15v11.36h2.76v-5.62c0-1.48.28-2.91 2.11-2.91 1.8 0 1.82 1.69 1.82 3.01v5.52h2.76v-6.1c0-3-0.65-5.3-4.14-5.3-1.68 0-2.8.92-3.26 1.79h-.04V9.15H8.2Z" /></svg>;
  if (name === "instagram") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.4" cy="6.7" r="1" className="social-icon-fill" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
}

export default function About() {
  return (
    <main className="page">
      <Header />
      <article className="about-page wrap">
        <Link className="back" href="/">← Back to Cubbe</Link>

        <header className="about-intro">
          <img className="about-photo" src="/assets/jordi-sanchez.png" alt="Jordi Sanchez" />
          <div>
            <p className="eyebrow">The person behind Cubbe</p>
            <h1>Jordi Sanchez</h1>
            <p className="about-lede">Senior iOS and Web Engineer.</p>
          </div>
        </header>

        <div className="about-copy">
          <section className="about-block">
            <p className="eyebrow">A little context</p>
            <h2>Building things that feel clear.</h2>
            <p>I’m a Senior iOS and Web Engineer who enjoys turning ideas into simple, useful, and carefully crafted products. I care about the details that make software feel natural: a thoughtful interaction, a clear piece of information, and a design that gets out of the way.</p>
            <p>Cubbe started from a small everyday frustration — not knowing exactly where things were stored. It became an opportunity to build something calmer: a practical system for organizing the objects, places, and shared spaces that make up our lives.</p>
          </section>

          <section className="about-block">
            <p className="eyebrow">Outside the screen</p>
            <h2>Movement, competition, and a good match.</h2>
            <p>When I’m not building software, I’m passionate about sports. Cycling gives me time to explore and reset; football brings the energy, tactics, and emotion that make sport so compelling.</p>
            <p>And when it comes to football, I’m a proud FC Barcelona fan.</p>
          </section>
        </div>

        <section className="about-links" aria-label="Social links">
          {socialLinks.map(([name, detail, url, icon]) => (
            <a href={url} key={name} target="_blank" rel="noreferrer">
              <span className="about-link-title"><SocialIcon name={icon} />{name}</span>
              <small>{detail}</small>
              <span className="about-link-arrow">↗</span>
            </a>
          ))}
        </section>
      </article>
      <Footer />
    </main>
  );
}
