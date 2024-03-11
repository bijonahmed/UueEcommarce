import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8bb4c0d4 = () => interopDefault(import('..\\pages\\allbrands.vue' /* webpackChunkName: "pages/allbrands" */))
const _2f1f5440 = () => interopDefault(import('..\\pages\\allshop.vue' /* webpackChunkName: "pages/allshop" */))
const _f5f14c6e = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _7b75abbe = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _a64c9372 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _f428b59c = () => interopDefault(import('..\\pages\\changepassword.vue' /* webpackChunkName: "pages/changepassword" */))
const _64911d53 = () => interopDefault(import('..\\pages\\changepassword copy.vue' /* webpackChunkName: "pages/changepassword copy" */))
const _0243657e = () => interopDefault(import('..\\pages\\charity.vue' /* webpackChunkName: "pages/charity" */))
const _7b8fb426 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _b56b0b94 = () => interopDefault(import('..\\pages\\coupons.vue' /* webpackChunkName: "pages/coupons" */))
const _32497b50 = () => interopDefault(import('..\\pages\\customer-review.vue' /* webpackChunkName: "pages/customer-review" */))
const _2b556a36 = () => interopDefault(import('..\\pages\\flas-sale.vue' /* webpackChunkName: "pages/flas-sale" */))
const _9bbb08b8 = () => interopDefault(import('..\\pages\\forget-password.vue' /* webpackChunkName: "pages/forget-password" */))
const _7dd0bed2 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _39574f34 = () => interopDefault(import('..\\pages\\official-store.vue' /* webpackChunkName: "pages/official-store" */))
const _a6190e06 = () => interopDefault(import('..\\pages\\official-store-grid.vue' /* webpackChunkName: "pages/official-store-grid" */))
const _14622ad7 = () => interopDefault(import('..\\pages\\OfficialStoreFilter.vue' /* webpackChunkName: "pages/OfficialStoreFilter" */))
const _a7f46086 = () => interopDefault(import('..\\pages\\OfficialStoreFilterGrid.vue' /* webpackChunkName: "pages/OfficialStoreFilterGrid" */))
const _3d3d4aa2 = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages/payment" */))
const _2cdd178b = () => interopDefault(import('..\\pages\\product-grid.vue' /* webpackChunkName: "pages/product-grid" */))
const _6a1cd0e3 = () => interopDefault(import('..\\pages\\product-list.vue' /* webpackChunkName: "pages/product-list" */))
const _411546df = () => interopDefault(import('..\\pages\\refund.vue' /* webpackChunkName: "pages/refund" */))
const _09f52fc6 = () => interopDefault(import('..\\pages\\required.vue' /* webpackChunkName: "pages/required" */))
const _98948b34 = () => interopDefault(import('..\\pages\\return-and-replacement.vue' /* webpackChunkName: "pages/return-and-replacement" */))
const _25e8a256 = () => interopDefault(import('..\\pages\\sell-on-ecommerce.vue' /* webpackChunkName: "pages/sell-on-ecommerce" */))
const _08bb6d5c = () => interopDefault(import('..\\pages\\sell-on-filter.vue' /* webpackChunkName: "pages/sell-on-filter" */))
const _a7fe2f0a = () => interopDefault(import('..\\pages\\seller-form.vue' /* webpackChunkName: "pages/seller-form" */))
const _6b7e0044 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _3c397142 = () => interopDefault(import('..\\pages\\today-deal.vue' /* webpackChunkName: "pages/today-deal" */))
const _4e51ab70 = () => interopDefault(import('..\\pages\\update-password.vue' /* webpackChunkName: "pages/update-password" */))
const _66eaf24e = () => interopDefault(import('..\\pages\\affiliate\\affiliate-dashboard.vue' /* webpackChunkName: "pages/affiliate/affiliate-dashboard" */))
const _24a9bdd2 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-programe.vue' /* webpackChunkName: "pages/affiliate/affiliate-programe" */))
const _5f236cc9 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-programe-register.vue' /* webpackChunkName: "pages/affiliate/affiliate-programe-register" */))
const _21bd51a1 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-transfer.vue' /* webpackChunkName: "pages/affiliate/affiliate-transfer" */))
const _7094e144 = () => interopDefault(import('..\\pages\\brand-product\\brand-grid.vue' /* webpackChunkName: "pages/brand-product/brand-grid" */))
const _42bf1c18 = () => interopDefault(import('..\\pages\\category\\all-categorys.vue' /* webpackChunkName: "pages/category/all-categorys" */))
const _251a30a0 = () => interopDefault(import('..\\pages\\category\\category-grid.vue' /* webpackChunkName: "pages/category/category-grid" */))
const _6259e9f8 = () => interopDefault(import('..\\pages\\category\\category-list.vue' /* webpackChunkName: "pages/category/category-list" */))
const _24c7c822 = () => interopDefault(import('..\\pages\\seller\\change-password.vue' /* webpackChunkName: "pages/seller/change-password" */))
const _621de466 = () => interopDefault(import('..\\pages\\seller\\order-details.vue' /* webpackChunkName: "pages/seller/order-details" */))
const _744b2770 = () => interopDefault(import('..\\pages\\seller\\seller-account-setting.vue' /* webpackChunkName: "pages/seller/seller-account-setting" */))
const _77aef502 = () => interopDefault(import('..\\pages\\seller\\seller-comission-history.vue' /* webpackChunkName: "pages/seller/seller-comission-history" */))
const _67ad43ec = () => interopDefault(import('..\\pages\\seller\\seller-customer-returns.vue' /* webpackChunkName: "pages/seller/seller-customer-returns" */))
const _386bf3a8 = () => interopDefault(import('..\\pages\\seller\\seller-dashboard.vue' /* webpackChunkName: "pages/seller/seller-dashboard" */))
const _3c17a88d = () => interopDefault(import('..\\pages\\seller\\seller-leftsidebar.vue' /* webpackChunkName: "pages/seller/seller-leftsidebar" */))
const _2f44ea1f = () => interopDefault(import('..\\pages\\seller\\seller-message.vue' /* webpackChunkName: "pages/seller/seller-message" */))
const _62d127fd = () => interopDefault(import('..\\pages\\seller\\seller-orders.vue' /* webpackChunkName: "pages/seller/seller-orders" */))
const _1895aa36 = () => interopDefault(import('..\\pages\\seller\\seller-payment-history.vue' /* webpackChunkName: "pages/seller/seller-payment-history" */))
const _4624fefc = () => interopDefault(import('..\\pages\\seller\\seller-products.vue' /* webpackChunkName: "pages/seller/seller-products" */))
const _2a895efe = () => interopDefault(import('..\\pages\\seller\\seller-products-post.vue' /* webpackChunkName: "pages/seller/seller-products-post" */))
const _6de6d2c1 = () => interopDefault(import('..\\pages\\seller\\seller-profile.vue' /* webpackChunkName: "pages/seller/seller-profile" */))
const _707521de = () => interopDefault(import('..\\pages\\seller\\seller-wallet.vue' /* webpackChunkName: "pages/seller/seller-wallet" */))
const _11fc6a46 = () => interopDefault(import('..\\pages\\seller\\seller-wishlist.vue' /* webpackChunkName: "pages/seller/seller-wishlist" */))
const _437d804d = () => interopDefault(import('..\\pages\\user\\account-statement.vue' /* webpackChunkName: "pages/user/account-statement" */))
const _466db9ec = () => interopDefault(import('..\\pages\\user\\my-reviews.vue' /* webpackChunkName: "pages/user/my-reviews" */))
const _344df408 = () => interopDefault(import('..\\pages\\user\\mySalary.vue' /* webpackChunkName: "pages/user/mySalary" */))
const _3edf3641 = () => interopDefault(import('..\\pages\\user\\order-details.vue' /* webpackChunkName: "pages/user/order-details" */))
const _32fd3622 = () => interopDefault(import('..\\pages\\user\\user-blogPost.vue' /* webpackChunkName: "pages/user/user-blogPost" */))
const _173f7bc6 = () => interopDefault(import('..\\pages\\user\\user-dashborad.vue' /* webpackChunkName: "pages/user/user-dashborad" */))
const _4ca25fc4 = () => interopDefault(import('..\\pages\\user\\user-mlm.vue' /* webpackChunkName: "pages/user/user-mlm" */))
const _0fdfae25 = () => interopDefault(import('..\\pages\\user\\user-orders.vue' /* webpackChunkName: "pages/user/user-orders" */))
const _62a91199 = () => interopDefault(import('..\\pages\\user\\user-profile.vue' /* webpackChunkName: "pages/user/user-profile" */))
const _05baa08a = () => interopDefault(import('..\\pages\\user\\user-requireProduct.vue' /* webpackChunkName: "pages/user/user-requireProduct" */))
const _475a1a00 = () => interopDefault(import('..\\pages\\user\\user-security.vue' /* webpackChunkName: "pages/user/user-security" */))
const _202405aa = () => interopDefault(import('..\\pages\\user\\user-whichlist.vue' /* webpackChunkName: "pages/user/user-whichlist" */))
const _594f8bf5 = () => interopDefault(import('..\\pages\\user\\user-withdrawal.vue' /* webpackChunkName: "pages/user/user-withdrawal" */))
const _cff8161c = () => interopDefault(import('..\\pages\\seller\\products\\product-edit.vue' /* webpackChunkName: "pages/seller/products/product-edit" */))
const _eddf71e0 = () => interopDefault(import('..\\pages\\seller\\products\\product-preview.vue' /* webpackChunkName: "pages/seller/products/product-preview" */))
const _4a2eba51 = () => interopDefault(import('..\\pages\\seller\\products\\product-varient.vue' /* webpackChunkName: "pages/seller/products/product-varient" */))
const _97adc88a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _085c307d = () => interopDefault(import('..\\pages\\user\\invite-user\\_id.vue' /* webpackChunkName: "pages/user/invite-user/_id" */))
const _860ad41a = () => interopDefault(import('..\\pages\\business\\_slug.vue' /* webpackChunkName: "pages/business/_slug" */))
const _28428e8d = () => interopDefault(import('..\\pages\\product-details\\_slug.vue' /* webpackChunkName: "pages/product-details/_slug" */))
const _bd12ddf2 = () => interopDefault(import('..\\pages\\resetpassword\\_slug.vue' /* webpackChunkName: "pages/resetpassword/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/allbrands",
    component: _8bb4c0d4,
    name: "allbrands"
  }, {
    path: "/allshop",
    component: _2f1f5440,
    name: "allshop"
  }, {
    path: "/blog",
    component: _f5f14c6e,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _7b75abbe,
    name: "blog-details"
  }, {
    path: "/cart",
    component: _a64c9372,
    name: "cart"
  }, {
    path: "/changepassword",
    component: _f428b59c,
    name: "changepassword"
  }, {
    path: "/changepassword%20copy",
    component: _64911d53,
    name: "changepassword copy"
  }, {
    path: "/charity",
    component: _0243657e,
    name: "charity"
  }, {
    path: "/checkout",
    component: _7b8fb426,
    name: "checkout"
  }, {
    path: "/coupons",
    component: _b56b0b94,
    name: "coupons"
  }, {
    path: "/customer-review",
    component: _32497b50,
    name: "customer-review"
  }, {
    path: "/flas-sale",
    component: _2b556a36,
    name: "flas-sale"
  }, {
    path: "/forget-password",
    component: _9bbb08b8,
    name: "forget-password"
  }, {
    path: "/login",
    component: _7dd0bed2,
    name: "login"
  }, {
    path: "/official-store",
    component: _39574f34,
    name: "official-store"
  }, {
    path: "/official-store-grid",
    component: _a6190e06,
    name: "official-store-grid"
  }, {
    path: "/OfficialStoreFilter",
    component: _14622ad7,
    name: "OfficialStoreFilter"
  }, {
    path: "/OfficialStoreFilterGrid",
    component: _a7f46086,
    name: "OfficialStoreFilterGrid"
  }, {
    path: "/payment",
    component: _3d3d4aa2,
    name: "payment"
  }, {
    path: "/product-grid",
    component: _2cdd178b,
    name: "product-grid"
  }, {
    path: "/product-list",
    component: _6a1cd0e3,
    name: "product-list"
  }, {
    path: "/refund",
    component: _411546df,
    name: "refund"
  }, {
    path: "/required",
    component: _09f52fc6,
    name: "required"
  }, {
    path: "/return-and-replacement",
    component: _98948b34,
    name: "return-and-replacement"
  }, {
    path: "/sell-on-ecommerce",
    component: _25e8a256,
    name: "sell-on-ecommerce"
  }, {
    path: "/sell-on-filter",
    component: _08bb6d5c,
    name: "sell-on-filter"
  }, {
    path: "/seller-form",
    component: _a7fe2f0a,
    name: "seller-form"
  }, {
    path: "/service",
    component: _6b7e0044,
    name: "service"
  }, {
    path: "/today-deal",
    component: _3c397142,
    name: "today-deal"
  }, {
    path: "/update-password",
    component: _4e51ab70,
    name: "update-password"
  }, {
    path: "/affiliate/affiliate-dashboard",
    component: _66eaf24e,
    name: "affiliate-affiliate-dashboard"
  }, {
    path: "/affiliate/affiliate-programe",
    component: _24a9bdd2,
    name: "affiliate-affiliate-programe"
  }, {
    path: "/affiliate/affiliate-programe-register",
    component: _5f236cc9,
    name: "affiliate-affiliate-programe-register"
  }, {
    path: "/affiliate/affiliate-transfer",
    component: _21bd51a1,
    name: "affiliate-affiliate-transfer"
  }, {
    path: "/brand-product/brand-grid",
    component: _7094e144,
    name: "brand-product-brand-grid"
  }, {
    path: "/category/all-categorys",
    component: _42bf1c18,
    name: "category-all-categorys"
  }, {
    path: "/category/category-grid",
    component: _251a30a0,
    name: "category-category-grid"
  }, {
    path: "/category/category-list",
    component: _6259e9f8,
    name: "category-category-list"
  }, {
    path: "/seller/change-password",
    component: _24c7c822,
    name: "seller-change-password"
  }, {
    path: "/seller/order-details",
    component: _621de466,
    name: "seller-order-details"
  }, {
    path: "/seller/seller-account-setting",
    component: _744b2770,
    name: "seller-seller-account-setting"
  }, {
    path: "/seller/seller-comission-history",
    component: _77aef502,
    name: "seller-seller-comission-history"
  }, {
    path: "/seller/seller-customer-returns",
    component: _67ad43ec,
    name: "seller-seller-customer-returns"
  }, {
    path: "/seller/seller-dashboard",
    component: _386bf3a8,
    name: "seller-seller-dashboard"
  }, {
    path: "/seller/seller-leftsidebar",
    component: _3c17a88d,
    name: "seller-seller-leftsidebar"
  }, {
    path: "/seller/seller-message",
    component: _2f44ea1f,
    name: "seller-seller-message"
  }, {
    path: "/seller/seller-orders",
    component: _62d127fd,
    name: "seller-seller-orders"
  }, {
    path: "/seller/seller-payment-history",
    component: _1895aa36,
    name: "seller-seller-payment-history"
  }, {
    path: "/seller/seller-products",
    component: _4624fefc,
    name: "seller-seller-products"
  }, {
    path: "/seller/seller-products-post",
    component: _2a895efe,
    name: "seller-seller-products-post"
  }, {
    path: "/seller/seller-profile",
    component: _6de6d2c1,
    name: "seller-seller-profile"
  }, {
    path: "/seller/seller-wallet",
    component: _707521de,
    name: "seller-seller-wallet"
  }, {
    path: "/seller/seller-wishlist",
    component: _11fc6a46,
    name: "seller-seller-wishlist"
  }, {
    path: "/user/account-statement",
    component: _437d804d,
    name: "user-account-statement"
  }, {
    path: "/user/my-reviews",
    component: _466db9ec,
    name: "user-my-reviews"
  }, {
    path: "/user/mySalary",
    component: _344df408,
    name: "user-mySalary"
  }, {
    path: "/user/order-details",
    component: _3edf3641,
    name: "user-order-details"
  }, {
    path: "/user/user-blogPost",
    component: _32fd3622,
    name: "user-user-blogPost"
  }, {
    path: "/user/user-dashborad",
    component: _173f7bc6,
    name: "user-user-dashborad"
  }, {
    path: "/user/user-mlm",
    component: _4ca25fc4,
    name: "user-user-mlm"
  }, {
    path: "/user/user-orders",
    component: _0fdfae25,
    name: "user-user-orders"
  }, {
    path: "/user/user-profile",
    component: _62a91199,
    name: "user-user-profile"
  }, {
    path: "/user/user-requireProduct",
    component: _05baa08a,
    name: "user-user-requireProduct"
  }, {
    path: "/user/user-security",
    component: _475a1a00,
    name: "user-user-security"
  }, {
    path: "/user/user-whichlist",
    component: _202405aa,
    name: "user-user-whichlist"
  }, {
    path: "/user/user-withdrawal",
    component: _594f8bf5,
    name: "user-user-withdrawal"
  }, {
    path: "/seller/products/product-edit",
    component: _cff8161c,
    name: "seller-products-product-edit"
  }, {
    path: "/seller/products/product-preview",
    component: _eddf71e0,
    name: "seller-products-product-preview"
  }, {
    path: "/seller/products/product-varient",
    component: _4a2eba51,
    name: "seller-products-product-varient"
  }, {
    path: "/",
    component: _97adc88a,
    name: "index"
  }, {
    path: "/user/invite-user/:id?",
    component: _085c307d,
    name: "user-invite-user-id"
  }, {
    path: "/business/:slug?",
    component: _860ad41a,
    name: "business-slug"
  }, {
    path: "/product-details/:slug?",
    component: _28428e8d,
    name: "product-details-slug"
  }, {
    path: "/resetpassword/:slug?",
    component: _bd12ddf2,
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
