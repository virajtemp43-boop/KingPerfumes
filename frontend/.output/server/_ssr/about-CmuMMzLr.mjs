import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Reveal } from "./Reveal-lF_AI-vo.mjs";
import { A as Leaf, I as Globe, c as Star, l as Sparkles, n as Users, q as Award } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CmuMMzLr.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background text-foreground selection:bg-gold selection:text-white pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[75vh] w-full flex items-center justify-center overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 z-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/about-hero.jpg",
						alt: "About King Perfumes",
						className: "w-full h-full object-cover brightness-[0.7]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/20 to-background" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 text-center px-6 mt-20 md:mt-24 text-black drop-shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						variant: "fadeUp",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logo.png",
								alt: "King Perfumes",
								className: "mx-auto h-16 auto object-contain animate-float mb-6 opacity-90"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm tracking-[0.3em] uppercase text-black font-semibold",
								children: "Our Story"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 font-serif text-5xl md:text-7xl text-black",
								children: "The Royal Legacy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-lg text-black/80 max-w-2xl mx-auto font-medium leading-relaxed",
								children: "Crafting memories through the world's most exquisite and rare botanical ingredients."
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "max-w-5xl mx-auto px-6 py-24 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "fadeUp",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-4xl text-primary mb-8",
						children: "Our Philosophy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto",
						children: "King Perfumes was born from a singular passion: to democratize absolute luxury. We believe that a signature scent is more than just a fragrance—it is an invisible garment, a silent introduction, and a lasting memory. By partnering directly with masterful perfumers in Grasse, France and traditional attar makers in Kannauj, India, we bridge the gap between ancient heritage and modern elegance."
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "max-w-[1320px] mx-auto px-6 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8 md:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							icon: Award,
							title: "Master Craftsmanship",
							text: "Every bottle is meticulously blended, aged, and bottled to perfection by our artisan perfumers."
						},
						{
							icon: Leaf,
							title: "Pure Botanicals",
							text: "We source 100% natural, cruelty-free, and sustainably harvested ingredients for all our signature lines."
						},
						{
							icon: Globe,
							title: "Global Heritage",
							text: "A unique fusion of deep oriental traditions and crisp, contemporary occidental scent profiles."
						},
						{
							icon: Users,
							title: "Client First",
							text: "An unyielding commitment to luxury service, from personalized scent consultations to elegant unboxing."
						}
					].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .1,
						variant: "fadeUp",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative h-full text-center p-8 rounded-2xl bg-card border border-border/50 transition-all duration-500 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/5 hover:-translate-y-2 overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-16 h-16 text-gold" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex p-4 rounded-full bg-secondary/50 mb-6 transition-colors group-hover:bg-gold/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-8 w-8 text-gold transition-transform duration-500 group-hover:scale-110" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-2xl text-primary mb-3",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground leading-relaxed",
									children: item.text
								})
							]
						})
					}, item.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "max-w-[1320px] mx-auto px-6 py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row items-center gap-12 lg:gap-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						variant: "fadeRight",
						className: "w-full md:w-1/2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-2xl overflow-hidden aspect-[4/5] group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/about-founder.jpg",
								alt: "Master Perfumer",
								className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gold/10 mix-blend-overlay" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						variant: "fadeLeft",
						className: "w-full md:w-1/2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-8 h-8 text-gold mb-6" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-4xl text-primary mb-6",
								children: "A Letter From the Founder"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
								className: "text-lg text-muted-foreground leading-relaxed italic border-l-4 border-gold pl-6 mb-8",
								children: "\"When I started King Perfumes, I wanted to create more than just scents. I wanted to bottle emotions, memories, and the raw, untamed beauty of nature. Every fragrance we release is a piece of my soul, crafted for those who refuse to compromise on quality.\""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm uppercase tracking-widest font-medium text-primary",
								children: "— Founder & Master Nose"
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { About as component };
