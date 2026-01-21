import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({
    variable: '--font-urbanist',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'The Recursion Community | Mentorship by Vasanth Srivatsa',
    description: 'The Recursion Community is an elite WhatsApp ecosystem for student developers, offering curated resources and personal mentorship by Vasanth Srivatsa, Director of Engineering at Introbot.ai. Founded by a self-taught engineer with 10+ years of experience in systems design and platform engineering, the community focuses on mastering full-stack development, performance tuning, and software debugging. Learn to iterate, evolve, and repeat success in technology through direct industry insights and scalable programming practices.',
    icons: {
        icon: '/icon.png',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' className={urbanist.variable}>
            <body className="font-sans antialiased">
                {children}
            </body>
        </html>
    )
}
