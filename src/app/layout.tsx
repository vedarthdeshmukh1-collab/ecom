import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FORMA — Objects made to hold space",
    template: "%s · FORMA",
  },
  description:
    "Contemporary furniture and objects for considered interiors. A portfolio demo storefront for case studies.",
  openGraph: {
    title: "FORMA — Objects made to hold space",
    description:
      "Contemporary furniture and objects for considered interiors.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col texture-grain bg-paper text-ink">
        <CartProvider>
          <Header />
          <main className="relative z-[2] flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
