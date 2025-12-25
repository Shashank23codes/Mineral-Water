import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-gradient-to-br from-ocean via-glacier-800 to-glacier-700 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-glacier-300/20 rounded-full blur-3xl animate-wave"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime/10 rounded-full blur-3xl animate-wave" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-glacier-300 font-bold text-sm uppercase tracking-wider">Get In Touch</span>
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mt-3 mb-4">
                        Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-glacier-200 to-lime">AquaPure Journey</span>
                    </h2>
                    <p className="text-glacier-100 max-w-2xl mx-auto text-lg">
                        Fill the form below and our team will contact you within 24 hours
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-display font-bold text-white mb-6">Contact Information</h3>
                            <p className="text-glacier-100 leading-relaxed mb-8">
                                Whether you need bulk orders, want to become a distributor, or have any questions - we're here to help.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
                                { icon: Mail, label: 'Email', value: 'info@aquapure.in', href: 'mailto:info@aquapure.in' },
                                { icon: MapPin, label: 'Address', value: 'Mumbai, Maharashtra, India', href: '#' },
                                { icon: MessageSquare, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/919876543210' }
                            ].map((item, idx) => (
                                <motion.a
                                    key={idx}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-4 group cursor-pointer"
                                >
                                    <div className="p-3 glass-dark rounded-xl group-hover:bg-lime/20 transition-all">
                                        <item.icon className="w-6 h-6 text-glacier-300 group-hover:text-lime transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-glacier-300 text-sm font-medium mb-1">{item.label}</p>
                                        <p className="text-white font-semibold text-lg group-hover:text-lime transition-colors">{item.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Lead Generation Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 glass-dark rounded-3xl p-8 lg:p-10 shadow-2xl"
                    >
                        <h3 className="text-2xl font-display font-bold text-white mb-6">Get AquaPure Delivered</h3>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-white text-sm font-medium mb-2 block">Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 bg-white/10 border border-glacier-400/30 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-lime backdrop-blur-sm transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-white text-sm font-medium mb-2 block">Phone Number *</label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="+91 98765 43210"
                                        className="w-full px-4 py-3 bg-white/10 border border-glacier-400/30 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-lime backdrop-blur-sm transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-white text-sm font-medium mb-2 block">Business Type *</label>
                                <div className="relative">
                                    <select
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-glacier-400/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-lime backdrop-blur-sm transition-all appearance-none cursor-pointer pr-10"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'right 0.75rem center',
                                            backgroundSize: '1.25rem'
                                        }}
                                    >
                                        <option value="" className="bg-ocean text-white">Select type</option>
                                        <option value="home" className="bg-ocean text-white">Home / Personal Use</option>
                                        <option value="office" className="bg-ocean text-white">Office / Corporate</option>
                                        <option value="event" className="bg-ocean text-white">Event / Wedding</option>
                                        <option value="distributor" className="bg-ocean text-white">Become a Distributor</option>
                                        <option value="retail" className="bg-ocean text-white">Retail Store</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="text-white text-sm font-medium mb-2 block">Quantity Requirement *</label>
                                <div className="relative">
                                    <select
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-glacier-400/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-lime backdrop-blur-sm transition-all appearance-none cursor-pointer pr-10"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'right 0.75rem center',
                                            backgroundSize: '1.25rem'
                                        }}
                                    >
                                        <option value="" className="bg-ocean text-white">Select quantity</option>
                                        <option value="1-50" className="bg-ocean text-white">1-50 bottles/jars</option>
                                        <option value="50-200" className="bg-ocean text-white">50-200 bottles/jars</option>
                                        <option value="200-500" className="bg-ocean text-white">200-500 bottles/jars</option>
                                        <option value="500+" className="bg-ocean text-white">500+ bottles/jars (Bulk)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="text-white text-sm font-medium mb-2 block">Additional Details</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell us about your requirements, delivery location, or any special requests..."
                                    className="w-full px-4 py-3 bg-white/10 border border-glacier-400/30 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-lime backdrop-blur-sm resize-none transition-all"
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-lime text-charcoal rounded-xl font-bold text-lg shadow-2xl shadow-lime/30 hover:shadow-lime/50 transition-all flex items-center justify-center gap-2 group"
                            >
                                Get AquaPure Delivered
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            <p className="text-glacier-200 text-sm text-center">
                                We respect your privacy. Your information is safe with us.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
