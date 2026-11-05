import BackgroundGrid from "@/app/background_grid";
import type {Metadata} from 'next';


export const metadata:Metadata = {
  title:'CV',
  description:'Tirban Andreea-Florina ',
};

export default function RootLayout(
  {children ,}: {children: React.ReactNode
  })
  {
    return (
      <html lang="en">
        <body className="bg-black text-white">
  <BackgroundGrid />

  <main className="relative z-10">
    {children}
  </main>
</body>
      </html>
    )
  }
