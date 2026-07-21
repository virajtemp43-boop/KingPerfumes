import { Link } from "@tanstack/react-router";
import { Crown, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, ArrowUp, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white pt-24 pb-12 overflow-hidden border-t border-gold/20">
      {/* Background glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-[1320px] px-6 relative z-10">
        
        {/* Newsletter Section */}
        <Reveal variant="fadeUp">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 border-b border-white/10 pb-16 mb-16">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="font-serif text-3xl md:text-4xl text-gold mb-4">Join The Inner Circle</h2>
              <p className="text-white/70 font-light">Subscribe to receive exclusive offers, early access to new launches, and expert fragrance guides.</p>
            </div>
            
            <form onSubmit={(e) => { e.preventDefault(); setEmail(""); }} className="w-full md:w-auto relative group">
              <div className="relative flex items-center w-full md:w-[400px]">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address" 
                  className="w-full bg-white/5 border border-white/20 rounded-full py-4 pl-6 pr-14 text-white placeholder:text-white/40 outline-none focus:border-gold transition-colors font-light"
                />
                <button 
                  type="submit" 
                  className="absolute right-2 p-3 rounded-full bg-gold text-black hover:bg-white transition-colors"
                >
                  <Send className="h-4 w-4 ml-0.5" />
                </button>
              </div>
            </form>
          </div>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <Reveal variant="stagger" delay={0.1}>
            <Link to="/" className="flex items-center gap-2 font-serif text-2xl text-gold mb-6">
              <Crown className="h-6 w-6" />
              <span>King Perfumes</span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed font-light mb-8">
              India's premier destination for luxury fragrances. Curated collections of the finest perfumes, attars, and bespoke scents from around the world.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  whileHover={{ y: -5, color: "#d4af37", borderColor: "#d4af37" }}
                  href="#" 
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/70 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </Reveal>

          {/* Quick links */}
          <Reveal variant="stagger" delay={0.2}>
            <h3 className="font-serif text-lg text-white mb-6 tracking-wide">Collections</h3>
            <ul className="space-y-4 text-sm text-white/70 font-light">
              {[
                { to: "/shop", label: "Shop All Fragrances" },
                { to: "/shop?category=Eau+de+Parfum", label: "Eau de Parfum" },
                { to: "/shop?category=Eau+de+Toilette", label: "Eau de Toilette" },
                { to: "/shop?category=Attar", label: "Attars & Oils" },
                { to: "/shop?badge=New", label: "New Arrivals" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover:text-gold transition-colors inline-block hover:translate-x-1 duration-300">{l.label}</Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Support */}
          <Reveal variant="stagger" delay={0.3}>
            <h3 className="font-serif text-lg text-white mb-6 tracking-wide">Client Care</h3>
            <ul className="space-y-4 text-sm text-white/70 font-light">
              {["Shipping & Delivery", "Returns & Exchanges", "FAQ", "Track Order", "Privacy Policy", "Terms of Service"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-gold transition-colors inline-block hover:translate-x-1 duration-300">{l}</a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact */}
          <Reveal variant="stagger" delay={0.4}>
            <h3 className="font-serif text-lg text-white mb-6 tracking-wide">Boutiques</h3>
            <ul className="space-y-5 text-sm text-white/70 font-light">
              <li className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="leading-relaxed">123 Luxury Avenue,<br/>Bandra West, Mumbai 400050<br/>Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <span className="hover:text-gold transition-colors cursor-pointer">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <span className="hover:text-gold transition-colors cursor-pointer">concierge@kingperfumes.com</span>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal variant="fadeUp" delay={0.5}>
          <div className="mt-20 flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 text-xs text-white/50 font-light">
            <p>© {new Date().getFullYear()} King Perfumes. Crafted with passion for fragrance.</p>
            <div className="mt-4 md:mt-0 flex gap-4">
              <span>Secure Payments</span>
              <span>•</span>
              <span>Authenticity Guaranteed</span>
            </div>
          </div>
        </Reveal>

        {/* Back to top button */}
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#d4af37" }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="absolute bottom-12 right-6 md:right-12 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      </div>
    </footer>
  );
}