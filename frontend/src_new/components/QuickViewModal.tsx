import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState, useMemo } from "react";
import { useStore, formatPrice } from "@/store/StoreContext";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";

export function QuickViewModal() {
  const { quickViewId, setQuickViewId, products, addToCart, setCartOpen } = useStore();
  const product = products.find((p) => p.id === quickViewId);
  const [size, setSize] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [isZooming, setIsZooming] = useState(false);

  // Parse sizes - MUST be called before any early return to maintain hook order
  const sizes = useMemo(() => {
    if (!product) return [{ size: "50ml", price: 0 }];
    const raw = product.sizes || ["50ml"];
    if (Array.isArray(raw) && raw.length > 0 && typeof raw[0] === "object") {
      return raw as { size: string; price: number }[];
    }
    return (raw as string[]).map((s: string) => ({ size: s, price: product.price }));
  }, [product?.sizes, product?.price]);

  if (!product) return null;

  const currentSize = size ?? sizes[0].size;
  const currentSizeData = sizes.find((s) => s.size === currentSize) || sizes[0];
  const currentPrice = currentSizeData.price;
  const images = product.images || [];

  return (
    <AnimatePresence>
      {quickViewId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => { setQuickViewId(null); setActiveImg(0); setIsZooming(false); }} 
          />
          
          {/* Modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-background/95 backdrop-blur-xl shadow-2xl border border-border/50 flex flex-col md:flex-row max-h-[90vh]"
          >
            <button 
              onClick={() => { setQuickViewId(null); setActiveImg(0); setIsZooming(false); }} 
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-background/50 backdrop-blur-md text-foreground transition-all hover:bg-gold hover:text-white shadow-sm"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Gallery Section */}
            <div className="md:w-1/2 relative bg-secondary/30 flex flex-col">
              <div 
                className="relative flex-1 overflow-hidden cursor-zoom-in"
                onMouseEnter={() => setIsZooming(true)}
                onMouseLeave={() => setIsZooming(false)}
              >
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeImg}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: isZooming ? 1.2 : 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    src={images[activeImg] || "/images/product-default.jpg"} 
                    alt={product.name} 
                    className="absolute inset-0 h-full w-full object-cover" 
                  />
                </AnimatePresence>
              </div>
              
              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 p-4 bg-background/40 backdrop-blur-sm">
                  {images.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImg(idx)}
                      className={`relative h-16 w-16 overflow-hidden rounded-lg border-2 transition-all duration-300 ${activeImg === idx ? 'border-gold scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                      <img src={img} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 flex flex-col p-8 md:p-10 overflow-y-auto">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <div className="text-xs uppercase tracking-widest text-gold/80 mb-2">{product.category}</div>
                <h2 className="font-serif text-3xl text-primary">{product.name}</h2>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-4 flex items-center gap-3 border-b border-border/50 pb-6">
                <span className="font-serif text-2xl text-primary font-medium">{formatPrice(currentPrice)}</span>
                {product.originalPrice && product.originalPrice > currentPrice && (
                  <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                )}
              </motion.div>
              
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </motion.p>

              {sizes.length > 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-8">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">Select Size</div>
                  <div className="flex flex-wrap gap-3">
                    {sizes.map((s) => (
                      <button
                        key={s.size}
                        onClick={() => setSize(s.size)}
                        className={`relative rounded-lg border px-5 py-2.5 text-sm transition-all duration-300 overflow-hidden ${currentSize === s.size ? "border-gold text-gold shadow-sm" : "border-border text-foreground hover:border-gold/50"}`}
                      >
                        {currentSize === s.size && (
                          <motion.span layoutId="size-active" className="absolute inset-0 bg-gold/5" />
                        )}
                        <span className="relative z-10 flex flex-col items-center">
                          <span className="font-medium">{s.size}</span>
                          <span className="text-xs opacity-70 mt-0.5">{formatPrice(s.price)}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-10 flex items-stretch gap-4">
                <div className="flex items-center gap-3 rounded-full border border-border/80 bg-background px-2 py-1 shadow-sm">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-2 hover:text-gold transition-colors hover:bg-muted rounded-full"><Minus className="h-4 w-4" /></button>
                  <span className="w-6 text-center text-sm font-medium">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="p-2 hover:text-gold transition-colors hover:bg-muted rounded-full"><Plus className="h-4 w-4" /></button>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { addToCart(product.id, currentSize, qty); setQuickViewId(null); setCartOpen(true); }}
                  className="group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 font-medium text-primary-foreground shadow-xl transition-colors hover:bg-gold"
                >
                  <span className="shine-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <ShoppingBag className="h-4 w-4 relative z-10" /> 
                  <span className="relative z-10">Add to Cart</span>
                </motion.button>
              </motion.div>
              
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8 pt-6 border-t border-border/50 text-center">
                <Link 
                  to="/product/$id" 
                  params={{ id: product.id }} 
                  onClick={() => { setQuickViewId(null); setActiveImg(0); }} 
                  className="inline-flex items-center gap-2 text-sm text-gold hover:text-primary transition-colors font-medium tracking-wide uppercase group"
                >
                  View full details 
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}