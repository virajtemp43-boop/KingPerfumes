import { a as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { D as Mail, H as ChevronUp, W as ChevronDown, o as Trash2 } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useStore } from "./StoreContext-D7RYJJhR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.messages-DDlx6gdG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminMessages() {
	const { contactMessages, refreshContactMessages, markMessageRead, deleteMessage } = useStore();
	const [expanded, setExpanded] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		refreshContactMessages();
	}, []);
	const handleDelete = async (msg) => {
		if (confirm(`Delete message from "${msg.name}"?`)) {
			await deleteMessage(msg.id);
			toast.success("Message deleted");
		}
	};
	const handleRead = async (msg) => {
		if (!msg.is_read) await markMessageRead(msg.id);
		setExpanded(expanded === msg.id ? null : msg.id);
	};
	const unread = contactMessages.filter((m) => !m.is_read).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-3xl text-primary",
			children: "Messages"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: [
				contactMessages.length,
				" total",
				unread > 0 ? ` · ${unread} unread` : ""
			]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: refreshContactMessages,
			className: "rounded-full bg-gold/10 px-4 py-2 text-xs text-gold hover:bg-gold hover:text-gold-foreground transition-all",
			children: "Refresh"
		})]
	}), contactMessages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8 rounded-2xl bg-card border border-border/40 p-12 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mx-auto h-8 w-8 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-muted-foreground",
			children: "No messages yet."
		})]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-8 space-y-3",
		children: contactMessages.map((msg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `rounded-2xl border ${msg.is_read ? "border-border/40 bg-card" : "border-gold/30 bg-gold/5"} overflow-hidden`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => handleRead(msg),
				className: "flex w-full items-center justify-between p-4 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-2 w-2 rounded-full shrink-0 ${msg.is_read ? "bg-transparent" : "bg-gold"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground truncate",
								children: msg.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground shrink-0",
								children: [
									"<",
									msg.email,
									">"
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-muted-foreground truncate mt-0.5",
							children: [
								msg.subject || "No subject",
								" · ",
								new Date(msg.created_at).toLocaleDateString()
							]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation();
							handleDelete(msg);
						},
						className: "p-2 hover:text-destructive",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
					}), expanded === msg.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })]
				})]
			}), expanded === msg.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border/60 px-4 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm text-foreground whitespace-pre-wrap",
					children: msg.message
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 text-xs text-muted-foreground",
					children: [
						"From: ",
						msg.name,
						" (",
						msg.email,
						")",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Subject: ",
						msg.subject || "N/A",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Date: ",
						new Date(msg.created_at).toLocaleString()
					]
				})]
			})]
		}, msg.id))
	})] });
}
//#endregion
export { AdminMessages as component };
