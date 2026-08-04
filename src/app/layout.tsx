import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import { WishlistProvider } from "@/lib/wishlist-context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { MobileNav } from "@/components/MobileNav";
import "./globals.css";

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soleva.example.com"),
  title: {
    default: "SOLEVA — Performance Meets Everyday Style",
    template: "%s · SOLEVA",
  },
  description:
    "Premium footwear engineered for comfort, movement, and everyday performance. Shop running, training, basketball, and lifestyle sneakers.",
  openGraph: {
    title: "SOLEVA — Performance Meets Everyday Style",
    description:
      "Premium footwear engineered for comfort, movement, and everyday performance.",
    type: "website",
    siteName: "SOLEVA",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLEVA — Performance Meets Everyday Style",
    description:
      "Premium footwear engineered for comfort, movement, and everyday performance.",
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
