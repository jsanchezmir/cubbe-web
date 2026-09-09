import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components";

export const metadata: Metadata = { title: "About Jordi Sanchez" };

export default function About() {
  return <main className="page"><Header /><article className="about-page wrap"><Link className="back" href="/">← Back to Cubbe</Link><div className="about-intro"><img className="about-photo" src="/assets/jordi-sanchez.png" alt="Jordi Sanchez" /><div><p className="eyebrow">The person behind Cubbe</p><h1>Jordi Sanchez</h1><p className="about-lede">Developer, builder, and lifelong organizer of ideas.</p></div></div><div className="about-copy"><p>I like turning small frustrations into simple, well-made tools. Cubbe is one of those ideas: a way to bring a little more clarity to the things we own and the spaces we share.</p><p>Outside of code, I’m passionate about sports — especially cycling and football. I’m also a proud FC Barcelona fan.</p></div><div className="about-links"><a href="https://github.com/jsanchezmir" target="_blank" rel="noreferrer"><span>GitHub</span><small>@jsanchezmir</small>↗</a><a href="https://www.linkedin.com/in/jordisanchezmir/" target="_blank" rel="noreferrer"><span>LinkedIn</span><small>Connect with me</small>↗</a><a href="https://www.instagram.com/j00ye/" target="_blank" rel="noreferrer"><span>Instagram</span><small>@j00ye</small>↗</a></div></article><Footer /></main>;
}
