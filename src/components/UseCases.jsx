import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, PartyPopper, Store } from 'lucide-react';

const useCases = [
    {
        icon: Home,
        title: 'Homes & Families',
        description: 'Pure, safe water for your loved ones. Daily delivery options available.',
        image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2674&auto=format&fit=crop',
        gradient: 'from-glacier-400 to-glacier-600'
    },
    {
        icon: Building2,
        title: 'Offices & Corporates',
        description: 'Bulk supply with dedicated account management and flexible payment terms.',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2669&auto=format&fit=crop',
        gradient: 'from-ocean to-glacier-700'
    },
    {
        icon: PartyPopper,
        title: 'Events & Weddings',
        description: 'Custom branding options and on-time delivery for your special occasions.',
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop',
        gradient: 'from-lime/70 to-glacier-500'
    },
    {
        icon: Store,
        title: 'Retail & Distribution',
        description: 'Become an AquaPure partner. Attractive margins and marketing support.',
        image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2670&auto=format&fit=crop',
        gradient: 'from-glacier-600 to-ocean'
    }
];

const UseCases = () => {
    return (
        <section id="for-business" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-glacier-600 font-bold text-sm uppercase tracking-wider">Who We Serve</span>
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-charcoal mt-3 mb-4">
                        AquaPure for <span className="gradient-text">Everyone</span>
                    </h2>
                    <p className="text-charcoal/70 max-w-2xl mx-auto text-lg">
                        Trusted by thousands across homes, offices, and businesses
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {useCases.map((useCase, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={useCase.image}
                                    alt={useCase.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-90 group-hover:opacity-95 transition-opacity`}></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8 h-80 flex flex-col justify-end text-white">
                                <div className="mb-4">
                                    <div className="inline-flex p-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                                        <useCase.icon className="w-7 h-7" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-3">
                                    {useCase.title}
                                </h3>
                                <p className="text-white/90 leading-relaxed">
                                    {useCase.description}
                                </p>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
