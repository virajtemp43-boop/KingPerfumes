import { a as __toESM } from "../_runtime.mjs";
import { a as AnimatePresence, i as motion, n as useTransform, r as useScroll, t as useSpring } from "../_libs/framer-motion.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { t as Reveal } from "./Reveal-lF_AI-vo.mjs";
import { B as Crown, C as Minus, D as Mail, E as MapPin, F as Heart, J as ArrowUp, L as GitCompare, M as Instagram, R as Facebook, T as Menu, a as TrendingUp, b as Phone, f as ShoppingBag, g as Search, h as Send, l as Sparkles, t as X, v as Plus } from "../_libs/lucide-react.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { i as useStore, n as StoreProvider, r as formatPrice } from "./StoreContext-D7RYJJhR.mjs";
import { t as Route$20 } from "./product._id-CFfdNG6P.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DRX1Dl40.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CAmaRN5K.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function CartDrawer() {
	const { cart, products, cartOpen, setCartOpen, updateCart, removeFromCart } = useStore();
	const listRef = (0, import_react.useRef)(null);
	const items = cart.map((c) => {
		const p = products.find((x) => x.id === c.productId);
		if (!p) return null;
		const sizes = p.sizes || [];
		let price = p.price;
		if (Array.isArray(sizes) && sizes.length > 0 && typeof sizes[0] === "object") {
			const matched = sizes.find((s) => s.size === c.size);
			if (matched) price = matched.price;
		}
		return {
			...c,
			product: p,
			price
		};
	}).filter(Boolean);
	const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
	(0, import_react.useEffect)(() => {
		if (cartOpen && listRef.current) {
			const ctx = gsapWithCSS.context(() => {
				gsapWithCSS.from("li", {
					x: 50,
					opacity: 0,
					duration: .6,
					stagger: .1,
					ease: "back.out(1.2)",
					delay: .2
				});
			}, listRef);
			return () => ctx.revert();
		}
	}, [cartOpen, items.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: cartOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			transition: { duration: .4 },
			className: "absolute inset-0 bg-black/40 backdrop-blur-sm",
			onClick: () => setCartOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { x: "100%" },
			animate: { x: 0 },
			exit: { x: "100%" },
			transition: {
				type: "spring",
				damping: 25,
				stiffness: 200
			},
			className: "absolute right-0 top-0 h-full w-full max-w-md bg-background/95 backdrop-blur-2xl shadow-2xl border-l border-border/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-full flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border/50 px-6 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-2 bg-gold/10 rounded-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5 text-gold" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-2xl text-primary",
								children: "Your Cart"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-primary text-white text-xs px-2 py-0.5 rounded-full font-medium ml-2",
								children: items.length
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setCartOpen(false),
						className: "p-2 rounded-full hover:bg-muted transition-colors hover:text-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					})]
				}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							scale: .8,
							opacity: 0
						},
						animate: {
							scale: 1,
							opacity: 1
						},
						transition: { delay: .2 },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-16 w-16 text-gold/20 mx-auto mb-4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-2xl text-primary mb-2",
								children: "Your cart is empty"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mb-8",
								children: "Discover our luxury fragrance collections."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/shop",
								onClick: () => setCartOpen(false),
								className: "group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gold px-8 py-3 font-medium text-white transition-all hover:scale-105 shadow-lg shadow-gold/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "shine-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30" }), "Explore Fragrances"]
							})
						]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto px-6 py-6",
					id: "cart-scroll-area",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						ref: listRef,
						className: "space-y-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
							layout: true,
							exit: {
								opacity: 0,
								scale: .9,
								transition: { duration: .2 }
							},
							className: "group flex gap-4 rounded-xl bg-card border border-border/40 p-3 transition-colors hover:border-gold/30 hover:shadow-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: i.product.images[0],
									alt: "",
									className: "h-24 w-20 object-cover transition-transform duration-500 group-hover:scale-110"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0 flex flex-col justify-between py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/product/$id",
										params: { id: i.productId },
										onClick: () => setCartOpen(false),
										className: "font-serif text-base text-primary hover:text-gold line-clamp-1 transition-colors",
										children: i.product.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => removeFromCart(i.productId, i.size),
										className: "p-1 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full transition-colors mt-0.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground",
									children: i.size
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 rounded-full border border-border/80 bg-background px-1 py-0.5 shadow-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => updateCart(i.productId, i.size, i.quantity - 1),
												className: "p-1.5 hover:text-gold transition-colors hover:bg-muted rounded-full",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
												initial: {
													y: -10,
													opacity: 0
												},
												animate: {
													y: 0,
													opacity: 1
												},
												className: "w-6 text-center text-xs font-medium",
												children: i.quantity
											}, i.quantity),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => updateCart(i.productId, i.size, i.quantity + 1),
												className: "p-1.5 hover:text-gold transition-colors hover:bg-muted rounded-full",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" })
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										initial: { opacity: 0 },
										animate: { opacity: 1 },
										className: "font-serif text-sm text-primary font-medium",
										children: formatPrice(i.price * i.quantity)
									}, i.price * i.quantity)]
								})]
							})]
						}, i.productId + i.size)) })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border/50 bg-secondary/30 px-6 py-6 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground uppercase tracking-wider text-xs font-medium",
								children: "Estimated Subtotal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								initial: {
									scale: 1.1,
									color: "#d4af37"
								},
								animate: {
									scale: 1,
									color: "inherit"
								},
								className: "font-serif text-xl text-primary",
								children: formatPrice(subtotal)
							}, subtotal)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground text-center",
							children: "Taxes and shipping calculated at checkout"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							whileHover: { scale: 1.02 },
							whileTap: { scale: .98 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/checkout",
								onClick: () => setCartOpen(false),
								className: "group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-primary py-4 text-sm font-medium text-primary-foreground shadow-xl transition-all hover:bg-gold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "shine-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative z-10 flex items-center gap-2",
									children: ["Secure Checkout ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4 rotate-45 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" })]
								})]
							})
						})
					]
				})] })]
			})
		})]
	}) });
}
var popular = [
	"Oud",
	"Rose",
	"Citrus",
	"Eau de Parfum",
	"Gift Set"
];
function SearchModal() {
	const { searchOpen, setSearchOpen, products } = useStore();
	const [q, setQ] = (0, import_react.useState)("");
	const inputRef = (0, import_react.useRef)(null);
	const resultsRef = (0, import_react.useRef)(null);
	const results = (0, import_react.useMemo)(() => {
		const term = q.trim().toLowerCase();
		if (!term) return [];
		return products.filter((p) => p.status === "active" && (p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term))).slice(0, 6);
	}, [q, products]);
	(0, import_react.useEffect)(() => {
		if (searchOpen) setTimeout(() => inputRef.current?.focus(), 100);
		else setQ("");
	}, [searchOpen]);
	(0, import_react.useEffect)(() => {
		if (results.length > 0 && resultsRef.current) {
			const ctx = gsapWithCSS.context(() => {
				gsapWithCSS.from("li", {
					y: 20,
					opacity: 0,
					duration: .4,
					stagger: .05,
					ease: "power2.out"
				});
			}, resultsRef);
			return () => ctx.revert();
		}
	}, [results]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: searchOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			transition: { duration: .4 },
			className: "absolute inset-0 bg-black/60 backdrop-blur-md",
			onClick: () => setSearchOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				scale: .95,
				y: -20
			},
			animate: {
				opacity: 1,
				scale: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				scale: .95,
				y: -20
			},
			transition: {
				type: "spring",
				damping: 25,
				stiffness: 300
			},
			className: "relative w-full max-w-3xl overflow-hidden rounded-2xl bg-background/95 backdrop-blur-xl shadow-2xl border border-border/50",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-center border-b border-border/50 p-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pl-4 pr-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5 text-gold" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: inputRef,
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Search for fragrances, notes, or collections...",
						className: "flex-1 bg-transparent py-4 text-lg outline-none placeholder:text-muted-foreground/60 font-serif text-primary transition-all"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setSearchOpen(false),
						className: "mr-2 p-2 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "absolute bottom-0 left-0 h-[2px] bg-gold",
						initial: { width: "0%" },
						animate: { width: q ? "100%" : "0%" },
						transition: { duration: .3 }
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6",
				children: [
					!q && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: { delay: .1 },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4" }), " Popular searches"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: popular.map((t, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
								initial: {
									opacity: 0,
									scale: .9
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								transition: { delay: .1 + idx * .05 },
								whileHover: {
									scale: 1.05,
									backgroundColor: "#d4af37",
									color: "white"
								},
								onClick: () => setQ(t),
								className: "rounded-full bg-secondary px-4 py-2 text-sm text-foreground transition-colors shadow-sm",
								children: t
							}, t))
						})]
					}),
					q && results.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-12 text-center flex flex-col items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-8 w-8 text-muted-foreground/30" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground",
								children: [
									"No results found for \"",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground",
										children: q
									}),
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setQ(""),
								className: "text-gold text-sm hover:underline",
								children: "Clear search"
							})
						]
					}),
					results.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs uppercase tracking-widest text-muted-foreground flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Products" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [results.length, " results"] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							ref: resultsRef,
							className: "grid grid-cols-2 gap-4 sm:grid-cols-3",
							children: results.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/product/$id",
								params: { id: p.id },
								onClick: () => setSearchOpen(false),
								className: "group block rounded-xl p-2 transition-colors hover:bg-secondary/50 border border-transparent hover:border-border/50",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "overflow-hidden rounded-lg bg-card aspect-square relative mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: p.images[0],
											alt: p.name,
											className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "line-clamp-1 font-serif text-base text-primary transition-colors group-hover:text-gold",
										children: p.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-medium text-muted-foreground mt-0.5",
										children: formatPrice(p.price)
									})
								]
							}) }, p.id))
						})]
					})
				]
			})]
		})]
	}) });
}
function QuickViewModal() {
	const { quickViewId, setQuickViewId, products, addToCart, setCartOpen } = useStore();
	const product = products.find((p) => p.id === quickViewId);
	const [size, setSize] = (0, import_react.useState)(null);
	const [qty, setQty] = (0, import_react.useState)(1);
	const [activeImg, setActiveImg] = (0, import_react.useState)(0);
	const [isZooming, setIsZooming] = (0, import_react.useState)(false);
	const sizes = (0, import_react.useMemo)(() => {
		if (!product) return [{
			size: "50ml",
			price: 0
		}];
		const raw = product.sizes || ["50ml"];
		if (Array.isArray(raw) && raw.length > 0 && typeof raw[0] === "object") return raw;
		return raw.map((s) => ({
			size: s,
			price: product.price
		}));
	}, [product?.sizes, product?.price]);
	if (!product) return null;
	const currentSize = size ?? sizes[0].size;
	const currentPrice = (sizes.find((s) => s.size === currentSize) || sizes[0]).price;
	const images = product.images || [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: quickViewId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
			onClick: () => {
				setQuickViewId(null);
				setActiveImg(0);
				setIsZooming(false);
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				scale: .9,
				y: 20
			},
			animate: {
				opacity: 1,
				scale: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				scale: .9,
				y: 20
			},
			transition: {
				type: "spring",
				damping: 25,
				stiffness: 300
			},
			className: "relative w-full max-w-4xl overflow-hidden rounded-2xl bg-background/95 backdrop-blur-xl shadow-2xl border border-border/50 flex flex-col md:flex-row max-h-[90vh]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setQuickViewId(null);
						setActiveImg(0);
						setIsZooming(false);
					},
					className: "absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-background/50 backdrop-blur-md text-foreground transition-all hover:bg-gold hover:text-white shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:w-1/2 relative bg-secondary/30 flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative flex-1 overflow-hidden cursor-zoom-in",
						onMouseEnter: () => setIsZooming(true),
						onMouseLeave: () => setIsZooming(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
								initial: {
									opacity: 0,
									scale: 1.05
								},
								animate: {
									opacity: 1,
									scale: isZooming ? 1.2 : 1
								},
								exit: { opacity: 0 },
								transition: {
									duration: .5,
									ease: "easeOut"
								},
								src: images[activeImg] || "/images/product-default.jpg",
								alt: product.name,
								className: "absolute inset-0 h-full w-full object-cover"
							}, activeImg)
						})
					}), images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 p-4 bg-background/40 backdrop-blur-sm",
						children: images.map((img, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveImg(idx),
							className: `relative h-16 w-16 overflow-hidden rounded-lg border-2 transition-all duration-300 ${activeImg === idx ? "border-gold scale-105 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img,
								alt: "",
								className: "h-full w-full object-cover"
							})
						}, idx))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:w-1/2 flex flex-col p-8 md:p-10 overflow-y-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .1 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-widest text-gold/80 mb-2",
								children: product.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-3xl text-primary",
								children: product.name
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .15 },
							className: "mt-4 flex items-center gap-3 border-b border-border/50 pb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-2xl text-primary font-medium",
								children: formatPrice(currentPrice)
							}), product.originalPrice && product.originalPrice > currentPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground line-through",
								children: formatPrice(product.originalPrice)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: { delay: .2 },
							className: "mt-6 text-sm leading-relaxed text-muted-foreground",
							children: product.description
						}),
						sizes.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: { delay: .25 },
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3",
								children: "Select Size"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-3",
								children: sizes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSize(s.size),
									className: `relative rounded-lg border px-5 py-2.5 text-sm transition-all duration-300 overflow-hidden ${currentSize === s.size ? "border-gold text-gold shadow-sm" : "border-border text-foreground hover:border-gold/50"}`,
									children: [currentSize === s.size && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										layoutId: "size-active",
										className: "absolute inset-0 bg-gold/5"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative z-10 flex flex-col items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: s.size
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs opacity-70 mt-0.5",
											children: formatPrice(s.price)
										})]
									})]
								}, s.size))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .3 },
							className: "mt-10 flex items-stretch gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 rounded-full border border-border/80 bg-background px-2 py-1 shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setQty(Math.max(1, qty - 1)),
										className: "p-2 hover:text-gold transition-colors hover:bg-muted rounded-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-6 text-center text-sm font-medium",
										children: qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setQty(qty + 1),
										className: "p-2 hover:text-gold transition-colors hover:bg-muted rounded-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
								whileHover: { scale: 1.02 },
								whileTap: { scale: .98 },
								onClick: () => {
									addToCart(product.id, currentSize, qty);
									setQuickViewId(null);
									setCartOpen(true);
								},
								className: "group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 font-medium text-primary-foreground shadow-xl transition-colors hover:bg-gold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "shine-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4 relative z-10" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative z-10",
										children: "Add to Cart"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: { delay: .4 },
							className: "mt-8 pt-6 border-t border-border/50 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/product/$id",
								params: { id: product.id },
								onClick: () => {
									setQuickViewId(null);
									setActiveImg(0);
								},
								className: "inline-flex items-center gap-2 text-sm text-gold hover:text-primary transition-colors font-medium tracking-wide uppercase group",
								children: ["View full details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "transition-transform group-hover:translate-x-1",
									children: "→"
								})]
							})
						})
					]
				})
			]
		})]
	}) });
}
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/shop",
		label: "Shop"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/blog",
		label: "Blog"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function MagneticButton({ children, className, onClick, ariaLabel }) {
	const ref = (0, import_react.useRef)(null);
	const [position, setPosition] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const handleMouse = (e) => {
		const { clientX, clientY } = e;
		const { height, width, left, top } = ref.current.getBoundingClientRect();
		const middleX = clientX - (left + width / 2);
		const middleY = clientY - (top + height / 2);
		setPosition({
			x: middleX * .2,
			y: middleY * .2
		});
	};
	const reset = () => {
		setPosition({
			x: 0,
			y: 0
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		ref,
		onMouseMove: handleMouse,
		onMouseLeave: reset,
		animate: {
			x: position.x,
			y: position.y
		},
		transition: {
			type: "spring",
			stiffness: 150,
			damping: 15,
			mass: .1
		},
		className,
		onClick,
		"aria-label": ariaLabel,
		children
	});
}
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const { cart, wishlist, compare, setCartOpen, setSearchOpen } = useStore();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const cartCount = cart.reduce((n, c) => n + c.quantity, 0);
	const headerRef = (0, import_react.useRef)(null);
	const { scrollYProgress, scrollY } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: .001
	});
	const headerPadding = useTransform(scrollY, [0, 100], ["1.5rem", "0.75rem"]);
	const logoScale = useTransform(scrollY, [0, 100], [1, .9]);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setMobileOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".nav-link", {
				y: -20,
				opacity: 0,
				duration: .8,
				stagger: .05,
				ease: "power3.out",
				delay: .2
			});
			gsapWithCSS.from(".logo-reveal", {
				scale: .8,
				opacity: 0,
				duration: 1,
				ease: "power4.out"
			});
			gsapWithCSS.from(".icon-reveal", {
				y: -20,
				opacity: 0,
				duration: .8,
				stagger: .1,
				ease: "power3.out",
				delay: .4
			});
		}, headerRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: headerRef,
			className: "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "absolute bottom-0 left-0 right-0 h-[2px] bg-gold origin-left z-50",
					style: { scaleX }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-primary text-primary-foreground text-xs overflow-hidden relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "marquee-viewport py-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "marquee-track gap-16 pr-16 flex",
							children: Array.from({ length: 2 }).map((_, row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex shrink-0 items-center gap-16 pl-16",
								"aria-hidden": row === 1,
								children: [
									"🚚 Free shipping on orders over ₹999",
									"👑 Shop luxury fragrances",
									"✨ New Royal Oud collection just dropped",
									"🎁 Members save 10% today"
								].map((msg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tracking-wide whitespace-nowrap",
									children: msg
								}, msg))
							}, row))
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
					style: {
						paddingTop: headerPadding,
						paddingBottom: headerPadding
					},
					className: `border-b transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-border/40 shadow-sm" : "bg-transparent border-transparent"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-[1320px] grid-cols-[auto_1fr_auto] items-center gap-4 px-6 md:px-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setMobileOpen(true),
									className: "md:hidden p-2 -ml-2",
									"aria-label": "Menu",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5 text-foreground transition-colors" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									style: { scale: logoScale },
									className: "logo-reveal origin-left",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/",
										className: "flex items-center gap-3 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/logo.png",
											alt: "King Perfumes",
											className: "h-10 md:h-12 auto object-contain drop-shadow-sm scale-110 origin-left"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "hidden sm:inline-block drop-shadow-sm font-serif text-2xl tracking-tight text-primary",
											children: "King Perfumes"
										})]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "hidden justify-center gap-10 md:flex",
								children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: n.to,
									className: "nav-link group relative text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors",
									activeProps: { className: "!text-gold font-medium" },
									activeOptions: { exact: n.to === "/" },
									children: [n.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" })]
								}, n.to))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 sm:gap-3 justify-self-end",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
										onClick: () => setSearchOpen(true),
										ariaLabel: "Search",
										className: "icon-reveal p-2 rounded-full text-foreground hover:bg-primary/5 hover:text-gold transition-colors",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/compare",
										ariaLabel: "Compare",
										className: "icon-reveal relative hidden sm:inline-flex p-2 rounded-full text-foreground hover:bg-primary/5 hover:text-gold transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitCompare, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: compare.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { n: compare.length }, "compare") })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/wishlist",
										ariaLabel: "Wishlist",
										className: "icon-reveal relative p-2 rounded-full text-foreground hover:bg-primary/5 hover:text-gold transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: wishlist.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { n: wishlist.length }, "wishlist") })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
										onClick: () => setCartOpen(true),
										ariaLabel: "Cart",
										className: "icon-reveal relative p-2 rounded-full text-foreground hover:bg-primary/5 hover:text-gold transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { n: cartCount }, "cart") })]
									})
								]
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-[100] md:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
				onClick: () => setMobileOpen(false)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { x: "-100%" },
				animate: { x: 0 },
				exit: {
					x: "-100%",
					transition: {
						ease: [
							.16,
							1,
							.3,
							1
						],
						duration: .4
					}
				},
				transition: {
					ease: [
						.16,
						1,
						.3,
						1
					],
					duration: .6
				},
				className: "absolute left-0 top-0 h-full w-[85%] max-w-sm bg-background/95 backdrop-blur-2xl border-r border-border/50 p-6 shadow-2xl flex flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border/50 pb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.png",
							alt: "King Perfumes",
							className: "h-10 auto object-contain drop-shadow-sm scale-110 origin-left"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-2xl tracking-tight text-primary",
							children: "King Perfumes"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setMobileOpen(false),
						className: "p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mt-8 flex flex-col gap-6 flex-1",
					children: [nav.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							x: -20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: { delay: .1 + i * .05 },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							onClick: () => setMobileOpen(false),
							className: "text-2xl font-serif text-foreground/90 hover:text-gold transition-colors block",
							children: n.label
						})
					}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 pt-8 border-t border-border/50 flex flex-col gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								x: -20
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: { delay: .4 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/wishlist",
								onClick: () => setMobileOpen(false),
								className: "flex items-center gap-3 text-lg text-muted-foreground hover:text-gold transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5" }),
									" Wishlist ",
									wishlist.length > 0 && `(${wishlist.length})`
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								x: -20
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: { delay: .45 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/compare",
								onClick: () => setMobileOpen(false),
								className: "flex items-center gap-3 text-lg text-muted-foreground hover:text-gold transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitCompare, { className: "h-5 w-5" }),
									" Compare ",
									compare.length > 0 && `(${compare.length})`
								]
							})
						})]
					})]
				})]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchModal, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickViewModal, {})
	] });
}
function Badge({ n }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
		initial: {
			scale: 0,
			opacity: 0
		},
		animate: {
			scale: 1,
			opacity: 1
		},
		exit: {
			scale: 0,
			opacity: 0
		},
		className: "absolute -right-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-white shadow-sm ring-2 ring-background",
		children: n > 99 ? "99+" : n
	});
}
function SiteFooter() {
	const [email, setEmail] = (0, import_react.useState)("");
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative bg-black text-white pt-24 pb-12 overflow-hidden border-t border-gold/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1320px] px-6 relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						variant: "fadeUp",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col md:flex-row items-center justify-between gap-10 border-b border-white/10 pb-16 mb-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-xl text-center md:text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-serif text-3xl md:text-4xl text-gold mb-4",
									children: "Join The Inner Circle"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-white/70 font-light",
									children: "Subscribe to receive exclusive offers, early access to new launches, and expert fragrance guides."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
								onSubmit: (e) => {
									e.preventDefault();
									setEmail("");
								},
								className: "w-full md:w-auto relative group",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex items-center w-full md:w-[400px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										required: true,
										value: email,
										onChange: (e) => setEmail(e.target.value),
										placeholder: "Enter your email address",
										className: "w-full bg-white/5 border border-white/20 rounded-full py-4 pl-6 pr-14 text-white placeholder:text-white/40 outline-none focus:border-gold transition-colors font-light"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "absolute right-2 p-3 rounded-full bg-gold text-black hover:bg-white transition-colors",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4 ml-0.5" })
									})]
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 md:grid-cols-2 lg:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								variant: "stagger",
								delay: .1,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/",
										className: "flex items-center gap-3 mb-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/logo.png",
											alt: "King Perfumes",
											className: "h-12 auto object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-serif text-2xl text-gold",
											children: "King Perfumes"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-white/70 leading-relaxed font-light mb-8",
										children: "India's premier destination for luxury fragrances. Curated collections of the finest perfumes, attars, and bespoke scents from around the world."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex gap-4",
										children: [{
											icon: Instagram,
											url: "https://www.instagram.com/king.perfumes_rajkot/?hl=en"
										}, {
											icon: Facebook,
											url: "https://www.facebook.com/p/King-Perfumes-61571565824143/"
										}].map((social, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
											whileHover: {
												y: -5,
												color: "#d4af37",
												borderColor: "#d4af37"
											},
											href: social.url,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/70 transition-colors",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(social.icon, { className: "h-4 w-4" })
										}, i))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								variant: "stagger",
								delay: .2,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-lg text-white mb-6 tracking-wide",
									children: "Collections"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-4 text-sm text-white/70 font-light",
									children: [
										{
											to: "/shop",
											label: "Shop All Fragrances"
										},
										{
											to: "/shop?category=Eau+de+Parfum",
											label: "Eau de Parfum"
										},
										{
											to: "/shop?category=Eau+de+Toilette",
											label: "Eau de Toilette"
										},
										{
											to: "/shop?category=Attar",
											label: "Attars & Oils"
										},
										{
											to: "/shop?badge=New",
											label: "New Arrivals"
										}
									].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: l.to,
										className: "hover:text-gold transition-colors inline-block hover:translate-x-1 duration-300",
										children: l.label
									}) }, l.label))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								variant: "stagger",
								delay: .3,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-lg text-white mb-6 tracking-wide",
									children: "Client Care"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-4 text-sm text-white/70 font-light",
									children: [
										{
											label: "Shipping & Delivery",
											to: "/shipping"
										},
										{
											label: "Returns & Exchanges",
											to: "/returns"
										},
										{
											label: "FAQ",
											to: "#"
										},
										{
											label: "Track Order",
											to: "#"
										},
										{
											label: "Privacy Policy",
											to: "/privacy"
										},
										{
											label: "Terms of Service",
											to: "/terms"
										}
									].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: l.to.startsWith("/") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: l.to,
										className: "hover:text-gold transition-colors inline-block hover:translate-x-1 duration-300",
										children: l.label
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: l.to,
										className: "hover:text-gold transition-colors inline-block hover:translate-x-1 duration-300",
										children: l.label
									}) }, l.label))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								variant: "stagger",
								delay: .4,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-lg text-white mb-6 tracking-wide",
									children: "Boutiques"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-5 text-sm text-white/70 font-light",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "leading-relaxed",
												children: [
													"1st floor, Nakshatra 10,",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"Nakshatra -110,",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"opp. hotel silver palace ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													" Rajkot, Gujarat 360002"
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "hover:text-gold transition-colors cursor-pointer",
												children: "+91 9558688562"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "hover:text-gold transition-colors cursor-pointer",
												children: "kingperfumes11@gmail.com"
											})]
										})
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						variant: "fadeUp",
						delay: .5,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-20 flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 text-xs text-white/50 font-light",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" King Perfumes. Crafted with passion for fragrance."
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 md:mt-0 flex gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Secure Payments" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Authenticity Guaranteed" })
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
						whileHover: {
							scale: 1.1,
							backgroundColor: "#d4af37"
						},
						whileTap: { scale: .9 },
						onClick: scrollToTop,
						className: "absolute bottom-12 right-6 md:right-12 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors",
						"aria-label": "Scroll to top",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-5 w-5" })
					})
				]
			})
		]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function SplashCursor({ SIM_RESOLUTION = 128, DYE_RESOLUTION = 1440, CAPTURE_RESOLUTION = 512, DENSITY_DISSIPATION = 3.5, VELOCITY_DISSIPATION = 2, PRESSURE = .1, PRESSURE_ITERATIONS = 20, CURL = 3, SPLAT_RADIUS = .2, SPLAT_FORCE = 6e3, SHADING = true, COLOR_UPDATE_SPEED = 10, BACK_COLOR = {
	r: .5,
	g: 0,
	b: 0
}, TRANSPARENT = true, RAINBOW_MODE = true, COLOR = "#ff0000" }) {
	const canvasRef = (0, import_react.useRef)(null);
	const animationFrameId = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		let isActive = true;
		function pointerPrototype() {
			this.id = -1;
			this.texcoordX = 0;
			this.texcoordY = 0;
			this.prevTexcoordX = 0;
			this.prevTexcoordY = 0;
			this.deltaX = 0;
			this.deltaY = 0;
			this.down = false;
			this.moved = false;
			this.color = [
				0,
				0,
				0
			];
		}
		let config = {
			SIM_RESOLUTION,
			DYE_RESOLUTION,
			CAPTURE_RESOLUTION,
			DENSITY_DISSIPATION,
			VELOCITY_DISSIPATION,
			PRESSURE,
			PRESSURE_ITERATIONS,
			CURL,
			SPLAT_RADIUS,
			SPLAT_FORCE,
			SHADING,
			COLOR_UPDATE_SPEED,
			PAUSED: false,
			BACK_COLOR,
			TRANSPARENT,
			RAINBOW_MODE,
			COLOR
		};
		let pointers = [new pointerPrototype()];
		const { gl, ext } = getWebGLContext(canvas);
		if (!ext.supportLinearFiltering) {
			config.DYE_RESOLUTION = 256;
			config.SHADING = false;
		}
		function getWebGLContext(canvas) {
			const params = {
				alpha: true,
				depth: false,
				stencil: false,
				antialias: false,
				preserveDrawingBuffer: false
			};
			let gl = canvas.getContext("webgl2", params);
			const isWebGL2 = !!gl;
			if (!isWebGL2) gl = canvas.getContext("webgl", params) || canvas.getContext("experimental-webgl", params);
			let halfFloat;
			let supportLinearFiltering;
			if (isWebGL2) {
				gl.getExtension("EXT_color_buffer_float");
				supportLinearFiltering = gl.getExtension("OES_texture_float_linear");
			} else {
				halfFloat = gl.getExtension("OES_texture_half_float");
				supportLinearFiltering = gl.getExtension("OES_texture_half_float_linear");
			}
			gl.clearColor(0, 0, 0, 1);
			const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat && halfFloat.HALF_FLOAT_OES;
			let formatRGBA;
			let formatRG;
			let formatR;
			if (isWebGL2) {
				formatRGBA = getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloatTexType);
				formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
				formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
			} else {
				formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
				formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
				formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
			}
			return {
				gl,
				ext: {
					formatRGBA,
					formatRG,
					formatR,
					halfFloatTexType,
					supportLinearFiltering
				}
			};
		}
		function getSupportedFormat(gl, internalFormat, format, type) {
			if (!supportRenderTextureFormat(gl, internalFormat, format, type)) switch (internalFormat) {
				case gl.R16F: return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
				case gl.RG16F: return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
				default: return null;
			}
			return {
				internalFormat,
				format
			};
		}
		function supportRenderTextureFormat(gl, internalFormat, format, type) {
			const texture = gl.createTexture();
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);
			const fbo = gl.createFramebuffer();
			gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
			gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
			return gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
		}
		class Material {
			constructor(vertexShader, fragmentShaderSource) {
				this.vertexShader = vertexShader;
				this.fragmentShaderSource = fragmentShaderSource;
				this.programs = [];
				this.activeProgram = null;
				this.uniforms = [];
			}
			setKeywords(keywords) {
				let hash = 0;
				for (let i = 0; i < keywords.length; i++) hash += hashCode(keywords[i]);
				let program = this.programs[hash];
				if (program == null) {
					let fragmentShader = compileShader(gl.FRAGMENT_SHADER, this.fragmentShaderSource, keywords);
					program = createProgram(this.vertexShader, fragmentShader);
					this.programs[hash] = program;
				}
				if (program === this.activeProgram) return;
				this.uniforms = getUniforms(program);
				this.activeProgram = program;
			}
			bind() {
				gl.useProgram(this.activeProgram);
			}
		}
		class Program {
			constructor(vertexShader, fragmentShader) {
				this.uniforms = {};
				this.program = createProgram(vertexShader, fragmentShader);
				this.uniforms = getUniforms(this.program);
			}
			bind() {
				gl.useProgram(this.program);
			}
		}
		function createProgram(vertexShader, fragmentShader) {
			let program = gl.createProgram();
			gl.attachShader(program, vertexShader);
			gl.attachShader(program, fragmentShader);
			gl.linkProgram(program);
			if (!gl.getProgramParameter(program, gl.LINK_STATUS)) console.trace(gl.getProgramInfoLog(program));
			return program;
		}
		function getUniforms(program) {
			let uniforms = [];
			let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
			for (let i = 0; i < uniformCount; i++) {
				let uniformName = gl.getActiveUniform(program, i).name;
				uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
			}
			return uniforms;
		}
		function compileShader(type, source, keywords) {
			source = addKeywords(source, keywords);
			const shader = gl.createShader(type);
			gl.shaderSource(shader, source);
			gl.compileShader(shader);
			if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) console.trace(gl.getShaderInfoLog(shader));
			return shader;
		}
		function addKeywords(source, keywords) {
			if (!keywords) return source;
			let keywordsString = "";
			keywords.forEach((keyword) => {
				keywordsString += "#define " + keyword + "\n";
			});
			return keywordsString + source;
		}
		const baseVertexShader = compileShader(gl.VERTEX_SHADER, `
        precision highp float;
        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;

        void main () {
            vUv = aPosition * 0.5 + 0.5;
            vL = vUv - vec2(texelSize.x, 0.0);
            vR = vUv + vec2(texelSize.x, 0.0);
            vT = vUv + vec2(0.0, texelSize.y);
            vB = vUv - vec2(0.0, texelSize.y);
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
      `);
		const copyShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
      `);
		const clearShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
      `);
		const displayShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `;
		const splatShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float aspectRatio;
        uniform vec3 color;
        uniform vec2 point;
        uniform float radius;

        void main () {
            vec2 p = vUv - point.xy;
            p.x *= aspectRatio;
            vec3 splat = exp(-dot(p, p) / radius) * color;
            vec3 base = texture2D(uTarget, vUv).xyz;
            gl_FragColor = vec4(base + splat, 1.0);
        }
      `);
		const advectionShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform vec2 dyeTexelSize;
        uniform float dt;
        uniform float dissipation;

        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
            vec2 st = uv / tsize - 0.5;
            vec2 iuv = floor(st);
            vec2 fuv = fract(st);

            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
        }

        void main () {
            #ifdef MANUAL_FILTERING
                vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
                vec4 result = bilerp(uSource, coord, dyeTexelSize);
            #else
                vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
                vec4 result = texture2D(uSource, coord);
            #endif
            float decay = 1.0 + dissipation * dt;
            gl_FragColor = result / decay;
        }
      `, ext.supportLinearFiltering ? null : ["MANUAL_FILTERING"]);
		const divergenceShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).x;
            float R = texture2D(uVelocity, vR).x;
            float T = texture2D(uVelocity, vT).y;
            float B = texture2D(uVelocity, vB).y;

            vec2 C = texture2D(uVelocity, vUv).xy;
            if (vL.x < 0.0) { L = -C.x; }
            if (vR.x > 1.0) { R = -C.x; }
            if (vT.y > 1.0) { T = -C.y; }
            if (vB.y < 0.0) { B = -C.y; }

            float div = 0.5 * (R - L + T - B);
            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
      `);
		const curlShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).y;
            float R = texture2D(uVelocity, vR).y;
            float T = texture2D(uVelocity, vT).x;
            float B = texture2D(uVelocity, vB).x;
            float vorticity = R - L - T + B;
            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
        }
      `);
		const vorticityShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        uniform sampler2D uCurl;
        uniform float curl;
        uniform float dt;

        void main () {
            float L = texture2D(uCurl, vL).x;
            float R = texture2D(uCurl, vR).x;
            float T = texture2D(uCurl, vT).x;
            float B = texture2D(uCurl, vB).x;
            float C = texture2D(uCurl, vUv).x;

            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
            force /= length(force) + 0.0001;
            force *= curl * C;
            force.y *= -1.0;

            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity += force * dt;
            velocity = min(max(velocity, -1000.0), 1000.0);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `);
		const pressureShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            float C = texture2D(uPressure, vUv).x;
            float divergence = texture2D(uDivergence, vUv).x;
            float pressure = (L + R + B + T - divergence) * 0.25;
            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
      `);
		const gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity.xy -= vec2(R - L, T - B);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `);
		const blit = (() => {
			gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
				-1,
				-1,
				-1,
				1,
				1,
				1,
				1,
				-1
			]), gl.STATIC_DRAW);
			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
			gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([
				0,
				1,
				2,
				0,
				2,
				3
			]), gl.STATIC_DRAW);
			gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
			gl.enableVertexAttribArray(0);
			return (target, clear = false) => {
				if (target == null) {
					gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
					gl.bindFramebuffer(gl.FRAMEBUFFER, null);
				} else {
					gl.viewport(0, 0, target.width, target.height);
					gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
				}
				if (clear) {
					gl.clearColor(0, 0, 0, 1);
					gl.clear(gl.COLOR_BUFFER_BIT);
				}
				gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
			};
		})();
		let dye, velocity, divergence, curl, pressure;
		const copyProgram = new Program(baseVertexShader, copyShader);
		const clearProgram = new Program(baseVertexShader, clearShader);
		const splatProgram = new Program(baseVertexShader, splatShader);
		const advectionProgram = new Program(baseVertexShader, advectionShader);
		const divergenceProgram = new Program(baseVertexShader, divergenceShader);
		const curlProgram = new Program(baseVertexShader, curlShader);
		const vorticityProgram = new Program(baseVertexShader, vorticityShader);
		const pressureProgram = new Program(baseVertexShader, pressureShader);
		const gradienSubtractProgram = new Program(baseVertexShader, gradientSubtractShader);
		const displayMaterial = new Material(baseVertexShader, displayShaderSource);
		function initFramebuffers() {
			let simRes = getResolution(config.SIM_RESOLUTION);
			let dyeRes = getResolution(config.DYE_RESOLUTION);
			const texType = ext.halfFloatTexType;
			const rgba = ext.formatRGBA;
			const rg = ext.formatRG;
			const r = ext.formatR;
			const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;
			gl.disable(gl.BLEND);
			if (!dye) dye = createDoubleFBO(dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
			else dye = resizeDoubleFBO(dye, dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
			if (!velocity) velocity = createDoubleFBO(simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
			else velocity = resizeDoubleFBO(velocity, simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
			divergence = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
			curl = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
			pressure = createDoubleFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
		}
		function createFBO(w, h, internalFormat, format, type, param) {
			gl.activeTexture(gl.TEXTURE0);
			let texture = gl.createTexture();
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);
			let fbo = gl.createFramebuffer();
			gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
			gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
			gl.viewport(0, 0, w, h);
			gl.clear(gl.COLOR_BUFFER_BIT);
			return {
				texture,
				fbo,
				width: w,
				height: h,
				texelSizeX: 1 / w,
				texelSizeY: 1 / h,
				attach(id) {
					gl.activeTexture(gl.TEXTURE0 + id);
					gl.bindTexture(gl.TEXTURE_2D, texture);
					return id;
				}
			};
		}
		function createDoubleFBO(w, h, internalFormat, format, type, param) {
			let fbo1 = createFBO(w, h, internalFormat, format, type, param);
			let fbo2 = createFBO(w, h, internalFormat, format, type, param);
			return {
				width: w,
				height: h,
				texelSizeX: fbo1.texelSizeX,
				texelSizeY: fbo1.texelSizeY,
				get read() {
					return fbo1;
				},
				set read(value) {
					fbo1 = value;
				},
				get write() {
					return fbo2;
				},
				set write(value) {
					fbo2 = value;
				},
				swap() {
					let temp = fbo1;
					fbo1 = fbo2;
					fbo2 = temp;
				}
			};
		}
		function resizeFBO(target, w, h, internalFormat, format, type, param) {
			let newFBO = createFBO(w, h, internalFormat, format, type, param);
			copyProgram.bind();
			gl.uniform1i(copyProgram.uniforms.uTexture, target.attach(0));
			blit(newFBO);
			return newFBO;
		}
		function resizeDoubleFBO(target, w, h, internalFormat, format, type, param) {
			if (target.width === w && target.height === h) return target;
			target.read = resizeFBO(target.read, w, h, internalFormat, format, type, param);
			target.write = createFBO(w, h, internalFormat, format, type, param);
			target.width = w;
			target.height = h;
			target.texelSizeX = 1 / w;
			target.texelSizeY = 1 / h;
			return target;
		}
		function updateKeywords() {
			let displayKeywords = [];
			if (config.SHADING) displayKeywords.push("SHADING");
			displayMaterial.setKeywords(displayKeywords);
		}
		updateKeywords();
		initFramebuffers();
		let lastUpdateTime = Date.now();
		let colorUpdateTimer = 0;
		function updateFrame() {
			if (!isActive) return;
			const dt = calcDeltaTime();
			if (resizeCanvas()) initFramebuffers();
			updateColors(dt);
			applyInputs();
			step(dt);
			render(null);
			animationFrameId.current = requestAnimationFrame(updateFrame);
		}
		function calcDeltaTime() {
			let now = Date.now();
			let dt = (now - lastUpdateTime) / 1e3;
			dt = Math.min(dt, .016666);
			lastUpdateTime = now;
			return dt;
		}
		function resizeCanvas() {
			let width = scaleByPixelRatio(canvas.clientWidth);
			let height = scaleByPixelRatio(canvas.clientHeight);
			if (canvas.width !== width || canvas.height !== height) {
				canvas.width = width;
				canvas.height = height;
				return true;
			}
			return false;
		}
		function updateColors(dt) {
			colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED;
			if (colorUpdateTimer >= 1) {
				colorUpdateTimer = wrap(colorUpdateTimer, 0, 1);
				pointers.forEach((p) => {
					p.color = generateColor();
				});
			}
		}
		function applyInputs() {
			pointers.forEach((p) => {
				if (p.moved) {
					p.moved = false;
					splatPointer(p);
				}
			});
		}
		function step(dt) {
			gl.disable(gl.BLEND);
			curlProgram.bind();
			gl.uniform2f(curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
			gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
			blit(curl);
			vorticityProgram.bind();
			gl.uniform2f(vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
			gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
			gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
			gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
			gl.uniform1f(vorticityProgram.uniforms.dt, dt);
			blit(velocity.write);
			velocity.swap();
			divergenceProgram.bind();
			gl.uniform2f(divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
			gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
			blit(divergence);
			clearProgram.bind();
			gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
			gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE);
			blit(pressure.write);
			pressure.swap();
			pressureProgram.bind();
			gl.uniform2f(pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
			gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
			for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
				gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));
				blit(pressure.write);
				pressure.swap();
			}
			gradienSubtractProgram.bind();
			gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
			gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
			gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
			blit(velocity.write);
			velocity.swap();
			advectionProgram.bind();
			gl.uniform2f(advectionProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
			if (!ext.supportLinearFiltering) gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, velocity.texelSizeX, velocity.texelSizeY);
			let velocityId = velocity.read.attach(0);
			gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId);
			gl.uniform1i(advectionProgram.uniforms.uSource, velocityId);
			gl.uniform1f(advectionProgram.uniforms.dt, dt);
			gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
			blit(velocity.write);
			velocity.swap();
			if (!ext.supportLinearFiltering) gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, dye.texelSizeX, dye.texelSizeY);
			gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
			gl.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1));
			gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
			blit(dye.write);
			dye.swap();
		}
		function render(target) {
			gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
			gl.enable(gl.BLEND);
			drawDisplay(target);
		}
		function drawDisplay(target) {
			let width = target == null ? gl.drawingBufferWidth : target.width;
			let height = target == null ? gl.drawingBufferHeight : target.height;
			displayMaterial.bind();
			if (config.SHADING) gl.uniform2f(displayMaterial.uniforms.texelSize, 1 / width, 1 / height);
			gl.uniform1i(displayMaterial.uniforms.uTexture, dye.read.attach(0));
			blit(target);
		}
		function splatPointer(pointer) {
			let dx = pointer.deltaX * config.SPLAT_FORCE;
			let dy = pointer.deltaY * config.SPLAT_FORCE;
			splat(pointer.texcoordX, pointer.texcoordY, dx, dy, pointer.color);
		}
		function clickSplat(pointer) {
			const color = generateColor();
			color.r *= 10;
			color.g *= 10;
			color.b *= 10;
			let dx = 10 * (Math.random() - .5);
			let dy = 30 * (Math.random() - .5);
			splat(pointer.texcoordX, pointer.texcoordY, dx, dy, color);
		}
		function splat(x, y, dx, dy, color) {
			splatProgram.bind();
			gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
			gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
			gl.uniform2f(splatProgram.uniforms.point, x, y);
			gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0);
			gl.uniform1f(splatProgram.uniforms.radius, correctRadius(config.SPLAT_RADIUS / 100));
			blit(velocity.write);
			velocity.swap();
			gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0));
			gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
			blit(dye.write);
			dye.swap();
		}
		function correctRadius(radius) {
			let aspectRatio = canvas.width / canvas.height;
			if (aspectRatio > 1) radius *= aspectRatio;
			return radius;
		}
		function updatePointerDownData(pointer, id, posX, posY) {
			pointer.id = id;
			pointer.down = true;
			pointer.moved = false;
			pointer.texcoordX = posX / canvas.width;
			pointer.texcoordY = 1 - posY / canvas.height;
			pointer.prevTexcoordX = pointer.texcoordX;
			pointer.prevTexcoordY = pointer.texcoordY;
			pointer.deltaX = 0;
			pointer.deltaY = 0;
			pointer.color = generateColor();
		}
		function updatePointerMoveData(pointer, posX, posY, color) {
			pointer.prevTexcoordX = pointer.texcoordX;
			pointer.prevTexcoordY = pointer.texcoordY;
			pointer.texcoordX = posX / canvas.width;
			pointer.texcoordY = 1 - posY / canvas.height;
			pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX);
			pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY);
			pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
			pointer.color = color;
		}
		function updatePointerUpData(pointer) {
			pointer.down = false;
		}
		function correctDeltaX(delta) {
			let aspectRatio = canvas.width / canvas.height;
			if (aspectRatio < 1) delta *= aspectRatio;
			return delta;
		}
		function correctDeltaY(delta) {
			let aspectRatio = canvas.width / canvas.height;
			if (aspectRatio > 1) delta /= aspectRatio;
			return delta;
		}
		function hexToRGB(hex) {
			let val = hex.replace("#", "");
			if (val.length === 3) val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2];
			const r = parseInt(val.slice(0, 2), 16) / 255;
			const g = parseInt(val.slice(2, 4), 16) / 255;
			const b = parseInt(val.slice(4, 6), 16) / 255;
			return {
				r: r * .15,
				g: g * .15,
				b: b * .15
			};
		}
		function generateColor() {
			if (!config.RAINBOW_MODE) return hexToRGB(config.COLOR);
			let c = HSVtoRGB(Math.random(), 1, 1);
			c.r *= .15;
			c.g *= .15;
			c.b *= .15;
			return c;
		}
		function HSVtoRGB(h, s, v) {
			let r, g, b, i, f, p, q, t;
			i = Math.floor(h * 6);
			f = h * 6 - i;
			p = v * (1 - s);
			q = v * (1 - f * s);
			t = v * (1 - (1 - f) * s);
			switch (i % 6) {
				case 0:
					r = v;
					g = t;
					b = p;
					break;
				case 1:
					r = q;
					g = v;
					b = p;
					break;
				case 2:
					r = p;
					g = v;
					b = t;
					break;
				case 3:
					r = p;
					g = q;
					b = v;
					break;
				case 4:
					r = t;
					g = p;
					b = v;
					break;
				case 5:
					r = v;
					g = p;
					b = q;
					break;
				default: break;
			}
			return {
				r,
				g,
				b
			};
		}
		function wrap(value, min, max) {
			const range = max - min;
			if (range === 0) return min;
			return (value - min) % range + min;
		}
		function getResolution(resolution) {
			let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
			if (aspectRatio < 1) aspectRatio = 1 / aspectRatio;
			const min = Math.round(resolution);
			const max = Math.round(resolution * aspectRatio);
			if (gl.drawingBufferWidth > gl.drawingBufferHeight) return {
				width: max,
				height: min
			};
			else return {
				width: min,
				height: max
			};
		}
		function scaleByPixelRatio(input) {
			const pixelRatio = window.devicePixelRatio || 1;
			return Math.floor(input * pixelRatio);
		}
		function hashCode(s) {
			if (s.length === 0) return 0;
			let hash = 0;
			for (let i = 0; i < s.length; i++) {
				hash = (hash << 5) - hash + s.charCodeAt(i);
				hash |= 0;
			}
			return hash;
		}
		function handleMouseDown(e) {
			let pointer = pointers[0];
			updatePointerDownData(pointer, -1, scaleByPixelRatio(e.clientX), scaleByPixelRatio(e.clientY));
			clickSplat(pointer);
		}
		let firstMouseMoveHandled = false;
		function handleMouseMove(e) {
			let pointer = pointers[0];
			let posX = scaleByPixelRatio(e.clientX);
			let posY = scaleByPixelRatio(e.clientY);
			if (!firstMouseMoveHandled) {
				updatePointerMoveData(pointer, posX, posY, generateColor());
				firstMouseMoveHandled = true;
			} else updatePointerMoveData(pointer, posX, posY, pointer.color);
		}
		function handleTouchStart(e) {
			const touches = e.targetTouches;
			let pointer = pointers[0];
			for (let i = 0; i < touches.length; i++) {
				let posX = scaleByPixelRatio(touches[i].clientX);
				let posY = scaleByPixelRatio(touches[i].clientY);
				updatePointerDownData(pointer, touches[i].identifier, posX, posY);
			}
		}
		function handleTouchMove(e) {
			const touches = e.targetTouches;
			let pointer = pointers[0];
			for (let i = 0; i < touches.length; i++) updatePointerMoveData(pointer, scaleByPixelRatio(touches[i].clientX), scaleByPixelRatio(touches[i].clientY), pointer.color);
		}
		function handleTouchEnd(e) {
			const touches = e.changedTouches;
			let pointer = pointers[0];
			for (let i = 0; i < touches.length; i++) updatePointerUpData(pointer);
		}
		window.addEventListener("mousedown", handleMouseDown);
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("touchstart", handleTouchStart);
		window.addEventListener("touchmove", handleTouchMove, false);
		window.addEventListener("touchend", handleTouchEnd);
		updateFrame();
		return () => {
			isActive = false;
			if (animationFrameId.current) {
				cancelAnimationFrame(animationFrameId.current);
				animationFrameId.current = null;
			}
			window.removeEventListener("mousedown", handleMouseDown);
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("touchstart", handleTouchStart);
			window.removeEventListener("touchmove", handleTouchMove);
			window.removeEventListener("touchend", handleTouchEnd);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			position: "fixed",
			top: 0,
			left: 0,
			zIndex: 50,
			pointerEvents: "none",
			width: "100%",
			height: "100%"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			id: "fluid",
			style: {
				width: "100vw",
				height: "100vh",
				display: "block"
			}
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-7xl text-gold",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "This fragrance has drifted away..."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-gold px-6 py-2.5 text-sm font-medium text-gold-foreground",
						children: "Return to Royalty"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-3xl text-gold",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Please try again."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						router.invalidate();
						reset();
					},
					className: "mt-6 rounded-full bg-gold px-6 py-2.5 text-sm text-gold-foreground",
					children: "Try again"
				})
			]
		})
	});
}
var Route$19 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "King Perfumes — Luxury Fragrances for the Discerning" },
			{
				name: "description",
				content: "India's premier destination for luxury perfumes and attars. Curated collections of the finest fragrances from around the world."
			},
			{
				property: "og:title",
				content: "King Perfumes — Luxury Fragrances"
			},
			{
				property: "og:description",
				content: "India's premier destination for luxury perfumes and attars."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$19.useRouteContext();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoreProvider, { children: [pathname.startsWith("/admin") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col relative z-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fixed inset-0 z-[-10] pointer-events-auto opacity-100",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplashCursor, {
						TRANSPARENT: true,
						RAINBOW_MODE: false,
						COLOR: "#d4af37",
						SPLAT_RADIUS: .3,
						SPLAT_FORCE: 4e3,
						DENSITY_DISSIPATION: 2,
						VELOCITY_DISSIPATION: 1,
						SHADING: true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "page-transition flex-1 bg-transparent",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}, pathname),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" })] })
	});
}
var $$splitComponentImporter$18 = () => import("./wishlist-DFNt_q5V.mjs");
var Route$18 = createFileRoute("/wishlist")({
	head: () => ({ meta: [{ title: "Wishlist — King Perfumes" }] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./terms-DkZORlKM.mjs");
var Route$17 = createFileRoute("/terms")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./shop-4UwrhlxN.mjs");
var Route$16 = createFileRoute("/shop")({
	head: () => ({ meta: [{ title: "Shop — King Perfumes Luxury Fragrances" }, {
		name: "description",
		content: "Browse King Perfumes' collection of luxury perfumes, attars, and colognes."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./shipping-Bs60Kb-s.mjs");
var Route$15 = createFileRoute("/shipping")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./returns-Pnv8vUtq.mjs");
var Route$14 = createFileRoute("/returns")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./privacy-ByRB8L4U.mjs");
var Route$13 = createFileRoute("/privacy")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./contact-Bc4riZGg.mjs");
var Route$12 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact — King Perfumes" }, {
		name: "description",
		content: "Get in touch with King Perfumes. We'd love to hear from you."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./compare-BhEi4fd4.mjs");
var Route$11 = createFileRoute("/compare")({
	head: () => ({ meta: [{ title: "Compare — King Perfumes" }] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./checkout-CfR7IIR1.mjs");
var Route$10 = createFileRoute("/checkout")({
	head: () => ({ meta: [{ title: "Checkout — King Perfumes" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./blog-C2D_PDJb.mjs");
var Route$9 = createFileRoute("/blog")({
	head: () => ({ meta: [{ title: "Journal — King Perfumes" }, {
		name: "description",
		content: "Fragrance rituals, ingredient stories, and style guides from King Perfumes."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./admin-DOfpPRsP.mjs");
var Route$8 = createFileRoute("/admin")({
	head: () => ({ meta: [{ title: "Admin — King Perfumes" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./about-CmuMMzLr.mjs");
var Route$7 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About — King Perfumes" }, {
		name: "description",
		content: "Discover the story behind King Perfumes — India's luxury fragrance destination."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./routes-CscbQXsb.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "King Perfumes — Luxury Fragrances for the Discerning" }, {
		name: "description",
		content: "Discover India's finest collection of luxury perfumes, attars, and fragrances."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./admin.index-NT4en78j.mjs");
var Route$5 = createFileRoute("/admin/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./admin.settings-CiGMZ5ST.mjs");
var Route$4 = createFileRoute("/admin/settings")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./admin.products-BLA3rIHw.mjs");
var Route$3 = createFileRoute("/admin/products")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./admin.orders-CyUKibv-.mjs");
var Route$2 = createFileRoute("/admin/orders")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./admin.messages-DDlx6gdG.mjs");
var Route$1 = createFileRoute("/admin/messages")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./admin.categories-CiN7UFOH.mjs");
var Route = createFileRoute("/admin/categories")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var WishlistRoute = Route$18.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => Route$19
});
var TermsRoute = Route$17.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$19
});
var ShopRoute = Route$16.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$19
});
var ShippingRoute = Route$15.update({
	id: "/shipping",
	path: "/shipping",
	getParentRoute: () => Route$19
});
var ReturnsRoute = Route$14.update({
	id: "/returns",
	path: "/returns",
	getParentRoute: () => Route$19
});
var PrivacyRoute = Route$13.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$19
});
var ContactRoute = Route$12.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$19
});
var CompareRoute = Route$11.update({
	id: "/compare",
	path: "/compare",
	getParentRoute: () => Route$19
});
var CheckoutRoute = Route$10.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$19
});
var BlogRoute = Route$9.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$19
});
var AdminRoute = Route$8.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$19
});
var AboutRoute = Route$7.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$19
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$19
});
var AdminIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminRoute
});
var ProductIdRoute = Route$20.update({
	id: "/product/$id",
	path: "/product/$id",
	getParentRoute: () => Route$19
});
var AdminSettingsRoute = Route$4.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AdminRoute
});
var AdminProductsRoute = Route$3.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => AdminRoute
});
var AdminOrdersRoute = Route$2.update({
	id: "/orders",
	path: "/orders",
	getParentRoute: () => AdminRoute
});
var AdminMessagesRoute = Route$1.update({
	id: "/messages",
	path: "/messages",
	getParentRoute: () => AdminRoute
});
var AdminRouteChildren = {
	AdminCategoriesRoute: Route.update({
		id: "/categories",
		path: "/categories",
		getParentRoute: () => AdminRoute
	}),
	AdminMessagesRoute,
	AdminOrdersRoute,
	AdminProductsRoute,
	AdminSettingsRoute,
	AdminIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdminRoute: AdminRoute._addFileChildren(AdminRouteChildren),
	BlogRoute,
	CheckoutRoute,
	CompareRoute,
	ContactRoute,
	PrivacyRoute,
	ReturnsRoute,
	ShippingRoute,
	ShopRoute,
	TermsRoute,
	WishlistRoute,
	ProductIdRoute
};
var routeTree = Route$19._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
