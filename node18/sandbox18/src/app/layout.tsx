import {AuthContextProvider} from "@/contexts/AuthContext";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <AuthContextProvider>
        <html lang="en">
          <body>
            {children}
          </body>
        </html>
      </AuthContextProvider>
  )
}
