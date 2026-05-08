import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Suraj Bhandari | Agricultural Economist",
  description:
    "Official Portfolio of Suraj Bhandari - Agricultural Economist, Researcher, Policy Analyst & Youth Leader",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={styles.body}>

        {/* ================= BACKGROUND SYSTEM ================= */}

        <div style={styles.bgGradient} />
        <div style={styles.bgGrid} />
        <div style={styles.glowBlue} />
        <div style={styles.glowCyan} />
        <div style={styles.glowPurple} />

        {/* ================= TOP INFO BAR ================= */}

        <div style={styles.topBar}>
          <div style={styles.topBarInner}>

            <div style={styles.topLeft}>
              <span style={styles.dot} />
              <p style={styles.topText}>
                Agricultural Economist • Researcher • Youth Leader • Policy Enthusiast
              </p>
            </div>

            <div style={styles.topRight}>
              <span>Nepal</span>
              <span>Global Leadership</span>
              <span>MSc. Agricultural Economics</span>
            </div>

          </div>
        </div>

        {/* ================= NAVBAR ================= */}

        <header style={styles.header}>
          <nav style={styles.nav}>

            {/* LOGO */}
            <Link href="/" style={styles.logoWrap}>
              <div style={styles.logo}>
                <span style={styles.logoText}>SB</span>
              </div>

              <div>
                <h1 style={styles.name}>Suraj Bhandari</h1>
                <p style={styles.role}>AGRICULTURAL ECONOMIST</p>
              </div>
            </Link>

            {/* NAV LINKS */}
            <div style={styles.navCenter}>
              {navItems.map((item, i) => (
                <Link key={i} href={item.href} style={styles.navLink}>
                  {item.name}
                </Link>
              ))}
            </div>

            {/* SOCIAL + CTA */}
            <div style={styles.right}>

              <div style={styles.social}>
                <a style={styles.socialBtn} href="https://linkedin.com" target="_blank">In</a>
                <a style={styles.socialBtn} href="https://x.com" target="_blank">X</a>
                <a style={styles.socialBtn} href="https://facebook.com" target="_blank">Fb</a>
              </div>

              <Link href="/contact" style={styles.cta}>
                Let’s Collaborate
              </Link>

            </div>

          </nav>
        </header>

        {/* ================= FLOAT NAV ================= */}

        <div style={styles.floatNav}>
          {floatNav.map((item, i) => (
            <Link key={i} href={item.href} style={styles.floatBtn}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* ================= FLOAT CARD ================= */}

        <div style={styles.floatCard}>
          <h3>OPEN FOR</h3>
          <p>Research • Policy • Collaboration • Conferences</p>
          <Link href="/contact" style={styles.floatCTA}>
            Contact Me
          </Link>
        </div>

        {/* ================= PAGE CONTENT ================= */}

        <main style={styles.main}>
          {children}
        </main>

        {/* ================= FOOTER ================= */}

        <footer style={styles.footer}>
          <div style={styles.footerInner}>

            <div>
              <h2>Suraj Bhandari</h2>
              <p>
                Agricultural economist focused on rural transformation,
                policy systems, and sustainable development.
              </p>
            </div>

            {footerSections.map((sec, i) => (
              <div key={i}>
                <h4>{sec.title}</h4>
                {sec.links.map((l, j) => (
                  <Link key={j} href={l.href}>
                    {l.name}
                  </Link>
                ))}
              </div>
            ))}

          </div>

          <div style={styles.footerBottom}>
            © 2026 Suraj Bhandari
          </div>
        </footer>

      </body>
    </html>
  );
}

/* ================= DATA ================= */

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Projects", href: "/projects" },
  { name: "Leadership", href: "/leadership" },
  { name: "Experience", href: "/experience" },
  { name: "Achievements", href: "/achievements" },
  { name: "Contact", href: "/contact" },
];

const floatNav = [
  { label: "H", href: "/" },
  { label: "A", href: "/about" },
  { label: "R", href: "/research" },
  { label: "P", href: "/projects" },
];

const footerSections = [
  {
    title: "Navigation",
    links: navItems,
  },
  {
    title: "Focus",
    links: [
      { name: "Agricultural Economics", href: "/" },
      { name: "Policy Research", href: "/" },
      { name: "Leadership", href: "/" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "LinkedIn", href: "/" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

/* ================= STYLES ================= */

const styles: any = {
  body: {
    margin: 0,
    background: "#020617",
    color: "#fff",
    fontFamily: "Inter",
  },

  bgGradient: {
    position: "fixed",
    inset: 0,
    background: "linear-gradient(135deg,#020617,#0f172a,#071226)",
    zIndex: -10,
  },

  bgGrid: {
    position: "fixed",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
    zIndex: -9,
  },

  glowBlue: { position: "fixed", width: 600, height: 600, background: "rgba(37,99,235,0.2)", filter: "blur(150px)", top: -200, left: -200, zIndex: -8 },
  glowCyan: { position: "fixed", width: 600, height: 600, background: "rgba(14,165,233,0.15)", filter: "blur(150px)", bottom: -200, right: -200, zIndex: -8 },
  glowPurple: { position: "fixed", width: 500, height: 500, background: "rgba(168,85,247,0.1)", filter: "blur(150px)", top: "40%", left: "50%", zIndex: -8 },

  topBar: { position: "sticky", top: 0, background: "rgba(2,6,23,0.7)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.05)" },
  topBarInner: { display: "flex", justifyContent: "space-between", padding: "12px 40px" },

  topLeft: { display: "flex", gap: 10, alignItems: "center" },
  dot: { width: 8, height: 8, background: "#3b82f6", borderRadius: 20 },
  topText: { color: "#cbd5e1", fontSize: 13 },

  topRight: { display: "flex", gap: 20, color: "#94a3b8", fontSize: 12 },

  header: { position: "sticky", top: 40, zIndex: 50, backdropFilter: "blur(20px)" },
  nav: { display: "flex", justifyContent: "space-between", padding: "20px 40px" },

  logoWrap: { display: "flex", gap: 15, textDecoration: "none", color: "#fff", alignItems: "center" },
  logo: { width: 60, height: 60, borderRadius: 20, background: "linear-gradient(#2563eb,#38bdf8)" },
  logoText: { fontWeight: 900, fontSize: 24, display: "flex", justifyContent: "center", alignItems: "center", height: "100%" },

  name: { margin: 0 },
  role: { margin: 0, color: "#94a3b8", fontSize: 12 },

  navCenter: { display: "flex", gap: 18, background: "rgba(255,255,255,0.03)", padding: 10, borderRadius: 20 },

  navLink: { color: "#e2e8f0", textDecoration: "none", padding: "8px 12px" },

  right: { display: "flex", gap: 15 },

  social: { display: "flex", gap: 10 },
  socialBtn: { padding: 10, borderRadius: 10, background: "rgba(255,255,255,0.05)", color: "#fff", textDecoration: "none" },

  cta: { padding: "12px 18px", background: "#2563eb", borderRadius: 12, color: "#fff", textDecoration: "none" },

  floatNav: { position: "fixed", left: 20, top: "50%", display: "flex", flexDirection: "column", gap: 10 },

  floatBtn: { padding: 15, background: "rgba(255,255,255,0.05)", borderRadius: 12, color: "#fff", textDecoration: "none" },

  floatCard: { position: "fixed", right: 20, bottom: 20, width: 260, padding: 20, background: "rgba(255,255,255,0.05)", borderRadius: 20 },

  floatCTA: { display: "block", marginTop: 10, textAlign: "center", background: "#2563eb", padding: 10, borderRadius: 10, color: "#fff", textDecoration: "none" },

  main: { padding: 40 },

  footer: { marginTop: 100, borderTop: "1px solid rgba(255,255,255,0.05)" },
  footerInner: { display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: 60, gap: 40 },
  footerBottom: { textAlign: "center", padding: 20, color: "#64748b" },
};