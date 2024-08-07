import type { Metadata } from "next";
import { fonts } from "./theme/fonts";
import { ApolloProvider, ChakraProvider } from "./components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tigerhall Content",
  description: "Tigerhall Podcasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.ppNeuman.className}>
        <ApolloProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
