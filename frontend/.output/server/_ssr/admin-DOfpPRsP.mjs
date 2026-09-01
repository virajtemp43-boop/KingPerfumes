import { a as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { O as LogOut, P as House, S as Package, d as ShoppingCart, j as LayoutDashboard, m as Settings, s as Tags, w as MessageSquare } from "../_libs/lucide-react.mjs";
import { _ as useNavigate, f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DOfpPRsP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ADMIN_PASSWORD = "king2026";
var AUTH_KEY = "kp:admin-auth";
function AdminLayout() {
	const [authed, setAuthed] = (0, import_react.useState)(false);
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") setAuthed(window.sessionStorage.getItem(AUTH_KEY) === "1");
	}, []);
	const submit = (e) => {
		e.preventDefault();
		if (password === ADMIN_PASSWORD) {
			window.sessionStorage.setItem(AUTH_KEY, "1");
			setAuthed(true);
			setError(false);
		} else setError(true);
	};
	const logout = () => {
		window.sessionStorage.removeItem(AUTH_KEY);
		setAuthed(false);
		navigate({ to: "/admin" });
	};
	if (!authed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "w-full max-w-sm rounded-2xl bg-card border border-border/40 p-8 shadow-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.png",
						alt: "King Perfumes",
						className: "mx-auto h-16 w-auto object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Admin access"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "password",
					autoFocus: true,
					value: password,
					onChange: (e) => setPassword(e.target.value),
					placeholder: "Password",
					className: "mt-6 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-gold"
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-destructive",
					children: "Incorrect password."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "mt-4 w-full rounded-full bg-gold py-3 text-sm font-medium text-gold-foreground hover:opacity-90",
					children: "Sign In"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-4 block text-center text-xs text-muted-foreground",
					children: "← Back to store"
				})
			]
		})
	});
	const nav = [
		{
			to: "/admin",
			label: "Dashboard",
			icon: LayoutDashboard,
			exact: true
		},
		{
			to: "/admin/products",
			label: "Products",
			icon: Package,
			exact: false
		},
		{
			to: "/admin/orders",
			label: "Orders",
			icon: ShoppingCart,
			exact: false
		},
		{
			to: "/admin/categories",
			label: "Categories",
			icon: Tags,
			exact: false
		},
		{
			to: "/admin/messages",
			label: "Messages",
			icon: MessageSquare,
			exact: false
		},
		{
			to: "/admin/settings",
			label: "Settings",
			icon: Settings,
			exact: false
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen bg-secondary/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "hidden w-64 flex-col bg-card border-r border-border/40 md:flex",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2 p-6 font-serif text-xl text-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.png",
						alt: "King Perfumes",
						className: "h-10 w-auto object-contain"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex-1 space-y-1 px-4",
					children: nav.map((n) => {
						const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: n.to,
							className: `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${active ? "bg-gold/10 text-gold" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.icon, { className: "h-4 w-4" }),
								" ",
								n.label
							]
						}, n.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1 border-t border-border/60 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-4 w-4" }), " View Store"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: logout,
						className: "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Sign out"]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 overflow-x-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border bg-background px-6 py-4 md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2 font-serif text-lg text-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.png",
							alt: "King Perfumes Admin",
							className: "h-8 w-auto object-contain"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: logout,
						className: "text-sm text-muted-foreground",
						children: "Logout"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-4 overflow-x-auto border-b border-border bg-background px-4 py-2 md:hidden",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "text-sm text-muted-foreground hover:text-gold",
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-6 md:p-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				})
			]
		})]
	});
}
//#endregion
export { AdminLayout as component };
