import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Suraj Bhandari",
  description: "Agricultural Economist | Research | Youth Leadership",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">

        {/* GLOBAL NAVBAR */}
        <nav className="flex justify-between px-8 py-4 border-b sticky top-0 bg-white">
          <Link href="/" className="font-bold">Suraj Bhandari</Link>

          <div className="flex gap-6 text-sm">
            <Link href="/about">About</Link>
            <Link href="/research">Research</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/himalayan-elixir">Himalayan Elixir</Link>
            <Link href="/cv">CV</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        {children}

      </body>
    </html>
  );
}