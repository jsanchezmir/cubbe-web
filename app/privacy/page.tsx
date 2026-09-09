import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return <main className="page"><Header /><article className="prose wrap"><Link className="back" href="/">← Back to Cubbe</Link><p className="eyebrow">Privacy</p><h1>Privacy policy</h1><p className="updated">Last updated: September 9, 2026</p>
    <h2>What Cubbe stores</h2><p>Cubbe stores the information you add to your account, including your name, email address, addresses, locations, boxes, items, photos, descriptions, and tags. This information is used to provide the organization and sharing features of the app.</p>
    <h2>Your content</h2><p>You are responsible for making sure that you have the rights and permissions needed to upload photos and other content. Do not upload content that you are not authorized to use or that contains sensitive information you do not want processed or shared through the app.</p>
    <h2>AI-assisted cataloging</h2><p>When you use the AI assistant, photos and related item information may be processed to identify useful details and suggest descriptions, categories, and tags. AI-generated suggestions may be inaccurate or incomplete. You should review and edit the results before saving or relying on them. Cubbe is not responsible for the content, classification, or consequences of an AI-generated suggestion.</p>
    <h2>How we use information</h2><p>We use account and inventory information to operate, secure, maintain, and improve Cubbe. We do not sell your personal information. Information may be processed by service providers that help us provide authentication, storage, hosting, analytics, or AI-assisted features. Those providers may process information only as needed to provide their services and under their applicable terms and privacy commitments.</p>
    <h2>Retention and deletion</h2><p>We retain information for as long as needed to provide the service, comply with legal obligations, resolve disputes, and enforce agreements. You can edit or delete content in the app. To request account or data deletion, contact <a className="text-link" href="mailto:support@cubbe.app">support@cubbe.app</a>.</p>
    <h2>Your choices</h2><p>You can choose whether to use the AI assistant and can review, correct, or remove information before relying on it. You can also contact us with questions about your personal information or to request deletion, subject to applicable legal requirements.</p>
    <h2>Contact</h2><p>Questions about privacy can be sent to <a className="text-link" href="mailto:support@cubbe.app">support@cubbe.app</a>.</p>
  </article><Footer /></main>;
}
