import { a as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { B as Crown, N as Info, V as CircleCheck, k as LoaderCircle } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useStore, r as formatPrice, t as API_BASE_URL } from "./StoreContext-D7RYJJhR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-CfR7IIR1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Checkout() {
	const { cart, products, clearCart, customerDetails, setCustomerDetails, setLastOrder, settings, refreshSettings } = useStore();
	const [payment, setPayment] = (0, import_react.useState)("razorpay");
	const [state, setState] = (0, import_react.useState)("form");
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		refreshSettings();
	}, []);
	const items = (0, import_react.useMemo)(() => cart.map((c) => {
		const p = products.find((x) => x.id === c.productId);
		if (!p) return null;
		const sizes = p.sizes || [];
		let price = p.price;
		if (Array.isArray(sizes) && sizes.length > 0 && typeof sizes[0] === "object") {
			const matched = sizes.find((s) => s.size === c.size);
			if (matched) price = matched.price;
		}
		return {
			...c,
			product: p,
			price
		};
	}).filter(Boolean), [cart, products]);
	const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
	const city = customerDetails.city.trim().toLowerCase();
	const shipping = subtotal === 0 ? 0 : city === "rajkot" ? 0 : 79;
	const total = subtotal + shipping;
	const codPercentage = parseFloat(settings.cod_percentage || "0");
	const codOnlineAmount = payment === "cod" && codPercentage > 0 ? Math.round(total * (codPercentage / 100)) : 0;
	const codCashAmount = total - codOnlineAmount;
	const loadRazorpayScript = () => {
		return new Promise((resolve) => {
			if (window.Razorpay) {
				resolve();
				return;
			}
			const script = document.createElement("script");
			script.src = "https://checkout.razorpay.com/v1/checkout.js";
			script.onload = () => resolve();
			script.onerror = () => resolve();
			document.body.appendChild(script);
		});
	};
	const placeOrder = async (e) => {
		e.preventDefault();
		setState("processing");
		setErrorMsg("");
		try {
			if (payment === "cod" && codOnlineAmount > 0) {
				const orderRes = await fetch(`${API_BASE_URL}/orders`, {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify({
						customerName: customerDetails.name,
						customerEmail: customerDetails.email,
						customerPhone: customerDetails.phone,
						address: customerDetails.address,
						city: customerDetails.city,
						state: customerDetails.state,
						pincode: customerDetails.pincode,
						items: cart.map((c) => ({
							productId: c.productId,
							size: c.size,
							quantity: c.quantity
						})),
						paymentMethod: "razorpay"
					})
				});
				if (!orderRes.ok) {
					const err = await orderRes.json();
					throw new Error(err.error || "Failed to create order");
				}
				const orderData = await orderRes.json();
				await loadRazorpayScript();
				const options = {
					key: orderData.razorpayOrder.key_id,
					amount: Math.round(codOnlineAmount * 100),
					currency: "INR",
					name: "King Perfumes",
					description: `COD deposit for Order ${orderData.orderId}`,
					order_id: orderData.razorpayOrder.id,
					prefill: {
						name: customerDetails.name,
						email: customerDetails.email,
						contact: customerDetails.phone
					},
					theme: { color: "#c8a45c" },
					handler: async (response) => {
						await fetch(`${API_BASE_URL}/orders/verify`, {
							method: "POST",
							headers: { "content-type": "application/json" },
							body: JSON.stringify({
								razorpay_order_id: response.razorpay_order_id,
								razorpay_payment_id: response.razorpay_payment_id,
								orderId: orderData.orderId
							})
						});
						setLastOrder({
							orderId: orderData.orderId,
							total,
							paymentId: response.razorpay_payment_id,
							codOnlinePaid: codOnlineAmount,
							codCashDue: codCashAmount
						});
						setState("success");
						clearCart();
					},
					modal: { ondismiss: () => {
						setState("form");
					} }
				};
				new window.Razorpay(options).open();
				return;
			}
			const orderRes = await fetch(`${API_BASE_URL}/orders`, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					customerName: customerDetails.name,
					customerEmail: customerDetails.email,
					customerPhone: customerDetails.phone,
					address: customerDetails.address,
					city: customerDetails.city,
					state: customerDetails.state,
					pincode: customerDetails.pincode,
					items: cart.map((c) => ({
						productId: c.productId,
						size: c.size,
						quantity: c.quantity
					})),
					paymentMethod: payment
				})
			});
			if (!orderRes.ok) {
				const err = await orderRes.json();
				throw new Error(err.error || "Failed to create order");
			}
			const orderData = await orderRes.json();
			if (payment === "cod") {
				setLastOrder({
					orderId: orderData.orderId,
					total: orderData.total
				});
				setState("success");
				clearCart();
				return;
			}
			await loadRazorpayScript();
			if (!orderData.razorpayOrder) {
				toast.error("Razorpay is not configured on the server. Please check your backend environment variables (RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET).");
				setState("form");
				return;
			}
			const options = {
				key: orderData.razorpayOrder.key_id,
				amount: orderData.razorpayOrder.amount,
				currency: orderData.razorpayOrder.currency,
				name: "King Perfumes",
				description: `Order ${orderData.orderId}`,
				order_id: orderData.razorpayOrder.id,
				prefill: {
					name: customerDetails.name,
					email: customerDetails.email,
					contact: customerDetails.phone
				},
				theme: { color: "#c8a45c" },
				handler: async (response) => {
					await fetch(`${API_BASE_URL}/orders/verify`, {
						method: "POST",
						headers: { "content-type": "application/json" },
						body: JSON.stringify({
							razorpay_order_id: response.razorpay_order_id,
							razorpay_payment_id: response.razorpay_payment_id,
							orderId: orderData.orderId
						})
					});
					setLastOrder({
						orderId: orderData.orderId,
						total: orderData.total,
						paymentId: response.razorpay_payment_id
					});
					setState("success");
					clearCart();
				},
				modal: { ondismiss: () => {
					setState("form");
				} }
			};
			new window.Razorpay(options).open();
		} catch (err) {
			setErrorMsg(err.message || "Something went wrong");
			setState("error");
		}
	};
	if (state === "processing") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid min-h-[60vh] max-w-md place-items-center px-4 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto h-10 w-10 animate-spin text-gold" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-serif text-2xl",
				children: "Processing your order…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Please don't refresh this page."
			})
		] })
	});
	if (state === "error") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid min-h-[60vh] max-w-md place-items-center px-4 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto h-14 w-14 rounded-full bg-destructive/20 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-2xl text-destructive",
					children: "!"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-serif text-3xl",
				children: "Order Failed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground",
				children: errorMsg
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setState("form"),
				className: "mt-8 rounded-full bg-gold px-8 py-3 text-sm text-gold-foreground",
				children: "Try Again"
			})
		] })
	});
	if (state === "success") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid min-h-[60vh] max-w-md place-items-center px-4 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto h-14 w-14 text-gold" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-serif text-4xl",
				children: "Order Placed! 👑"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground",
				children: "Your royal fragrance order has been confirmed. A confirmation has been sent to your email."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				className: "mt-8 inline-block rounded-full bg-gold px-8 py-3 text-sm text-gold-foreground",
				children: "Continue Shopping"
			})
		] })
	});
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-md px-4 py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "mx-auto h-12 w-12 text-gold/50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-serif text-3xl",
				children: "Your cart is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				className: "mt-6 inline-block rounded-full bg-gold px-6 py-3 text-sm text-gold-foreground",
				children: "Shop Fragrances"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 pt-32 pb-16 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-4xl text-primary",
				children: "Checkout"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Guest checkout — your details are saved for next time."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: placeOrder,
				className: "mt-10 grid gap-10 lg:grid-cols-[1fr_400px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl text-primary",
							children: "Contact & Shipping"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-3 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Full name",
									value: customerDetails.name,
									onChange: (v) => setCustomerDetails({
										...customerDetails,
										name: v
									}),
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									type: "email",
									value: customerDetails.email,
									onChange: (v) => setCustomerDetails({
										...customerDetails,
										email: v
									}),
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									type: "tel",
									value: customerDetails.phone,
									onChange: (v) => setCustomerDetails({
										...customerDetails,
										phone: v
									}),
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Pincode",
									value: customerDetails.pincode,
									onChange: (v) => setCustomerDetails({
										...customerDetails,
										pincode: v
									}),
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Address",
									value: customerDetails.address,
									onChange: (v) => setCustomerDetails({
										...customerDetails,
										address: v
									}),
									required: true,
									className: "sm:col-span-2"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "City",
									value: customerDetails.city,
									onChange: (v) => setCustomerDetails({
										...customerDetails,
										city: v
									}),
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "State",
									value: customerDetails.state,
									onChange: (v) => setCustomerDetails({
										...customerDetails,
										state: v
									}),
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Country",
									value: "India",
									disabled: true
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-2xl text-primary",
								children: "Payment"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentOption, {
									selected: payment === "razorpay",
									onSelect: () => setPayment("razorpay"),
									title: "Razorpay",
									desc: "Cards · UPI · Net Banking · Wallets"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentOption, {
									selected: payment === "cod",
									onSelect: () => setPayment("cod"),
									title: "Cash on Delivery",
									desc: codPercentage > 0 ? `Pay ${codPercentage}% (${formatPrice(codOnlineAmount)}) online & ${formatPrice(codCashAmount)} on delivery` : "Pay when your order arrives"
								})]
							}),
							payment === "cod" && codPercentage > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-start gap-2 rounded-lg bg-gold/5 border border-gold/20 p-3 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-4 w-4 text-gold shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"As per store policy, ",
									codPercentage,
									"% of the order amount (",
									formatPrice(codOnlineAmount),
									") will be charged online via Razorpay. The remaining ",
									formatPrice(codCashAmount),
									" will be collected at delivery."
								] })]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "w-full rounded-full bg-gold py-4 font-medium text-gold-foreground hover:opacity-90 lg:hidden",
							children: ["Place Order · ", formatPrice(total)]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "h-fit rounded-2xl bg-card border border-border/40 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-xl text-primary",
							children: "Order Summary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3 border-b border-border/60 pb-4",
							children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: i.product.images?.[0] || "",
										alt: "",
										className: "h-14 w-12 rounded object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "line-clamp-1",
											children: i.product.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-muted-foreground",
											children: [
												i.size,
												" × ",
												i.quantity
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm",
										children: formatPrice(i.price * i.quantity)
									})
								]
							}, i.productId + i.size))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-4 space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Subtotal",
									value: formatPrice(subtotal)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Shipping",
									value: shipping === 0 ? "Free" : formatPrice(shipping)
								}),
								payment === "cod" && codPercentage > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: `Online (${codPercentage}%)`,
									value: formatPrice(codOnlineAmount)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Pay on Delivery",
									value: formatPrice(codCashAmount)
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex justify-between border-t border-border/60 pt-3 text-base",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-gold",
										children: formatPrice(total)
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "mt-6 hidden w-full rounded-full bg-gold py-3.5 text-sm font-medium text-gold-foreground hover:opacity-90 lg:block",
							children: ["Place Order · ", formatPrice(total)]
						})
					]
				})]
			})
		]
	});
}
function Field({ label, value, onChange, className = "", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `block ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			...props,
			value,
			onChange: (e) => onChange?.(e.target.value),
			className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold"
		})]
	});
}
function PaymentOption({ selected, onSelect, title, desc }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onSelect,
		className: `flex w-full items-center gap-3 rounded-xl border-2 p-4 text-left transition ${selected ? "border-gold bg-gold/5" : "border-border"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `grid h-5 w-5 place-items-center rounded-full border-2 ${selected ? "border-gold" : "border-border"}`,
			children: selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-gold" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-medium text-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs text-muted-foreground",
			children: desc
		})] })]
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-foreground",
			children: value
		})]
	});
}
//#endregion
export { Checkout as component };
