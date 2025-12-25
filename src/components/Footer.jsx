import React from 'react';
import { Droplets, Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-charcoal text-white pt-16 pb-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, #2ED3C6 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-gradient-to-br from-glacier-400 to-ocean p-2 rounded-xl">
                                <Droplets className="w-6 h-6 text-white fill-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-display font-bold">AquaPure</h3>
                                <p className="text-xs text-glacier-300 tracking-wider">PURE HYDRATION</p>
                            </div>
                        </div>
                        <p className="text-white/70 leading-relaxed mb-6">
                            India's trusted mineral water brand. Delivering purity, safety, and freshness to millions of homes and businesses since 2010.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-glacier-400 hover:to-ocean rounded-lg flex items-center justify-center transition-all hover:scale-110"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-6 text-glacier-300">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Products', 'Why AquaPure', 'For Business', 'Become a Distributor', 'Careers', 'About Us'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-white/70 hover:text-lime transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-glacier-400 rounded-full group-hover:w-2 transition-all"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-6 text-glacier-300">Our Products</h4>
                        <ul className="space-y-3">
                            {['250ml Bottle', '500ml Bottle', '1 Litre Bottle', '20 Litre Jar', 'Bulk Orders', 'Custom Branding'].map((product) => (
                                <li key={product}>
                                    <a href="#" className="text-white/70 hover:text-lime transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-glacier-400 rounded-full group-hover:w-2 transition-all"></span>
                                        {product}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-6 text-glacier-300">Contact Us</h4>
                        <div className="space-y-4">
                            <a href="tel:+919876543210" className="flex items-start gap-3 text-white/70 hover:text-lime transition-colors group">
                                <Phone className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform" />
                                <div>
                                    <p className="font-semibold text-white">+91 98765 43210</p>
                                    <p className="text-sm">Mon-Sat, 9AM-7PM</p>
                                </div>
                            </a>
                            <a href="mailto:info@aquapure.in" className="flex items-start gap-3 text-white/70 hover:text-lime transition-colors group">
                                <Mail className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform" />
                                <div>
                                    <p className="font-semibold text-white">info@aquapure.in</p>
                                    <p className="text-sm">24/7 Email Support</p>
                                </div>
                            </a>
                            <div className="flex items-start gap-3 text-white/70">
                                <MapPin className="w-5 h-5 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-white">Mumbai, Maharashtra</p>
                                    <p className="text-sm">India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/60 text-sm">
                        © 2024 AquaPure. All rights reserved. | ISO 22000 Certified
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-white/60 hover:text-lime transition-colors">Privacy Policy</a>
                        <a href="#" className="text-white/60 hover:text-lime transition-colors">Terms of Service</a>
                        <a href="#" className="text-white/60 hover:text-lime transition-colors">Refund Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
