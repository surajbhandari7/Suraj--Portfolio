export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center px-6">

      <div>
        <h1 className="text-5xl font-bold">
          Suraj Bhandari
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Agricultural Economist • Researcher • Policy Analyst • Youth Leader
        </p>

        <p className="mt-6 max-w-2xl text-gray-500">
          Building evidence-based solutions for agricultural transformation,
          rural development, and youth empowerment in Nepal and beyond.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <a href="/research" className="px-6 py-3 bg-black text-white rounded-full">
            Explore Research
          </a>

          <a href="/contact" className="px-6 py-3 border rounded-full">
            Contact
          </a>
        </div>
      </div>

    </main>
  );
}
export default function Research() {
  return (
    <main className="p-10 max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">Research</h1>

      <div className="space-y-6">

        <div className="p-6 border rounded-xl">
          <h2 className="font-bold">Agricultural Transformation in Nepal</h2>
          <p className="text-gray-600">Policy + productivity + modernization analysis</p>
        </div>

        <div className="p-6 border rounded-xl">
          <h2 className="font-bold">Youth in Agriculture</h2>
          <p className="text-gray-600">Youth participation in agribusiness systems</p>
        </div>

        <div className="p-6 border rounded-xl">
          <h2 className="font-bold">Indigenous Farming Systems</h2>
          <p className="text-gray-600">Traditional agricultural knowledge documentation</p>
        </div>

      </div>

    </main>
  );
}
export default function HimalayanElixir() {
  return (
    <main className="p-10 max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold">Himalayan Elixir</h1>

      <p className="mt-4 text-gray-600">
        A value-chain initiative focused on natural Himalayan products,
        rural entrepreneurship, and sustainable agriculture.
      </p>

      <div className="mt-8 p-6 border rounded-xl">
        <h2 className="font-bold">Vision</h2>
        <p className="text-gray-600">
          Transforming local agricultural resources into global-quality products.
        </p>
      </div>

    </main>
  );
}
export default function CV() {
  return (
    <main className="p-10 text-center">

      <h1 className="text-4xl font-bold">Curriculum Vitae</h1>

      <p className="mt-4 text-gray-600">
        Download my academic and professional profile.
      </p>

      <a
        href="/cv.pdf"
        className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-full"
      >
        Download CV
      </a>

    </main>
  );
}
export default function Contact() {
  return (
    <main className="p-10 text-center">

      <h1 className="text-4xl font-bold">Contact</h1>

      <p className="mt-4 text-gray-600">
        Open for research, fellowship, and collaboration opportunities.
      </p>

      <a
        href="mailto:your-email@example.com"
        className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-full"
      >
        Email Me
      </a>

    </main>
  );
}
