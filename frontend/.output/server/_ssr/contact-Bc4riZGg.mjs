import { a as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { D as Mail, E as MapPin, b as Phone, h as Send, k as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as API_BASE_URL } from "./StoreContext-D7RYJJhR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Bc4riZGg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [sending, setSending] = (0, import_react.useState)(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setSending(true);
		const form = e.target;
		const formData = new FormData(form);
		try {
			const res = await fetch(`${API_BASE_URL}/contact`, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					name: formData.get("name"),
					email: formData.get("email"),
					subject: formData.get("subject") || "",
					message: formData.get("message")
				})
			});
			if (res.ok) {
				toast.success("Message sent! We'll be in touch.");
				form.reset();
			} else {
				const err = await res.json();
				toast.error(err.error || "Failed to send message");
			}
		} catch {
			toast.error("Network error. Please try again.");
		}
		setSending(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 pt-32 pb-16 md:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.3em] text-gold/70",
					children: "Say hello"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-serif text-5xl text-primary",
					children: "Get in touch"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: "We reply to every message within 24 hours."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 grid gap-12 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-4",
				children: [
					{
						icon: Mail,
						label: "Email",
						value: "kingperfumes11@gmail.com"
					},
					{
						icon: Phone,
						label: "Phone",
						value: "+91 9558688562"
					},
					{
						icon: MapPin,
						label: "Studio",
						value: "1st floor, Nakshatra 10, Nakshatra -110, opp. hotel silver palace, Rajkot, Gujarat 360002"
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/10 text-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-wider text-muted-foreground",
						children: c.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-primary",
						children: c.value
					})] })]
				}, c.label))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				onSubmit: handleSubmit,
				className: "rounded-2xl bg-secondary/40 p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							name: "name",
							placeholder: "Your name",
							className: "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "email",
							name: "email",
							placeholder: "Email address",
							className: "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "subject",
							placeholder: "Subject",
							className: "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							name: "message",
							rows: 5,
							placeholder: "Your message",
							className: "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: sending,
							className: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-medium text-gold-foreground hover:opacity-90 disabled:opacity-50",
							children: [sending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), sending ? "Sending..." : "Send Message"]
						})
					]
				})
			})]
		})]
	});
}
//#endregion
export { Contact as component };
