import { X, Search, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useMemo, useState, useEffect, useRef } from "react";
import { useStore, formatPrice } from "@/store/StoreContext";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const popular = ["Oud", "Rose", "Citrus", "Eau de Parfum", "Gift Set"];

export function SearchModal() {
  const { searchOpen, setSearchOpen, products } = useStore();
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLUListElement>(null);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return products.filter((p) => p.status === "active" && (p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term))).slice(0, 6);
  }, [q, products]);

  // Focus input automatically
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQ(""); // Reset on close
    }
  }, [searchOpen]);

  // GSAP stagger for results
  useEffect(() => {
    if (results.length > 0 && resultsRef.current) {
      const ctx = gsap.context(() => {
        gsap.from("li", {
          y: 20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out"
        });
      }, resultsRef);
      return () => ctx.revert();
    }
  }, [results]);

  return (
    <AnimatePresence>
      {searchOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-md" 
            onClick={() => setSearchOpen(false)} 
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-background/95 backdrop-blur-xl shadow-2xl border border-border/50"
          >
            {/* Search Input Area */}
            <div className="relative flex items-center border-b border-border/50 p-2">
              <div className="pl-4 pr-2">
                <Search className="h-5 w-5 text-gold" />
              </div>
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search for fragrances, notes, or collections..."
                className="flex-1 bg-transparent py-4 text-lg outline-none placeholder:text-muted-foreground/60 font-serif text-primary transition-all"
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="mr-2 p-2 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              {/* Input bottom highlight line */}
              <motion.div 
                className="absolute bottom-0 left-0 h-[2px] bg-gold"
                initial={{ width: "0%" }}
                animate={{ width: q ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="p-6">
              {!q && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-4">
                    <TrendingUp className="h-4 w-4" /> Popular searches
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {popular.map((t, idx) => (
                      <motion.button 
                        key={t}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        whileHover={{ scale: 1.05, backgroundColor: "#d4af37", color: "white" }}
                        onClick={() => setQ(t)} 
                        className="rounded-full bg-secondary px-4 py-2 text-sm text-foreground transition-colors shadow-sm"
                      >
                        {t}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {q && results.length === 0 && (
                <div className="py-12 text-center flex flex-col items-center gap-3">
                  <Sparkles className="h-8 w-8 text-muted-foreground/30" />
                  <p className="text-muted-foreground">No results found for "<span className="text-foreground">{q}</span>"</p>
                  <button onClick={() => setQ("")} className="text-gold text-sm hover:underline">Clear search</button>
                </div>
              )}

              {results.length > 0 && (
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground flex justify-between">
                    <span>Products</span>
                    <span>{results.length} results</span>
                  </div>
                  <ul ref={resultsRef} className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {results.map((p) => (
                      <li key={p.id}>
                        <Link 
                          to="/product/$id" 
                          params={{ id: p.id }} 
                          onClick={() => setSearchOpen(false)} 
                          className="group block rounded-xl p-2 transition-colors hover:bg-secondary/50 border border-transparent hover:border-border/50"
                        >
                          <div className="overflow-hidden rounded-lg bg-card aspect-square relative mb-3">
                            <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                          </div>
                          <div className="line-clamp-1 font-serif text-base text-primary transition-colors group-hover:text-gold">{p.name}</div>
                          <div className="text-sm font-medium text-muted-foreground mt-0.5">{formatPrice(p.price)}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
