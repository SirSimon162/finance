import localFont from "@next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const clash = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplayBold.otf",
      weight: "700",
    },
    {
      path: "../public/fonts/ClashDisplayMedium.otf",
      weight: "600",
    },
  ],
  variable: "--font-clash-display",
});

export const metadata = {
  title: "Fineasy",
  description: "Landing page of a Finance app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${clash.variable} font-sans`}>
      <body className="relative max-w-7xl mx-auto px-5 flex flex-col items-center justify-center bg-white">
        <NavBar />
        <main className="mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
