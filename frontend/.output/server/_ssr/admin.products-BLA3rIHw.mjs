import { a as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { o as Trash2, r as Upload, t as X, v as Plus, x as Pen } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useStore, r as formatPrice, t as API_BASE_URL } from "./StoreContext-D7RYJJhR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.products-BLA3rIHw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var empty = {
	name: "",
	slug: "",
	category: "",
	price: 0,
	originalPrice: void 0,
	description: "",
	notes: "",
	topNotes: "",
	middleNotes: "",
	baseNotes: "",
	howToUse: "",
	images: [""],
	sizes: [{
		size: "50ml",
		price: 0
	}],
	gender: "Unisex",
	stock: 0,
	badge: void 0,
	status: "active",
	rating: 4.5,
	reviewCount: 0
};
function AdminProducts() {
	const { products, addProduct, updateProduct, deleteProduct, categories, refreshCategories } = useStore();
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [creating, setCreating] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		refreshCategories();
	}, []);
	const allCategories = (0, import_react.useMemo)(() => {
		const catNames = new Set(categories.map((c) => c.name));
		products.forEach((p) => {
			if (p.category && !catNames.has(p.category)) catNames.add(p.category);
		});
		return Array.from(catNames).sort();
	}, [categories, products]);
	const handleDelete = async (p) => {
		if (confirm(`Delete "${p.name}"?`)) {
			await deleteProduct(p.id);
			toast.success("Deleted");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-3xl text-primary",
				children: "Products"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: [products.length, " fragrances in catalog"]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setCreating(true),
				className: "inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-gold-foreground hover:opacity-90",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add Product"]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 overflow-hidden rounded-2xl bg-card border border-border/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[720px] text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "p-4 text-left",
							children: "Product"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "p-4 text-left",
							children: "Category"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "p-4 text-left",
							children: "Price"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "p-4 text-left",
							children: "Stock"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "p-4 text-left",
							children: "Status"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "p-4" })
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: products.map((p) => {
					const displayPrice = getLowestPrice(p);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.images?.[0] || "",
										alt: "",
										className: "h-12 w-12 rounded object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "truncate font-medium text-foreground",
											children: p.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-muted-foreground",
											children: [
												p.slug,
												" · ",
												p.gender
											]
										})]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-4 text-foreground",
								children: p.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-4 text-gold",
								children: formatPrice(displayPrice)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-4",
								children: p.stock
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `rounded-full px-2 py-0.5 text-xs ${p.status === "active" ? "bg-gold/15 text-gold" : "bg-muted text-muted-foreground"}`,
									children: p.status
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-end gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setEditing(p),
										className: "p-2 hover:text-gold",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleDelete(p),
										className: "p-2 hover:text-destructive",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
									})]
								})
							})
						]
					}, p.id);
				}) })]
			})
		}),
		(creating || editing) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductForm, {
			initial: editing ? convertProductToForm(editing) : empty,
			categories: allCategories,
			onClose: () => {
				setEditing(null);
				setCreating(false);
			},
			onSubmit: async (data) => {
				const prices = data.sizes.map((s) => s.price).filter((p) => p > 0);
				const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
				const productData = {
					...data,
					price: minPrice,
					sizes: data.sizes,
					rating: data.rating ?? 4.5,
					reviewCount: data.reviewCount ?? 0
				};
				if (editing) {
					await updateProduct(editing.id, productData);
					toast.success("Product updated");
				} else {
					await addProduct(productData);
					toast.success("Product added");
				}
				setEditing(null);
				setCreating(false);
			}
		})
	] });
}
function getLowestPrice(p) {
	const raw = p.sizes || [];
	if (Array.isArray(raw) && raw.length > 0 && typeof raw[0] === "object") {
		const prices = raw.map((s) => Number(s.price)).filter((p) => p > 0);
		if (prices.length > 0) return Math.min(...prices);
	}
	return Number(p.price) || 0;
}
function convertProductToForm(p) {
	const sizes = [];
	const rawSizes = p.sizes || ["50ml"];
	if (Array.isArray(rawSizes) && rawSizes.length > 0) {
		if (typeof rawSizes[0] === "object") return {
			...p,
			sizes: rawSizes,
			originalPrice: void 0,
			rating: p.rating,
			reviewCount: p.reviewCount
		};
		for (const s of rawSizes) sizes.push({
			size: s,
			price: s === "50ml" ? Number(p.price) : Math.round(Number(p.price) * 1.5)
		});
	}
	return {
		...p,
		sizes: sizes.length > 0 ? sizes : [{
			size: "50ml",
			price: Number(p.price) || 0
		}],
		originalPrice: void 0,
		rating: p.rating,
		reviewCount: p.reviewCount
	};
}
function ProductForm({ initial, categories, onClose, onSubmit }) {
	const [form, setForm] = (0, import_react.useState)(initial);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const fileInputRef = (0, import_react.useRef)(null);
	const update = (k, v) => setForm((f) => ({
		...f,
		[k]: v
	}));
	const handleImageUpload = async (e) => {
		const files = e.target.files;
		if (!files || files.length === 0) return;
		setUploading(true);
		const formData = new FormData();
		for (let i = 0; i < files.length; i++) formData.append("images", files[i]);
		try {
			const data = await (await fetch(`${API_BASE_URL}/upload/multiple`, {
				method: "POST",
				body: formData
			})).json();
			if (data.urls) {
				const currentImages = form.images.filter((img) => img !== "");
				update("images", [...currentImages, ...data.urls]);
				toast.success(`${data.urls.length} image(s) uploaded`);
			}
		} catch (err) {
			toast.error("Upload failed");
		}
		setUploading(false);
		if (fileInputRef.current) fileInputRef.current.value = "";
	};
	const addSizeOption = () => {
		update("sizes", [...form.sizes, {
			size: "",
			price: 0
		}]);
	};
	const updateSizeOption = (index, field, value) => {
		const newSizes = [...form.sizes];
		newSizes[index][field] = value;
		update("sizes", newSizes);
	};
	const removeSizeOption = (index) => {
		update("sizes", form.sizes.filter((_, i) => i !== index));
	};
	const addNoteImage = () => update("noteImages", [...form.noteImages || [], {
		name: "",
		url: ""
	}]);
	const updateNoteImage = (i, field, val) => {
		const list = [...form.noteImages || []];
		list[i][field] = val;
		update("noteImages", list);
	};
	const removeNoteImage = (i) => update("noteImages", (form.noteImages || []).filter((_, idx) => idx !== i));
	const lowestPrice = (0, import_react.useMemo)(() => {
		const prices = form.sizes.map((s) => s.price).filter((p) => p > 0);
		return prices.length > 0 ? Math.min(...prices) : 0;
	}, [form.sizes]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-black/60",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute right-0 top-0 h-full w-full max-w-2xl overflow-y-auto bg-background p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl text-primary",
					children: initial.name ? "Edit fragrance" : "New fragrance"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					onSubmit(form);
				},
				className: "mt-8 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Name",
						value: form.name,
						onChange: (v) => {
							update("name", v);
							if (!initial.name) update("slug", v.toLowerCase().replace(/\s+/g, "-"));
						},
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Slug",
						value: form.slug,
						onChange: (v) => update("slug", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: "Category"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: form.category,
							onChange: (e) => update("category", e.target.value),
							required: true,
							className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select a category"
							}), categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: cat,
								children: cat
							}, cat))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Stock",
							type: "number",
							value: String(form.stock),
							onChange: (v) => update("stock", +v)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: "Gender"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: form.gender,
								onChange: (e) => update("gender", e.target.value),
								className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Unisex" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Men" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Women" })
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: "Sizes & Prices"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: addSizeOption,
								className: "text-xs text-gold hover:underline",
								children: "+ Add Size"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[10px] text-muted-foreground mb-2",
							children: lowestPrice > 0 ? `Display price on cards: ${formatPrice(lowestPrice)} (lowest size)` : "Add at least one size with a price"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 space-y-2",
							children: form.sizes.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2 items-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: "e.g. 50ml",
										value: s.size,
										onChange: (e) => updateSizeOption(i, "size", e.target.value),
										className: "flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-gold"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										placeholder: "Price",
										value: s.price || "",
										onChange: (e) => updateSizeOption(i, "price", +e.target.value),
										className: "w-28 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-gold"
									}),
									form.sizes.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => removeSizeOption(i),
										className: "p-2 text-destructive hover:bg-destructive/10 rounded",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
									})
								]
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[10px] text-muted-foreground",
							children: "Define each size option with its own price. These will be shown on the product page."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
						label: "Description",
						value: form.description,
						onChange: (v) => update("description", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Notes (comma separated)",
						value: form.notes,
						onChange: (v) => update("notes", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: "Notes with Images"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: addNoteImage,
							className: "text-xs text-gold hover:underline",
							children: "+ Add Note"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 space-y-2",
						children: (form.noteImages || []).map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "Note Name (e.g. Cinnamon)",
									value: n.name,
									onChange: (e) => updateNoteImage(i, "name", e.target.value),
									className: "flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-gold"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "Image URL",
									value: n.url,
									onChange: (e) => updateNoteImage(i, "url", e.target.value),
									className: "flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-gold"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => removeNoteImage(i),
									className: "p-2 text-destructive hover:bg-destructive/10 rounded",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
								})
							]
						}, i))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Top Notes",
								value: form.topNotes,
								onChange: (v) => update("topNotes", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Heart Notes",
								value: form.middleNotes,
								onChange: (v) => update("middleNotes", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Base Notes",
								value: form.baseNotes,
								onChange: (v) => update("baseNotes", v)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
						label: "How to use",
						value: form.howToUse,
						onChange: (v) => update("howToUse", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: "Images"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex flex-wrap gap-3",
							children: [
								form.images.filter((img) => img).map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-20 w-20 rounded-lg overflow-hidden border border-border/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: img,
										alt: "",
										className: "h-full w-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => update("images", form.images.filter((_, j) => j !== i)),
										className: "absolute top-0.5 right-0.5 bg-black/60 rounded-full p-0.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3 text-white" })
									})]
								}, i)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => fileInputRef.current?.click(),
									disabled: uploading,
									className: "h-20 w-20 rounded-lg border-2 border-dashed border-border/60 flex items-center justify-center hover:border-gold/50 transition-all",
									children: uploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: "Uploading..."
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-5 w-5 text-muted-foreground" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: fileInputRef,
									type: "file",
									multiple: true,
									accept: "image/*",
									onChange: handleImageUpload,
									className: "hidden"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[10px] text-muted-foreground",
							children: "Click the upload button to upload images from your computer"
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Or enter image URLs (comma separated)",
						value: form.images.join(", "),
						onChange: (v) => update("images", v.split(",").map((s) => s.trim()).filter(Boolean))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: "Badge"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: form.badge ?? "",
								onChange: (e) => update("badge", e.target.value || void 0),
								className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "None"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Best Seller",
										children: "Best Seller"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "New",
										children: "New"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Featured",
										children: "Featured"
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: "Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: form.status,
								onChange: (e) => update("status", e.target.value),
								className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "active",
									children: "Active"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "draft",
									children: "Draft"
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "flex-1 rounded-full border border-border py-3 text-sm text-foreground",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "flex-1 rounded-full bg-gold py-3 text-sm font-medium text-gold-foreground hover:opacity-90",
							children: initial.name ? "Save Changes" : "Create Product"
						})]
					})
				]
			})]
		})]
	});
}
function Field({ label, value, onChange, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			required,
			value,
			onChange: (e) => onChange(e.target.value),
			className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold"
		})]
	});
}
function TextArea({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			rows: 3,
			value,
			onChange: (e) => onChange(e.target.value),
			className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold"
		})]
	});
}
//#endregion
export { AdminProducts as component };
