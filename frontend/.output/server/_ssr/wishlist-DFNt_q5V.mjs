import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useStore } from "./StoreContext-D7RYJJhR.mjs";
import { t as ProductCard } from "./ProductCard-DTsS02uP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-DFNt_q5V.js
var import_jsx_runtime = require_jsx_runtime();
function Wishlist() {
	const { products, wishlist } = useStore();
	const items = products.filter((p) => wishlist.includes(p.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 pt-32 pb-16 md:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs uppercase tracking-[0.3em] text-gold/70",
				children: "Saved for later"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-serif text-5xl text-primary",
				children: "Your Wishlist"
			})]
		}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 text-center text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You haven't saved anything yet." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				className: "mt-6 inline-block rounded-full bg-gold px-6 py-3 text-sm text-gold-foreground",
				children: "Explore products"
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left",
			children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
		})]
	});
}
//#endregion
export { Wishlist as component };
