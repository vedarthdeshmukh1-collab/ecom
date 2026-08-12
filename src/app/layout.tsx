import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import { WishlistProvider } from "@/lib/wishlist-context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { MobileNav } from "@/components/MobileNav";
import "./globals.css";

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soleva.example.com"),
  title: {
    default: "SOLEVA — Soft steps. All day.",
    template: "%s · SOLEVA",
  },
  description:
    "Comfortable everyday footwear for walking, training, and city life. Soft cushioning, breathable uppers, easy style.",
  openGraph: {
    title: "SOLEVA — Soft steps. All day.",
    description:
      "Comfortable everyday footwear for walking, training, and city life.",
    type: "website",
    siteName: "SOLEVA",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLEVA — Soft steps. All day.",
    description:
      "Comfortable everyday footwear for walking, training, and city life.",
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
      <body className="flex min-h-full flex-col bg-paper text-ink-soft">
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
