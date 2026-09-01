import { a as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { _ as Save } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useStore } from "./StoreContext-D7RYJJhR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.settings-CiGMZ5ST.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminSettings() {
	const { settings, refreshSettings, updateSettings } = useStore();
	const [codPercentage, setCodPercentage] = (0, import_react.useState)("0");
	const [saving, setSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		refreshSettings();
	}, []);
	(0, import_react.useEffect)(() => {
		if (settings.cod_percentage !== void 0) setCodPercentage(settings.cod_percentage);
	}, [settings]);
	const handleSave = async (e) => {
		e.preventDefault();
		setSaving(true);
		try {
			await updateSettings({ cod_percentage: codPercentage });
			toast.success("Settings saved");
		} catch {
			toast.error("Failed to save settings");
		}
		setSaving(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-3xl text-primary",
			children: "Settings"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: "Configure store settings."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 max-w-lg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSave,
				className: "rounded-2xl bg-card border border-border/40 p-6 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-xl text-primary",
						children: "Payment Settings"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "Configure payment-related settings for the store."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: "Cash on Delivery - Online Payment Percentage (%)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: "0",
									max: "100",
									step: "0.1",
									value: codPercentage,
									onChange: (e) => setCodPercentage(e.target.value),
									className: "w-24 rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted-foreground",
									children: "%"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[10px] text-muted-foreground",
								children: "Example: If set to 3%, for a ₹3000 order, ₹90 will be paid online via Razorpay and ₹2910 will be collected as Cash on Delivery."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: saving,
						className: "inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-gold-foreground hover:opacity-90 disabled:opacity-50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }),
							" ",
							saving ? "Saving..." : "Save Settings"
						]
					})
				]
			})
		})
	] });
}
//#endregion
export { AdminSettings as component };
