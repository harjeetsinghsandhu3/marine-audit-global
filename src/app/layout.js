import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://marineauditglobal.com"),

  title: {
    default: "Marine Audit Global | Marine Assurance, Vessel Inspections & Consultancy",
    template: "%s | Marine Audit Global",
  },

  description:
    "Marine Audit Global provides independent vessel inspections, SIRE 2.0 preparation, TMSA audits, ISM, ISPS & MLC internal audits, technical consultancy, marine assurance and maritime compliance services worldwide.",
verification: {
  google: "59w_H1W3Ei-MoneXobWk-kNsu5tLanHn-B_a-i9-fpQ",
},

  keywords: [
    "Marine Audit",
    "Marine Assurance",
    "Vessel Inspection",
    "SIRE 2.0",
    "TMSA Audit",
    "Marine Consultancy",
    "ISM Audit",
    "ISPS Audit",
    "MLC Audit",
    "PSC Preparation",
    "CDI Inspection",
    "RightShip",
    "Marine Survey",
    "Shipping Consultancy",
    "Chief Engineer",
    "Maritime Compliance",
    "Ship Inspection",
    "Marine Safety",
    "Marine Audit Global",
  ],

  authors: [
    {
      name: "Marine Audit Global",
      url: "https://marineauditglobal.com",
    },
  ],

  creator: "Marine Audit Global",

  publisher: "Marine Audit Global",

  applicationName: "Marine Audit Global",

  category: "Business",

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://marineauditglobal.com",
  },

  openGraph: {
    title:
      "Marine Audit Global | Marine Assurance & Vessel Inspection Services",

    description:
      "Professional worldwide marine assurance, vessel inspections, SIRE 2.0 preparation, technical consultancy and maritime compliance services.",

    url: "https://marineauditglobal.com",

    siteName: "Marine Audit Global",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Marine Audit Global",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Marine Audit Global | Marine Assurance & Vessel Inspection",

    description:
      "Professional worldwide marine assurance, SIRE 2.0 preparation and marine consultancy.",

    images: ["/og-image.png"],
  },

  icons: {
  icon: [
    {
      url: "/favicon.ico",
    },
    {
      url: "/favicon.svg",
      type: "image/svg+xml",
    },
    {
      url: "/favicon-96x96.png",
      sizes: "96x96",
      type: "image/png",
    },
  ],

  shortcut: "/favicon.ico",

  apple: "/apple-touch-icon.png",
},
manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#081120",
};

export default function RootLayout({ children }) {

  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",

  name: "Marine Audit Global",

  image: "https://marineauditglobal.com/og-image.png",

  url: "https://marineauditglobal.com",

  logo: "https://marineauditglobal.com/logo-transparent.png",

  email: "ops@marineauditglobal.com",

  telephone: "+91-9780694547",

  description:
    "Marine Audit Global provides worldwide marine assurance, vessel inspections, SIRE 2.0 preparation, TMSA audits, ISM, ISPS, MLC internal audits, RightShip preparation, technical consultancy and maritime compliance services.",

  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },

  areaServed: "Worldwide",

  priceRange: "$$$",

  sameAs: [],

  serviceType: [
    "Marine Assurance",
    "Vessel Inspection",
    "SIRE 2.0 Preparation",
    "TMSA Audit",
    "ISM Internal Audit",
    "ISPS Audit",
    "MLC Audit",
    "Marine Consultancy",
    "Technical Inspection",
    "RightShip Preparation",
    "PSC Preparation",
    "CDI Preparation",
  ],
};
  return (
    <html lang="en" suppressHydrationWarning>
      <body
  className="bg-[#061120] text-white antialiased"
>
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(jsonLd),
  }}
/>
  {children}
</body>
    </html>
  );
}