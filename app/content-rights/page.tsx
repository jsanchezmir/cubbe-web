import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components";

export const metadata: Metadata = { title: "Content rights" };

export default function ContentRights() {
  return <main className="page"><Header /><article className="prose wrap"><Link className="back" href="/">← BACK TO CUBBE</Link><p className="eyebrow">Content rights</p><h1>Content and intellectual property</h1><p className="updated">Last updated: September 26, 2026</p>
    <h2>Cubbe-owned content</h2><p>The Cubbe app, website, branding, product design, software, and original editorial materials are owned by Jordi Sanchez for Cubbe or used with permission. They may not be copied, modified, distributed, or used outside the service without permission.</p>
    <h2>Your content</h2><p>Cubbe lets you add photos, item names, descriptions, tags, and other inventory information. You retain ownership of the content you submit. By using Cubbe, you confirm that you have the rights and permissions needed to upload and use that content and to share it with people you authorize in the app.</p>
    <h2>Third-party content and services</h2><p>Cubbe may display content that you or other authorized users add to a shared space. Some features also use third-party services to provide authentication, storage, hosting, and AI-assisted processing. Those services are used to operate Cubbe and do not give Cubbe ownership of your content.</p>
    <h2>Questions or rights requests</h2><p>If you believe content in Cubbe infringes your rights, or if you have a question about content permissions, contact <a className="text-link" href="mailto:support@cubbe.app">support@cubbe.app</a>.</p>
  </article><Footer /></main>;
}
