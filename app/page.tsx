import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #f8fafc, #e2e8f0)",
        padding: "80px 20px",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
        }}
      >

        {/* LEFT SIDE */}
        <div style={{ flex: 1, minWidth: "300px" }}>

          <p
            style={{
              color: "#2563eb",
              fontWeight: "bold",
              marginBottom: "15px",
              letterSpacing: "1px",
            }}
          >
            WELCOME TO MY PORTFOLIO
          </p>

          <h1
            style={{
              fontSize: "64px",
              lineHeight: "1.1",
              marginBottom: "20px",
              color: "#0f172a",
              fontWeight: "bold",
            }}
          >
            Suraj Bhandari
          </h1>

          <h2
            style={{
              fontSize: "24px",
              color: "#334155",
              marginBottom: "25px",
              fontWeight: "600",
            }}
          >
            Agricultural Economist | Researcher | Policy Analyst | Youth Leader
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "#475569",
              maxWidth: "650px",
              lineHeight: "1.8",
              marginBottom: "40px",
            }}
          >
            Working at the intersection of agriculture, rural development,
            policy innovation, and youth empowerment to create sustainable
            impact in Nepal and beyond. My work integrates research,
            leadership, and international exposure to address real-world
            development challenges.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >

            <a
              href="/research"
              style={{
                background: "#2563eb",
                color: "white",
                padding: "14px 28px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
                boxShadow: "0 10px 25px rgba(37,99,235,0.2)",
              }}
            >
              Explore Research
            </a>

            <a
              href="/contact"
              style={{
                border: "2px solid #2563eb",
                color: "#2563eb",
                padding: "14px 28px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
                background: "white",
              }}
            >
              Contact Me
            </a>

          </div>

          {/* STATS */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "60px",
              flexWrap: "wrap",
            }}
          >

            <div>
              <h3
                style={{
                  fontSize: "32px",
                  color: "#2563eb",
                  marginBottom: "5px",
                }}
              >
                5+
              </h3>

              <p style={{ color: "#64748b" }}>
                Leadership Roles
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "32px",
                  color: "#2563eb",
                  marginBottom: "5px",
                }}
              >
                10+
              </h3>

              <p style={{ color: "#64748b" }}>
                Research & Conferences
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "32px",
                  color: "#2563eb",
                  marginBottom: "5px",
                }}
              >
                Global
              </h3>

              <p style={{ color: "#64748b" }}>
                International Exposure
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            display: "flex",
            justifyContent: "center",
          }}
        >

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "30px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
            }}
          >

            <Image
              src="/suraj.png"
              alt="Suraj Bhandari"
              width={380}
              height={380}
              style={{
                borderRadius: "24px",
                objectFit: "cover",
              }}
            />

          </div>

        </div>

      </section>
    </main>
  );
}
