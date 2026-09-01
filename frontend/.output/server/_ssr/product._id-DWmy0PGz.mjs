import { a as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { B as Crown, C as Minus, F as Heart, c as Star, f as ShoppingBag, i as Truck, p as ShieldCheck, v as Plus } from "../_libs/lucide-react.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useStore, r as formatPrice } from "./StoreContext-D7RYJJhR.mjs";
import { t as Route } from "./product._id-CFfdNG6P.mjs";
import { t as ProductCard } from "./ProductCard-DTsS02uP.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._id-DWmy0PGz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
function ProductDetail() {
	const { id } = Route.useParams();
	const loaderData = Route.useLoaderData();
	const { products, addToCart, setCartOpen, toggleWishlist, wishlist } = useStore();
	const navigate = useNavigate();
	const product = loaderData?.product || products.find((p) => p.id === id || p.slug === id);
	const [size, setSize] = (0, import_react.useState)(null);
	const [qty, setQty] = (0, import_react.useState)(1);
	const [mainIdx, setMainIdx] = (0, import_react.useState)(0);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-4 py-32 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "mx-auto h-12 w-12 text-gold/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-serif text-4xl text-primary",
				children: "Fragrance not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "The product you're looking for doesn't exist or may have been removed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				className: "mt-6 inline-block rounded-full bg-gold px-6 py-3 text-sm text-gold-foreground",
				children: "Back to shop"
			})
		]
	});
	const sizes = (0, import_react.useMemo)(() => {
		const raw = product.sizes || ["50ml"];
		if (Array.isArray(raw) && raw.length > 0 && typeof raw[0] === "object") return raw;
		return raw.map((s) => ({
			size: s,
			price: product.price
		}));
	}, [product.sizes, product.price]);
	const currentSize = size ?? sizes[0].size;
	const currentPrice = (sizes.find((s) => s.size === currentSize) || sizes[0]).price;
	const originalPrice = product.originalPrice;
	const discount = originalPrice ? Math.round((originalPrice - currentPrice) / originalPrice * 100) : 0;
	const wished = wishlist.includes(product.id);
	const related = products.filter((p) => p.status === "active" && (p.category === product.category || p.gender === product.gender) && p.id !== product.id).slice(0, 4);
	const handleAdd = () => {
		addToCart(product.id, currentSize, qty);
		setCartOpen(true);
	};
	const handleBuy = () => {
		addToCart(product.id, currentSize, qty);
		navigate({ to: "/checkout" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 pt-32 pb-12 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mb-8 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-gold",
						children: "Home"
					}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-1",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "hover:text-gold",
						children: "Shop"
					}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-1",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: product.name
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl bg-card border border-border/40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: (product.images?.[mainIdx] ?? product.images?.[0]) || "",
						alt: product.name,
						className: "aspect-[4/5] w-full object-cover"
					})
				}), product.images?.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex gap-3",
					children: product.images.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setMainIdx(i),
						className: `h-20 w-20 overflow-hidden rounded-lg border-2 ${mainIdx === i ? "border-gold" : "border-border"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img,
							alt: "",
							className: "h-full w-full object-cover"
						})
					}, i))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.3em] text-gold/70",
						children: product.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-sans font-bold text-3xl md:text-4xl text-primary",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex text-gold",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-4 w-4 ${i < Math.round(Number(product.rating) || 0) ? "fill-current" : ""}` }, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							children: [
								Number(product.rating || 0).toFixed(1),
								" · ",
								product.reviewCount || 0,
								" reviews"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-baseline gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-3xl text-gold",
							children: formatPrice(currentPrice)
						}), originalPrice && originalPrice > currentPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground line-through",
							children: formatPrice(originalPrice)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-gold/10 px-2 py-0.5 text-xs text-gold",
							children: [
								"Save ",
								discount,
								"%"
							]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-muted-foreground leading-relaxed",
						children: product.description
					}),
					product.topNotes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs uppercase tracking-wider text-gold/70",
							children: "Fragrance Notes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteBar, {
									label: "Top Notes",
									notes: product.topNotes,
									color: "bg-gold/80"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteBar, {
									label: "Heart Notes",
									notes: product.middleNotes,
									color: "bg-gold/60"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteBar, {
									label: "Base Notes",
									notes: product.baseNotes,
									color: "bg-gold/40"
								})
							]
						})]
					}),
					product.noteImages && product.noteImages.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs uppercase tracking-wider text-primary font-bold mb-4",
							children: "Notes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-4",
							children: product.noteImages.map((note, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center w-20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-20 h-24 overflow-hidden mb-2 rounded bg-card border border-border/50",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: note.url,
										alt: note.name,
										className: "w-full h-full object-cover"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] uppercase tracking-wider text-center font-medium text-foreground",
									children: note.name
								})]
							}, i))
						})]
					}),
					sizes.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wider text-gold/70",
							children: "Size"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex gap-2",
							children: sizes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setSize(s.size),
								className: `rounded-full border px-4 py-2 text-sm transition-all ${currentSize === s.size ? "border-gold bg-gold text-gold-foreground" : "border-border text-foreground hover:border-gold/50"}`,
								children: [
									s.size,
									" — ",
									formatPrice(s.price)
								]
							}, s.size))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-full border border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setQty(Math.max(1, qty - 1)),
									className: "p-3 hover:text-gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-8 text-center text-sm",
									children: qty
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setQty(qty + 1),
									className: "p-3 hover:text-gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: handleAdd,
							className: "inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-gold/30 py-3 text-sm text-gold hover:bg-gold hover:text-gold-foreground transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), " Add to Cart"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleBuy,
						className: "mt-3 w-full rounded-full bg-gold py-4 text-sm font-medium text-gold-foreground hover:opacity-90 transition-all",
						children: ["Buy It Now — ", formatPrice(currentPrice * qty)]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => toggleWishlist(product.id),
						className: "mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-4 w-4 ${wished ? "fill-gold text-gold" : ""}` }), wished ? "In your wishlist" : "Add to Wishlist"]
					}),
					product.stock < 10 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 rounded-lg bg-gold/10 px-4 py-3 text-sm text-gold",
						children: [
							"Only ",
							product.stock,
							" left in stock — order soon."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid grid-cols-2 gap-3 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-5 w-5 text-gold" }), "Free shipping over ₹999"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5 text-gold" }), "30-day returns"]
						})]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					defaultValue: "description",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
							className: "bg-transparent border-b border-border/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "description",
									className: "data-[state=active]:text-gold data-[state=active]:border-gold",
									children: "Description"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "notes",
									className: "data-[state=active]:text-gold data-[state=active]:border-gold",
									children: "Fragrance Notes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "use",
									className: "data-[state=active]:text-gold data-[state=active]:border-gold",
									children: "How to Use"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "reviews",
									className: "data-[state=active]:text-gold data-[state=active]:border-gold",
									children: [
										"Reviews (",
										product.reviewCount || 0,
										")"
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "description",
							className: "mt-6 max-w-3xl text-muted-foreground leading-relaxed",
							children: product.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "notes",
							className: "mt-6 max-w-3xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-sm font-medium text-gold",
										children: "Top Notes"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: product.topNotes
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-sm font-medium text-gold",
										children: "Heart Notes"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: product.middleNotes
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-sm font-medium text-gold",
										children: "Base Notes"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: product.baseNotes
									})] })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "use",
							className: "mt-6 max-w-3xl text-muted-foreground leading-relaxed",
							children: product.howToUse
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "reviews",
							className: "mt-6 max-w-3xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-6",
								children: [
									1,
									2,
									3
								].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-b border-border/60 pb-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex gap-0.5 text-gold",
											children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, k))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 font-serif text-lg text-foreground",
											children: "\"A magnificent fragrance that turns heads wherever I go.\""
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 text-sm text-muted-foreground",
											children: "— Verified buyer"
										})
									]
								}, i))
							})
						})
					]
				})
			}),
			related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl text-primary",
					children: "You May Also Like"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left",
					children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
				})]
			})
		]
	});
}
function NoteBar({ label, notes, color }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-24 text-xs text-muted-foreground shrink-0",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `h-2 rounded-full ${color}`,
				style: { width: `${Math.min(100, notes.length * 8)}%` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-foreground/80",
				children: notes
			})
		]
	});
}
//#endregion
export { ProductDetail as component };
