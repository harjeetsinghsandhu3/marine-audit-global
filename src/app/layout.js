import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://marineauditglobal.com"),

 title: {
  default:
    "Marine Audit Global | Marine Audits, Ship Inspections, Marine Assurance, Ship Internal Audits, Vessel Surveys & Marine Consultancy Worldwide",
  template: "%s | Marine Audit Global",
},

  description:
  "Marine Audit Global provides independent marine audits, ship inspections, vessel surveys, SIRE 2.0 preparation, TMSA audits, ISM, ISPS & MLC internal audits, marine assurance, technical consultancy and maritime compliance services worldwide.",
verification: {
  google: "59w_H1W3Ei-MoneXobWk-kNsu5tLanHn-B_a-i9-fpQ",
},

 keywords: [

  // Marine Audit
  "Marine Audit",
  "Ship Audit",
  "Vessel Audit",
  "Marine Internal Audit",
  "Ship Internal Audit",
  "Vessel Internal Audit",
  "ISM Internal Audit",
  "ISPS Internal Audit",
  "MLC Internal Audit",

  // Marine Inspection
  "Marine Inspection",
  "Ship Inspection",
  "Vessel Inspection",
  "Marine Survey",
  "Ship Survey",
  "Vessel Survey",
  "Condition Survey",
  "Technical Inspection",
  "Pre Purchase Inspection",

  // Vetting
  "SIRE 2.0",
  "SIRE 2.0 Preparation",
  "OCIMF Vetting",
  "TMSA Audit",
  "RightShip",
  "RightShip Preparation",
  "CDI Inspection",
  "PSC Preparation",
  "Flag State Inspection",

  // Consultancy
  "Marine Consultancy",
  "Shipping Consultancy",
  "Maritime Consultancy",
  "Marine Assurance",
  "Marine Assurance Consultant",
  "Marine Technical Consultant",
  "Marine Risk Assessment",
  "Marine Investigation",
  "Accident Investigation",
  "Cargo Audit",
  "Navigation Audit",
  "Engine Room Audit",
  "Mooring Audit",
  "Bunker Audit",
  "Environmental Compliance",

  // Business
  "Marine Audit Company",
  "Marine Inspection Company",
  "Independent Marine Surveyor",
  "Marine Compliance Consultant",
  "Maritime Compliance Consultant",
  "Marine Experts",

  // Geographic
  "Marine Audit India",
  "Ship Inspection India",
  "Marine Survey India",
  "Marine Consultancy Mumbai",
  "Global Marine Audit",
  "Worldwide Marine Inspection",

  // Brand
  "Marine Audit Global"
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
    "Marine Audit Global | Marine Assurance, Ship & Vessel Inspection Services",

  description:
    "Independent marine audits, ship inspections, vessel surveys, SIRE 2.0 preparation, TMSA audits, marine consultancy and maritime compliance services worldwide.",

  url: "https://marineauditglobal.com",

  siteName: "Marine Audit Global",

  locale: "en_US",

  type: "website",

  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Marine Audit Global - Marine Assurance & Vessel Inspection Services",
    },
  ],
},

  twitter: {
  card: "summary_large_image",

  title:
    "Marine Audit Global | Marine Assurance, Ship & Vessel Inspection",

  description:
    "Independent marine audits, ship inspections, SIRE 2.0 preparation, technical consultancy and maritime compliance services worldwide.",

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