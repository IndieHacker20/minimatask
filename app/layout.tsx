
import '@/app/globals.css'
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import { SyncUser } from "@/components/SyncUser";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <ConvexClientProvider>
      <html lang="en">
        <body>
          <SyncUser />
          {children}
        </body>
      </html>
      </ConvexClientProvider>
  )
}