import { headerConfig, mainNavConfig } from '@/config'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Layout } from '@/components/Layout'
import { MainNav } from '@/components/MainNav'

import '@/styles/globals.css'
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
    <html lang="en">
      <body className="bg-primary text-zinc-50">
        <Header>
          <MainNav items={headerConfig} />
        </Header>

        <Layout>
          <div className="py-20">{children}</div>
          <Footer items={mainNavConfig.mainNav} />
        </Layout>
      </body>
    </html>
  )
}
