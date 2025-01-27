import {JetBrains_Mono} from "next/font/google";
import "./globals.css";

// component
import Header from "@/components/Header";
import PageTransitions from "@/components/PageTransitions";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight:["100", "200", "300", "400", "500", "600", "700", "800"], 
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: "Juan Chilito Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header/>
        <StairTransition/>
        <PageTransitions>{children}</PageTransitions>
      </body>
    </html>
  );
}
