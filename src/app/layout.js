import { Montserrat } from "next/font/google";
import "./globals.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import NavBar from "../components/NavBar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased bg-gray-50`}>
        <NavBar />

        {/* Page Content (add top padding so content doesn't hide under fixed header) */}
        <main className="pt-20 md:pt-24">{children}</main>
      </body>
    </html>
  );
}
