import BackgroundGrid from "@/app/background_grid";
import type {Metadata} from 'next';
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata:Metadata = {
  title:'CV',
  description:'Tirban Andreea-Florina ',
};

export default function RootLayout(
  {children ,}: {children: React.ReactNode
  })
  {
    return (
      <html lang="en" className={cn("font-sans", inter.variable)}>
        <body className="bg-black text-white">
  <BackgroundGrid />

  <main className="relative z-10">
    {children}
  </main>
</body>
      </html>
    )
  }
