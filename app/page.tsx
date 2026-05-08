"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Environment } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";
import Image from "next/image";
import Link from "next/link";

/* =========================================================
   MAIN PAGE
========================================================= */

export default function Home() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const cameraZ = useTransform(scrollYProgress, [0, 1], [5, -10]);

  return (
    <main style={styles.main} ref={container}>
      
      {/* ================= WEBGL WORLD ================= */}
      <Canvas camera={{ position: [0, 0, 5], fov: 55 }}>
        <Environment preset="city" />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        <ScrollCamera cameraZ={cameraZ} />

        <FloatingPortrait />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* ================= UI OVERLAY ================= */}
      <Overlay scrollYProgress={scrollYProgress} />
    </main>
  );
}

/* =========================================================
   WEBGL CAMERA SCROLL CONTROLLER
========================================================= */

function ScrollCamera({ cameraZ }: any) {
  useFrame(({ camera }) => {
    camera.position.z = cameraZ.get();
  });

  return null;
}

/* =========================================================
   3D PORTRAIT (YOUR IMAGE AS LIVING OBJECT)
========================================================= */

function FloatingPortrait() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
      <mesh>
        <planeGeometry args={[2.2, 2.2]} />

        <meshStandardMaterial
          map={new THREE.TextureLoader().load("/suraj.png")}
          transparent
          roughness={0.4}
        />
      </mesh>
    </Float>
  );
}

/* =========================================================
   OVERLAY UI (CINEMATIC STORY LAYERS)
========================================================= */

function Overlay({ scrollYProgress }: any) {
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div style={styles.overlay}>
      
      {/* ================= HERO ================= */}
      <motion.section style={{ ...styles.hero, opacity: titleOpacity }}>
        <p style={styles.kicker}>AGRICULTURAL ECONOMIST • POLICY DESIGNER</p>

        <h1 style={styles.title}>
          Suraj <span style={styles.accent}>Bhandari</span>
        </h1>

        <p style={styles.subtitle}>
          Building sustainable rural systems through research,
          leadership, and global collaboration.
        </p>

        <div style={styles.btnRow}>
          <Link href="/projects" style={styles.primaryBtn}>
            Explore Work
          </Link>

          <Link href="/about" style={styles.secondaryBtn}>
            My Journey
          </Link>
        </div>
      </motion.section>

      {/* ================= STORY ================= */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          From Rural Nepal to Global Platforms
        </h2>

        <p style={styles.text}>
          My journey spans agricultural economics, policy research,
          student leadership, and international exposure in Israel.
        </p>
      </section>

      {/* ================= IDENTITY ================= */}
      <section style={styles.darkSection}>
        <h2 style={styles.bigText}>
          I Design Systems, Not Projects
        </h2>
      </section>

      {/* ================= FOCUS ================= */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Focus Areas</h2>

        <div style={styles.grid3}>
          {focus.map((f, i) => (
            <div key={i} style={styles.card}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section style={styles.darkSection}>
        <h2 style={styles.sectionTitle}>Impact</h2>

        <div style={styles.grid4}>
          {impact.map((i, idx) => (
            <div key={idx} style={styles.metric}>
              <h3 style={styles.metricNum}>{i.value}</h3>
              <p>{i.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>

        <div style={styles.grid2}>
          {projects.map((p, i) => (
            <div key={i} style={styles.project}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GLOBAL ================= */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Global Exposure</h2>

        <div style={styles.badges}>
          {["Israel", "UPG", "IAAS", "Conferences"].map((g, i) => (
            <span key={i} style={styles.badge}>
              {g}
            </span>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section style={styles.final}>
        <h2 style={styles.bigText}>Let’s Build Impact Together</h2>

        <Link href="/contact" style={styles.cta}>
          Start Collaboration
        </Link>
      </section>
    </div>
  );
}

/* =========================================================
   DATA (YOUR CONTENT PRESERVED)
========================================================= */

const focus = [
  { title: "Agricultural Economics", desc: "Policy & market systems" },
  { title: "Rural Development", desc: "Community transformation" },
  { title: "Youth Leadership", desc: "Empowerment programs" },
];

const impact = [
  { value: "10+", label: "Leadership Roles" },
  { value: "5+", label: "Research Projects" },
  { value: "Global", label: "Exposure" },
  { value: "Impact", label: "Community Work" },
];

const projects = [
  { title: "Himalayan Elixir", desc: "Value chain innovation system" },
  { title: "Youth Campaigns", desc: "Leadership development initiatives" },
];

/* =========================================================
   STYLES (AWARD-WINNING CINEMATIC SYSTEM)
========================================================= */

const styles: any = {
  main: {
    width: "100%",
    height: "100vh",
    background: "#020617",
    color: "#fff",
    overflow: "hidden",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflowY: "scroll",
    padding: "0 80px",
  },

  hero: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  kicker: {
    color: "#38bdf8",
    letterSpacing: "3px",
  },

  title: {
    fontSize: "90px",
  },

  accent: {
    color: "#38bdf8",
  },

  subtitle: {
    color: "#94a3b8",
    fontSize: "20px",
    maxWidth: "600px",
  },

  btnRow: {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
  },

  primaryBtn: {
    padding: "12px 18px",
    background: "#2563eb",
    borderRadius: "10px",
    textDecoration: "none",
    color: "#fff",
  },

  secondaryBtn: {
    padding: "12px 18px",
    border: "1px solid #334155",
    borderRadius: "10px",
    color: "#fff",
    textDecoration: "none",
  },

  section: {
    minHeight: "80vh",
    padding: "120px 0",
  },

  darkSection: {
    minHeight: "80vh",
    padding: "120px 0",
    background: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(10px)",
  },

  sectionTitle: {
    fontSize: "40px",
    marginBottom: "30px",
  },

  text: {
    color: "#94a3b8",
    maxWidth: "700px",
    lineHeight: "1.8",
  },

  bigText: {
    fontSize: "70px",
  },

  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "20px",
  },

  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "20px",
  },

  grid2: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "20px",
  },

  card: {
    padding: "20px",
    border: "1px solid #1e293b",
    borderRadius: "12px",
  },

  metric: {
    padding: "20px",
    background: "#0f172a",
    borderRadius: "12px",
  },

  metricNum: {
    color: "#38bdf8",
    fontSize: "32px",
  },

  project: {
    padding: "20px",
    background: "#0b1220",
    borderRadius: "12px",
  },

  badges: {
    display: "flex",
    gap: "10px",
  },

  badge: {
    padding: "10px 15px",
    border: "1px solid #334155",
    borderRadius: "999px",
  },

  final: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  cta: {
    display: "inline-block",
    marginTop: "20px",
    padding: "14px 22px",
    background: "#2563eb",
    borderRadius: "10px",
    color: "#fff",
    textDecoration: "none",
  },
};