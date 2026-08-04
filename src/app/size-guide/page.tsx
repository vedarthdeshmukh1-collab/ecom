import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Size Guide",
  description: "SOLEVA UK size chart for men and women — find your perfect fit.",
};

const men = [
  { uk: 7, us: 8, eu: 41, cm: 25.5 },
  { uk: 8, us: 9, eu: 42, cm: 26.5 },
  { uk: 9, us: 10, eu: 43, cm: 27.5 },
  { uk: 10, us: 11, eu: 44.5, cm: 28.5 },
  { uk: 11, us: 12, eu: 45.5, cm: 29.5 },
  { uk: 12, us: 13, eu: 47, cm: 30.5 },
];

const women = [
  { uk: 5, us: 7, eu: 38, cm: 23.5 },
  { uk: 6, us: 8, eu: 39, cm: 24.5 },
  { uk: 7, us: 9, eu: 40.5, cm: 25.5 },
  { uk: 8, us: 10, eu: 42, cm: 26.5 },
  { uk: 9, us: 11, eu: 43, cm: 27.5 },
  { uk: 10, us: 12, eu: 44.5, cm: 28.5 },
];

export default function SizeGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-28 md:px-8 md:pb-28 md:pt-32">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Fit
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
        Size guide
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Measure your foot length in the evening. If you are between sizes, we
        recommend sizing up for running models.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold">Men</h2>
        <SizeTable rows={men} />
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold">Women</h2>
        <SizeTable rows={women} />
      </section>

      <div className="mt-12 rounded-2xl bg-mist p-6">
        <h3 className="font-display text-xl font-bold">Need help?</h3>
        <p className="mt-2 text-sm text-muted">
          Still unsure? Start a return-free exchange within 14 days, or browse
          fit notes on each product page.
        </p>
        <Link href="/shop" className="btn-accent mt-5 inline-flex">
          Shop footwear
        </Link>
      </div>
    </div>
  );
}

function SizeTable({
  rows,
}: {
  rows: { uk: number; us: number; eu: number; cm: number }[];
}) {
  return (
    <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead className="bg-mist text-xs uppercase tracking-wider text-muted">
          <tr>
            <th className="px-4 py-3 font-semibold">UK</th>
            <th className="px-4 py-3 font-semibold">US</th>
            <th className="px-4 py-3 font-semibold">EU</th>
            <th className="px-4 py-3 font-semibold">CM</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.uk} className="border-t border-line">
              <td className="px-4 py-3 font-medium">{row.uk}</td>
              <td className="px-4 py-3">{row.us}</td>
              <td className="px-4 py-3">{row.eu}</td>
              <td className="px-4 py-3">{row.cm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
