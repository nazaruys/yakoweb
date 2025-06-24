import { Manrope } from "next/font/google";
import "./globals.css";

// Google Font: Manrope
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
});

export const metadata = {
  description: "We design and develop fast, responsive websites that reflect your brand, engage visitors, and get your business sales. Whether you're starting from scratch or need a complete redesign.",
  openGraph: {
    title: "YakoWeb",
    description: "We design and develop fast, responsive websites that reflect your brand, engage visitors, and get your business sales. Whether you're starting from scratch or need a complete redesign.",
    images: [
      {
        url: "https://yakoweb.com/images/x-preview.png",
        width: 1706,
        height: 772,
        alt: "YakoWeb preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YakoWeb",
    description: "We design and develop fast, responsive websites that reflect your brand, engage visitors, and get your business sales.",
    images: ["https://yakoweb.com/images/x-preview.png"],
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
