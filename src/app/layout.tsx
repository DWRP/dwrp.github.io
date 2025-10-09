import "../styles/globals.css";
import { generateSeoMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  // Default to English, but can be made dynamic based on user preference
  // For now, we'll use English as default since the locale detection
  // happens client-side in the page-content.tsx
  return await generateSeoMetadata("en");
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://dwrp.github.io/" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
