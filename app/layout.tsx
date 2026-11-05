import type { Metadata, Viewport } from "next";
import { carmela, yehuda } from "@/lib/fonts";
import { jsonLd, site, whatsappDigits } from "@/lib/site";
import "./globals.css";

const description =
  "סושיאל לחתונה: סטוריז באותו ערב, רילסים אנכיים 9:16 תוך 24–48 שעות, ומאות קטעי גלם. אתם חוגגים בלי לגעת בטלפון.";

export const metadata: Metadata = {
  title: "SD Social | יוצרת תוכן לחתונות",
  description,
  openGraph: {
    title: "SD Social | יוצרת תוכן לחתונות",
    description,
    locale: "he_IL",
    type: "website",
    siteName: site.brand,
  },
};

export const viewport: Viewport = {
  themeColor: "#f3eee6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const digits = whatsappDigits();
  const structured = {
    ...jsonLd,
    ...(digits ? { telephone: `+${digits}` } : {}),
  };

  return (
    <html
      lang="he"
      dir="rtl"
      className={`${carmela.variable} ${yehuda.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-ink">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }}
        />
      </body>
    </html>
  );
}
