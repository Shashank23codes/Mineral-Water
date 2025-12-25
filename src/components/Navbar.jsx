import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Droplets, Phone } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled
                        ? 'glass shadow-lg py-3'
                        : 'bg-transparent py-5'
                    }`}
            >
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center gap-3 cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-glacier-400 to-ocean blur-md opacity-60"></div>
                                <div className="relative bg-gradient-to-br from-glacier-400 to-ocean p-2 rounded-2xl">
                                    <Droplets className="w-6 h-6 text-white fill-white" />
                                </div>
                            </div>
                            <div>
                                <h1 className={`text-2xl font-display font-bold tracking-tight ${scrolled ? 'text-charcoal' : 'text-white'}`}>
                                    Aqua<span className="text-glacier-400">Pure</span>
                                </h1>
                                <p className={`text-[10px] tracking-wider ${scrolled ? 'text-charcoal/60' : 'text-white/80'}`}>
                                    PURE HYDRATION
                                </p>
                            </div>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-8">
                            {['Products', 'Why AquaPure', 'For Business', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                                    className={`font-medium transition-all hover:scale-105 ${scrolled
                                            ? 'text-charcoal hover:text-glacier-400'
                                            : 'text-white hover:text-glacier-300'
                                        }`}
                                >
                                    {item}
                                </a>
                            ))}
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 bg-lime text-charcoal rounded-full font-bold shadow-lg shadow-lime/30 hover:shadow-xl hover:shadow-lime/40 transition-all flex items-center gap-2"
                            >
                                <Phone size={16} />
                                Get Quote
                            </motion.a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className={`lg:hidden p-2 ${scrolled ? 'text-charcoal' : 'text-white'}`}
                        >
                            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            {mobileMenu && (
                <motion.div
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    className="fixed inset-0 bg-ocean z-40 lg:hidden flex flex-col items-center justify-center gap-8"
                >
                    <button
                        onClick={() => setMobileMenu(false)}
                        className="absolute top-6 right-6 text-white"
                    >
                        <X size={32} />
                    </button>

                    {['Products', 'Why AquaPure', 'For Business', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className="text-2xl font-display font-bold text-white hover:text-glacier-300 transition-colors"
                            onClick={() => setMobileMenu(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMobileMenu(false)}
                        className="px-8 py-3 bg-lime text-charcoal rounded-full font-bold text-lg"
                    >
                        Get Quote
                    </a>
                </motion.div>
            )}

            {/* Sticky CTA on Scroll */}
            {scrolled && (
                <motion.a
                    href="#contact"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-lime rounded-full shadow-2xl shadow-lime/40 flex items-center justify-center hover:scale-110 transition-transform lg:hidden"
                >
                    <Phone className="w-6 h-6 text-charcoal" />
                </motion.a>
            )}
        </>
    );
};

export default Navbar;
