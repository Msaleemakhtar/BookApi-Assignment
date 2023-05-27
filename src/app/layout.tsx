import './globals.css'

import type {Metadata} from "next"
import Wrapper from "@/components/shared/wrapper"
import NavBar from '@/components/shared/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Api project',
  description: 'Assignment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        <Wrapper>
        {children}
        </Wrapper>
        
        </body>
    </html>
  )
}
