import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const products = [
    {
        name: '250ml',
        tagline: 'On-the-Go',
        image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=2619&auto=format&fit=crop',
        price: '₹10',
        features: ['Perfect for travel', 'Single serve', 'Pocket friendly']
    },
    {
        name: '500ml',
        tagline: 'Daily Essential',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670&auto=format&fit=crop',
        price: '₹20',
        features: ['Most popular', 'Ideal for office', 'Best value'],
        popular: true
    },
    {
        name: '1 Litre',
        tagline: 'Family Pack',
        image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?q=80&w=2574&auto=format&fit=crop',
        price: '₹35',
        features: ['Home use', 'Sharing size', 'Economical']
    },
    {
        name: '20 Litre',
        tagline: 'Bulk Supply',
        image: 'https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?q=80&w=2574&auto=format&fit=crop',
        price: '₹120',
        features: ['Office/Home', 'Dispenser ready', 'Wholesale price']
    }
];

const Products = () => {
    return (
        <section id="products" className="py-24 bg-gradient-to-b from-white to-ice relative overflow-hidden">
            {/* Floating Bubbles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            delay: i * 1.5
                        }}
                        className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-glacier-200 to-glacier-300 blur-xl"
                        style={{
                            left: `${10 + i * 20}%`,
                            bottom: '-100px'
                        }}
                    ></motion.div>
                ))}
            </div>

            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-glacier-600 font-bold text-sm uppercase tracking-wider">Our Products</span>
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-charcoal mt-3 mb-4">
                        Perfect Size for Every <span className="gradient-text">Need</span>
                    </h2>
                    <p className="text-charcoal/70 max-w-2xl mx-auto text-lg">
                        From personal hydration to bulk supply, we've got you covered
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={`relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${product.popular ? 'ring-4 ring-lime' : ''
                                }`}
                        >
                            {product.popular && (
                                <div className="absolute top-4 right-4 z-20">
                                    <div className="bg-lime text-charcoal px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                                        <Sparkles className="w-3 h-3" />
                                        POPULAR
                                    </div>
                                </div>
                            )}

                            {/* Product Image with 3D Effect */}
                            <div className="relative h-72 flex items-center justify-center p-8 bg-gradient-to-br from-ice to-glacier-50">
                                {/* Reflection Effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50"></div>

                                <motion.img
                                    whileHover={{ scale: 1.1, rotateY: 10 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    src={product.image}
                                    alt={product.name}
                                    className="relative z-10 h-full w-auto object-contain drop-shadow-2xl"
                                    style={{
                                        filter: 'drop-shadow(0 20px 40px rgba(46, 211, 198, 0.2))'
                                    }}
                                />

                                {/* Shadow */}
                                <div className="absolute bottom-8 w-32 h-4 bg-glacier-400/20 rounded-full blur-md"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="text-center mb-4">
                                    <h3 className="text-3xl font-display font-bold text-charcoal mb-1">{product.name}</h3>
                                    <p className="text-glacier-600 font-semibold">{product.tagline}</p>
                                </div>

                                <div className="text-center mb-6">
                                    <span className="text-4xl font-bold text-glacier-700">{product.price}</span>
                                    <span className="text-charcoal/50 text-sm ml-1">/pack</span>
                                </div>

                                <ul className="space-y-2 mb-6">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-charcoal/70 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-glacier-400"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-3 rounded-xl font-bold transition-all ${product.popular
                                        ? 'bg-gradient-to-r from-glacier-500 to-ocean text-white shadow-lg shadow-glacier-500/30'
                                        : 'bg-glacier-50 text-glacier-700 hover:bg-glacier-100'
                                        }`}
                                >
                                    Order Now
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
