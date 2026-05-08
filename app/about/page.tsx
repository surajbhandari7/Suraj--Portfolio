export default function AboutPage() {
  return (
    <section
  id="about"
  style={{
    padding: "120px 20px",
    background: "#ffffff",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    {/* Heading */}
    <div
      style={{
        textAlign: "center",
        marginBottom: "70px",
      }}
    >
      <p
        style={{
          color: "#2563eb",
          fontSize: "15px",
          fontWeight: "600",
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        About Me
      </p>

      <h2
        style={{
          fontSize: "56px",
          fontWeight: "800",
          color: "#0f172a",
          marginBottom: "25px",
          lineHeight: "1.1",
        }}
      >
        Transforming Agriculture, <br />
        Youth Leadership & Rural Development
      </h2>

      <div
        style={{
          width: "120px",
          height: "5px",
          background: "#2563eb",
          margin: "0 auto",
          borderRadius: "999px",
        }}
      />
    </div>

    {/* Main Grid */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.2fr",
        gap: "60px",
        alignItems: "start",
      }}
    >
      {/* Left Side */}
      <div>
        {/* Profile Card */}
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
            marginBottom: "30px",
          }}
        >
          <h3
            style={{
              fontSize: "32px",
              color: "#0f172a",
              marginBottom: "10px",
              fontWeight: "700",
            }}
          >
            Suraj Bhandari
          </h3>

          <p
            style={{
              color: "#2563eb",
              fontWeight: "600",
              fontSize: "18px",
              marginBottom: "25px",
            }}
          >
            Agricultural Economist • Researcher • Youth Leader
          </p>

          <p
            style={{
              color: "#475569",
              lineHeight: "1.9",
              fontSize: "17px",
              marginBottom: "25px",
            }}
          >
            I am a Nepal-based Agricultural Economist and youth leader
            passionate about agricultural transformation, rural
            development, food systems, public policy, and youth
            empowerment. My work focuses on building sustainable,
            inclusive, and innovation-driven systems that improve the
            livelihoods of rural communities and create opportunities for
            young people.
          </p>

          <p
            style={{
              color: "#475569",
              lineHeight: "1.9",
              fontSize: "17px",
            }}
          >
            Coming from a remote farming community in Annapurna Rural
            Municipality, I deeply understand the challenges faced by
            marginalized and rural populations. My experiences have shaped
            my commitment to creating impactful solutions in agriculture,
            economic development, education, and leadership.
          </p>
        </div>

        {/* Quick Info */}
        <div
          style={{
            background: "#0f172a",
            borderRadius: "24px",
            padding: "35px",
            color: "white",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "26px",
              marginBottom: "30px",
              fontWeight: "700",
            }}
          >
            Quick Information
          </h3>

          <div
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            <div>
              <p
                style={{
                  color: "#94a3b8",
                  marginBottom: "5px",
                  fontSize: "14px",
                }}
              >
                Education
              </p>

              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                MSc. Agricultural Economics
              </h4>
            </div>

            <div>
              <p
                style={{
                  color: "#94a3b8",
                  marginBottom: "5px",
                  fontSize: "14px",
                }}
              >
                University
              </p>

              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Agriculture and Forestry University, Nepal
              </h4>
            </div>

            <div>
              <p
                style={{
                  color: "#94a3b8",
                  marginBottom: "5px",
                  fontSize: "14px",
                }}
              >
                Research Interests
              </p>

              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "1.7",
                }}
              >
                Rural Development, Agricultural Economics, Food Systems,
                Policy Research, Youth Engagement, Entrepreneurship &
                Sustainability
              </h4>
            </div>

            <div>
              <p
                style={{
                  color: "#94a3b8",
                  marginBottom: "5px",
                  fontSize: "14px",
                }}
              >
                Based In
              </p>

              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Nepal
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div>
        {/* Story Section */}
        <div
          style={{
            marginBottom: "50px",
          }}
        >
          <h3
            style={{
              fontSize: "38px",
              color: "#0f172a",
              marginBottom: "25px",
              fontWeight: "700",
            }}
          >
            My Journey
          </h3>

          <p
            style={{
              color: "#475569",
              lineHeight: "2",
              fontSize: "18px",
              marginBottom: "25px",
            }}
          >
            My academic and professional journey combines agriculture,
            research, leadership, and social impact. I completed my
            Bachelor’s degree in Agriculture from Agriculture and Forestry
            University and am currently pursuing a Master’s degree in
            Agricultural Economics. Throughout this journey, I have worked
            extensively on research, community engagement, youth
            leadership, and policy discussions related to Nepal’s
            agricultural and economic transformation.
          </p>

          <p
            style={{
              color: "#475569",
              lineHeight: "2",
              fontSize: "18px",
              marginBottom: "25px",
            }}
          >
            I gained international agricultural exposure during my
            internship at the Ramat Negev International Training Center
            (RNIT) in Israel, where I worked in advanced agricultural
            systems and modern farming practices. During the Israel-Hamas
            conflict in October 2023, I coordinated advocacy and
            communication efforts to support the rescue and evacuation of
            Nepali students studying in Israel. This experience
            strengthened my crisis leadership, coordination, communication,
            and humanitarian response skills.
          </p>

          <p
            style={{
              color: "#475569",
              lineHeight: "2",
              fontSize: "18px",
            }}
          >
            Beyond academics, I have served in multiple leadership roles,
            including student leadership organizations, youth networks,
            educational institutions, and international youth platforms. I
            strongly believe that leadership is not only about positions,
            but about creating meaningful impact, empowering communities,
            and driving sustainable change.
          </p>
        </div>

        {/* Experience Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "25px",
            marginBottom: "50px",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              background: "#f8fafc",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid #e2e8f0",
            }}
          >
            <h4
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#0f172a",
                marginBottom: "15px",
              }}
            >
              Research
            </h4>

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              Presented research at international conferences and worked
              on studies related to indigenous agricultural knowledge,
              sustainability, and rural communities in Nepal.
            </p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              background: "#f8fafc",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid #e2e8f0",
            }}
          >
            <h4
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#0f172a",
                marginBottom: "15px",
              }}
            >
              Leadership
            </h4>

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              Served in national and local student leadership roles,
              leading campaigns focused on education, youth empowerment,
              advocacy, and institutional development.
            </p>
          </div>

          {/* Card 3 */}
          <div
            style={{
              background: "#f8fafc",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid #e2e8f0",
            }}
          >
            <h4
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#0f172a",
                marginBottom: "15px",
              }}
            >
              International Exposure
            </h4>

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              Participated in international leadership and sustainability
              programs, including United People Global, CEER Summer
              School, and agricultural training in Israel.
            </p>
          </div>

          {/* Card 4 */}
          <div
            style={{
              background: "#f8fafc",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid #e2e8f0",
            }}
          >
            <h4
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#0f172a",
                marginBottom: "15px",
              }}
            >
              Vision
            </h4>

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              My vision is to contribute to policy innovation,
              entrepreneurship, and sustainable agricultural development
              that creates long-term impact for Nepal and beyond.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div
          style={{
            background: "linear-gradient(to right, #2563eb, #1e40af)",
            borderRadius: "24px",
            padding: "40px",
            color: "white",
          }}
        >
          <h3
            style={{
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "30px",
            }}
          >
            Skills & Expertise
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
            }}
          >
            {[
              "Agricultural Economics",
              "Research & Analysis",
              "Public Speaking",
              "Leadership",
              "Project Coordination",
              "Policy Research",
              "Youth Engagement",
              "Data Analysis",
              "SPSS",
              "Microsoft Office",
              "Community Development",
              "Crisis Management",
              "Communication",
              "Entrepreneurship",
              "Sustainability",
              "Strategic Planning",
            ].map((skill, index) => (
              <span
                key={index}
                style={{
                  padding: "12px 20px",
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: "500",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}