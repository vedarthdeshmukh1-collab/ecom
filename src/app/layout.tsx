import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import { WishlistProvider } from "@/lib/wishlist-context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { MobileNav } from "@/components/MobileNav";
import "./globals.css";

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soleva.example.com"),
  title: {
    default: "SOLEVA — Comfort for every day",
    template: "%s · SOLEVA",
  },
  description:
    "Quietly comfortable footwear for walking, training, and everyday wear. Soft steps, honest materials, made to move with you.",
  openGraph: {
    title: "SOLEVA — Comfort for every day",
    description:
      "Quietly comfortable footwear for walking, training, and everyday wear.",
    type: "website",
    siteName: "SOLEVA",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLEVA — Comfort for every day",
    description:
      "Quietly comfortable footwear for walking, training, and everyday wear.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink-soft">
        <CartProvider>
          <WishlistProvider>
            <Header />
            <main className="relative z-[2] flex-1 pb-16 md:pb-0">{children}</main>
            <Footer />
            <CartDrawer />
            <MobileNav />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
