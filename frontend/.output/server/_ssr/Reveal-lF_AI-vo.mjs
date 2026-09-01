import { a as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-lF_AI-vo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
gsapWithCSS.registerPlugin(ScrollTrigger);
function Reveal({ children, className, variant = "fadeUp", delay = 0, duration = .8, staggerChildren = .1, triggerOnce = true }) {
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = containerRef.current;
		if (!el) return;
		let ctx = gsapWithCSS.context(() => {
			let fromVars = { opacity: 0 };
			let toVars = {
				opacity: 1,
				duration,
				delay,
				ease: "power3.out",
				scrollTrigger: {
					trigger: el,
					start: "top 85%",
					once: triggerOnce
				}
			};
			switch (variant) {
				case "fadeUp":
					fromVars.y = 50;
					toVars.y = 0;
					break;
				case "fadeLeft":
					fromVars.x = -50;
					toVars.x = 0;
					break;
				case "fadeRight":
					fromVars.x = 50;
					toVars.x = 0;
					break;
				case "scale":
					fromVars.scale = .8;
					toVars.scale = 1;
					break;
				case "zoom":
					fromVars.scale = 1.2;
					toVars.scale = 1;
					break;
				case "rotate":
					fromVars.rotation = 10;
					fromVars.y = 30;
					toVars.rotation = 0;
					toVars.y = 0;
					break;
				case "stagger":
					fromVars.y = 30;
					toVars.y = 0;
					gsapWithCSS.fromTo(el.children, fromVars, {
						...toVars,
						stagger: staggerChildren
					});
					return;
			}
			gsapWithCSS.fromTo(el, fromVars, toVars);
		}, containerRef);
		return () => ctx.revert();
	}, [
		variant,
		delay,
		duration,
		staggerChildren,
		triggerOnce
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		className: cn("will-change-transform", className),
		children
	});
}
//#endregion
export { Reveal as t };
