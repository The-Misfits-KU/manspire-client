import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import Navbar from "@/components/Navbar";
import { HuddleClient, HuddleProvider } from "@huddle01/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manspire - Your Anonymous Platform for Professional Help",
  description:
    "Get professional help anonymously from the comfort of your home. Manspire is a platform that connects you with professionals who can help you with your mental health.",
};

const huddleClient = new HuddleClient({
  projectId: "zMQHa6hH5hGrxfwYZp7z8I-1lWScI7UA",
  options: {
    activeSpeakers: {
      size: 8,
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-700">
        <ThirdwebProvider>
          <HuddleProvider client={huddleClient}>
            <Navbar />
            {children}
          </HuddleProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
