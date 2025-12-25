import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Shield, Microscope, Leaf, Award, Zap } from 'lucide-react';

const features = [
    {
        icon: Droplets,
        title: 'Multi-Stage Purification',
        description: '8-stage advanced filtration removes 99.9% impurities while retaining essential minerals',
        gradient: 'from-glacier-400 to-glacier-600'
    },
    {
        icon: Microscope,
        title: 'Lab Tested Quality',
        description: 'Every batch tested for purity, pH balance, and mineral content in certified labs',
        gradient: 'from-ocean to-glacier-700'
    },
    {
        icon: Shield,
        title: 'Mineral Balanced',
        description: 'Perfect blend of calcium, magnesium, and potassium for optimal hydration',
        gradient: 'from-glacier-500 to-ocean'
    },
    {
        icon: Leaf,
        title: 'BPA-Free Bottles',
        description: '100% food-grade, recyclable packaging that is safe for you and the planet',
        gradient: 'from-lime/80 to-glacier-500'
    },
    {
        icon: Award,
        title: 'ISO Certified',
        description: 'International quality standards compliance with FSSAI and BIS certification',
        gradient: 'from-glacier-600 to-glacier-800'
    },
    {
        icon: Zap,
        title: 'Instant Freshness',
        description: 'Sealed at source to lock in purity and deliver crisp, refreshing taste',
        gradient: 'from-glacier-300 to-glacier-500'
    }
];

const WhyAquaPure = () => {
    return (
        <section id="why-aquapure" className="py-24 bg-ice relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, #2ED3C6 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-glacier-600 font-bold text-sm uppercase tracking-wider">Why Choose AquaPure</span>
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-charcoal mt-3 mb-4">
                        Purity in Every <span className="gradient-text">Drop</span>
                    </h2>
                    <p className="text-charcoal/70 max-w-2xl mx-auto text-lg">
                        We combine nature's best with cutting-edge purification technology
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-glacier-100"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>

                            {/* Icon */}
                            <div className="relative mb-6">
                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-display font-bold text-charcoal mb-3 group-hover:text-glacier-700 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-charcoal/70 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Decorative Water Droplet */}
                            <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-glacier-100 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-60"
                >
                    {['ISO 22000', 'FSSAI', 'BIS', 'HACCP'].map((cert, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-3xl font-display font-bold text-glacier-700">{cert}</div>
                            <div className="text-xs text-charcoal/50 uppercase tracking-wider mt-1">Certified</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyAquaPure;
