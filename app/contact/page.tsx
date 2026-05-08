export default function Contact() {
  return (
    <main className="min-h-screen px-6 py-20">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold">
          Let’s Connect
        </h1>

        <p className="mt-4 text-gray-600">
          Open for research collaboration, policy opportunities,
          fellowships, and youth development initiatives.
        </p>

        <div className="mt-10 space-y-6">

          <div className="p-6 bg-white rounded-2xl shadow-sm border">
            <h2 className="text-xl font-semibold">Email</h2>

            <a
              href="mailto:surajbhandari20b@gmail.com"
              className="text-blue-600"
            >
              surajbhandari20b@gmail.com
            </a>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm border">
            <h2 className="text-xl font-semibold">LinkedIn</h2>

            <a
              href="https://www.linkedin.com/in/suraj-bhandari-6aa9651b4/"
              target="_blank"
              className="text-blue-600"
            >
              Visit LinkedIn Profile
            </a>
          </div>

        </div>

      </div>

    </main>
  );
}
