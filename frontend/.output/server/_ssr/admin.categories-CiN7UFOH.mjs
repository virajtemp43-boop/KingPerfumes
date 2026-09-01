import { a as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { o as Trash2, r as Upload, t as X, v as Plus, x as Pen } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useStore, t as API_BASE_URL } from "./StoreContext-D7RYJJhR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.categories-CiN7UFOH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminCategories() {
	const { categories, addCategory, updateCategory, deleteCategory, refreshCategories } = useStore();
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [creating, setCreating] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		refreshCategories();
	}, []);
	const categoryPlaceholders = {
		"Eau de Parfum": {
			img: "/images/cat-edp.jpg",
			desc: "Intense, long-lasting luxury"
		},
		"Eau de Toilette": {
			img: "/images/cat-edt.jpg",
			desc: "Fresh, everyday elegance"
		},
		"Attars & Oils": {
			img: "/images/cat-attar.jpg",
			desc: "Pure, concentrated tradition"
		},
		"Eau de Cologne": {
			img: "/images/cat-cologne.jpg",
			desc: "Light, refreshing classics"
		},
		"Attar": {
			img: "/images/cat-attar.jpg",
			desc: "Explore our Attar Collection"
		}
	};
	const handleDelete = async (c) => {
		if (c.id.startsWith("prod-")) {
			toast.error("This is an existing product category. Remove it from the 'categories' table first, or change it on individual products.");
			return;
		}
		if (confirm(`Delete category "${c.name}"?`)) {
			await deleteCategory(c.id);
			toast.success("Category deleted");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-3xl text-primary",
				children: "Categories"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: [categories.length, " categories"]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setCreating(true),
				className: "inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-gold-foreground hover:opacity-90",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add Category"]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: [categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card border border-border/40 overflow-hidden group",
				children: [c.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-video overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: c.image,
						alt: c.name,
						className: "h-full w-full object-cover group-hover:scale-105 transition-transform"
					})
				}) : categoryPlaceholders[c.name] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "aspect-video overflow-hidden relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: categoryPlaceholders[c.name].img,
						alt: c.name,
						className: "h-full w-full object-cover group-hover:scale-105 transition-transform"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 bg-gradient-to-t from-background/40 to-transparent flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-wider text-gold bg-background/60 px-2 py-1 rounded-full",
							children: "Default image"
						})
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-video bg-secondary/60 flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: "No image"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-lg text-primary",
							children: c.name
						}),
						c.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground line-clamp-2",
							children: c.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setEditing(c),
								className: "flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs hover:text-gold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "h-3 w-3" }), " Edit"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => handleDelete(c),
								className: "flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs hover:text-destructive",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3 w-3" }), " Delete"]
							})]
						})
					]
				})]
			}, c.id)), categories.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "col-span-full rounded-2xl bg-card border border-border/40 p-12 text-center text-muted-foreground",
				children: "No categories yet. Create your first category."
			})]
		}),
		(creating || editing) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryForm, {
			initial: editing ?? {
				id: "",
				name: "",
				slug: "",
				image: "",
				description: ""
			},
			isVirtual: editing?.id.startsWith("prod-") ?? false,
			onClose: () => {
				setEditing(null);
				setCreating(false);
			},
			onSubmit: async (data) => {
				if (editing) if (editing.id.startsWith("prod-")) {
					await addCategory(data);
					toast.success("Category created in database");
				} else {
					await updateCategory(editing.id, data);
					toast.success("Category updated");
				}
				else {
					await addCategory(data);
					toast.success("Category created");
				}
				setEditing(null);
				setCreating(false);
			}
		})
	] });
}
function CategoryForm({ initial, isVirtual, onClose, onSubmit }) {
	const [name, setName] = (0, import_react.useState)(initial.name);
	const [image, setImage] = (0, import_react.useState)(initial.image || "");
	const [description, setDescription] = (0, import_react.useState)(initial.description || "");
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const fileInputRef = (0, import_react.useRef)(null);
	const handleImageUpload = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		setUploading(true);
		const formData = new FormData();
		formData.append("image", file);
		try {
			const data = await (await fetch(`${API_BASE_URL}/upload`, {
				method: "POST",
				body: formData
			})).json();
			if (data.url) setImage(data.url);
		} catch {
			toast.error("Upload failed");
		}
		setUploading(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-black/60",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute right-0 top-0 h-full w-full max-w-lg overflow-y-auto bg-background p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl text-primary",
					children: initial.id ? "Edit Category" : "New Category"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					onSubmit({
						name,
						image,
						description
					});
				},
				className: "mt-8 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: "Name *"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							value: name,
							onChange: (e) => setName(e.target.value),
							className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: "Description"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 3,
							value: description,
							onChange: (e) => setDescription(e.target.value),
							className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-wider text-muted-foreground",
						children: "Image"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center gap-3",
						children: [
							image && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-20 w-20 rounded-lg overflow-hidden border border-border/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: image,
									alt: "",
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setImage(""),
									className: "absolute top-0.5 right-0.5 bg-black/60 rounded-full p-0.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3 text-white" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => fileInputRef.current?.click(),
								disabled: uploading,
								className: "h-20 w-20 rounded-lg border-2 border-dashed border-border/60 flex items-center justify-center hover:border-gold/50",
								children: uploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs",
									children: "Uploading..."
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-5 w-5 text-muted-foreground" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: fileInputRef,
								type: "file",
								accept: "image/*",
								onChange: handleImageUpload,
								className: "hidden"
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: "Or enter image URL"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: image,
							onChange: (e) => setImage(e.target.value),
							className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold"
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
							children: initial.id ? "Save Changes" : "Create Category"
						})]
					})
				]
			})]
		})]
	});
}
//#endregion
export { AdminCategories as component };
