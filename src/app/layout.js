import localFont from "next/font/local";
import "./globals.css";
import Footer from "./component/Footer";
import DashNav from "./component/DashNav";
import { SideBarProvider } from "./providers";


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
  title: "Real-estate A-Group",
  description: "E-commerce",
};

export default function RootLayout({children,}) {


  return (
    <html lang="en">
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SideBarProvider>
        <div>
        <DashNav/>

        {children}


        
        </div>
        <Footer/>
        </SideBarProvider>
      </body>
    </html>
  );
}
