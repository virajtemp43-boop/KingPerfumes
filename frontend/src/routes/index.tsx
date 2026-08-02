import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, type Variants } from "framer-motion";
import { ChevronRight, ArrowRight, Play, Plus } from "lucide-react";
import { useStore } from "@/store/StoreContext";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "King Perfumes — Luxury Fragrances for the Discerning" },
      { name: "description", content: "Discover India's finest collection of luxury perfumes, attars, and fragrances." },
    ],
  }),
  component: Home,
});

// --- ANIMATION VARIANTS ---
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const EASE = [0.16, 1, 0.3, 1] as const;

const wordAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 1,
      ease: EASE,
    },
  },
};

function Home() {
  const { products, categories, refreshCategories } = useStore();
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityHero = useTransform(scrollY, [0, 800], [1, 0]);
  const scaleHero = useTransform(scrollY, [0, 1000], [1, 1.3]);

  useEffect(() => { refreshCategories(); }, []);

  const active = products.filter((p) => p.status === "active");
  const [tab, setTab] = useState<"Best Seller" | "New" | "Featured">("Best Seller");
  const filtered = useMemo(() => active.filter((p) => p.badge === tab).slice(0, 8), [active, tab]);

  const displayCategories = useMemo(() => {
    if (categories.length === 0) {
      return [
        { name: "Eau de Parfum", text: "Intense, long-lasting luxury", img: "/images/cat-edp.jpg", count: "12+" },
        { name: "Eau de Toilette", text: "Fresh, everyday elegance", img: "/images/cat-edt.jpg", count: "8+" },
        { name: "Attars & Oils", text: "Pure, concentrated tradition", img: "/images/cat-attar.jpg", count: "6+" },
      ];
    }
    return categories.map((c) => {
      const count = products.filter((p) => p.category === c.name).length;
      return {
        name: c.name,
        text: c.description || `Explore our ${c.name} collection`,
        img: c.image || `/images/cat-${c.slug || c.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.jpg`,
        count: `${count}+`,
      };
    });
  }, [categories, products]);

  return (
    <div className="bg-background text-foreground overflow-hidden selection:bg-gold selection:text-white">
      {/* HERO SECTION */}
      <section className="relative h-[100vh] w-full flex items-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0 origin-center"
          style={{ y: yHero, opacity: opacityHero, scale: scaleHero }}
        >
          <img 
            src="/hero-perfume.jpg"
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient for text readability, NO blur */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent" />
        </motion.div>

        {/* Scrolling Frosted Glass Triangle with Vertical Strips */}
        <motion.div 
          className="absolute right-0 -bottom-[10%] w-full md:w-[65%] h-[120%] z-0 backdrop-blur-md border-l border-white/20 shadow-2xl animate-glass-loop"
          style={{ 
            y: useTransform(scrollY, [0, 1000], [0, -250]),
            clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
            background: "repeating-linear-gradient(to right, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 80px, rgba(255,255,255,0.02) 80px, rgba(255,255,255,0.02) 160px)"
          }}
        />

        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-end md:items-center justify-between h-full pb-20 pt-32 md:pb-0">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="max-w-2xl text-primary drop-shadow-sm"
          >
            <motion.p variants={fadeUp} className="text-sm tracking-[0.2em] uppercase mb-6 font-sans text-primary/80">
              Powered by nature
            </motion.p>
            <motion.h1 
              variants={staggerContainer} 
              className="text-6xl md:text-[5.5rem] leading-[1.05] font-serif font-medium tracking-tight mb-8 flex flex-wrap gap-x-4 text-primary"
            >
              {["Nourish", "Your", "Senses,"].map((word, i) => (
                <motion.span key={i} variants={wordAnimation} className="inline-block">{word}</motion.span>
              ))}
              <br/>
              <motion.span variants={wordAnimation} className="italic text-primary/90 inline-block">Naturally.</motion.span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl font-light text-primary/80 mb-10 max-w-lg">
              Inspired by nature. Backed by science. King Perfumes delivers gentle, honest luxury fragrances you can feel good about.
            </motion.p>
            <motion.div variants={fadeUp} className="flex gap-4">
              <Link to="/shop" className="group relative overflow-hidden bg-primary text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-[1.02] shadow-xl">
                <span className="relative z-10 flex items-center gap-2">
                  Shop Essentials <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block text-primary text-right max-w-xs drop-shadow-sm"
          >
            <h3 className="font-serif text-3xl mb-4">Gentle by nature<br/>Trusted by skin</h3>
            <ul className="space-y-2 text-sm text-primary/80 font-light">
              <li>• Balanced for skin health</li>
              <li>• Clinically approved</li>
              <li>• Vegan home product</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="py-24 bg-card border-b border-border/50">
        <div className="max-w-[1320px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          {[
            { title: "Premium Quality", desc: "Finest ingredients, crafted to perfection." },
            { title: "100% Authentic", desc: "Guaranteed authentic partnerships." },
            { title: "Expert Curation", desc: "Handpicked by our fragrance experts." },
            { title: "Luxury Delivery", desc: "Elegant packaging & free shipping." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="w-12 h-12 mb-6 rounded-full border border-border flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/5">
                <Plus className="w-4 h-4 text-primary/40 transition-transform duration-500 group-hover:rotate-90" />
              </div>
              <h4 className="font-serif text-xl mb-2 text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COLLECTIONS MARQUEE (Continuous Horizontal Scroll) */}
      <section className="py-32 bg-card border-b border-border/50 overflow-hidden">
        <div className="mb-12 text-center px-6">
          <h2 className="font-serif text-4xl text-primary">Discover Collections</h2>
        </div>
        <div className="w-full relative flex marquee-viewport">
          <div className="marquee-track flex gap-6 pr-6 hover:[animation-play-state:paused]">
            {displayCategories.concat(displayCategories).concat(displayCategories).map((c, i) => (
              <Link 
                to="/shop" 
                key={`${c.name}-${i}`}
                className="group relative rounded-2xl overflow-hidden bg-muted cursor-pointer shrink-0 w-[300px] h-[400px] md:w-[400px] md:h-[500px]"
              >
                <img src={c.img} alt={c.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-8 left-8 text-white z-10">
                  <span className="text-[10px] uppercase tracking-widest text-gold/90">{c.count} fragrances</span>
                  <h3 className="font-serif text-3xl mb-2 mt-1 drop-shadow-md">{c.name}</h3>
                  <p className="text-sm text-white/90 mb-4 max-w-[200px] font-light drop-shadow-sm line-clamp-2">{c.text}</p>
                  <span className="text-sm flex items-center gap-2 opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 font-medium">
                    Explore Collection <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BESTSELLERS (Dynamic from API) */}
      <section className="py-24 bg-card/50">
        <div className="max-w-[1320px] mx-auto px-6 text-center">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            ✦ Your Signature Scent
          </motion.p>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-serif text-4xl md:text-5xl text-foreground mb-12">
            Crown Jewels
          </motion.h2>

          <div className="flex justify-center gap-4 mb-16">
            {(["Best Seller", "New", "Featured"] as const).map((t) => (
              <button 
                key={t} 
                onClick={() => setTab(t)}
                className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${tab === t ? "bg-primary text-white shadow-md shadow-primary/20 scale-105" : "bg-transparent text-muted-foreground hover:bg-border/50"}`}
              >
                {t === "New" ? "New Arrivals" : t === "Best Seller" ? "Best Sellers" : "Featured"}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {filtered.map((p) => (
              <motion.div key={p.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <ProductCard product={p} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Link to="/shop" className="group inline-flex items-center gap-2 rounded-full border border-primary/30 px-8 py-3.5 text-sm text-foreground transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
               View All Fragrances <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
             </Link>
           </div>
        </div>
      </section>

      {/* FOUNDER QUOTE */}
      <section className="py-32 max-w-[1320px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square group">
          <img src="/images/perfume-story.jpg" alt="Founder" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={fadeUp} className="mb-8">
            <span className="font-serif text-3xl italic text-primary">King Perfumes</span>
          </motion.div>
          <motion.blockquote variants={fadeUp} className="font-serif text-3xl md:text-5xl leading-tight text-foreground mb-12">
            "Every bottle tells a story of craftsmanship, passion, and the pursuit of perfection. We source the finest ingredients from around the world."
          </motion.blockquote>
          <motion.div variants={fadeUp}>
            <p className="text-sm font-medium uppercase tracking-wider mb-8">— Our Legacy</p>
            <button className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 text-sm">
              <Play className="w-4 h-4" /> Watch Our Story
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* INTERACTIVE INGREDIENTS SECTION */}
      <IngredientsSection />

      {/* PUREST INGREDIENTS BANNER */}
      <section className="relative py-40 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img src="/images/oil-bubbles.jpg" alt="Oil Bubbles" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto">
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-12 drop-shadow-xl">
              "Every formula starts with nature's purest ingredients."
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-90">
              <div className="text-sm tracking-wider uppercase drop-shadow-md">✦ Premium Quality</div>
              <div className="text-sm tracking-wider uppercase drop-shadow-md">✦ 100% Authentic</div>
              <div className="text-sm tracking-wider uppercase drop-shadow-md">✦ Expertly Curated</div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

function IngredientsSection() {
  const [activeIngredient, setActiveIngredient] = useState(0);

  const ingredients = [
    { 
      name: "Oud Wood: Rich and earthy", 
      desc: "Deeply anchors the fragrance with long-lasting warm notes.",
      imgLeft: "/images/oud-left.jpg", imgRight: "/images/oud-right.jpg"
    },
    { 
      name: "Damask Rose: Floral elegance", 
      desc: "Soothes inflammation and brings a delicate sweetness.",
      imgLeft: "/images/rose-left.jpg", imgRight: "/images/rose-right.jpg" 
    },
    { 
      name: "Sandalwood: Warm and woody", 
      desc: "Deeply nourishes the skin while providing a creamy scent profile.",
      imgLeft: "/images/sandal-left.jpg", imgRight: "/images/sandal-right.jpg"
    },
    { 
      name: "Bergamot: Brightens and refreshes", 
      desc: "Adds a crisp, citrusy top note that awakens the senses.",
      imgLeft: "/images/bergamot-left.jpg", imgRight: "/images/bergamot-right.jpg"
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-gold mb-16">✦ Our Ingredients Garden</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Left Image (changes based on active) */}
          <div className="hidden lg:block h-[500px] rounded-2xl overflow-hidden bg-card relative group">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeIngredient}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                src={ingredients[activeIngredient].imgLeft} 
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-transform duration-[2s] group-hover:scale-105" 
              />
            </AnimatePresence>
          </div>

          {/* Center List */}
          <div className="flex flex-col gap-6">
            {ingredients.map((ing, i) => (
              <div 
                key={i}
                onMouseEnter={() => setActiveIngredient(i)}
                className={`text-center py-6 border-b transition-all duration-500 cursor-pointer ${
                  activeIngredient === i ? "border-gold scale-105" : "border-border/50 opacity-50 hover:opacity-100 hover:scale-[1.02]"
                }`}
              >
                <h3 className={`font-serif text-2xl md:text-3xl mb-3 transition-colors ${activeIngredient === i ? "text-primary drop-shadow-sm" : "text-foreground"}`}>
                  {ing.name}
                </h3>
                {activeIngredient === i && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-sm text-muted-foreground font-light max-w-sm mx-auto"
                  >
                    {ing.desc}
                  </motion.p>
                )}
              </div>
            ))}
          </div>

          {/* Right Image (changes based on active) */}
          <div className="hidden lg:block h-[500px] rounded-2xl overflow-hidden bg-card relative group">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeIngredient}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                src={ingredients[activeIngredient].imgRight} 
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-transform duration-[2s] group-hover:scale-105" 
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}