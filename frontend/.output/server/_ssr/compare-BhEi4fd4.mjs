import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { G as Check, t as X } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useStore, r as formatPrice } from "./StoreContext-D7RYJJhR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compare-BhEi4fd4.js
var import_jsx_runtime = require_jsx_runtime();
function Compare() {
	const { products, compare, toggleCompare, addToCart, setCartOpen } = useStore();
	const items = products.filter((p) => compare.includes(p.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 pt-32 pb-16 md:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs uppercase tracking-[0.3em] text-gold/70",
				children: "Side by side"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-serif text-5xl text-primary",
				children: "Compare Products"
			})]
		}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 text-center text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Add products to compare from the shop." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				className: "mt-6 inline-block rounded-full bg-gold px-6 py-3 text-sm text-gold-foreground",
				children: "Browse shop"
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[600px] border-collapse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "w-40 text-left text-xs uppercase tracking-wider text-muted-foreground" }), items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "p-4 align-top",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => toggleCompare(p.id),
								className: "absolute right-0 top-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.images?.[0] || "",
								alt: p.name,
								className: "mx-auto aspect-[4/5] w-32 rounded-xl object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 font-serif text-lg text-primary",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-gold",
								children: formatPrice(p.price)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									addToCart(p.id);
									setCartOpen(true);
								},
								className: "mt-3 rounded-full bg-gold px-4 py-2 text-xs text-gold-foreground",
								children: "Add to Cart"
							})
						]
					})
				}, p.id))] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
					className: "text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Category",
							items: items.map((p) => p.category)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Gender",
							items: items.map((p) => p.gender || "Unisex")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Rating",
							items: items.map((p) => `${Number(p.rating || 0).toFixed(1)} ★`)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Sizes",
							items: items.map((p) => {
								const sizes = p.sizes || [];
								if (Array.isArray(sizes) && sizes.length > 0 && typeof sizes[0] === "object") return sizes.map((s) => s.size).join(" / ");
								return sizes.join(" / ");
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Stock",
							items: items.map((p) => p.stock > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mx-auto h-4 w-4 text-green-500" }) : "Out of Stock")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Description",
							items: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs line-clamp-3",
								children: p.description
							}))
						})
					]
				})]
			})
		})]
	});
}
function Row({ label, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
		className: "border-t border-border/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
			className: "py-4 text-xs uppercase tracking-wider text-muted-foreground",
			children: label
		}), items.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
			className: "p-4 text-center",
			children: v
		}, i))]
	});
}
//#endregion
export { Compare as component };
