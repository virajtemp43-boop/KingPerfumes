import { a as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StoreContext-D7RYJJhR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var API_BASE = "http://localhost:3001/api";
var defaultCustomer = {
	name: "",
	email: "",
	phone: "",
	address: "",
	city: "",
	state: "",
	pincode: ""
};
var StoreContext = (0, import_react.createContext)(null);
function useLocalStorage(key, initial) {
	const [state, setState] = (0, import_react.useState)(initial);
	(0, import_react.useEffect)(() => {
		try {
			const stored = window.localStorage.getItem(key);
			if (stored) setState(JSON.parse(stored));
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		try {
			window.localStorage.setItem(key, JSON.stringify(state));
		} catch {}
	}, [key, state]);
	return [state, setState];
}
function StoreProvider({ children }) {
	const [products, setProducts] = (0, import_react.useState)([]);
	const [orders, setOrders] = (0, import_react.useState)([]);
	const [categories, setCategories] = (0, import_react.useState)([]);
	const [contactMessages, setContactMessages] = (0, import_react.useState)([]);
	const [settings, setSettings] = (0, import_react.useState)({});
	const [cart, setCart] = useLocalStorage("kp:cart", []);
	const [wishlist, setWishlist] = useLocalStorage("kp:wishlist", []);
	const [compare, setCompare] = useLocalStorage("kp:compare", []);
	const [cartOpen, setCartOpen] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [quickViewId, setQuickViewId] = (0, import_react.useState)(null);
	const [customerDetails, setCustomerDetails] = useLocalStorage("kp:customer", defaultCustomer);
	const [lastOrder, setLastOrder] = useLocalStorage("kp:lastOrder", null);
	const refreshProducts = async () => {
		try {
			const data = await (await fetch(`${API_BASE}/products?limit=100`)).json();
			if (data.products) setProducts(data.products);
		} catch (e) {
			console.warn("Backend not available");
		}
	};
	const refreshOrders = async () => {
		try {
			const data = await (await fetch(`${API_BASE}/orders`)).json();
			if (Array.isArray(data)) setOrders(data);
		} catch (e) {
			console.warn("Could not fetch orders");
		}
	};
	const refreshCategories = async () => {
		try {
			const data = await (await fetch(`${API_BASE}/categories`)).json();
			if (Array.isArray(data)) setCategories(data);
		} catch (e) {
			console.warn("Could not fetch categories");
		}
	};
	const refreshContactMessages = async () => {
		try {
			const data = await (await fetch(`${API_BASE}/contact`)).json();
			if (Array.isArray(data)) setContactMessages(data);
		} catch (e) {
			console.warn("Could not fetch contact messages");
		}
	};
	const refreshSettings = async () => {
		try {
			const data = await (await fetch(`${API_BASE}/settings`)).json();
			if (data) setSettings(data);
		} catch (e) {
			console.warn("Could not fetch settings");
		}
	};
	(0, import_react.useEffect)(() => {
		refreshProducts();
	}, []);
	(0, import_react.useEffect)(() => {
		refreshCategories();
	}, []);
	const addProduct = async (p) => {
		if ((await fetch(`${API_BASE}/products`, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(p)
		})).ok) await refreshProducts();
	};
	const updateProduct = async (id, p) => {
		if ((await fetch(`${API_BASE}/products/${id}`, {
			method: "PUT",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(p)
		})).ok) await refreshProducts();
	};
	const deleteProduct = async (id) => {
		if ((await fetch(`${API_BASE}/products/${id}`, { method: "DELETE" })).ok) await refreshProducts();
	};
	const updateOrderStatus = async (id, order_status, payment_status) => {
		if ((await fetch(`${API_BASE}/orders/${id}/status`, {
			method: "PUT",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				order_status,
				payment_status
			})
		})).ok) await refreshOrders();
	};
	const addCategory = async (c) => {
		if ((await fetch(`${API_BASE}/categories`, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(c)
		})).ok) await refreshCategories();
	};
	const updateCategory = async (id, c) => {
		if ((await fetch(`${API_BASE}/categories/${id}`, {
			method: "PUT",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(c)
		})).ok) await refreshCategories();
	};
	const deleteCategory = async (id) => {
		if ((await fetch(`${API_BASE}/categories/${id}`, { method: "DELETE" })).ok) await refreshCategories();
	};
	const markMessageRead = async (id) => {
		if ((await fetch(`${API_BASE}/contact/${id}/read`, { method: "PUT" })).ok) await refreshContactMessages();
	};
	const deleteMessage = async (id) => {
		if ((await fetch(`${API_BASE}/contact/${id}`, { method: "DELETE" })).ok) await refreshContactMessages();
	};
	const updateSettingsFn = async (s) => {
		if ((await fetch(`${API_BASE}/settings`, {
			method: "PUT",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(s)
		})).ok) await refreshSettings();
	};
	const value = (0, import_react.useMemo)(() => ({
		products,
		orders,
		refreshProducts,
		refreshOrders,
		updateOrderStatus,
		addProduct,
		updateProduct,
		deleteProduct,
		categories,
		refreshCategories,
		addCategory,
		updateCategory,
		deleteCategory,
		contactMessages,
		refreshContactMessages,
		markMessageRead,
		deleteMessage,
		settings,
		refreshSettings,
		updateSettings: updateSettingsFn,
		cart,
		addToCart: (productId, size, quantity = 1) => {
			const sizes = products.find((p) => p.id === productId)?.sizes || [];
			let defaultSize = "50ml";
			if (Array.isArray(sizes) && sizes.length > 0) defaultSize = typeof sizes[0] === "object" ? sizes[0].size || "50ml" : sizes[0];
			const sz = size ?? defaultSize;
			if (cart.findIndex((c) => c.productId === productId && c.size === sz) >= 0) {
				toast.success(`Added ${quantity} more to cart`);
				setCart((prev) => {
					const newIdx = prev.findIndex((c) => c.productId === productId && c.size === sz);
					if (newIdx >= 0) {
						const copy = [...prev];
						copy[newIdx] = {
							...copy[newIdx],
							quantity: copy[newIdx].quantity + quantity
						};
						return copy;
					}
					return prev;
				});
			} else {
				toast.success("Added to cart");
				setCart((prev) => [...prev, {
					productId,
					size: sz,
					quantity
				}]);
			}
		},
		updateCart: (productId, size, quantity) => setCart((prev) => quantity <= 0 ? prev.filter((c) => !(c.productId === productId && c.size === size)) : prev.map((c) => c.productId === productId && c.size === size ? {
			...c,
			quantity
		} : c)),
		removeFromCart: (productId, size) => {
			setCart((prev) => prev.filter((c) => !(c.productId === productId && c.size === size)));
			toast.info("Removed from cart");
		},
		clearCart: () => {
			setCart([]);
			refreshOrders();
			toast.success("Cart cleared");
		},
		wishlist,
		toggleWishlist: (id) => {
			if (wishlist.includes(id)) {
				toast.info("Removed from wishlist");
				setWishlist((prev) => prev.filter((x) => x !== id));
			} else {
				toast.success("Added to wishlist");
				setWishlist((prev) => [...prev, id]);
			}
		},
		compare,
		toggleCompare: (id) => {
			if (compare.includes(id)) {
				toast.info("Removed from compare");
				setCompare((prev) => prev.filter((x) => x !== id));
			} else {
				if (compare.length >= 4) {
					toast.error("You can only compare up to 4 items");
					return;
				}
				toast.success("Added to compare");
				setCompare((prev) => [...prev, id]);
			}
		},
		cartOpen,
		setCartOpen,
		searchOpen,
		setSearchOpen,
		quickViewId,
		setQuickViewId,
		customerDetails,
		setCustomerDetails,
		lastOrder,
		setLastOrder
	}), [
		products,
		orders,
		categories,
		contactMessages,
		settings,
		cart,
		wishlist,
		compare,
		cartOpen,
		searchOpen,
		quickViewId,
		customerDetails,
		lastOrder
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreContext.Provider, {
		value,
		children
	});
}
function useStore() {
	const ctx = (0, import_react.useContext)(StoreContext);
	if (!ctx) throw new Error("useStore must be used within StoreProvider");
	return ctx;
}
var formatPrice = (n) => `₹${n.toLocaleString("en-IN")}`;
var API_BASE_URL = API_BASE;
//#endregion
export { useStore as i, StoreProvider as n, formatPrice as r, API_BASE_URL as t };
