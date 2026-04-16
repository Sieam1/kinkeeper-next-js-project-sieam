import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TimelineProvider from "@/context/TimelineContext";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="bg-base-200 text-base-content min-h-screen">
        <TimelineProvider>
          <Navbar />
          
          <main className="max-w-7xl mx-auto px-4">
            {children}
          </main>

          <Footer />
          <Toaster position="top-right" />
        </TimelineProvider>
      </body>
    </html>
  );
}