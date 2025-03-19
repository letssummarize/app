import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { SummaryProvider } from "@/context/SummaryProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Let's Summarize",
    default: "Let's Summarize - AI-powered Content Summarization",
  },
  description:
    "Transform long content into concise, meaningful summaries using AI. Support for videos, articles, and documents.",
  authors: [
    { name: "Khaled Alshibani", url: "https://khaled.technway.biz/" },
    { name: "Muneeb Almoliky", url: "https://github.com/Muneeb-Almoliky" },
    { name: "Sabri Alshibani", url: "https://github.com/sabriAlshibani" },
  ],
  keywords: [
    "AI summarization",
    "text summary",
    "YouTube video summary",
    "document summary",
    "article summary",
    "PDF summary",
    "content summarizer",
    "Arabic Content summarizer",
    "AI assistant",
    "productivity tool",
  ],
  creator: "Let's Summarize Team",
  publisher: "Let's Summarize",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Let's Summarize - AI-powered Content Summarization",
    description:
      "Transform long content into concise, meaningful summaries using AI. Support for videos, articles, and documents.",
    url: "/",
    siteName: "Let's Summarize",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Let's Summarize - AI Content Summarization",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${poppins.className} ${geistMono.variable} antialiased relative min-h-screen overflow-x-hidden`}
      >
        <Image
          src="/images/body-blur.png"
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 -z-0 pointer-events-none opacity-80
             -top-[700px] sm:top-[-100px] md:top-[-300px] lg:top-[-200px] xl:top-[-600px]
             max-sm:w-[200vw] max-sm:left-1/2 max-sm:-translate-x-[50%] w-full"
          width={2000}
          height={1000}
        />

        <div className="relative z-1 h-full flex flex-col space-y-[160px]">
          <Navbar />
          <SummaryProvider>{children}</SummaryProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
