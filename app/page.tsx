"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* NAVBAR */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold text-xl">Suraj Bhandari</h1>

          <nav className="flex gap-6 text-sm font-medium text-gray-600">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 bg-gradient-to-b from-white to-gray-50">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold"
          >
            Suraj Bhandari
          </motion.h1>

          <p className="mt-4 text-xl text-gray-600">
            Agricultural Economist | Researcher | Policy Analyst | Youth Leader
          </p>

          <p className="mt-6 max-w-2xl mx-auto text-gray-500">
            Working at the intersection of agriculture, rural development, and policy innovation
            to create sustainable impact in Nepal and beyond.
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            <a href="#research" className="bg-black text-white px-6 py-3 rounded-full">
              Explore Research
            </a>
            <a href="#contact" className="border border-black px-6 py-3 rounded-full">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I am an Agricultural Economist with a strong interest in rural development,
          food systems transformation, and youth empowerment. My work combines research,
          leadership, and international exposure (including agricultural training in Israel)
          to address real-world challenges in Nepal’s agricultural sector.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-gray-50 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Experience</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold">Student Leadership</h3>
              <p className="text-gray-600 mt-2">
                Leadership roles in ANNFSU and IAAS Nepal focusing on student mobilization and governance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold">International Internship (Israel)</h3>
              <p className="text-gray-600 mt-2">
                Agricultural training focused on modern farming systems and innovation practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold">Teaching & Training</h3>
              <p className="text-gray-600 mt-2">
                Mentoring and capacity building for youth and agricultural students.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold">Research Participation</h3>
              <p className="text-gray-600 mt-2">
                Academic conferences and policy-oriented research presentations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Research & Publications</h2>

        <div className="space-y-6">

          <div className="p-6 border rounded-xl">
            <h3 className="font-bold">Agricultural Transformation in Nepal</h3>
            <p className="text-gray-600">
              Analysis of productivity, policy gaps, and modernization pathways.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-bold">Youth Engagement in Agriculture</h3>
            <p className="text-gray-600">
              Study on youth participation in agribusiness and rural economy.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-bold">Indigenous Farming Systems</h3>
            <p className="text-gray-600">
              Documentation of traditional agricultural knowledge systems in Nepal.
            </p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-gray-50 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold">Himalayan Elixir</h3>
              <p className="text-gray-600 mt-2">
                Agricultural value chain initiative focusing on natural and Himalayan products.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold">Youth Development Campaigns</h3>
              <p className="text-gray-600 mt-2">
                Community-based programs for leadership and empowerment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>
        <p className="text-gray-600 mb-6">
          Open for research collaboration, fellowships, and policy opportunities.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="bg-black text-white px-6 py-3 rounded-full"
        >
          Email Me
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 text-sm border-t">
        © 2026 Suraj Bhandari. All rights reserved.
      </footer>

    </main>
  );
}