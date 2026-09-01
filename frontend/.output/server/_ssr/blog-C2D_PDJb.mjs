import { i as motion } from "../_libs/framer-motion.mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Reveal } from "./Reveal-lF_AI-vo.mjs";
import { K as BookOpen, Y as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-C2D_PDJb.js
var import_jsx_runtime = require_jsx_runtime();
var IMG = (s) => `/images/${s.replace("perfume-", "")}.jpg`;
var posts = [
	{
		title: "The Quiet Ritual of Applying Perfume",
		excerpt: "How five minutes with the right fragrance can set your intentions and change your entire day.",
		tag: "Rituals",
		date: "Oct 12, 2026",
		img: IMG("perfume-blog-1")
	},
	{
		title: "Why Oud belongs in your winter collection",
		excerpt: "The science and history behind perfumery's most expensive and loved woody note, explained.",
		tag: "Ingredients",
		date: "Oct 05, 2026",
		img: IMG("perfume-blog-2")
	},
	{
		title: "Meet the artisans behind our Damask Rose",
		excerpt: "A visual journey to the blooming valleys where our signature rose absolute is harvested at dawn.",
		tag: "Sourcing",
		date: "Sep 28, 2026",
		img: IMG("perfume-blog-3")
	},
	{
		title: "Layering Scents: The Ultimate Guide",
		excerpt: "Learn how to masterfully combine different perfumes to create a bespoke scent uniquely yours.",
		tag: "Guides",
		date: "Sep 15, 2026",
		img: IMG("perfume-blog-4")
	},
	{
		title: "The Truth About Niche Perfumery",
		excerpt: "What separates designer fragrances from niche houses, and why the distinction matters.",
		tag: "Essays",
		date: "Sep 02, 2026",
		img: IMG("perfume-blog-5")
	},
	{
		title: "Sustainable Luxury: Our Glass Initiative",
		excerpt: "The multi-year design process behind our new heavy-weight, completely recyclable glass bottles.",
		tag: "Sustainability",
		date: "Aug 20, 2026",
		img: IMG("perfume-blog-6")
	}
];
function Blog() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background min-h-screen pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pt-32 pb-16 bg-card border-b border-border/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-4xl px-6 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "fadeUp",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-8 h-8 text-gold mx-auto mb-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.3em] text-gold font-medium",
							children: "The Journal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-serif text-5xl md:text-7xl text-primary",
							children: "Scent Stories"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-muted-foreground text-lg max-w-2xl mx-auto font-light",
							children: "Dive into the world of luxury perfumery. Read about our ingredient sourcing, styling guides, and the art of fragrance layering."
						})
					]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1320px] px-6 mt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-10 md:grid-cols-2 lg:grid-cols-3",
				children: posts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .1,
					variant: "fadeUp",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						whileHover: { y: -8 },
						transition: {
							type: "spring",
							stiffness: 300,
							damping: 20
						},
						className: "group relative flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border/40 shadow-sm hover:shadow-xl hover:shadow-gold/5 transition-all duration-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden aspect-[4/3] relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.img,
								alt: p.title,
								className: "w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-4 left-4 bg-background/90 backdrop-blur text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm",
								children: p.tag
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col flex-1 p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground mb-3",
									children: p.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-2xl leading-tight text-primary group-hover:text-gold transition-colors line-clamp-2 mb-3",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground font-light leading-relaxed flex-1 line-clamp-3",
									children: p.excerpt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 pt-6 border-t border-border/50 flex items-center text-sm font-medium text-primary group-hover:text-gold transition-colors",
									children: ["Read Story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" })]
								})
							]
						})]
					})
				}, p.title))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				variant: "fadeUp",
				delay: .4,
				className: "mt-20 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "inline-flex items-center justify-center rounded-full border border-gold/30 bg-transparent px-8 py-3.5 text-sm font-medium text-primary transition-all hover:bg-gold hover:text-white hover:border-gold shadow-sm",
					children: "Load More Stories"
				})
			})]
		})]
	});
}
//#endregion
export { Blog as component };
