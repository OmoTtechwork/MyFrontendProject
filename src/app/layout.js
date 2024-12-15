import localFont from "next/font/local";
import "./globals.css";
import Footer from "./component/Footer";
import DashNav from "./component/dashNav";
import IconNav from "./component/NavIcon";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "My new shop app",
  description: "A project on e-commerce application using React",
};

export default function RootLayout({children,}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
        <DashNav/>

        {children}


        <Footer/>
        </div>
      </body>
    </html>
  );
}
