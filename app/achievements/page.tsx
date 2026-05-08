"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================
   IMPACT DATABASE
========================= */

const impacts = [
  {
    id: 1,
    title: "International Crisis Coordination (Israel–Nepal)",
    category: "Crisis Leadership",
    location: "Israel / Nepal",
    year: "2023",
    role: "Coordinator & Advocate",
    evidence:
      "Media engagement, coordination with institutions, communication with stakeholders during crisis.",
    outcome:
      "Supported evacuation awareness and coordination efforts for Nepali students.",
    tags: ["Leadership", "Crisis", "International", "Coordination"],
  },

  {
    id: 2,
    title: "United People Global Sustainability Leadership",
    category: "Global Certification",
    location: "Switzerland (Remote Global Program)",
    year: "2024",
    role: "Fellow (Distinction)",
    evidence:
      "Completion of global sustainability leadership curriculum and applied project work.",
    outcome:
      "Strengthened global perspective on sustainability and systems thinking.",
    tags: ["Global", "Sustainability", "Leadership"],
  },

  {
    id: 3,
    title: "Cleanliness Child Club Environmental Transformation",
    category: "Community Impact",
    location: "Serachaur, Nepal",
    year: "2015",
    role: "Chairperson",
    evidence:
      "Community mobilization, environmental awareness campaigns, waste management initiatives.",
    outcome:
      "Contributed to Serachaur becoming a model eco-friendly village.",
    tags: ["Community", "Environment", "Youth Leadership"],
  },

  {
    id: 4,
    title: "RNIT Israel Agricultural Training",
    category: "International Field Training",
    location: "Israel",
    year: "2023",
    role: "Agricultural Intern",
    evidence:
      "Hands-on training in precision agriculture, irrigation systems, and desert farming.",
    outcome:
      "Advanced understanding of global agricultural systems and technology.",
    tags: ["Agriculture", "International", "Technology"],
  },

  {
    id: 5,
    title: "Agriculture Development Office (ADO) Internship",
    category: "Rural Development",
    location: "Dolpa, Nepal",
    year: "2023",
    role: "Field Intern",
    evidence:
      "Farmer engagement, rural field data, agricultural extension support.",
    outcome:
      "Strengthened rural agricultural service delivery understanding.",
    tags: ["Rural", "Policy", "Agriculture"],
  },
];

/* =========================
   MAIN SYSTEM
========================= */

export default function ImpactIntelligenceSystem() {
  const [active, setActive] = useState(impacts[0]);

  return (
    <main style={styles.main}>

      {/* ================= HEADER ================= */}
      <section style={styles.header}>
        <h1 style={styles.title}>Impact Intelligence System</h1>
        <p style={styles.subtitle}>
          Structured representation of leadership, research, fieldwork, and global impact.
        </p>
      </section>

      {/* ================= LAYOUT ================= */}
      <section style={styles.layout}>

        {/* LEFT LIST */}
        <div style={styles.list}>

          {impacts.map((item) => (
            <div
              key={item.id}
              onClick={() => setActive(item)}
              style={{
                ...styles.cardMini,
                borderColor:
                  active.id === item.id ? "#38bdf8" : "#1e293b",
              }}
            >
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardMeta}>
                {item.category} • {item.year}
              </p>
            </div>
          ))}

        </div>

        {/* RIGHT DETAIL PANEL */}
        <div style={styles.detail}>

          <AnimatePresence mode="wait">

            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >

              <h2 style={styles.bigTitle}>{active.title}</h2>

              <div style={styles.metaRow}>
                <span>{active.category}</span>
                <span>{active.location}</span>
                <span>{active.year}</span>
              </div>

              <div style={styles.block}>
                <h4>Role</h4>
                <p>{active.role}</p>
              </div>

              <div style={styles.block}>
                <h4>Evidence</h4>
                <p>{active.evidence}</p>
              </div>

              <div style={styles.block}>
                <h4>Outcome</h4>
                <p>{active.outcome}</p>
              </div>

              <div style={styles.tags}>
                {active.tags.map((t, i) => (
                  <span key={i} style={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>

            </motion.div>

          </AnimatePresence>

        </div>

      </section>

      {/* ================= SUMMARY DASHBOARD ================= */}
      <section style={styles.dashboard}>

        <h2 style={styles.sectionTitle}>System Overview</h2>

        <div style={styles.grid}>

          <Stat label="Leadership Systems" value="5+" />
          <Stat label="Global Exposure" value="2 Countries" />
          <Stat label="Research + Field Work" value="10+ Activities" />
          <Stat label="Impact Domains" value="Agriculture + Policy + Youth" />

        </div>

      </section>

    </main>
  );
}

/* =========================
   STAT COMPONENT
========================= */

function Stat({ label, value }: any) {
  return (
    <div style={styles.stat}>
      <h3 style={styles.statValue}>{value}</h3>
      <p style={styles.statLabel}>{label}</p>
    </div>
  );
}

/* =========================
   STYLES
========================= */

const styles: any = {
  main: {
    background: "#020617",
    color: "#fff",
    fontFamily: "sans-serif",
  },

  header: {
    padding: "80px 20px",
    textAlign: "center",
  },

  title: {
    fontSize: "50px",
  },

  subtitle: {
    color: "#94a3b8",
    marginTop: "10px",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  layout: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "20px",
    padding: "40px",
  },

  list: {
    display: "grid",
    gap: "12px",
  },

  cardMini: {
    padding: "15px",
    border: "1px solid #1e293b",
    borderRadius: "10px",
    cursor: "pointer",
    background: "#0f172a",
  },

  cardTitle: {
    fontSize: "14px",
  },

  cardMeta: {
    fontSize: "12px",
    color: "#94a3b8",
  },

  detail: {
    background: "#0b1220",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #1e293b",
  },

  bigTitle: {
    fontSize: "28px",
    color: "#38bdf8",
  },

  metaRow: {
    display: "flex",
    gap: "15px",
    color: "#94a3b8",
    marginTop: "10px",
  },

  block: {
    marginTop: "20px",
  },

  tags: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
    flexWrap: "wrap",
  },

  tag: {
    border: "1px solid #38bdf8",
    padding: "5px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    color: "#38bdf8",
  },

  dashboard: {
    padding: "80px 40px",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "30px",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "20px",
  },

  stat: {
    padding: "20px",
    border: "1px solid #1e293b",
    borderRadius: "12px",
  },

  statValue: {
    color: "#38bdf8",
    fontSize: "20px",
  },

  statLabel: {
    color: "#94a3b8",
    fontSize: "13px",
  },
};