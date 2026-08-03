import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, Heart, GitCompare, X, Crown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useStore } from "@/store/StoreContext";
import { CartDrawer } from "@/components/CartDrawer";
import { SearchModal } from "@/components/SearchModal";
import { QuickViewModal } from "@/components/QuickViewModal";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

// Magnetic Button Wrapper
function MagneticButton({ children, className, onClick, ariaLabel }: any) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cart, wishlist, compare, setCartOpen, setSearchOpen } = useStore();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const cartCount = cart.reduce((n, c) => n + c.quantity, 0);
  const headerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // Header shrink values
  const headerPadding = useTransform(scrollY, [0, 100], ["1.5rem", "0.75rem"]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Initial GSAP Reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-link", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
        delay: 0.2
      });
      gsap.from(".logo-reveal", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });
      gsap.from(".icon-reveal", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.4
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={headerRef} className="fixed top-0 left-0 right-0 z-40 transition-all duration-500">
        {/* Scroll Progress Bar */}
        <motion.div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold origin-left z-50" style={{ scaleX }} />

        {/* Announcement bar */}
        <div className="bg-primary text-primary-foreground text-xs overflow-hidden relative">
          <div className="marquee-viewport py-2">
            <div className="marquee-track gap-16 pr-16 flex">
              {Array.from({ length: 2 }).map((_, row) => (
                <div key={row} className="flex shrink-0 items-center gap-16 pl-16" aria-hidden={row === 1}>
                  {["🚚 Free shipping on orders over ₹999", "👑 Shop luxury fragrances", "✨ New Royal Oud collection just dropped", "🎁 Members save 10% today"].map((msg) => (
                    <span key={msg} className="tracking-wide whitespace-nowrap">{msg}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main nav - Glassmorphism */}
        <motion.header 
          style={{ paddingTop: headerPadding, paddingBottom: headerPadding }}
          className={`border-b transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-border/40 shadow-sm" : "bg-transparent border-transparent"}`}
        >
          <div className="mx-auto grid max-w-[1320px] grid-cols-[auto_1fr_auto] items-center gap-4 px-6 md:px-12">
            
            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <button onClick={() => setMobileOpen(true)} className="md:hidden p-2 -ml-2" aria-label="Menu">
                <Menu className="h-5 w-5 text-foreground transition-colors" />
              </button>
              
              <motion.div style={{ scale: logoScale }} className="logo-reveal origin-left">
                <Link to="/" className="flex items-center gap-2 font-serif text-2xl tracking-tight text-primary transition-colors">
                  <Crown className="h-6 w-6" />
                  <span className="hidden sm:inline-block drop-shadow-sm">King Perfumes</span>
                </Link>
              </motion.div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden justify-center gap-10 md:flex">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="nav-link group relative text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors"
                  activeProps={{ className: "!text-gold font-medium" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Action Icons */}
            <div className="flex items-center gap-1 sm:gap-3 justify-self-end">
              <MagneticButton onClick={() => setSearchOpen(true)} ariaLabel="Search" className="icon-reveal p-2 rounded-full text-foreground hover:bg-primary/5 hover:text-gold transition-colors">
                <Search className="h-5 w-5" />
              </MagneticButton>
              
              <Link to="/compare" ariaLabel="Compare" className="icon-reveal relative hidden sm:inline-flex p-2 rounded-full text-foreground hover:bg-primary/5 hover:text-gold transition-colors">
                <GitCompare className="h-5 w-5" />
                <AnimatePresence>
                  {compare.length > 0 && <Badge key="compare" n={compare.length} />}
                </AnimatePresence>
              </Link>
              
              <Link to="/wishlist" ariaLabel="Wishlist" className="icon-reveal relative p-2 rounded-full text-foreground hover:bg-primary/5 hover:text-gold transition-colors">
                <Heart className="h-5 w-5" />
                <AnimatePresence>
                  {wishlist.length > 0 && <Badge key="wishlist" n={wishlist.length} />}
                </AnimatePresence>
              </Link>
              
              <MagneticButton onClick={() => setCartOpen(true)} ariaLabel="Cart" className="icon-reveal relative p-2 rounded-full text-foreground hover:bg-primary/5 hover:text-gold transition-colors">
                <ShoppingBag className="h-5 w-5" />
                <AnimatePresence>
                  {cartCount > 0 && <Badge key="cart" n={cartCount} />}
                </AnimatePresence>
              </MagneticButton>
            </div>
          </div>
        </motion.header>
      </div>

      {/* Mobile drawer - Premium Glassmorphism & Slide */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
              onClick={() => setMobileOpen(false)} 
            />
            <motion.div 
              initial={{ x: "-100%" }} 
              animate={{ x: 0 }} 
              exit={{ x: "-100%", transition: { ease: [0.16, 1, 0.3, 1], duration: 0.4 } }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
              className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-background/95 backdrop-blur-2xl border-r border-border/50 p-6 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between border-b border-border/50 pb-6">
                <span className="flex items-center gap-2 font-serif text-2xl text-primary">
                  <Crown className="h-6 w-6" /> King Perfumes
                </span>
                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-6 flex-1">
                {nav.map((n, i) => (
                  <motion.div 
                    key={n.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link to={n.to} onClick={() => setMobileOpen(false)} className="text-2xl font-serif text-foreground/90 hover:text-gold transition-colors block">
                      {n.label}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="mt-8 pt-8 border-t border-border/50 flex flex-col gap-4">
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                    <Link to="/wishlist" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 text-lg text-muted-foreground hover:text-gold transition-colors">
                      <Heart className="h-5 w-5" /> Wishlist {wishlist.length > 0 && `(${wishlist.length})`}
                    </Link>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 }}>
                    <Link to="/compare" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 text-lg text-muted-foreground hover:text-gold transition-colors">
                      <GitCompare className="h-5 w-5" /> Compare {compare.length > 0 && `(${compare.length})`}
                    </Link>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <CartDrawer />
      <SearchModal />
      <QuickViewModal />
    </>
  );
}

function Badge({ n }: { n: number }) {
  return (
    <motion.span 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="absolute -right-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-white shadow-sm ring-2 ring-background"
    >
      {n > 99 ? "99+" : n}
    </motion.span>
  );
}