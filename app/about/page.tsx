import type { Metadata } from "next";
import Link from "next/link";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { siGithub, siInstagram } from "simple-icons";
import { Footer, Header } from "../components";

export const metadata: Metadata = { title: "About Jordi Sanchez" };

const socialLinks = [
  ["GitHub", "@jsanchezmir", "https://github.com/jsanchezmir", "github"],
  ["LinkedIn", "Connect with me", "https://www.linkedin.com/in/jordisanchezmir/", "linkedin"],
  ["Instagram", "@j00ye", "https://www.instagram.com/j00ye/", "instagram"],
  ["Email", "jordi.sanchez@cubbe.app", "mailto:jordi.sanchez@cubbe.app", "email"],
];

const linkedinPath = Array.isArray(faLinkedinIn.icon[4]) ? faLinkedinIn.icon[4].join(" ") : faLinkedinIn.icon[4];

export default function About() {
  return (
    <main className="page">
      <Header />
      <article className="about-page wrap">
        <Link className="back" href="/">← BACK TO CUBBE</Link>

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
              <span className="about-link-title">{name}</span>
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
