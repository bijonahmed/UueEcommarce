import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4ec31e1e = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _aedb276e = () => interopDefault(import('..\\pages\\changepassword.vue' /* webpackChunkName: "pages/changepassword" */))
const _9563a6c8 = () => interopDefault(import('..\\pages\\changepassword copy.vue' /* webpackChunkName: "pages/changepassword copy" */))
const _02286b78 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _647b9719 = () => interopDefault(import('..\\pages\\customer-review.vue' /* webpackChunkName: "pages/customer-review" */))
const _4416316e = () => interopDefault(import('..\\pages\\flas-sale.vue' /* webpackChunkName: "pages/flas-sale" */))
const _3756d126 = () => interopDefault(import('..\\pages\\forget-password.vue' /* webpackChunkName: "pages/forget-password" */))
const _191451db = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _05fb1f7d = () => interopDefault(import('..\\pages\\official-store.vue' /* webpackChunkName: "pages/official-store" */))
const _049eef74 = () => interopDefault(import('..\\pages\\official-store-grid.vue' /* webpackChunkName: "pages/official-store-grid" */))
const _651f3a20 = () => interopDefault(import('..\\pages\\OfficialStoreFilter.vue' /* webpackChunkName: "pages/OfficialStoreFilter" */))
const _2da81286 = () => interopDefault(import('..\\pages\\OfficialStoreFilterGrid.vue' /* webpackChunkName: "pages/OfficialStoreFilterGrid" */))
const _8be76110 = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages/payment" */))
const _382e8f3c = () => interopDefault(import('..\\pages\\product-grid.vue' /* webpackChunkName: "pages/product-grid" */))
const _212871ba = () => interopDefault(import('..\\pages\\product-list.vue' /* webpackChunkName: "pages/product-list" */))
const _0e4414f6 = () => interopDefault(import('..\\pages\\refund.vue' /* webpackChunkName: "pages/refund" */))
const _54cb7a7d = () => interopDefault(import('..\\pages\\return-and-replacement.vue' /* webpackChunkName: "pages/return-and-replacement" */))
const _d7fa2042 = () => interopDefault(import('..\\pages\\sell-on-ecommerce.vue' /* webpackChunkName: "pages/sell-on-ecommerce" */))
const _1e491069 = () => interopDefault(import('..\\pages\\sell-on-filter.vue' /* webpackChunkName: "pages/sell-on-filter" */))
const _cdbb5e78 = () => interopDefault(import('..\\pages\\seller-form.vue' /* webpackChunkName: "pages/seller-form" */))
const _ba2816b2 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _0b094611 = () => interopDefault(import('..\\pages\\update-password.vue' /* webpackChunkName: "pages/update-password" */))
const _6f32a936 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-dashboard.vue' /* webpackChunkName: "pages/affiliate/affiliate-dashboard" */))
const _11d86920 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-programe.vue' /* webpackChunkName: "pages/affiliate/affiliate-programe" */))
const _4807c240 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-programe-register.vue' /* webpackChunkName: "pages/affiliate/affiliate-programe-register" */))
const _45ea99aa = () => interopDefault(import('..\\pages\\affiliate\\affiliate-transfer.vue' /* webpackChunkName: "pages/affiliate/affiliate-transfer" */))
const _6042b4bd = () => interopDefault(import('..\\pages\\category\\all-categorys.vue' /* webpackChunkName: "pages/category/all-categorys" */))
const _b287192e = () => interopDefault(import('..\\pages\\category\\category-grid.vue' /* webpackChunkName: "pages/category/category-grid" */))
const _3807a67e = () => interopDefault(import('..\\pages\\category\\category-list.vue' /* webpackChunkName: "pages/category/category-list" */))
const _b32bea2a = () => interopDefault(import('..\\pages\\seller\\change-password.vue' /* webpackChunkName: "pages/seller/change-password" */))
const _36b12254 = () => interopDefault(import('..\\pages\\seller\\order-details.vue' /* webpackChunkName: "pages/seller/order-details" */))
const _2756255f = () => interopDefault(import('..\\pages\\seller\\seller-account-setting.vue' /* webpackChunkName: "pages/seller/seller-account-setting" */))
const _94cb5654 = () => interopDefault(import('..\\pages\\seller\\seller-comission-history.vue' /* webpackChunkName: "pages/seller/seller-comission-history" */))
const _35a8adb5 = () => interopDefault(import('..\\pages\\seller\\seller-customer-returns.vue' /* webpackChunkName: "pages/seller/seller-customer-returns" */))
const _d31fc6fa = () => interopDefault(import('..\\pages\\seller\\seller-dashboard.vue' /* webpackChunkName: "pages/seller/seller-dashboard" */))
const _44dcf5b8 = () => interopDefault(import('..\\pages\\seller\\seller-leftsidebar.vue' /* webpackChunkName: "pages/seller/seller-leftsidebar" */))
const _5f4aab94 = () => interopDefault(import('..\\pages\\seller\\seller-message.vue' /* webpackChunkName: "pages/seller/seller-message" */))
const _78878906 = () => interopDefault(import('..\\pages\\seller\\seller-orders.vue' /* webpackChunkName: "pages/seller/seller-orders" */))
const _5530e3fc = () => interopDefault(import('..\\pages\\seller\\seller-payment-history.vue' /* webpackChunkName: "pages/seller/seller-payment-history" */))
const _70717c76 = () => interopDefault(import('..\\pages\\seller\\seller-products.vue' /* webpackChunkName: "pages/seller/seller-products" */))
const _15306358 = () => interopDefault(import('..\\pages\\seller\\seller-products-post.vue' /* webpackChunkName: "pages/seller/seller-products-post" */))
const _0efc92d8 = () => interopDefault(import('..\\pages\\seller\\seller-profile.vue' /* webpackChunkName: "pages/seller/seller-profile" */))
const _45085fcc = () => interopDefault(import('..\\pages\\seller\\seller-wallet.vue' /* webpackChunkName: "pages/seller/seller-wallet" */))
const _78a40da6 = () => interopDefault(import('..\\pages\\seller\\seller-wishlist.vue' /* webpackChunkName: "pages/seller/seller-wishlist" */))
const _5a7f1743 = () => interopDefault(import('..\\pages\\user\\my-reviews.vue' /* webpackChunkName: "pages/user/my-reviews" */))
const _e0c774ec = () => interopDefault(import('..\\pages\\user\\order-details.vue' /* webpackChunkName: "pages/user/order-details" */))
const _0754d196 = () => interopDefault(import('..\\pages\\user\\user-mlm.vue' /* webpackChunkName: "pages/user/user-mlm" */))
const _7df9fbae = () => interopDefault(import('..\\pages\\user\\user-orders.vue' /* webpackChunkName: "pages/user/user-orders" */))
const _904f15a0 = () => interopDefault(import('..\\pages\\user\\user-profile.vue' /* webpackChunkName: "pages/user/user-profile" */))
const _925a51fc = () => interopDefault(import('..\\pages\\user\\user-whichlist.vue' /* webpackChunkName: "pages/user/user-whichlist" */))
const _0d00a3ee = () => interopDefault(import('..\\pages\\seller\\products\\product-edit.vue' /* webpackChunkName: "pages/seller/products/product-edit" */))
const _744f3ace = () => interopDefault(import('..\\pages\\seller\\products\\product-preview.vue' /* webpackChunkName: "pages/seller/products/product-preview" */))
const _f212544c = () => interopDefault(import('..\\pages\\seller\\products\\product-varient.vue' /* webpackChunkName: "pages/seller/products/product-varient" */))
const _4f6caec4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _ad1c1ed8 = () => interopDefault(import('..\\pages\\user\\invite-user\\_id.vue' /* webpackChunkName: "pages/user/invite-user/_id" */))
const _21a69c88 = () => interopDefault(import('..\\pages\\business\\_slug.vue' /* webpackChunkName: "pages/business/_slug" */))
const _6d4f62b8 = () => interopDefault(import('..\\pages\\product-details\\_slug.vue' /* webpackChunkName: "pages/product-details/_slug" */))
const _685b6ade = () => interopDefault(import('..\\pages\\resetpassword\\_slug.vue' /* webpackChunkName: "pages/resetpassword/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _4ec31e1e,
    name: "cart"
  }, {
    path: "/changepassword",
    component: _aedb276e,
    name: "changepassword"
  }, {
    path: "/changepassword%20copy",
    component: _9563a6c8,
    name: "changepassword copy"
  }, {
    path: "/checkout",
    component: _02286b78,
    name: "checkout"
  }, {
    path: "/customer-review",
    component: _647b9719,
    name: "customer-review"
  }, {
    path: "/flas-sale",
    component: _4416316e,
    name: "flas-sale"
  }, {
    path: "/forget-password",
    component: _3756d126,
    name: "forget-password"
  }, {
    path: "/login",
    component: _191451db,
    name: "login"
  }, {
    path: "/official-store",
    component: _05fb1f7d,
    name: "official-store"
  }, {
    path: "/official-store-grid",
    component: _049eef74,
    name: "official-store-grid"
  }, {
    path: "/OfficialStoreFilter",
    component: _651f3a20,
    name: "OfficialStoreFilter"
  }, {
    path: "/OfficialStoreFilterGrid",
    component: _2da81286,
    name: "OfficialStoreFilterGrid"
  }, {
    path: "/payment",
    component: _8be76110,
    name: "payment"
  }, {
    path: "/product-grid",
    component: _382e8f3c,
    name: "product-grid"
  }, {
    path: "/product-list",
    component: _212871ba,
    name: "product-list"
  }, {
    path: "/refund",
    component: _0e4414f6,
    name: "refund"
  }, {
    path: "/return-and-replacement",
    component: _54cb7a7d,
    name: "return-and-replacement"
  }, {
    path: "/sell-on-ecommerce",
    component: _d7fa2042,
    name: "sell-on-ecommerce"
  }, {
    path: "/sell-on-filter",
    component: _1e491069,
    name: "sell-on-filter"
  }, {
    path: "/seller-form",
    component: _cdbb5e78,
    name: "seller-form"
  }, {
    path: "/service",
    component: _ba2816b2,
    name: "service"
  }, {
    path: "/update-password",
    component: _0b094611,
    name: "update-password"
  }, {
    path: "/affiliate/affiliate-dashboard",
    component: _6f32a936,
    name: "affiliate-affiliate-dashboard"
  }, {
    path: "/affiliate/affiliate-programe",
    component: _11d86920,
    name: "affiliate-affiliate-programe"
  }, {
    path: "/affiliate/affiliate-programe-register",
    component: _4807c240,
    name: "affiliate-affiliate-programe-register"
  }, {
    path: "/affiliate/affiliate-transfer",
    component: _45ea99aa,
    name: "affiliate-affiliate-transfer"
  }, {
    path: "/category/all-categorys",
    component: _6042b4bd,
    name: "category-all-categorys"
  }, {
    path: "/category/category-grid",
    component: _b287192e,
    name: "category-category-grid"
  }, {
    path: "/category/category-list",
    component: _3807a67e,
    name: "category-category-list"
  }, {
    path: "/seller/change-password",
    component: _b32bea2a,
    name: "seller-change-password"
  }, {
    path: "/seller/order-details",
    component: _36b12254,
    name: "seller-order-details"
  }, {
    path: "/seller/seller-account-setting",
    component: _2756255f,
    name: "seller-seller-account-setting"
  }, {
    path: "/seller/seller-comission-history",
    component: _94cb5654,
    name: "seller-seller-comission-history"
  }, {
    path: "/seller/seller-customer-returns",
    component: _35a8adb5,
    name: "seller-seller-customer-returns"
  }, {
    path: "/seller/seller-dashboard",
    component: _d31fc6fa,
    name: "seller-seller-dashboard"
  }, {
    path: "/seller/seller-leftsidebar",
    component: _44dcf5b8,
    name: "seller-seller-leftsidebar"
  }, {
    path: "/seller/seller-message",
    component: _5f4aab94,
    name: "seller-seller-message"
  }, {
    path: "/seller/seller-orders",
    component: _78878906,
    name: "seller-seller-orders"
  }, {
    path: "/seller/seller-payment-history",
    component: _5530e3fc,
    name: "seller-seller-payment-history"
  }, {
    path: "/seller/seller-products",
    component: _70717c76,
    name: "seller-seller-products"
  }, {
    path: "/seller/seller-products-post",
    component: _15306358,
    name: "seller-seller-products-post"
  }, {
    path: "/seller/seller-profile",
    component: _0efc92d8,
    name: "seller-seller-profile"
  }, {
    path: "/seller/seller-wallet",
    component: _45085fcc,
    name: "seller-seller-wallet"
  }, {
    path: "/seller/seller-wishlist",
    component: _78a40da6,
    name: "seller-seller-wishlist"
  }, {
    path: "/user/my-reviews",
    component: _5a7f1743,
    name: "user-my-reviews"
  }, {
    path: "/user/order-details",
    component: _e0c774ec,
    name: "user-order-details"
  }, {
    path: "/user/user-mlm",
    component: _0754d196,
    name: "user-user-mlm"
  }, {
    path: "/user/user-orders",
    component: _7df9fbae,
    name: "user-user-orders"
  }, {
    path: "/user/user-profile",
    component: _904f15a0,
    name: "user-user-profile"
  }, {
    path: "/user/user-whichlist",
    component: _925a51fc,
    name: "user-user-whichlist"
  }, {
    path: "/seller/products/product-edit",
    component: _0d00a3ee,
    name: "seller-products-product-edit"
  }, {
    path: "/seller/products/product-preview",
    component: _744f3ace,
    name: "seller-products-product-preview"
  }, {
    path: "/seller/products/product-varient",
    component: _f212544c,
    name: "seller-products-product-varient"
  }, {
    path: "/",
    component: _4f6caec4,
    name: "index"
  }, {
    path: "/user/invite-user/:id?",
    component: _ad1c1ed8,
    name: "user-invite-user-id"
  }, {
    path: "/business/:slug?",
    component: _21a69c88,
    name: "business-slug"
  }, {
    path: "/product-details/:slug?",
    component: _6d4f62b8,
    name: "product-details-slug"
  }, {
    path: "/resetpassword/:slug?",
    component: _685b6ade,
    name: "resetpassword-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
