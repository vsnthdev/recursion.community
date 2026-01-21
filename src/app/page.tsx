'use client'

import { motion, Variants } from 'framer-motion'
import { Hash, WhatsappLogoIcon } from '@phosphor-icons/react'
import Image from 'next/image'

export default function Home() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as any
            }
        }
    }

    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-dark-bg selection:bg-brand-cyan/30">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-125 h-125 bg-brand-blue/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-75 h-75 bg-brand-cyan/20 blur-[80px] rounded-full animate-pulse [animation-delay:2s]" />

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[40px_40px]" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="z-10 flex flex-col items-center gap-10 max-w-md w-full text-center"
            >
                {/* Logo Area */}
                <motion.div variants={itemVariants} className="relative">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-6 rounded-full border border-white/5 border-dashed"
                    />
                    <div className="relative w-32 h-32 md:w-40 md:h-40 p-3 glass-card rounded-[2.5rem] overflow-hidden group">
                        <div className="absolute inset-0 bg-linear-to-tr from-brand-blue/10 to-brand-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Image
                            src="/icon.png"
                            alt="Recursion community logo"
                            fill
                            className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Title and Description */}
                <motion.div variants={itemVariants} className="space-y-4">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white whitespace-nowrap">
                        The <span className="text-gradient">Recursion</span> Community
                    </h1>
                    <p className="text-white/40 text-sm md:text-base font-medium tracking-wide">
                        A space for developers to loop together.
                    </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div variants={itemVariants} className="w-full pt-2">
                    <a
                        href="https://chat.whatsapp.com/Cy76SvfNqg3LmZsWCTOOn4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center gap-3 w-full py-4 px-8 rounded-2xl glass-button font-bold text-lg overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-brand-blue/10 to-brand-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <WhatsappLogoIcon size={32} weight="fill" className="text-[#25D366] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="relative z-10 text-white/90 group-hover:text-white transition-colors">Join WhatsApp Community</span>
                    </a>
                </motion.div>

                {/* Footer simple tag */}
                <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 mt-4">
                    <div className="h-px w-12 bg-white/10" />
                    <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/30 flex items-center gap-2">
                        <Hash size={14} className="text-brand-cyan/50" /> Iterate • Evolve • Repeat
                    </p>
                </motion.div>
            </motion.div>
        </main>
    )
}
