import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag, Eye, Star, GitCompare } from "lucide-react";
import { useStore, formatPrice, type Product } from "@/store/StoreContext";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, wishlist, setQuickViewId, compare, toggleCompare } = useStore();
  const [isHovered, setIsHovered] = useState(false);
  
  // Get lowest price from sizes
  const lowestPrice = useMemo(() => {
    const raw = product.sizes || [];
    if (Array.isArray(raw) && raw.length > 0 && typeof raw[0] === "object") {
      const prices = (raw as { size: string; price: number }[]).map((s) => Number(s.price)).filter((p) => p > 0);
      if (prices.length > 0) return Math.min(...prices);
    }
    return Number(product.price) || 0;
  }, [product.sizes, product.price]);
  
  const inWishlist = wishlist.includes(product.id);
  const inCompare = compare.includes(product.id);

  return (
    <motion.div 
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border/40 transition-shadow duration-500 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10"
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute left-4 top-4 z-20">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`inline-block rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md ${
              product.badge === "Best Seller" ? "bg-gold/90 text-white" :
              product.badge === "New" ? "bg-burgundy/90 text-white" :
              "bg-primary/80 text-white"
            }`}
          >
            {product.badge}
          </motion.span>
        </div>
      )}

      {/* Action buttons (Wishlist & Compare) */}
      <div className="absolute right-4 top-4 z-20 flex flex-col gap-2">
        <AnimatePresence>
          {(isHovered || inWishlist || window.innerWidth < 768) && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => toggleWishlist(product.id)}
              className={`grid h-9 w-9 place-items-center rounded-full backdrop-blur-md shadow-sm transition-transform hover:scale-110 ${inWishlist ? 'bg-gold text-white' : 'bg-white/80 text-foreground hover:bg-gold hover:text-white'}`}
            >
              <Heart className={`h-4 w-4 ${inWishlist ? "fill-current" : ""}`} />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {(isHovered || inCompare || window.innerWidth < 768) && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
              onClick={() => toggleCompare(product.id)}
              className={`grid h-9 w-9 place-items-center rounded-full backdrop-blur-md shadow-sm transition-transform hover:scale-110 ${inCompare ? 'bg-gold text-white' : 'bg-white/80 text-foreground hover:bg-gold hover:text-white'}`}
              title={inCompare ? "Remove from Compare" : "Add to Compare"}
            >
              <GitCompare className="h-4 w-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Image */}
      <a href={`/product/${product.id}`} className="relative block aspect-[4/5] overflow-hidden bg-secondary/30 cursor-pointer">
        <motion.img
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={product.images?.[0] || "/images/product-default.jpg"}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <AnimatePresence>
          {isHovered && product.images?.[1] && (
            <motion.img
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.08 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={product.images[1]}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </AnimatePresence>
        
        {/* Quick view overlay */}
        <AnimatePresence>
          {(isHovered || window.innerWidth < 768) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-x-0 bottom-4 flex justify-center z-20"
            >
              <button
                onClick={(e) => { e.preventDefault(); setQuickViewId(product.id); }}
                className="flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-5 py-2.5 text-xs font-semibold tracking-wide text-foreground shadow-lg hover:bg-gold hover:text-white transition-all duration-300"
              >
                <Eye className="h-3.5 w-3.5" /> Quick View
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Gradient overlay for text legibility if needed, or just luxury shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </a>

      {/* Details */}
      <div className="p-5 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <div className="text-[10px] font-medium uppercase tracking-widest text-gold/80">{product.category}</div>
          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-3 w-3 ${i < Math.round(Number(product.rating) || 0) ? "fill-gold text-gold" : "text-border"}`} />
                  ))}
            </div>
            <span className="text-[10px] text-muted-foreground font-medium">({product.reviewCount})</span>
          </div>
        </div>
        
        <a href={`/product/${product.id}`} className="block">
          <h3 className="font-serif text-xl leading-tight text-foreground transition-colors hover:text-gold line-clamp-1">{product.name}</h3>
        </a>

        {/* Fragrance notes */}
        {product.notes && (
          <div className="flex flex-wrap gap-1 mt-1">
            {product.notes.split(",").slice(0, 3).map((note) => (
              <span key={note.trim()} className="rounded-sm bg-secondary/50 px-2 py-0.5 text-[10px] text-muted-foreground tracking-wide">
                {note.trim()}
              </span>
            ))}
          </div>
        )}

        {/* Price & Add to Cart row */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-2xl text-primary">{formatPrice(lowestPrice)}</span>
            {product.originalPrice && Number(product.originalPrice) > lowestPrice && (
              <span className="text-xs text-muted-foreground line-through">{formatPrice(Number(product.originalPrice))}</span>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => addToCart(product.id)}
            className="group/btn relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-gold"
          >
            <span className="shine-sweep pointer-events-none absolute inset-y-0 left-0 w-full bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
            <ShoppingBag className="h-4 w-4 relative z-10" /> 
            <span className="relative z-10 hidden sm:inline-block">Add</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}