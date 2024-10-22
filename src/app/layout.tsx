import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../providers/theme-provider"
import {ClerkProvider } from "@clerk/nextjs"
import ModalProvider from "@/providers/modal-provider";

const font  = DM_Sans( { subsets: ['latin'] } )
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Volt",
  description: "Automate your work with Volt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey = {process.env.NEXT_PUBLICCLERKPUSBLISHABLE_KEY}>
          <html lang="en">
            <body
              className={font.className}
            >
              
              <ThemeProvider
                  attribute="class"
                  defaultTheme="dark"
                  enableSystem
                  disableTransitionOnChange
                >
                  <ModalProvider>
                    {children}
                  </ModalProvider>
              </ThemeProvider>
              
            </body>
          </html>
    </ClerkProvider>
  );
}
