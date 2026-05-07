import "./globals.css";

export const metadata = {
  title: "Marine Audit Global | Vessel Inspections & Marine Consultancy",
  description:
    "Global marine inspection, SIRE 2.0 preparation, TMSA audits and maritime consultancy services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}