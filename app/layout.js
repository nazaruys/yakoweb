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
