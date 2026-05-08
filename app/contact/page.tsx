"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* =========================
   INTERNAL CLASSIFICATION (HIDDEN LAYER)
========================= */

function classify(subject: string, message: string) {
  const text = (subject + " " + message).toLowerCase();

  if (text.includes("research") || text.includes("paper")) return "Research Collaboration";
  if (text.includes("collaborate") || text.includes("partner")) return "Collaboration Opportunity";
  if (text.includes("job") || text.includes("intern")) return "Opportunity / Career";
  if (text.includes("policy") || text.includes("government")) return "Policy Discussion";
  if (text.includes("academic") || text.includes("university")) return "Academic Inquiry";

  return "General Inquiry";
}

/* =========================
   MAIN PAGE
========================= */

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState<any>(null);

  function handleSubmit() {
    const category = classify(form.subject, form.message);

    const record = {
      ...form,
      category,
      timestamp: new Date().toISOString(),
    };

    console.log("NEW MESSAGE:", record);

    setSubmitted(record);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <main style={styles.main}>

      {/* ================= HERO ================= */}
      <section style={styles.hero}>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={styles.title}
        >
          Contact Me
        </motion.h1>

        <p style={styles.subtitle}>
          I welcome research discussions, collaboration opportunities, policy engagement,
          and global development initiatives.
        </p>

        <p style={styles.tagline}>
          Agricultural Economist • Researcher • Youth Leader • Policy Enthusiast
        </p>

      </section>

      {/* ================= CONTENT ================= */}
      <section style={styles.grid}>

        {/* LEFT SIDE - PERSONAL INFO */}
        <div style={styles.left}>

          <h2 style={styles.sectionTitle}>Let’s Work Together</h2>

          <p style={styles.text}>
            My work focuses on agricultural economics, rural transformation,
            policy innovation, youth leadership, and sustainable development.
          </p>

          <div style={styles.card}>
            <h3>Focus Areas</h3>
            <ul>
              <li>Agricultural Economics Research</li>
              <li>Rural Development & Policy Design</li>
              <li>Youth Empowerment Programs</li>
              <li>Sustainability & Climate Action</li>
              <li>International Collaboration</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3>Availability</h3>
            <p>Open for collaborations, research projects, and speaking engagements.</p>
          </div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={styles.result}
            >
              <h3>Message Received ✓</h3>
              <p><b>Name:</b> {submitted.name}</p>
              <p><b>Type:</b> {submitted.category}</p>
            </motion.div>
          )}

        </div>

        {/* RIGHT SIDE - FORM */}
        <div style={styles.formBox}>

          <input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={styles.input}
          />

          <input
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={styles.input}
          />

          <input
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            style={styles.input}
          />

          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={styles.textarea}
          />

          <button onClick={handleSubmit} style={styles.button}>
            Send Message
          </button>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <section style={styles.footer}>
        <h2 style={styles.footerTitle}>
          Building meaningful collaboration across agriculture, policy & innovation
        </h2>
      </section>

    </main>
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

  hero: {
    textAlign: "center",
    padding: "90px 20px",
  },

  title: {
    fontSize: "52px",
  },

  subtitle: {
    color: "#94a3b8",
    maxWidth: "700px",
    margin: "20px auto",
    lineHeight: "1.7",
  },

  tagline: {
    color: "#38bdf8",
    marginTop: "10px",
    fontSize: "14px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
    padding: "40px",
    maxWidth: "1100px",
    margin: "auto",
  },

  left: {
    padding: "10px",
  },

  sectionTitle: {
    fontSize: "24px",
    marginBottom: "10px",
  },

  text: {
    color: "#94a3b8",
    lineHeight: "1.7",
  },

  card: {
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #1e293b",
    borderRadius: "10px",
  },

  formBox: {
    background: "#0f172a",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #1e293b",
    display: "grid",
    gap: "12px",
  },

  input: {
    padding: "12px",
    background: "#020617",
    border: "1px solid #1e293b",
    color: "#fff",
    borderRadius: "8px",
  },

  textarea: {
    padding: "12px",
    background: "#020617",
    border: "1px solid #1e293b",
    color: "#fff",
    borderRadius: "8px",
    minHeight: "120px",
  },

  button: {
    padding: "12px",
    background: "#2563eb",
    color: "#fff",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },

  result: {
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #38bdf8",
    borderRadius: "10px",
  },

  footer: {
    padding: "100px 20px",
    textAlign: "center",
  },

  footerTitle: {
    fontSize: "28px",
    color: "#94a3b8",
  },
};