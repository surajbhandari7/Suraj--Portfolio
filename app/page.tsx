"use client";

import { motion } from "framer-motion";
import { Mail, GraduationCap, Globe, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-white to-gray-100">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Suraj Bhandari
        </motion.h1>

        <p className="text-xl mt-3 text-gray-600">
          Agricultural Economist | Researcher | Youth Leader
        </p>

        <p className="mt-6 max-w-2xl text-gray-700">
          Working at the intersection of agriculture, policy research, and youth empowerment
          to drive sustainable development in Nepal.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#about" className="bg-black text-white px-6 py-3 rounded-full">
            Explore
          </a>
          <a href="#contact" className="border border-black px-6 py-3 rounded-full">
            Contact
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>

        <div className="bg-white p-8 rounded-2xl shadow-sm leading-relaxed text-gray-700">
          I am an Agricultural Economist with strong interest in rural development,
          food systems, youth engagement, and policy transformation. My work combines
          research, leadership, and international exposure to address real-world challenges.
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Highlights</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 rounded-2xl bg-gray-50 shadow-sm">
              <Users className="mb-3" />
              <h3 className="font-bold">Leadership</h3>
              <p className="text-gray-600">ANNFSU, IAAS Nepal</p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 shadow-sm">
              <Globe className="mb-3" />
              <h3 className="font-bold">International Exposure</h3>
              <p className="text-gray-600">Agriculture internship in Israel</p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 shadow-sm">
              <GraduationCap className="mb-3" />
              <h3 className="font-bold">Research</h3>
              <p className="text-gray-600">Policy & academic conferences</p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 shadow-sm">
              <Mail className="mb-3" />
              <h3 className="font-bold">Teaching</h3>
              <p className="text-gray-600">Training & youth mentoring</p>
            </div>

          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Journey</h2>

        <div className="border-l-2 border-black pl-6 space-y-8 text-gray-700">

          <div>
            <h3 className="font-bold">Student Leadership</h3>
            <p>ANNFSU & IAAS involvement</p>
          </div>

          <div>
            <h3 className="font-bold">International Internship</h3>
            <p>Israel agriculture training exposure</p>
          </div>

          <div>
            <h3 className="font-bold">Research & Conferences</h3>
            <p>Policy research and academic presentations</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>

        <p className="text-gray-600 mb-6">
          Open for research collaboration, policy work, and opportunities.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="bg-black text-white px-6 py-3 rounded-full"
        >
          Email Me
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 text-sm">
        © 2026 Suraj Bhandari. Built with Next.js
      </footer>

    </main>
  );
}