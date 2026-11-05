/**
 * SD Social — all public copy, prices, and links.
 *
 * Paste the WhatsApp number as digits with country code, no plus:
 *   whatsappNumber: "972501234567"
 * Until it is set, booking buttons open the Instagram profile
 * so they never message a stranger.
 *
 * Starting prices follow published Israeli market ranges (October 2026).
 * The final quote is always confirmed on WhatsApp.
 */

export const site = {
  brand: "SD Social",
  lockup: "Wedding Content Creator",
  handle: "@sd_social1",
  instagramUrl: "https://www.instagram.com/sd_social1/",
  reelUrl: "https://www.instagram.com/reel/DfVtGzBID_v/",
  reelEmbedUrl: "https://www.instagram.com/reel/DfVtGzBID_v/embed",
  reelCouple: "הדר ועידו",
  whatsappNumber: "" as string,
  whatsappPrefill:
    "היי, אנחנו מתחתנים ואשמח לבדוק זמינות לסושיאל ביום שלנו.",
};

export const nav = [
  { href: "#about", label: "אודות" },
  { href: "#services", label: "השירותים" },
  { href: "#portfolio", label: "רילס" },
  { href: "#testimonials", label: "המלצות" },
  { href: "#faq", label: "שאלות" },
  { href: "#contact", label: "צור קשר" },
] as const;

export const cta = {
  availability: "בדיקת זמינות בוואטסאפ",
  book: "שריון תאריך בוואטסאפ",
  portfolio: "לתיק העבודות",
} as const;

export function whatsappDigits() {
  return site.whatsappNumber.replace(/\D/g, "");
}

export function hasWhatsApp() {
  return whatsappDigits().length > 0;
}

/** Booking link. Falls back to Instagram until a real number is set. */
export function whatsappHref() {
  const digits = whatsappDigits();
  if (!digits) return site.instagramUrl;
  const text = encodeURIComponent(site.whatsappPrefill);
  return `https://wa.me/${digits}?text=${text}`;
}

export function phoneHref() {
  const digits = whatsappDigits();
  return digits ? `tel:+${digits}` : null;
}

export function displayPhone() {
  const digits = whatsappDigits();
  if (!digits) return null;
  if (digits.startsWith("972") && digits.length === 12) {
    const local = `0${digits.slice(3)}`;
    return `${local.slice(0, 3)}-${local.slice(3, 6)}-${local.slice(6)}`;
  }
  return `+${digits}`;
}

export const hero = {
  eyebrow: "סושיאל לחתונה · אינסטגרם וטיקטוק",
  title: "החתונה שלכם, הגרסה הוויראלית",
  lede: "כל ה-Reels, הטרנדים והרגעים הכי יפים אצלכם בטלפון כבר באותו ערב ועוד הפתעות למחרת בבוקר.",
};

export const assurances = [
  { value: "24–48", label: "שעות לרילסים ערוכים" },
  { value: "9:16", label: "וידאו אנכי, מוכן לפיד" },
  { value: "הערב", label: "סטוריז עוד באותו לילה" },
] as const;

export const reels = [
  {
    id: "chuppah",
    title: "החופה",
    subtitle: "מהפיד",
    href: "https://www.instagram.com/sd_social1/reel/DfXYA-UOQGP/",
    poster: "/instagram/reel-kiss.jpg",
    video: "/instagram/reel-kiss.mp4",
    featured: false,
  },
  {
    id: "dance",
    title: "הרחבה",
    subtitle: "מהפיד",
    href: "https://www.instagram.com/sd_social1/reel/DfW0jwsuY1X/",
    poster: "/instagram/reel-crowd.jpg",
    video: "/instagram/reel-crowd.mp4",
    featured: false,
  },
  {
    id: "hadar",
    title: "הדר ועידו",
    subtitle: "ריל מהחתונה",
    href: site.reelUrl,
    poster: "/instagram/hadar-ido.jpg",
    video: "/instagram/hadar-ido.mp4",
    featured: true,
  },
  {
    id: "meeting",
    title: "המפגש",
    subtitle: "מהפיד",
    href: "https://www.instagram.com/sd_social1/reel/DerlIv2OcRa/",
    poster: "/instagram/reel-garden.jpg",
    video: "/instagram/reel-garden.mp4",
    featured: false,
  },
] as const;

export const about = {
  eyebrow: "אודות",
  title: "אורחת עם עין חדה, לא עוד מצלמה באמצע הפריים.",
  paragraphs: [
    "אני מצלמת את היום כמו מישהי שעומדת לידכם: הצחוק באמצע האיפור, היד שסוגרת את השמלה, המבט של סבתא בחופה, הרחבה כשהיא כבר שלכם.",
    "לפני האירוע אני מתאמת עם הצלם הראשי איפה כל אחד עומד. הוא שומר את הפריים המרכזי. אני נשארת על התגובות, על החברים, ועל מה שקורה בין הפוזות.",
    "כמה ימים לפני אתם שולחים לוח זמנים ובוחרים שלושה עד חמישה רגעים שהם חובה. את השאר אני כבר יודעת לחפש — כולל את מה שאף אחד לא כתב ברשימה.",
  ],
};

export const comparison = {
  eyebrow: "למה סושיאל",
  title: "הסרט מחכה. הפיד לא.",
  ledeBefore: "צלם וידאו שומר את היום לשנים קדימה. סושיאל נותן אותו למשפחה ולחברים ",
  ledeEmphasis: "עוד באותו לילה",
  ledeAfter: ".",
  film: {
    title: "סרט חתונה",
    points: [
      { label: "פורמט", value: "אופקי, במצלמה" },
      { label: "מה מקבלים", value: "סרט מלא, גרסה קצרה וקליפ" },
      { label: "מתי", value: "אחרי שלושה שבועות עד חודש וחצי" },
      { label: "הסגנון", value: "רצף הטקס, הנאומים והערב" },
    ],
  },
  social: {
    title: "SD Social",
    points: [
      { label: "פורמט", value: "אנכי 9:16, בטלפון" },
      { label: "מה מקבלים", value: "רילסים, סטוריז וקטעי גלם" },
      { label: "מתי", value: "סטוריז באותו לילה, רילסים תוך 24–48 שעות" },
      { label: "הסגנון", value: "רגעים ספונטניים, מהזווית של אורחת" },
    ],
  },
  note: "הסטילס והסרט נשארים אצל הצלמים. SD Social מוסיפה את השכבה שהרשת יודעת לשתף מיד — ומאות קטעים גולמיים שנשארים אצלכם.",
};

export const servicesSection = {
  eyebrow: "השירותים",
  title: "מה מקבלים",
  lede: "ארבעה דברים, בלי הפתעות בסוף הערב.",
};

export const services = [
  {
    icon: "stories",
    title: "סטוריז בזמן אמת",
    text: "עדכונים במהלך האירוע למשפחה ולחברים שלא הגיעו. סוגרים מראש מאיזה חשבון זה עולה, ומי רואה לפני שזה באוויר.",
  },
  {
    icon: "reels",
    title: "רילסים מוכנים תוך 24 שעות",
    text: "סרטונים ערוכים, קצביים, בפורמט 9:16. בנויים לפיד של אינסטגרם וטיקטוק, לא כגרסה מקוצרת של סרט.",
  },
  {
    icon: "raw",
    title: "חומרי גלם מלאים",
    text: "מאות קטעי וידאו גולמיים באיכות גבוהה, אנכיים. המזכרת האותנטית, גם אחרי שהרילסים כבר עלו.",
  },
  {
    icon: "together",
    title: "עבודה לצד הצלם הראשי",
    text: "תיאום לפני החופה והכניסה לאולם. הוא בפריים המרכזי. אני על מאחורי הקלעים, על התגובות ועל הרחבה מבפנים.",
  },
] as const;

export const packagesSection = {
  eyebrow: "חבילות",
  title: "כמה שעות, כמה רילסים.",
  lede: "המחיר מתחיל לפי היקף היום. הסכום הסופי נסגר בוואטסאפ, אחרי שרואים את לוח הזמנים.",
  footnote:
    "לאולם מרוחק מקובלת תוספת נסיעה של 200–300 ₪. שעה מעבר לחבילה מתומחרת מראש בשיחה.",
};

export const packages = [
  {
    id: "evening",
    name: "ערב",
    price: "1,300",
    hours: "5 שעות",
    summary: "קבלת פנים, חופה ותחילת הרחבה.",
    items: [
      "3 רילסים ערוכים",
      "סטוריז במהלך הערב",
      "עד כ־50 רגעים נבחרים",
      "תיאום מול הצלם הראשי",
    ],
    featured: false,
  },
  {
    id: "full",
    name: "יום מלא",
    price: "3,000",
    hours: "8–10 שעות",
    summary: "מההתארגנות ועד שהרחבה נרגעת.",
    items: [
      "6 רילסים ערוכים",
      "סטוריז עוד באותו לילה",
      "גלם אנכי מלא",
      "הכנות, מפגש, חופה ורחבה",
    ],
    featured: true,
  },
  {
    id: "small",
    name: "חינה / אירוע קטן",
    price: "1,300",
    hours: "לפי האירוע",
    summary: "חינה, מסיבה, או ערב קצר שלפני.",
    items: [
      "רילסים לפי היקף השעות",
      "סטוריז בזמן האירוע",
      "רגעים נבחרים לפיד",
      "מתאים גם כתוספת לחתונה",
    ],
    featured: false,
  },
] as const;

export const momentsSection = {
  eyebrow: "רשימת רגעים",
  title: "מה מתועד",
  lede: "השראה, לא תסריט. מסמנים מה שחשוב לכם, ומשאירים מקום לילד שנרדם על הכיסא ולדמעה שאף אחד לא תכנן.",
  note: "כמה ימים לפני שולחים לוח זמנים, שמות של האנשים החשובים, ו־3 עד 5 רגעים שהם חובה. אותו דף הולך גם לצלם, כדי שאף רגע לא ייפול בין הכיסאות.",
};

export const moments = [
  {
    n: "01",
    title: "התארגנות",
    text: "השמלה על הקולב, האיפור, הנעליים, אמא שסוגרת את הגב, והמבט הראשון במראה.",
  },
  {
    n: "02",
    title: "המפגש",
    text: "התגובה, הידיים, הלחישה. ומה שקורה בין הפוזות — שם בדרך כלל נמצא הקסם.",
  },
  {
    n: "03",
    title: "קבלת פנים",
    text: "הפרחים לפני שהאורחים נכנסים, החיבוקים הראשונים, החברים, הכוסית.",
  },
  {
    n: "04",
    title: "החופה",
    text: "מהצד של האורחים: ההורים, שבירת הכוס, השנייה שאחריה. הצלם הראשי במיקום המרכזי.",
  },
  {
    n: "05",
    title: "הרחבה",
    text: "מתוך הרחבה, לא מהקצה. ריקוד עם ההורים, השיר שחיכיתם לו, ו־02:00 כשהנעליים כבר ביד.",
  },
] as const;

export const portfolioSection = {
  eyebrow: "תיק עבודות",
  title: "טעימה מהפיד",
  lede: "ארבעה רילסים מהחשבון — מהחתונות עצמן.",
};

export const testimonialsSection = {
  eyebrow: "מהפיד",
  title: "מה אומרים",
  lede: "תגובות ציבוריות מהריל של הדר ועידו, כפי שנכתבו באינסטגרם.",
};

export const testimonials = [
  { handle: "yaeldushi", quote: "אין אין סושיאל טוב כזה" },
  { handle: "talyamaslansky", quote: "הכי טובה בפערררר" },
  { handle: "avia_.ohana", quote: "את הכי טובההההה" },
  { handle: "adi.tibber", quote: "את מטורפת שומעת" },
  { handle: "tamarbarzel_", quote: "הכי טובה!!!!" },
  { handle: "linoy_katoa_", quote: "מושלםם ברמות" },
] as const;

export const faqSection = {
  eyebrow: "שאלות נפוצות",
  title: "לפני שסוגרים תאריך",
};

export const faqs = [
  {
    q: "האם זה מחליף את צלם הסטילס והווידאו?",
    a: "צלם הסטילס שומר את התמונות המסודרות, וצלם הווידאו את הסרט המלא — בדרך כלל אופקי, ואחרי כמה שבועות. אני מוסיפה סטוריז, רילסים אנכיים ואת הרגעים מתוך הרחבה. בחתונה גדולה כדאי את שניהם, מתואמים מראש.",
  },
  {
    q: "תוך כמה זמן מקבלים את החומרים?",
    a: "סטוריז ורגעים נבחרים עולים עוד באותו לילה. רילסים ערוכים נמסרים תוך 24–48 שעות. קטעי הגלם מגיעים יחד עם הרילסים, לפי החבילה.",
  },
  {
    q: "באיזה אזורים בארץ את נותנת שירות?",
    a: "בכל הארץ. לאולם מרוחק מקובלת תוספת נסיעה של 200–300 ₪, וסוגרים אותה מראש יחד עם השעות.",
  },
  {
    q: "כמה שעות צריך?",
    a: "חמש שעות מכסות בדרך כלל קבלת פנים, חופה ותחילת רחבה. מי שרוצה גם את ההתארגנות בבוקר וגם את סוף הערב צריך יום של שמונה עד עשר שעות. עוברים על לוח הזמנים ומסמנים מה אסור לפספס.",
  },
  {
    q: "מאיזה חשבון עולים הסטוריז?",
    a: "זה נסגר לפני החתונה. אפשר להעלות מהחשבון שלכם, או לקבל את הקבצים בזמן אמת ולהעלות בעצמכם. אפשר גם לאשר כל סטורי לפני שהוא עולה.",
  },
  {
    q: "איך זה עובד מול הצלם הראשי?",
    a: "מחברים בינינו לפני היום, בשיחה או בקבוצה. בחופה ובכניסה לאולם הצלם הראשי מקבל את המיקום המרכזי. אני מצלמת מזווית של אורחת, את המשפחה ואת מה שקורה מסביב.",
  },
] as const;

export const closing = {
  eyebrow: "התאריך",
  title: "העונה מתמלאת.",
  text: "ימי שישי בעונת החתונות נתפסים מוקדם, יחד עם האולם והצלם. אם יש תאריך — שווה לשריין אותו עכשיו.",
};

export const footer = {
  blurb: "יוצרת תוכן לחתונות. סטוריז, רילסים וגלם אנכי — בכל הארץ.",
  rights: "SD Social",
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SD Social",
  description:
    "יוצרת תוכן לחתונות. סטוריז באותו ערב, רילסים אנכיים תוך 24–48 שעות, וחומרי גלם.",
  areaServed: { "@type": "Country", name: "Israel" },
  sameAs: [site.instagramUrl],
  knowsLanguage: "he",
};
