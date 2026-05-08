import "./globals.css";

export const metadata = {
  title: "Suraj Bhandari",
  description: "Agricultural Economist | Researcher | Policy Analyst",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f9fafb" }}>

        {/* NAVBAR */}
        <nav style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          padding: "18px",
          background: "#white",
          borderBottom: "1px solid #eee",
          position: "sticky",
          top: 0
        }}>
          <h1>Suraj Bhandari</h1>

          <div style={{ display: "flex", gap: "15px" }}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/research">Research</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {children}
        </div>
      </body>
    </html>
  );
}