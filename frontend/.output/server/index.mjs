globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-17T16:48:18.327Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/admin-DIOT3p3q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"167d-RTcGeglEZDQolFzuTN8+JWYrUt8\"",
		"mtime": "2026-08-16T16:30:50.707Z",
		"size": 5757,
		"path": "../public/assets/admin-DIOT3p3q.js"
	},
	"/assets/about-DvLdUvd5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1756-uxJmoTZgFZhqmcu6liufaHUMXQE\"",
		"mtime": "2026-08-16T16:30:50.706Z",
		"size": 5974,
		"path": "../public/assets/about-DvLdUvd5.js"
	},
	"/assets/admin.index-DwgbfkVn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ca4-1ZO8XXOpY1rEBuiJvX9erueIsYs\"",
		"mtime": "2026-08-16T16:30:50.709Z",
		"size": 3236,
		"path": "../public/assets/admin.index-DwgbfkVn.js"
	},
	"/assets/admin.categories-CKDcZ101.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ddd-GsmKplOjY29Cj5bqGlGf+6d0MDg\"",
		"mtime": "2026-08-16T16:30:50.708Z",
		"size": 7645,
		"path": "../public/assets/admin.categories-CKDcZ101.js"
	},
	"/assets/admin.orders-Beo10t8c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c42-xZb6H3t4xvZA5AKwOYgP0PibHc4\"",
		"mtime": "2026-08-16T16:30:50.711Z",
		"size": 7234,
		"path": "../public/assets/admin.orders-Beo10t8c.js"
	},
	"/assets/admin.messages-BIpNcEYs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c28-rq1C97wyOaJLK51wjNN51PdfJI8\"",
		"mtime": "2026-08-16T16:30:50.711Z",
		"size": 3112,
		"path": "../public/assets/admin.messages-BIpNcEYs.js"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"1250-71wo5RzUYw7TfkEgQI25O54gMU0\"",
		"mtime": "2026-07-18T08:43:16.635Z",
		"size": 4688,
		"path": "../public/favicon.png"
	},
	"/assets/admin.products-CoYUMHBL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3873-aHOGEKH8jnc5fveMx6zEqDHGvws\"",
		"mtime": "2026-08-16T16:30:50.712Z",
		"size": 14451,
		"path": "../public/assets/admin.products-CoYUMHBL.js"
	},
	"/assets/admin.settings-BfXqBaxr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d8-/gwnqvc2WjRjN6ktmZvMDfi8UfM\"",
		"mtime": "2026-08-16T16:30:50.715Z",
		"size": 2520,
		"path": "../public/assets/admin.settings-BfXqBaxr.js"
	},
	"/assets/checkout-66yoLUlM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2bf3-VldHif4YH4xDzohFo43CP5CQwhE\"",
		"mtime": "2026-08-16T16:30:50.719Z",
		"size": 11251,
		"path": "../public/assets/checkout-66yoLUlM.js"
	},
	"/assets/chevron-up-BDsmeUIH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-sSA6WSJfyXG5urSlk71hb8DMIFk\"",
		"mtime": "2026-08-16T16:30:50.722Z",
		"size": 203,
		"path": "../public/assets/chevron-up-BDsmeUIH.js"
	},
	"/assets/arrow-right-BontFere.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-mh/xAKd2YrjHzi4pGQjzUd+/FYE\"",
		"mtime": "2026-08-16T16:30:50.716Z",
		"size": 165,
		"path": "../public/assets/arrow-right-BontFere.js"
	},
	"/assets/contact-Uen-BAfA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cac-rUECn2s9FdgLM2q2AuLUSn2cwyI\"",
		"mtime": "2026-08-16T16:30:50.723Z",
		"size": 3244,
		"path": "../public/assets/contact-Uen-BAfA.js"
	},
	"/assets/compare-DOLSWjvb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b9b-M3Y85prHp9/UB+YD/+7/1VcbgRU\"",
		"mtime": "2026-08-16T16:30:50.723Z",
		"size": 2971,
		"path": "../public/assets/compare-DOLSWjvb.js"
	},
	"/assets/eye-DLWndIOc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"100-TYSJBZkIG9rrfBRYh8LpmYRyTWo\"",
		"mtime": "2026-08-16T16:30:50.726Z",
		"size": 256,
		"path": "../public/assets/eye-DLWndIOc.js"
	},
	"/assets/createLucideIcon-BlXDHVeD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21d8-usE81Ndp/khFoD69lxKAwCwTtaA\"",
		"mtime": "2026-08-16T16:30:50.725Z",
		"size": 8664,
		"path": "../public/assets/createLucideIcon-BlXDHVeD.js"
	},
	"/assets/blog-CnZCvBw0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11c9-9WXzBA72E4WvltaO2CT+oBWwMpE\"",
		"mtime": "2026-08-16T16:30:50.719Z",
		"size": 4553,
		"path": "../public/assets/blog-CnZCvBw0.js"
	},
	"/assets/jsx-runtime-CZcjcDnw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e3-jCOgwIq6oGNLw0tt5XnD3UYp7FI\"",
		"mtime": "2026-08-16T16:30:50.727Z",
		"size": 1251,
		"path": "../public/assets/jsx-runtime-CZcjcDnw.js"
	},
	"/assets/privacy-BHV7b0Lu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d9-8Jlv/5aCghQlgDv7UzZ2BzfpuIM\"",
		"mtime": "2026-08-16T16:30:50.731Z",
		"size": 2265,
		"path": "../public/assets/privacy-BHV7b0Lu.js"
	},
	"/assets/loader-circle-DPrTaTum.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90-r88UEzT4147ON+PO2ltEHTdJVUs\"",
		"mtime": "2026-08-16T16:30:50.731Z",
		"size": 144,
		"path": "../public/assets/loader-circle-DPrTaTum.js"
	},
	"/assets/link-DfEp884o.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b78-UL7dqmFkZjauyyxWP2477KWSwAY\"",
		"mtime": "2026-08-16T16:30:50.729Z",
		"size": 23416,
		"path": "../public/assets/link-DfEp884o.js"
	},
	"/hero-perfume.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/hero-perfume.jpg"
	},
	"/logo.png": {
		"type": "image/png",
		"etag": "\"fe6f1-sHvPrpp6HjEDBp2BvbuSpONWByE\"",
		"mtime": "2026-08-12T16:24:46.792Z",
		"size": 1042161,
		"path": "../public/logo.png"
	},
	"/assets/index-Cb83jZJz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a771b-e7D39RlDM8PB5G2hINeyrHqxSIs\"",
		"mtime": "2026-08-16T16:30:50.688Z",
		"size": 685851,
		"path": "../public/assets/index-Cb83jZJz.js"
	},
	"/assets/ProductCard-CbVDZSh-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16fb-LDy27FUOIWaj1FZi5REkYNgeeuA\"",
		"mtime": "2026-08-16T16:30:50.688Z",
		"size": 5883,
		"path": "../public/assets/ProductCard-CbVDZSh-.js"
	},
	"/assets/product._id-CGdLhURM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"636e-OmhT3zI+kluINY2xRF6hRzjO4lo\"",
		"mtime": "2026-08-16T16:30:50.733Z",
		"size": 25454,
		"path": "../public/assets/product._id-CGdLhURM.js"
	},
	"/assets/react-dom-CY2h9Cr7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e06-bf0w76TssPjariTEK2gGj49DVkY\"",
		"mtime": "2026-08-16T16:30:50.733Z",
		"size": 3590,
		"path": "../public/assets/react-dom-CY2h9Cr7.js"
	},
	"/assets/returns-Yd8ccN72.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"91c-gscD1ApD2I1j3laxd4b/21uifjw\"",
		"mtime": "2026-08-16T16:30:50.734Z",
		"size": 2332,
		"path": "../public/assets/returns-Yd8ccN72.js"
	},
	"/assets/shipping-DY0w99Yo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a2-+F1tYopZiAnkLLBcOBFtmB13Y4s\"",
		"mtime": "2026-08-16T16:30:50.736Z",
		"size": 2210,
		"path": "../public/assets/shipping-DY0w99Yo.js"
	},
	"/assets/shop-Dq8R_qH3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14d5-CazPdSWjnnODTdOaboC28RpyWjQ\"",
		"mtime": "2026-08-16T16:30:50.738Z",
		"size": 5333,
		"path": "../public/assets/shop-Dq8R_qH3.js"
	},
	"/assets/routes-Bn5TJVV8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45a0-BncT2DX+MBsvpXgU8aHX4xUv6LA\"",
		"mtime": "2026-08-16T16:30:50.735Z",
		"size": 17824,
		"path": "../public/assets/routes-Bn5TJVV8.js"
	},
	"/assets/shopping-cart-CHlnfHje.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"263-WEwu/OV+T0VGDRgpPBcz8mJsFf8\"",
		"mtime": "2026-08-16T16:30:50.740Z",
		"size": 611,
		"path": "../public/assets/shopping-cart-CHlnfHje.js"
	},
	"/assets/star-GrE2FK0R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d8-RvWDXdJPeB2Xy5NgfHo1CAjt/yE\"",
		"mtime": "2026-08-16T16:30:50.740Z",
		"size": 472,
		"path": "../public/assets/star-GrE2FK0R.js"
	},
	"/assets/terms-BBJAlYyk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"849-GNe7spWvywo/V9CImQVXk714ZSM\"",
		"mtime": "2026-08-16T16:30:50.741Z",
		"size": 2121,
		"path": "../public/assets/terms-BBJAlYyk.js"
	},
	"/assets/trash-2-DbtnAXmI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"148-bUQDzbgOMD2sMd8EzN+eYLPIhJw\"",
		"mtime": "2026-08-16T16:30:50.742Z",
		"size": 328,
		"path": "../public/assets/trash-2-DbtnAXmI.js"
	},
	"/assets/truck-CRySWSgG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a1-2nBF7DM5/7DTz31JVTzZVX2B62g\"",
		"mtime": "2026-08-16T16:30:50.743Z",
		"size": 673,
		"path": "../public/assets/truck-CRySWSgG.js"
	},
	"/assets/upload-D14yeDgK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19c-Ag9GzQlJ4rdvoud7c+T5V2QZDqU\"",
		"mtime": "2026-08-16T16:30:50.744Z",
		"size": 412,
		"path": "../public/assets/upload-D14yeDgK.js"
	},
	"/assets/wishlist-LdCjVf_L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"435-UWArYNmwpdnQ2xClSH2aDsLXRyg\"",
		"mtime": "2026-08-16T16:30:50.745Z",
		"size": 1077,
		"path": "../public/assets/wishlist-LdCjVf_L.js"
	},
	"/assets/styles-CAmaRN5K.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1d971-0w3vXkeWh62nAzz4s8nAdAA5Lns\"",
		"mtime": "2026-08-16T16:30:50.746Z",
		"size": 121201,
		"path": "../public/assets/styles-CAmaRN5K.css"
	},
	"/images/about-hero.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/about-hero.jpg"
	},
	"/images/bergamot-left.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/bergamot-left.jpg"
	},
	"/images/about-founder.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/about-founder.jpg"
	},
	"/images/bergamot-right.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/bergamot-right.jpg"
	},
	"/images/blog-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/blog-1.jpg"
	},
	"/images/blog-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/blog-2.jpg"
	},
	"/images/blog-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/blog-3.jpg"
	},
	"/images/blog-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/blog-4.jpg"
	},
	"/images/blog-5.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/blog-5.jpg"
	},
	"/images/blog-6.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/blog-6.jpg"
	},
	"/images/cat-attar.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/cat-attar.jpg"
	},
	"/images/cat-attars-&-oils.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/cat-attars-&-oils.jpg"
	},
	"/images/cat-eau-de-toilette.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/cat-eau-de-toilette.jpg"
	},
	"/images/cat-cologne.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/cat-cologne.jpg"
	},
	"/images/cat-eau-de-parfum.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/cat-eau-de-parfum.jpg"
	},
	"/images/oil-bubbles.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/oil-bubbles.jpg"
	},
	"/images/cat-edp.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/cat-edp.jpg"
	},
	"/images/cat-edt.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/cat-edt.jpg"
	},
	"/images/oud-left.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/oud-left.jpg"
	},
	"/images/oud-right.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/oud-right.jpg"
	},
	"/images/perfume-story.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/perfume-story.jpg"
	},
	"/images/product-default.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/product-default.jpg"
	},
	"/images/rose-right.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/rose-right.jpg"
	},
	"/images/rose-left.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/rose-left.jpg"
	},
	"/images/sandal-left.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/sandal-left.jpg"
	},
	"/images/sandal-right.jpg": {
		"type": "image/jpeg",
		"etag": "\"97c4f-rIXofUk3O8P3/Z1axHxCDGoaVic\"",
		"mtime": "2026-07-21T16:33:52.788Z",
		"size": 621647,
		"path": "../public/images/sandal-right.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region ../node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_ICVWBo = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_ICVWBo
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region ../node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region ../node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region ../node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region ../node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
