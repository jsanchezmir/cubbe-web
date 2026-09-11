import Link from "next/link";
import { appStoreUrl } from "./app-store";
import { Footer, Header } from "./components";

export default function NotFound() {
  return (
    <main className="page">
      <Header />
      <section className="fallback-page wrap">
        <p className="eyebrow">Cubbe link</p>
        <h1>Open this in Cubbe.</h1>
        <p className="fallback-copy">
          This link is ready for the Cubbe app. Download Cubbe from the App Store,
          then open the link again to continue there.
        </p>
        <div className="actions">
          <a className="button button-primary" href={appStoreUrl}>Download Cubbe</a>
          <Link className="button button-secondary" href="/">Visit cubbe.app</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
