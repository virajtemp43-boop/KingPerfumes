import { Link } from "@tanstack/react-router";
import { X, Minus, Plus, ShoppingBag, Crown } from "lucide-react";
import { useStore, formatPrice } from "@/store/StoreContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CartDrawer() {
  const { cart, products, cartOpen, setCartOpen, updateCart, removeFromCart } = useStore();
  const listRef = useRef<HTMLUListElement>(null);

  const items = cart.map((c) => {
    const p = products.find((x) => x.id === c.productId);
    if (!p) return null;
    const sizes = p.sizes || [];
    let price = p.price;
    if (Array.isArray(sizes) && sizes.length > 0 && typeof sizes[0] === "object") {
      const matched = (sizes as { size: string; price: number }[]).find((s) => s.size === c.size);
      if (matched) price = matched.price;
    }
    return { ...c, product: p, price };
  }).filter(Boolean) as any[];

  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);

  // GSAP Stagger effect for cart items when opened
  useEffect(() => {
    if (cartOpen && listRef.current) {
      const ctx = gsap.context(() => {
        gsap.from("li", {
          x: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.2)",
          delay: 0.2
        });
      }, listRef);
      return () => ctx.revert();
    }
  }, [cartOpen, items.length]); // re-run if items change while open

  return (
    <AnimatePresence>
      {cartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
            onClick={() => setCartOpen(false)} 
          />
          
          {/* Drawer Panel */}
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 h-full w-full max-w-md bg-background/95 backdrop-blur-2xl shadow-2xl border-l border-border/50"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border/50 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gold/10 rounded-full">
                    <ShoppingBag className="h-5 w-5 text-gold" />
                  </div>
                  <h2 className="font-serif text-2xl text-primary">Your Cart</h2>
                  <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full font-medium ml-2">{items.length}</span>
                </div>
                <button 
                  onClick={() => setCartOpen(false)} 
                  className="p-2 rounded-full hover:bg-muted transition-colors hover:text-gold"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body */}
              {items.length === 0 ? (
                <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Crown className="h-16 w-16 text-gold/20 mx-auto mb-4" />
                    <h3 className="font-serif text-2xl text-primary mb-2">Your cart is empty</h3>
                    <p className="text-muted-foreground mb-8">Discover our luxury fragrance collections.</p>
                    <Link to="/shop" onClick={() => setCartOpen(false)} className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gold px-8 py-3 font-medium text-white transition-all hover:scale-105 shadow-lg shadow-gold/20">
                      <span className="shine-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30" />
                      Explore Fragrances
                    </Link>
                  </motion.div>
                </div>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto px-6 py-6" id="cart-scroll-area">
                    <ul ref={listRef} className="space-y-5">
                      <AnimatePresence>
                        {items.map((i: any) => (
                          <motion.li
                            key={i.productId + i.size}
                            layout
                            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                            className="group flex gap-4 rounded-xl bg-card border border-border/40 p-3 transition-colors hover:border-gold/30 hover:shadow-md"
                          >
                            <div className="overflow-hidden rounded-lg">
                              <img src={i.product.images[0]} alt="" className="h-24 w-20 object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                              <div>
                                <div className="flex justify-between items-start gap-2">
                                  <Link to="/product/$id" params={{ id: i.productId }} onClick={() => setCartOpen(false)} className="font-serif text-base text-primary hover:text-gold line-clamp-1 transition-colors">
                                    {i.product.name}
                                  </Link>
                                  <button onClick={() => removeFromCart(i.productId, i.size)} className="p-1 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full transition-colors mt-0.5">
                                    <X className="h-3.5 w-3.5" />
                                  </button>
                                </div>
                                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{i.size}</div>
                              </div>
                              <div className="mt-3 flex items-center justify-between">
                                <div className="flex items-center gap-1 rounded-full border border-border/80 bg-background px-1 py-0.5 shadow-sm">
                                  <button onClick={() => updateCart(i.productId, i.size, i.quantity - 1)} className="p-1.5 hover:text-gold transition-colors hover:bg-muted rounded-full"><Minus className="h-3 w-3" /></button>
                                  <motion.span key={i.quantity} initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="w-6 text-center text-xs font-medium">{i.quantity}</motion.span>
                                  <button onClick={() => updateCart(i.productId, i.size, i.quantity + 1)} className="p-1.5 hover:text-gold transition-colors hover:bg-muted rounded-full"><Plus className="h-3 w-3" /></button>
                                </div>
                                <motion.span key={i.price * i.quantity} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-serif text-sm text-primary font-medium">{formatPrice(i.price * i.quantity)}</motion.span>
                              </div>
                            </div>
                          </motion.li>
                        ))}
                      </AnimatePresence>
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-border/50 bg-secondary/30 px-6 py-6 space-y-5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground uppercase tracking-wider text-xs font-medium">Estimated Subtotal</span>
                      <motion.span key={subtotal} initial={{ scale: 1.1, color: "#d4af37" }} animate={{ scale: 1, color: "inherit" }} className="font-serif text-xl text-primary">{formatPrice(subtotal)}</motion.span>
                    </div>
                    <p className="text-xs text-muted-foreground text-center">Taxes and shipping calculated at checkout</p>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        to="/checkout"
                        onClick={() => setCartOpen(false)}
                        className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-primary py-4 text-sm font-medium text-primary-foreground shadow-xl transition-all hover:bg-gold"
                      >
                        <span className="shine-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative z-10 flex items-center gap-2">Secure Checkout <X className="h-4 w-4 rotate-45 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /></span>
                      </Link>
                    </motion.div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}