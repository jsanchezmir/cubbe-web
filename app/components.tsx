import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const basePath = process.env.GITHUB_ACTIONS ? "/cubbe-web" : "";

export function Header() {
  return <header className="site-header wrap"><Link className="brand" href="/"><span className="brand-mark"><Image src={`${basePath}/assets/icon/cubbe-mark.svg`} alt="" width={22} height={22} /></span>Cubbe</Link><nav className="nav"><Link href="/#features">Features</Link><Link href="/#ai">AI assistant</Link><Link href="/support">Support</Link></nav><ThemeToggle /></header>;
}

export function Footer() {
  return <footer className="site-footer wrap"><span>© 2026 Cubbe</span><div className="footer-links"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/support">Support</Link></div></footer>;
}
