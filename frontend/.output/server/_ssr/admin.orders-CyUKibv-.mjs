import { a as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { H as ChevronUp, W as ChevronDown, z as Eye } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useStore, r as formatPrice } from "./StoreContext-D7RYJJhR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.orders-CyUKibv-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ORDER_STATUSES = [
	"Pending",
	"Processing",
	"Shipped",
	"Delivered",
	"Cancelled"
];
var PAYMENT_STATUSES = [
	"pending",
	"paid",
	"failed",
	"refunded"
];
function AdminOrders() {
	const { orders, refreshOrders, updateOrderStatus } = useStore();
	const [expandedOrder, setExpandedOrder] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		refreshOrders();
	}, []);
	const handleStatusChange = async (orderId, order_status) => {
		await updateOrderStatus(orderId, order_status);
		toast.success(`Order ${orderId}: ${order_status}`);
	};
	const handlePaymentChange = async (orderId, payment_status) => {
		await updateOrderStatus(orderId, void 0, payment_status);
		toast.success(`Payment: ${payment_status}`);
	};
	const toggleExpand = (orderId) => {
		setExpandedOrder(expandedOrder === orderId ? null : orderId);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-3xl text-primary",
			children: "Orders"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: [orders.length, " total orders"]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: refreshOrders,
			className: "rounded-full bg-gold/10 px-4 py-2 text-xs text-gold hover:bg-gold hover:text-gold-foreground transition-all",
			children: "Refresh"
		})]
	}), orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-8 rounded-2xl bg-card border border-border/40 p-12 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "No orders yet. Complete a purchase to see orders here."
		})
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-8 space-y-4",
		children: orders.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl bg-card border border-border/40 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => toggleExpand(o.id),
				className: "flex w-full items-center justify-between p-4 hover:bg-secondary/20 transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 place-items-center rounded-full bg-gold/10 text-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium text-foreground",
						children: o.id
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted-foreground",
						children: [
							o.customer_name,
							" · ",
							new Date(o.created_at).toLocaleDateString()
						]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-gold",
							children: formatPrice(o.total)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `text-xs ${o.order_status === "Delivered" ? "text-green-500" : o.order_status === "Cancelled" ? "text-destructive" : "text-gold"}`,
							children: o.order_status
						})]
					}), expandedOrder === o.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-5 w-5 text-muted-foreground" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-5 w-5 text-muted-foreground" })]
				})]
			}), expandedOrder === o.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 p-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs uppercase tracking-wider text-muted-foreground mb-2",
						children: "Customer Details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Name:"
								}),
								" ",
								o.customer_name
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Email:"
								}),
								" ",
								o.customer_email
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Phone:"
								}),
								" ",
								o.customer_phone
							] })
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs uppercase tracking-wider text-muted-foreground mb-2",
						children: "Shipping Address"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: o.address }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							o.city,
							", ",
							o.state,
							" - ",
							o.pincode
						] })]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border/60 px-4 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-xs uppercase tracking-wider text-muted-foreground mb-3",
							children: "Order Items"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "text-xs text-muted-foreground border-b border-border/60",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-2 text-left",
										children: "Product"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-2 text-left",
										children: "Size"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-2 text-left",
										children: "Qty"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-2 text-right",
										children: "Price"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-2 text-right",
										children: "Total"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: (o.items || []).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2",
										children: item.product_name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2",
										children: item.size
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2",
										children: item.quantity
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 text-right",
										children: formatPrice(item.price)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 text-right",
										children: formatPrice(item.price * item.quantity)
									})
								]
							}, i)) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-1 text-sm border-t border-border/60 pt-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Subtotal"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatPrice(o.subtotal) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Shipping"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: o.shipping === 0 ? "Free" : formatPrice(o.shipping) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between font-medium text-base text-gold border-t border-border/60 pt-2 mt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatPrice(o.total) })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs uppercase tracking-wider text-muted-foreground mb-1",
									children: "Payment Method"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm",
									children: o.payment_method === "razorpay" ? "Razorpay (Online)" : "Cash on Delivery"
								}),
								o.razorpay_payment_id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground mt-1",
									children: ["Payment ID: ", o.razorpay_payment_id]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs uppercase tracking-wider text-muted-foreground mb-1",
									children: "Order Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: o.order_status || "Processing",
										onChange: (e) => handleStatusChange(o.id, e.target.value),
										className: `rounded-lg border px-3 py-1.5 text-xs font-medium ${o.order_status === "Delivered" ? "border-green-500/30 text-green-500 bg-green-500/5" : o.order_status === "Cancelled" ? "border-destructive/30 text-destructive bg-destructive/5" : o.order_status === "Shipped" ? "border-gold/30 text-gold bg-gold/5" : "border-border/60 text-foreground bg-background"}`,
										children: ORDER_STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: s,
											children: s
										}, s))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: o.payment_status || "pending",
										onChange: (e) => handlePaymentChange(o.id, e.target.value),
										className: "rounded border border-border/60 bg-background px-2 py-1 text-[10px] text-foreground",
										children: PAYMENT_STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: s,
											children: s
										}, s))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded-full px-2 py-0.5 text-xs ${o.payment_status === "paid" ? "bg-green-500/15 text-green-500" : o.payment_status === "failed" ? "bg-destructive/15 text-destructive" : "bg-muted text-muted-foreground"}`,
										children: o.payment_status
									})
								})
							] })]
						})
					]
				})]
			})]
		}, o.id))
	})] });
}
//#endregion
export { AdminOrders as component };
