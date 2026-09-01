import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._id-CFfdNG6P.js
var $$splitComponentImporter = () => import("./product._id-DWmy0PGz.mjs");
var Route = createFileRoute("/product/$id")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async ({ params, context }) => {
		try {
			const res = await fetch(`http://localhost:3001/api/products/${params.id}`);
			if (res.ok) return { product: await res.json() };
		} catch (e) {
			console.error("Failed to fetch product:", e);
		}
		return { product: null };
	}
});
//#endregion
export { Route as t };
