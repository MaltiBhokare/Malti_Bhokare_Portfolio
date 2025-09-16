import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Malti Bhokare | Portfolio",
  description: "MERN Stack Developer | AI Enthusiast | Computer Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans transition-colors duration-300">
        <Navbar />
        <main className="container mx-auto px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
