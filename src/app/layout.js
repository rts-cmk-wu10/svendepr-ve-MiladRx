import { Poppins } from "next/font/google";  
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-poppins",  
});

export const metadata = {
  title: "Belive Fitness",
  description: "Belive Fitness - Milad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'var(--font-poppins)' }}>
        {children}
      </body >
    </html>
  );
}
