export default function Projects() {
  return (
    <section
  id="projects"
  style={{
    padding: "140px 20px",
    background:
      "linear-gradient(to bottom right, #020617, #0f172a, #111827)",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Background Effects */}
  <div
    style={{
      position: "absolute",
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      background: "rgba(37,99,235,0.15)",
      filter: "blur(120px)",
      top: "-120px",
      right: "-100px",
    }}
  />

  <div
    style={{
      position: "absolute",
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      background: "rgba(14,165,233,0.12)",
      filter: "blur(120px)",
      bottom: "-100px",
      left: "-100px",
    }}
  />

  <div
    style={{
      maxWidth: "1350px",
      margin: "0 auto",
      position: "relative",
      zIndex: 10,
    }}
  >
    {/* Header */}
    <div
      style={{
        textAlign: "center",
        marginBottom: "90px",
      }}
    >
      <p
        style={{
          color: "#60a5fa",
          fontSize: "15px",
          letterSpacing: "3px",
          fontWeight: "700",
          textTransform: "uppercase",
          marginBottom: "18px",
        }}
      >
        Featured Projects
      </p>

      <h2
        style={{
          fontSize: "64px",
          fontWeight: "900",
          color: "#ffffff",
          lineHeight: "1.05",
          marginBottom: "25px",
        }}
      >
        Creating Impact Through <br />
        Innovation, Research & Leadership
      </h2>

      <p
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          color: "#94a3b8",
          fontSize: "20px",
          lineHeight: "1.9",
        }}
      >
        My projects combine agriculture, entrepreneurship, youth
        leadership, sustainability, research, and policy engagement to
        address real-world challenges in Nepal and beyond. From rural
        innovation to international advocacy, each initiative reflects my
        commitment to meaningful social and economic transformation.
      </p>
    </div>

    {/* Featured Project */}
    <div
      style={{
        background:
          "linear-gradient(135deg, rgba(37,99,235,0.15), rgba(15,23,42,0.95))",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "36px",
        padding: "70px",
        marginBottom: "60px",
        backdropFilter: "blur(20px)",
        boxShadow: "0 25px 80px rgba(0,0,0,0.45)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div>
          <div
            style={{
              display: "inline-block",
              padding: "10px 20px",
              borderRadius: "999px",
              background: "rgba(96,165,250,0.15)",
              color: "#93c5fd",
              fontWeight: "600",
              fontSize: "14px",
              marginBottom: "28px",
              border: "1px solid rgba(96,165,250,0.25)",
            }}
          >
            Flagship Initiative
          </div>

          <h3
            style={{
              fontSize: "54px",
              color: "#ffffff",
              marginBottom: "25px",
              fontWeight: "800",
              lineHeight: "1.1",
            }}
          >
            Himalayan Elixir
          </h3>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "19px",
              lineHeight: "2",
              marginBottom: "25px",
            }}
          >
            Himalayan Elixir is a visionary value-chain and social
            enterprise initiative focused on promoting high-value natural
            and agricultural products from the Himalayan region of Nepal.
            The project aims to connect rural farmers and indigenous
            communities with sustainable markets while preserving local
            biodiversity, traditional knowledge, and ecological balance.
          </p>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "18px",
              lineHeight: "2",
              marginBottom: "35px",
            }}
          >
            The initiative explores opportunities in processing,
            branding, value addition, export promotion, and sustainable
            entrepreneurship around Himalayan herbs, honey, medicinal
            plants, organic products, and natural resources. It seeks to
            empower marginalized communities by creating income
            opportunities and strengthening rural economies.
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {[
              "Agriculture",
              "Value Chain",
              "Rural Economy",
              "Sustainability",
              "Entrepreneurship",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "12px 22px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.06)",
                  color: "#e2e8f0",
                  fontSize: "15px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div>
          <div
            style={{
              background:
                "linear-gradient(135deg, #1e3a8a, #2563eb, #0ea5e9)",
              borderRadius: "32px",
              padding: "50px",
              minHeight: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 20px 50px rgba(37,99,235,0.3)",
            }}
          >
            <div>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "14px",
                  letterSpacing: "2px",
                  marginBottom: "15px",
                }}
              >
                PROJECT VISION
              </p>

              <h4
                style={{
                  color: "#ffffff",
                  fontSize: "38px",
                  lineHeight: "1.3",
                  fontWeight: "800",
                }}
              >
                Building Sustainable Himalayan Economies
              </h4>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.12)",
                  borderRadius: "24px",
                  padding: "28px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h5
                  style={{
                    fontSize: "40px",
                    color: "#ffffff",
                    marginBottom: "10px",
                    fontWeight: "800",
                  }}
                >
                  Rural
                </h5>

                <p
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: "1.8",
                  }}
                >
                  Community-centered development and farmer empowerment.
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.12)",
                  borderRadius: "24px",
                  padding: "28px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h5
                  style={{
                    fontSize: "40px",
                    color: "#ffffff",
                    marginBottom: "10px",
                    fontWeight: "800",
                  }}
                >
                  Green
                </h5>

                <p
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: "1.8",
                  }}
                >
                  Sustainable and environmentally responsible innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Projects Grid */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        gap: "35px",
      }}
    >
      {/* Project 1 */}
      <div
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "30px",
          padding: "40px",
          backdropFilter: "blur(14px)",
          transition: "0.4s ease",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "24px",
            background:
              "linear-gradient(135deg, #2563eb, #38bdf8)",
            marginBottom: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontSize: "32px",
            fontWeight: "800",
          }}
        >
          Y
        </div>

        <h3
          style={{
            fontSize: "32px",
            color: "#ffffff",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          Youth Development Campaigns
        </h3>

        <p
          style={{
            color: "#94a3b8",
            lineHeight: "2",
            fontSize: "17px",
            marginBottom: "28px",
          }}
        >
          Led and contributed to multiple youth-focused initiatives
          centered on leadership development, advocacy, social
          engagement, entrepreneurship, and educational empowerment in
          Nepal. These campaigns aimed to inspire young people to become
          changemakers in their communities.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {[
            "Leadership",
            "Advocacy",
            "Youth Empowerment",
            "Education",
          ].map((tag, index) => (
            <span
              key={index}
              style={{
                padding: "10px 18px",
                borderRadius: "999px",
                background: "rgba(59,130,246,0.12)",
                color: "#bfdbfe",
                fontSize: "14px",
                border: "1px solid rgba(59,130,246,0.2)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Project 2 */}
      <div
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "30px",
          padding: "40px",
          backdropFilter: "blur(14px)",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "24px",
            background:
              "linear-gradient(135deg, #16a34a, #22c55e)",
            marginBottom: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontSize: "32px",
            fontWeight: "800",
          }}
        >
          R
        </div>

        <h3
          style={{
            fontSize: "32px",
            color: "#ffffff",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          Research & Policy Engagement
        </h3>

        <p
          style={{
            color: "#94a3b8",
            lineHeight: "2",
            fontSize: "17px",
            marginBottom: "28px",
          }}
        >
          Participated in national and international research programs,
          conferences, and academic initiatives related to agricultural
          economics, sustainability, indigenous knowledge systems, and
          rural transformation.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {[
            "Research",
            "Policy",
            "Agriculture",
            "Sustainability",
          ].map((tag, index) => (
            <span
              key={index}
              style={{
                padding: "10px 18px",
                borderRadius: "999px",
                background: "rgba(34,197,94,0.12)",
                color: "#bbf7d0",
                fontSize: "14px",
                border: "1px solid rgba(34,197,94,0.2)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Project 3 */}
      <div
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "30px",
          padding: "40px",
          backdropFilter: "blur(14px)",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "24px",
            background:
              "linear-gradient(135deg, #ea580c, #f97316)",
            marginBottom: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontSize: "32px",
            fontWeight: "800",
          }}
        >
          G
        </div>

        <h3
          style={{
            fontSize: "32px",
            color: "#ffffff",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          Global Leadership & Advocacy
        </h3>

        <p
          style={{
            color: "#94a3b8",
            lineHeight: "2",
            fontSize: "17px",
            marginBottom: "28px",
          }}
        >
          Engaged in international leadership platforms, sustainability
          programs, and humanitarian advocacy initiatives, including
          coordination efforts during the evacuation of Nepali students
          from Israel in 2023.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {[
            "International",
            "Humanitarian",
            "Leadership",
            "Coordination",
          ].map((tag, index) => (
            <span
              key={index}
              style={{
                padding: "10px 18px",
                borderRadius: "999px",
                background: "rgba(249,115,22,0.12)",
                color: "#fed7aa",
                fontSize: "14px",
                border: "1px solid rgba(249,115,22,0.2)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div
      style={{
        marginTop: "100px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.2), rgba(14,165,233,0.12))",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "36px",
          padding: "70px 50px",
          backdropFilter: "blur(18px)",
        }}
      >
        <h3
          style={{
            color: "#ffffff",
            fontSize: "52px",
            fontWeight: "800",
            marginBottom: "25px",
            lineHeight: "1.2",
          }}
        >
          Building Ideas That <br />
          Create Lasting Impact
        </h3>

        <p
          style={{
            color: "#cbd5e1",
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "2",
            fontSize: "20px",
            marginBottom: "40px",
          }}
        >
          I believe meaningful projects emerge when innovation, research,
          leadership, and community engagement come together. My mission
          is to contribute to a more sustainable, inclusive, and
          opportunity-driven future for Nepal and the global community.
        </p>

        <button
          style={{
            padding: "18px 42px",
            background: "#2563eb",
            border: "none",
            borderRadius: "999px",
            color: "#ffffff",
            fontSize: "18px",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 15px 40px rgba(37,99,235,0.4)",
          }}
        >
          Explore My Research
        </button>
      </div>
    </div>
  </div>
</section>
  );
}