import { a as __toESM } from "../_runtime.mjs";
import { a as AnimatePresence, i as motion } from "../_libs/framer-motion.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { F as Heart, L as GitCompare, c as Star, f as ShoppingBag, z as Eye } from "../_libs/lucide-react.mjs";
import { i as useStore, r as formatPrice } from "./StoreContext-D7RYJJhR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-DTsS02uP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	const { addToCart, toggleWishlist, wishlist, setQuickViewId, compare, toggleCompare } = useStore();
	const [isHovered, setIsHovered] = (0, import_react.useState)(false);
	const lowestPrice = (0, import_react.useMemo)(() => {
		const raw = product.sizes || [];
		if (Array.isArray(raw) && raw.length > 0 && typeof raw[0] === "object") {
			const prices = raw.map((s) => Number(s.price)).filter((p) => p > 0);
			if (prices.length > 0) return Math.min(...prices);
		}
		return Number(product.price) || 0;
	}, [product.sizes, product.price]);
	const inWishlist = wishlist.includes(product.id);
	const inCompare = compare.includes(product.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		onHoverStart: () => setIsHovered(true),
		onHoverEnd: () => setIsHovered(false),
		whileHover: {
			y: -8,
			transition: {
				duration: .4,
				ease: "easeOut"
			}
		},
		className: "group relative overflow-hidden rounded-2xl bg-card border border-border/40 transition-shadow duration-500 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10",
		children: [
			product.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-4 top-4 z-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					initial: {
						opacity: 0,
						scale: .8
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					className: `inline-block rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md ${product.badge === "Best Seller" ? "bg-gold/90 text-white" : product.badge === "New" ? "bg-burgundy/90 text-white" : "bg-primary/80 text-white"}`,
					children: product.badge
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute right-4 top-4 z-20 flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: (isHovered || inWishlist || window.innerWidth < 768) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
					initial: {
						opacity: 0,
						x: 20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					exit: {
						opacity: 0,
						x: 20
					},
					transition: {
						duration: .3,
						ease: "easeOut"
					},
					onClick: () => toggleWishlist(product.id),
					className: `grid h-9 w-9 place-items-center rounded-full backdrop-blur-md shadow-sm transition-transform hover:scale-110 ${inWishlist ? "bg-gold text-white" : "bg-white/80 text-foreground hover:bg-gold hover:text-white"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-4 w-4 ${inWishlist ? "fill-current" : ""}` })
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: (isHovered || inCompare || window.innerWidth < 768) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
					initial: {
						opacity: 0,
						x: 20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					exit: {
						opacity: 0,
						x: 20
					},
					transition: {
						duration: .3,
						delay: .05,
						ease: "easeOut"
					},
					onClick: () => toggleCompare(product.id),
					className: `grid h-9 w-9 place-items-center rounded-full backdrop-blur-md shadow-sm transition-transform hover:scale-110 ${inCompare ? "bg-gold text-white" : "bg-white/80 text-foreground hover:bg-gold hover:text-white"}`,
					title: inCompare ? "Remove from Compare" : "Add to Compare",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitCompare, { className: "h-4 w-4" })
				}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: `/product/${product.id}`,
				className: "relative block aspect-[4/5] overflow-hidden bg-secondary/30 cursor-pointer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						animate: { scale: isHovered ? 1.08 : 1 },
						transition: {
							duration: .8,
							ease: "easeOut"
						},
						src: product.images?.[0] || "/images/product-default.jpg",
						alt: product.name,
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isHovered && product.images?.[1] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						initial: {
							opacity: 0,
							scale: 1
						},
						animate: {
							opacity: 1,
							scale: 1.08
						},
						exit: { opacity: 0 },
						transition: {
							duration: .8,
							ease: "easeOut"
						},
						src: product.images[1],
						alt: "",
						"aria-hidden": "true",
						className: "absolute inset-0 h-full w-full object-cover"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: (isHovered || window.innerWidth < 768) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: 20
						},
						transition: { duration: .3 },
						className: "absolute inset-x-0 bottom-4 flex justify-center z-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: (e) => {
								e.preventDefault();
								setQuickViewId(product.id);
							},
							className: "flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-5 py-2.5 text-xs font-semibold tracking-wide text-foreground shadow-lg hover:bg-gold hover:text-white transition-all duration-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5" }), " Quick View"]
						})
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-medium uppercase tracking-widest text-gold/80",
							children: product.category
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-0.5",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-3 w-3 ${i < Math.round(Number(product.rating) || 0) ? "fill-gold text-gold" : "text-border"}` }, i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] text-muted-foreground font-medium",
								children: [
									"(",
									product.reviewCount,
									")"
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `/product/${product.id}`,
						className: "block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-sans font-medium text-xl leading-tight text-foreground transition-colors hover:text-gold line-clamp-1",
							children: product.name
						})
					}),
					product.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1 mt-1",
						children: product.notes.split(",").slice(0, 3).map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-sm bg-secondary/50 px-2 py-0.5 text-[10px] text-muted-foreground tracking-wide",
							children: note.trim()
						}, note.trim()))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-2xl text-primary",
								children: formatPrice(lowestPrice)
							}), product.originalPrice && Number(product.originalPrice) > lowestPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground line-through",
								children: formatPrice(Number(product.originalPrice))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							whileTap: { scale: .95 },
							onClick: () => addToCart(product.id),
							className: "group/btn relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "shine-sweep pointer-events-none absolute inset-y-0 left-0 w-full bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4 relative z-10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative z-10 hidden sm:inline-block",
									children: "Add"
								})
							]
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { ProductCard as t };
