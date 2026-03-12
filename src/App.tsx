/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ShoppingBag, 
  MapPin, 
  ArrowRight, 
  Smartphone, 
  Clock, 
  Star,
  ChevronRight,
  Instagram,
  Twitter,
  Facebook
} from 'lucide-react';

// McDonald's Brand Colors
const COLORS = {
  red: '#DA291C',
  yellow: '#FFC72C',
  dark: '#27251F',
  white: '#FFFFFF',
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-[#DA291C] rounded-lg flex items-center justify-center">
                <span className="text-[#FFC72C] text-2xl font-black leading-none">M</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-[#27251F]">Golden Arches</span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-8">
                {['Our Menu', 'About Our Food', 'Deals', 'Locate'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm font-medium text-[#27251F] hover:text-[#DA291C] transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center gap-2 text-sm font-semibold text-[#27251F]">
              <MapPin size={18} className="text-[#DA291C]" />
              <span>Find a Store</span>
            </button>
            <button className="bg-[#FFC72C] text-[#27251F] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#f0ba28] transition-all shadow-sm">
              Order Now
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#27251F]">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {['Our Menu', 'About Our Food', 'Deals', 'Locate'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-base font-medium text-[#27251F] py-2"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-4">
                <button className="w-full bg-[#FFC72C] text-[#27251F] px-6 py-3 rounded-full font-bold">
                  Order Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#DA291C]/10 text-[#DA291C] text-sm font-bold mb-6">
              New Limited Time Offer
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-[#27251F] leading-[1.1] mb-6">
              The <span className="text-[#DA291C]">Classic</span> Taste You Love.
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              Experience the perfect balance of fresh ingredients and our secret signature sauces. Hot, fresh, and ready when you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#DA291C] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#c42519] transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-200">
                View Full Menu <ArrowRight size={20} />
              </button>
              <button className="bg-white border-2 border-[#27251F] text-[#27251F] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#27251F] hover:text-white transition-all">
                Download App
              </button>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-[#FFC72C]">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-500 font-medium">Over 10k+ happy customers daily</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 lg:mt-0 relative"
          >
            <div className="absolute inset-0 bg-[#FFC72C] rounded-full blur-3xl opacity-20 -z-10 transform scale-110"></div>
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1000" 
              alt="Signature Burger" 
              className="w-full h-auto rounded-3xl shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FFC72C] rounded-full flex items-center justify-center">
                  <Clock className="text-[#27251F]" size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Average Delivery</p>
                  <p className="text-xl font-black text-[#27251F]">15-20 Mins</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MenuHighlights = () => {
  const items = [
    {
      name: "Big Mac®",
      desc: "Two 100% beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.",
      price: "$5.99",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=600",
      tag: "Best Seller"
    },
    {
      name: "World Famous Fries®",
      desc: "Crispy and golden on the outside, fluffy on the inside. Made with quality potatoes.",
      price: "$2.49",
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600",
      tag: "Classic"
    },
    {
      name: "McNuggets®",
      desc: "Tender, juicy chicken breast pieces in a crispy coating. Perfect for dipping.",
      price: "$4.99",
      img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=600",
      tag: "Fan Favorite"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#27251F] mb-4">Our Fan Favorites</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">The items that made us famous. Prepared fresh every single time.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#DA291C]">
                  {item.tag}
                </span>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black text-[#27251F]">{item.name}</h3>
                  <span className="text-xl font-bold text-[#DA291C]">{item.price}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {item.desc}
                </p>
                <button className="w-full py-4 rounded-2xl border-2 border-gray-100 font-bold text-[#27251F] group-hover:bg-[#FFC72C] group-hover:border-[#FFC72C] transition-all flex items-center justify-center gap-2">
                  Add to Bag <ShoppingBag size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppPromo = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#27251F] rounded-[3rem] p-12 lg:p-24 relative overflow-hidden">
          {/* Background Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#DA291C] rounded-full blur-[120px] opacity-20 -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC72C] rounded-full blur-[120px] opacity-10 -ml-48 -mb-48"></div>

          <div className="lg:grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Get Exclusive <span className="text-[#FFC72C]">Deals</span> on Our App
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Download the app today and get a free Large Fries with your first $1 minimum purchase. Plus, earn points on every order!
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[#27251F] px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-gray-100 transition-all">
                  <Smartphone size={24} />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold text-gray-500 leading-none mb-1">Download on the</p>
                    <p className="text-lg leading-none">App Store</p>
                  </div>
                </button>
                <button className="bg-white text-[#27251F] px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-gray-100 transition-all">
                  <div className="w-6 h-6 bg-[#27251F] rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#FFC72C] rounded-sm rotate-45"></div>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold text-gray-500 leading-none mb-1">Get it on</p>
                    <p className="text-lg leading-none">Google Play</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="mt-16 lg:mt-0 flex justify-center">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-64 h-[500px] bg-[#1a1a1a] rounded-[3rem] border-8 border-[#333] overflow-hidden shadow-2xl relative">
                  <div className="absolute top-0 left-0 right-0 h-6 bg-[#333] flex justify-center items-center">
                    <div className="w-16 h-1 bg-[#444] rounded-full"></div>
                  </div>
                  <div className="p-6 pt-10">
                    <div className="w-10 h-10 bg-[#DA291C] rounded-lg flex items-center justify-center mb-6">
                      <span className="text-[#FFC72C] font-black">M</span>
                    </div>
                    <div className="space-y-4">
                      <div className="h-32 bg-gradient-to-br from-[#DA291C] to-[#c42519] rounded-2xl p-4">
                        <p className="text-white font-bold text-lg leading-tight">Free Fries</p>
                        <p className="text-white/70 text-xs mt-1">With $1 minimum purchase</p>
                      </div>
                      <div className="h-24 bg-white/5 rounded-2xl border border-white/10"></div>
                      <div className="h-24 bg-white/5 rounded-2xl border border-white/10"></div>
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -right-8 top-20 bg-[#FFC72C] p-4 rounded-2xl shadow-xl"
                >
                  <Star fill="#27251F" size={24} />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -left-12 bottom-20 bg-[#DA291C] p-4 rounded-2xl shadow-xl"
                >
                  <ShoppingBag color="white" size={24} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-[#DA291C] rounded-lg flex items-center justify-center">
                <span className="text-[#FFC72C] text-2xl font-black leading-none">M</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-[#27251F]">Golden Arches</span>
            </div>
            <p className="text-gray-500 max-w-xs mb-8">
              Bringing the joy of delicious food to millions of people every day. Quality you can trust.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#27251F] hover:bg-[#FFC72C] transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[#27251F] mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#DA291C]">Our Menu</a></li>
              <li><a href="#" className="hover:text-[#DA291C]">Nutrition</a></li>
              <li><a href="#" className="hover:text-[#DA291C]">Deals</a></li>
              <li><a href="#" className="hover:text-[#DA291C]">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#27251F] mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#DA291C]">About Us</a></li>
              <li><a href="#" className="hover:text-[#DA291C]">Careers</a></li>
              <li><a href="#" className="hover:text-[#DA291C]">Sustainability</a></li>
              <li><a href="#" className="hover:text-[#DA291C]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#27251F] mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#DA291C]">Help Center</a></li>
              <li><a href="#" className="hover:text-[#DA291C]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#DA291C]">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#DA291C]">Order Status</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400">
            © 2026 Golden Arches Experience. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-[#27251F]">Privacy</a>
            <a href="#" className="hover:text-[#27251F]">Terms</a>
            <a href="#" className="hover:text-[#27251F]">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#FFC72C] selection:text-[#27251F]">
      <Nav />
      <main>
        <Hero />
        <MenuHighlights />
        <AppPromo />
        
        {/* Newsletter Section */}
        <section className="py-24 bg-[#DA291C]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-black text-white mb-6">Stay in the Loop</h2>
            <p className="text-white/80 mb-10 max-w-lg mx-auto">
              Get the latest deals and menu updates delivered straight to your inbox.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-full bg-white text-[#27251F] focus:outline-none focus:ring-4 focus:ring-white/20 font-medium"
              />
              <button className="bg-[#27251F] text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
