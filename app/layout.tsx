import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "mozaVT — Gaming, but make it chaotic.", description: "Official home of mozaVT: gaming, funny moments and good chaos." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
