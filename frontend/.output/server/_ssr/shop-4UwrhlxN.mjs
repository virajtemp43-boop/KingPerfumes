import { a as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as X, u as SlidersHorizontal } from "../_libs/lucide-react.mjs";
import { i as useStore } from "./StoreContext-D7RYJJhR.mjs";
import { t as ProductCard } from "./ProductCard-DTsS02uP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-4UwrhlxN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var genders = [
	"All",
	"Men",
	"Women",
	"Unisex"
];
var sortOptions = [
	{
		v: "popular",
		label: "Popularity"
	},
	{
		v: "newest",
		label: "Newest"
	},
	{
		v: "price-asc",
		label: "Price: Low to High"
	},
	{
		v: "price-desc",
		label: "Price: High to Low"
	}
];
function Shop() {
	const { products } = useStore();
	const categories = (0, import_react.useMemo)(() => Array.from(new Set(products.map((p) => p.category))), [products]);
	const [category, setCategory] = (0, import_react.useState)(null);
	const [gender, setGender] = (0, import_react.useState)("All");
	const [maxPrice, setMaxPrice] = (0, import_react.useState)(5e3);
	const [minRating, setMinRating] = (0, import_react.useState)(0);
	const [sort, setSort] = (0, import_react.useState)("popular");
	const [filtersOpen, setFiltersOpen] = (0, import_react.useState)(false);
	const [page, setPage] = (0, import_react.useState)(1);
	const perPage = 12;
	const filtered = (0, import_react.useMemo)(() => {
		let arr = products.filter((p) => p.status === "active");
		if (category) arr = arr.filter((p) => p.category === category);
		if (gender !== "All") arr = arr.filter((p) => p.gender === gender || p.gender === "Unisex");
		arr = arr.filter((p) => p.price <= maxPrice && Number(p.rating || 0) >= minRating);
		switch (sort) {
			case "price-asc":
				arr = [...arr].sort((a, b) => a.price - b.price);
				break;
			case "price-desc":
				arr = [...arr].sort((a, b) => b.price - a.price);
				break;
			case "newest":
				arr = [...arr].reverse();
				break;
			default: arr = [...arr].sort((a, b) => b.reviewCount - a.reviewCount);
		}
		return arr;
	}, [
		products,
		category,
		gender,
		maxPrice,
		minRating,
		sort
	]);
	const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
	const paged = filtered.slice((page - 1) * perPage, page * perPage);
	const filtersUI = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FilterGroup, {
				title: "Category",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCategory(null),
					className: `block text-sm ${!category ? "text-gold" : "text-muted-foreground hover:text-foreground"}`,
					children: "All"
				}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCategory(c),
					className: `block text-sm ${category === c ? "text-gold" : "text-muted-foreground hover:text-foreground"}`,
					children: c
				}, c))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterGroup, {
				title: "Gender",
				children: genders.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setGender(s),
					className: `block text-sm ${gender === s ? "text-gold" : "text-muted-foreground hover:text-foreground"}`,
					children: s
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FilterGroup, {
				title: "Price",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 500,
					max: 5e3,
					step: 100,
					value: maxPrice,
					onChange: (e) => setMaxPrice(+e.target.value),
					className: "w-full accent-gold"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm text-muted-foreground",
					children: ["Up to ₹", maxPrice]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterGroup, {
				title: "Rating",
				children: [
					0,
					3,
					4,
					4.5
				].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setMinRating(r),
					className: `block text-sm ${minRating === r ? "text-gold" : "text-muted-foreground hover:text-foreground"}`,
					children: r === 0 ? "Any" : `${r}★ & up`
				}, r))
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 pt-32 pb-12 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.png",
						alt: "King Perfumes",
						className: "mx-auto h-10 auto object-contain opacity-50"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 block text-xs uppercase tracking-[0.3em] text-gold/70",
						children: "Shop"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-serif text-5xl text-primary",
						children: "Royal Collection"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Discover your signature scent from our curated collection."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-[240px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden md:block",
					children: filtersUI
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex items-center justify-between gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setFiltersOpen(true),
								className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm md:hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-4 w-4" }), " Filters"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm text-muted-foreground",
								children: [filtered.length, " fragrances"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: sort,
								onChange: (e) => setSort(e.target.value),
								className: "rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground",
								children: sortOptions.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: o.v,
									children: ["Sort: ", o.label]
								}, o.v))
							})
						]
					}),
					paged.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "py-20 text-center text-muted-foreground",
						children: "No fragrances match your filters."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3",
						children: paged.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
					}),
					totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 flex justify-center gap-2",
						children: Array.from({ length: totalPages }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setPage(i + 1),
							className: `h-9 w-9 rounded-full text-sm ${page === i + 1 ? "bg-gold text-gold-foreground" : "border border-border text-foreground"}`,
							children: i + 1
						}, i))
					})
				] })]
			}),
			filtersOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-50 md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-black/60",
					onClick: () => setFiltersOpen(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute left-0 top-0 h-full w-80 overflow-y-auto bg-background p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-xl text-primary",
							children: "Filters"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setFiltersOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						})]
					}), filtersUI]
				})]
			})
		]
	});
}
function FilterGroup({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-3 text-xs uppercase tracking-wider text-gold/70",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-2",
		children
	})] });
}
//#endregion
export { Shop as component };
