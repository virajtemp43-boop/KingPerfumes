import { a as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { B as Crown, S as Package, a as TrendingUp, d as ShoppingCart } from "../_libs/lucide-react.mjs";
import { i as useStore, r as formatPrice } from "./StoreContext-D7RYJJhR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-NT4en78j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminDashboard() {
	const { products, orders, refreshOrders } = useStore();
	const activeProducts = products.filter((p) => p.status === "active");
	const totalRevenue = orders.reduce((sum, o) => sum + Number(o.total), 0);
	(0, import_react.useEffect)(() => {
		refreshOrders();
	}, []);
	const stats = [
		{
			icon: Package,
			label: "Total Products",
			value: products.length
		},
		{
			icon: Crown,
			label: "Active",
			value: activeProducts.length
		},
		{
			icon: ShoppingCart,
			label: "Orders",
			value: orders.length
		},
		{
			icon: TrendingUp,
			label: "Revenue",
			value: orders.length > 0 ? formatPrice(totalRevenue) : "—"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-3xl text-primary",
			children: "Dashboard"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: "Overview of King Perfumes store."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card border border-border/40 p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 place-items-center rounded-full bg-gold/10 text-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 text-xs uppercase tracking-wider text-muted-foreground",
						children: s.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 font-serif text-3xl text-primary",
						children: s.value
					})
				]
			}, s.label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card border border-border/40 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-xl text-primary",
					children: "Recent Orders"
				}), orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "No orders yet."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 space-y-3 text-sm",
					children: orders.slice(0, 5).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border/60 pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium text-foreground",
							children: o.customer_name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-muted-foreground",
							children: [
								o.id,
								" · ",
								new Date(o.created_at).toLocaleDateString()
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-gold",
								children: formatPrice(o.total)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `text-xs ${o.order_status === "Delivered" ? "text-green-500" : "text-gold"}`,
								children: o.order_status
							})]
						})]
					}, o.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card border border-border/40 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-xl text-primary",
					children: "Low Stock Alert"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm",
					children: [products.filter((p) => p.stock < 20).slice(0, 5).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between border-b border-border/60 pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.images?.[0] || "",
								alt: "",
								className: "h-10 w-10 rounded object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-foreground",
								children: p.name
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-destructive",
							children: [p.stock, " left"]
						})]
					}, p.id)), products.filter((p) => p.stock < 20).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-sm",
						children: "All products are well-stocked."
					})]
				})]
			})]
		})
	] });
}
//#endregion
export { AdminDashboard as component };
