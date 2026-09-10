import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components";

export const metadata: Metadata = { title: "Support" };

export default function Support() { return <main className="page"><Header /><article className="prose wrap"><Link className="back" href="/">← BACK TO CUBBE</Link><p className="eyebrow">Support</p><h1>Let’s get things sorted.</h1><p>If you need help with Cubbe, have a question about your account, or want to share feedback, email us and we’ll get back to you as soon as possible.</p><h2>Contact support</h2><p><a className="text-link" href="mailto:support@cubbe.app">support@cubbe.app</a></p><h2>Common questions</h2><p><strong>How does the AI assistant work?</strong><br />Take photos of your belongings and Cubbe analyzes them to suggest useful item details, descriptions, categories, and tags. You can review and edit everything before saving.</p><p><strong>Can I share my spaces?</strong><br />Yes. Cubbe lets you connect people to an address so you can organize and keep shared belongings up to date.</p><p><strong>How do I delete my account?</strong><br />Open your profile in the app and choose Delete user. If you need help, contact support.</p></article><Footer /></main>; }
