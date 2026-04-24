import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlyBon Stamps — Custom Rubber Stamp Makers",
  description: "Custom rubber stamps, nylon stamps, and self-inking stamps. Branches in Goa and Bengaluru. Fast delivery in 30 minutes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "#111111" }}>{children}</body>
    </html>
  );
}
