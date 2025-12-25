import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, Droplets } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ocean via-glacier-800 to-glacier-600">
            {/* Animated Water Flow Background */}
            <div className="absolute inset-0">
                {/* Flowing waves */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                    <div className="absolute top-20 left-0 w-96 h-96 bg-glacier-300 rounded-full blur-3xl animate-wave"></div>
                    <div className="absolute top-40 right-20 w-80 h-80 bg-glacier-400 rounded-full blur-3xl animate-wave" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-ice rounded-full blur-3xl animate-wave" style={{ animationDelay: '4s' }}></div>
                </div>

                {/* Water ripple effect */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white rounded-full animate-ripple"></div>
                    <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-white rounded-full animate-ripple" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-1/3 left-1/2 w-40 h-40 border-2 border-white rounded-full animate-ripple" style={{ animationDelay: '2s' }}></div>
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-16 relative z-10 pt-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 glass-dark px-4 py-2 rounded-full mb-6"
                        >
                            <div className="w-2 h-2 bg-lime rounded-full animate-pulse"></div>
                            <span className="text-ice text-sm font-medium">100% Pure Mineral Water</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
                        >
                            Pure Hydration.
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-glacier-300 via-ice to-glacier-200">
                                Perfectly Bottled.
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-6 mb-8"
                        >
                            {[
                                { icon: Shield, text: 'Safe' },
                                { icon: Award, text: 'Hygienic' },
                                { icon: Droplets, text: 'Trusted' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-glacier-100">
                                    <item.icon className="w-5 h-5" />
                                    <span className="font-medium">{item.text}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg text-glacier-100 mb-10 leading-relaxed max-w-xl"
                        >
                            Multi-stage purified, mineral-balanced water in BPA-free bottles. Perfect for your home, office, or event.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-lime text-charcoal rounded-full font-bold text-lg shadow-2xl shadow-lime/30 hover:shadow-lime/50 transition-all flex items-center justify-center gap-2 group"
                            >
                                Get Bulk Order Quote
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                href="#for-business"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 glass-dark border border-glacier-300/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                            >
                                Become a Distributor
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right - Floating Bottle */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative animate-float">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-glacier-300 via-glacier-400 to-ice blur-3xl opacity-40"></div>

                            {/* Bottle Image */}
                            <div className="relative z-10">
                                <img
                                    src="hero-img.png"
                                    alt="AquaPure Water Bottle"
                                    className="w-full max-w-md mx-auto drop-shadow-2xl rotate-10"
                                    style={{
                                        filter: 'drop-shadow(0 25px 50px rgba(46, 211, 198, 0.3))'
                                    }}
                                />
                            </div>

                            {/* Floating Water Droplets */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        y: [0, -30, 0],
                                        opacity: [0.3, 1, 0.3]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.8
                                    }}
                                    className={`absolute droplet-shape w-12 h-12 bg-gradient-to-br from-glacier-300 to-glacier-400 opacity-30 blur-sm`}
                                    style={{
                                        top: `${20 + i * 25}%`,
                                        left: `${-10 + i * 15}%`
                                    }}
                                ></motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Wave Divider */}
            <div className="absolute bottom-0 left-0 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                    <path
                        fill="#F6FEFD"
                        d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
