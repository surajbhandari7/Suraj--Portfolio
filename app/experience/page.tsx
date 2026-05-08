"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import * as THREE from "three";

/* =========================
   CAREER LOCATIONS
========================= */

const points = [
  {
    name: "Serachaur (Cleanliness Child Club)",
    role: "Chairperson",
    lat: 28.3,
    lng: 84.0,
    desc: "Early leadership in environmental transformation.",
  },
  {
    name: "IAAS Nepal / NYCA Pokhara",
    role: "Leadership Roles",
    lat: 28.2,
    lng: 84.1,
    desc: "Youth leadership and organizational coordination.",
  },
  {
    name: "Dolpa (ADO Internship)",
    role: "Agricultural Intern",
    lat: 29.0,
    lng: 82.8,
    desc: "Rural agricultural development & farmer engagement.",
  },
  {
    name: "Israel (RNIT)",
    role: "International Intern",
    lat: 31.0461,
    lng: 34.8516,
    desc: "Advanced precision agriculture & global exposure.",
  },
];

/* =========================
   SPHERE (EARTH)
========================= */

function Earth() {
  const mesh = useRef<any>();

  useFrame(() => {
    mesh.current.rotation.y += 0.0015;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="#0b3d91" wireframe />
    </mesh>
  );
}

/* =========================
   CONVERT LAT/LNG → 3D POS
========================= */

function latLngToVector3(lat: number, lng: number, radius = 2) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

/* =========================
   GLOWING POINT
========================= */

function Point({ data }: any) {
  const [hovered, setHovered] = useState(false);

  const position = latLngToVector3(data.lat, data.lng);

  return (
    <mesh
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" />

      <Html distanceFactor={10}>
        <div style={{
          background: "rgba(0,0,0,0.7)",
          padding: "6px 10px",
          borderRadius: "8px",
          color: "white",
          fontSize: "12px",
          border: "1px solid #38bdf8",
          display: hovered ? "block" : "none"
        }}>
          <strong>{data.name}</strong><br />
          {data.role}
        </div>
      </Html>
    </mesh>
  );
}

/* =========================
   MAIN PAGE
========================= */

export default function CareerGlobe() {
  const [active, setActive] = useState(points[0]);

  return (
    <main style={styles.main}>

      {/* ================= HEADER ================= */}
      <section style={styles.header}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={styles.title}
        >
          Career Globe Atlas
        </motion.h1>

        <p style={styles.subtitle}>
          A spatial visualization of leadership, research, and international experience.
        </p>
      </section>

      {/* ================= GLOBE ================= */}
      <section style={styles.canvasWrap}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          <Stars radius={100} depth={50} count={3000} factor={4} />

          <Earth />

          {points.map((p, i) => (
            <Point key={i} data={p} />
          ))}

          <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </section>

      {/* ================= INFO PANEL ================= */}
      <section style={styles.panel}>

        <h2 style={styles.role}>{active.role}</h2>
        <h3 style={styles.name}>{active.name}</h3>

        <p style={styles.desc}>{active.desc}</p>

        <div style={styles.list}>
          {points.map((p, i) => (
            <div
              key={i}
              onClick={() => setActive(p)}
              style={{
                ...styles.item,
                borderColor:
                  active.name === p.name ? "#38bdf8" : "#1e293b",
              }}
            >
              {p.name}
            </div>
          ))}
        </div>

      </section>

      {/* ================= FOOTER STORY ================= */}
      <section style={styles.footer}>
        <h2 style={styles.bigText}>
          From Local Leadership → Global Systems Thinking
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
    minHeight: "100vh",
    fontFamily: "sans-serif",
  },

  header: {
    textAlign: "center",
    padding: "80px 20px",
  },

  title: {
    fontSize: "56px",
  },

  subtitle: {
    color: "#94a3b8",
    marginTop: "10px",
  },

  canvasWrap: {
    height: "500px",
    margin: "20px auto",
  },

  panel: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
    background: "#0b1220",
    borderRadius: "12px",
  },

  role: {
    color: "#38bdf8",
  },

  name: {
    marginTop: "10px",
  },

  desc: {
    color: "#94a3b8",
    marginTop: "10px",
    lineHeight: "1.7",
  },

  list: {
    marginTop: "20px",
    display: "grid",
    gap: "10px",
  },

  item: {
    padding: "10px",
    border: "1px solid #1e293b",
    borderRadius: "8px",
    cursor: "pointer",
  },

  footer: {
    padding: "120px 20px",
    textAlign: "center",
  },

  bigText: {
    fontSize: "40px",
  },
};