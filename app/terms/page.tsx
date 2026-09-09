import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components";

export const metadata: Metadata = { title: "Terms of Use" };

export default function Terms() {
  return <main className="page"><Header /><article className="prose wrap"><Link className="back" href="/">← Back to Cubbe</Link><p className="eyebrow">Terms</p><h1>Terms of use</h1><p className="updated">Last updated: September 9, 2026</p>
    <h2>Using Cubbe</h2><p>These Terms of Use govern your use of Cubbe. By using the app or website, you agree to these terms. You may use Cubbe to organize your own belongings and spaces you are authorized to access. Keep your account information accurate and protect your sign-in credentials.</p>
    <h2>Your content and responsibility</h2><p>You retain ownership of the content you add to Cubbe, including photos, item names, descriptions, tags, and other information. You are solely responsible for the content you add, the items and spaces you record, and your use of information shown in the app.</p><p>You must make sure that you have the necessary rights and permissions to upload photos and other content. You are responsible for checking that your inventory is accurate, lawful, safe, and suitable for your intended use. Do not use Cubbe as the sole record for valuable, hazardous, regulated, or safety-critical items.</p>
    <h2>AI-generated suggestions</h2><p>Cubbe may use artificial intelligence to analyze photos and suggest item names, descriptions, categories, tags, or other information. AI-generated content is provided for convenience only. It may be incomplete, incorrect, misleading, or inappropriate, and Cubbe does not guarantee its accuracy, reliability, completeness, or availability.</p><p>You are responsible for reviewing, correcting, and approving AI-generated information before saving or relying on it. Cubbe is not responsible for decisions you make, actions you take, or losses that result from relying on an AI response or from an item being incorrectly identified, described, categorized, tagged, or stored.</p>
    <h2>Availability and data</h2><p>Cubbe is provided on an “as available” basis. We do not guarantee that the app, AI features, stored content, synchronization, or sharing features will always be available, uninterrupted, secure, or error-free. You should keep independent copies of important information and photos.</p>
    <h2>Subscriptions</h2><p>Some features may require a paid plan. Subscription terms, prices, renewals, and cancellation are shown in the app and managed through your Apple account.</p>
    <h2>Disclaimers and limitation of liability</h2><p>To the fullest extent permitted by applicable law, Cubbe and its owner are not responsible for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of data, belongings, profits, revenue, goodwill, or opportunities arising from or related to your use of Cubbe, your content, an AI response, an incorrect item record, or an interruption of the service.</p><p>Nothing in these terms excludes or limits liability that cannot legally be excluded or limited under applicable law.</p>
    <h2>Contact</h2><p>For questions about these terms, contact <a className="text-link" href="mailto:jordisanchezmir@gmail.com">jordisanchezmir@gmail.com</a>.</p>
  </article><Footer /></main>;
}
