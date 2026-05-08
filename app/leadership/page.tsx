"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LeadershipPage() {
  return (
    <main style={styles.main}>
      
      {/* ================= HERO ================= */}
      <section style={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={styles.title}>Leadership Journey</h1>

          <p style={styles.subtitle}>
            A progression of student leadership, youth empowerment,
            and institutional coordination across local and national platforms.
          </p>
        </motion.div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Leadership Timeline</h2>

        <div style={styles.timeline}>

          <LeadershipCard
            role="Chairperson"
            org="TSAN"
            period="Recent"
            desc="Leading organizational coordination, youth engagement, and institutional development initiatives."
          />

          <LeadershipCard
            role="Exchange Coordinator"
            org="IAAS Nepal"
            period="2021–2022"
            desc="Coordinated exchange programs, student mobility initiatives, and international agricultural learning networks."
          />

          <LeadershipCard
            role="Member"
            org="NYCA Pokhara"
            period="2021–2022"
            desc="Engaged in youth-led civic initiatives, community development programs, and local empowerment activities."
          />

          <LeadershipCard
            role="Secretary"
            org="Serachaur Youth Club"
            period="2019–2023"
            desc="Managed organizational operations, youth engagement activities, and community-level development projects."
          />

          <LeadershipCard
            role="Chairperson"
            org="Cleanliness Child Club (Serachaur)"
            period="Early Leadership"
            desc="Led environmental cleanliness and awareness campaigns, contributing to making Serachaur a model eco-friendly village."
          />

        </div>
      </section>

      {/* ================= IMPACT SECTION ================= */}
      <section style={styles.sectionDark}>
        <h2 style={styles.sectionTitle}>Leadership Impact</h2>

        <div style={styles.grid}>

          <ImpactCard
            value="Community"
            label="Grassroots Transformation"
          />

          <ImpactCard
            value="Youth"
            label="Empowerment & Mobilization"
          />

          <ImpactCard
            value="Policy"
            label="Organizational Governance"
          />

          <ImpactCard
            value="Global"
            label="International Exposure"
          />

        </div>
      </section>

      {/* ================= LEADERSHIP PHILOSOPHY ================= */}
      <section style={styles.section}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={styles.center}
        >
          <h2 style={styles.sectionTitle}>Leadership Philosophy</h2>

          <p style={styles.text}>
            I believe leadership is not position—it is responsibility.
            My journey across student organizations has been driven by
            service, coordination, and long-term impact creation.
          </p>

          <p style={styles.text}>
            From grassroots environmental action to national-level youth
            coordination, each role has strengthened my ability to
            mobilize people, design systems, and deliver results.
          </p>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section style={styles.cta}>
        <h2 style={styles.bigText}>Let’s Build Future Leadership Together</h2>

        <Link href="/contact" style={styles.button}>
          Connect With Me
        </Link>
      </section>

    </main>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function LeadershipCard({ role, org, period, desc }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      style={styles.card}
    >
      <div style={styles.cardTop}>
        <h3 style={styles.role}>{role}</h3>
        <span style={styles.period}>{period}</span>
      </div>

      <h4 style={styles.org}>{org}</h4>

      <p style={styles.desc}>{desc}</p>
    </motion.div>
  );
}

function ImpactCard({ value, label }: any) {
  return (
    <motion.div whileHover={{ y: -5 }} style={styles.impactCard}>
      <h3 style={styles.impactValue}>{value}</h3>
      <p style={styles.impactLabel}>{label}</p>
    </motion.div>
  );
}

/* =========================================================
   STYLES (PROFESSIONAL PORTFOLIO SYSTEM)
========================================================= */

const styles: any = {
  main: {
    background: "#020617",
    color: "#fff",
    fontFamily: "sans-serif",
  },

  hero: {
    padding: "120px 40px",
    textAlign: "center",
  },

  title: {
    fontSize: "64px",
  },

  subtitle: {
    color: "#94a3b8",
    maxWidth: "700px",
    margin: "20px auto",
    lineHeight: "1.7",
  },

  section: {
    padding: "100px 40px",
    maxWidth: "1100px",
    margin: "auto",
  },

  sectionDark: {
    padding: "100px 40px",
    background: "#0b1220",
  },

  sectionTitle: {
    fontSize: "34px",
    marginBottom: "40px",
  },

  timeline: {
    display: "grid",
    gap: "20px",
  },

  card: {
    padding: "25px",
    border: "1px solid #1e293b",
    borderRadius: "12px",
    background: "#0f172a",
  },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
  },

  role: {
    color: "#38bdf8",
  },

  period: {
    color: "#94a3b8",
    fontSize: "14px",
  },

  org: {
    marginTop: "10px",
  },

  desc: {
    color: "#94a3b8",
    marginTop: "10px",
    lineHeight: "1.6",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "20px",
  },

  impactCard: {
    padding: "20px",
    border: "1px solid #1e293b",
    borderRadius: "12px",
    textAlign: "center",
  },

  impactValue: {
    color: "#38bdf8",
    fontSize: "24px",
  },

  impactLabel: {
    color: "#94a3b8",
  },

  center: {
    textAlign: "center",
    maxWidth: "700px",
    margin: "auto",
  },

  text: {
    color: "#94a3b8",
    lineHeight: "1.8",
    marginBottom: "15px",
  },

  cta: {
    padding: "140px 40px",
    textAlign: "center",
  },

  bigText: {
    fontSize: "50px",
  },

  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "14px 22px",
    background: "#2563eb",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: "none",
  },
};