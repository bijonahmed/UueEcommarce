exports.ids = [99,14,15,16,18,22,24,25,93];
exports.modules = {

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(162);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("6cb19df7", content, true, context)
};

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_profile_vue_vue_type_style_index_0_id_2f7ba529_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_profile_vue_vue_type_style_index_0_id_2f7ba529_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_profile_vue_vue_type_style_index_0_id_2f7ba529_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_profile_vue_vue_type_style_index_0_id_2f7ba529_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_profile_vue_vue_type_style_index_0_id_2f7ba529_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading-indicator[data-v-2f7ba529]{background-color:hsla(0,0%,100%,.8);height:100%;left:0;position:fixed;top:0;width:100%;z-index:9999}.loader-container[data-v-2f7ba529],.loading-indicator[data-v-2f7ba529]{align-items:center;display:flex;justify-content:center}.loader-container[data-v-2f7ba529]{flex-direction:column;height:100vh;position:relative}.loader-text[data-v-2f7ba529]{margin:0}.loader-top[data-v-2f7ba529]{top:0}.loader-bottom[data-v-2f7ba529]{bottom:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seller/seller-profile.vue?vue&type=template&id=2f7ba529&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('LogoAndPayment'), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"search_bar\" data-v-2f7ba529>", "</section>", [_vm._ssrNode("<div class=\"container\" data-v-2f7ba529>", "</div>", [_vm._ssrNode("<div class=\"row justify-content-between align-items-center\" data-v-2f7ba529>", "</div>", [_vm._ssrNode("<div class=\"col-lg-3 col-md-4 col-4\" data-v-2f7ba529>", "</div>", [_vm._ssrNode("<div class=\"logo nav_tab\" data-v-2f7ba529>", "</div>", [_vm._ssrNode("<button type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvasExample\" aria-controls=\"offcanvasExample\" class=\"btn_menu mobile_view\" data-v-2f7ba529><i class=\"fa-solid fa-bars-staggered\" data-v-2f7ba529></i></button> "), _vm._ssrNode("<div tabindex=\"-1\" id=\"offcanvasExample\" aria-labelledby=\"offcanvasExampleLabel\" class=\"offcanvas offcanvas-start\" data-v-2f7ba529>", "</div>", [_vm._ssrNode("<div class=\"offcanvas-header\" data-v-2f7ba529><button type=\"button\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\" class=\"btn-close\" data-v-2f7ba529></button> <h5 id=\"offcanvasExampleLabel\" class=\"offcanvas-title\" data-v-2f7ba529>Ecommerce</h5></div> "), _vm._ssrNode("<div class=\"offcanvas-body\" data-v-2f7ba529>", "</div>", [_c('Common_MobileSidebar')], 1)], 2), _vm._ssrNode(" "), _c('Common_MiniTabNavbar'), _vm._ssrNode(" "), _c('Nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Ecommerce "), _c('i', {
    staticClass: "fa-regular fa-star"
  })])], 2)]), _vm._ssrNode(" <div class=\"col-6 desktop_view mini_tab_hide\" data-v-2f7ba529><form action data-v-2f7ba529><i class=\"fa-solid fa-magnifying-glass\" data-v-2f7ba529></i> <input type=\"text\" name id placeholder=\"Search Product\" class=\"form-control\" data-v-2f7ba529> <button type=\"button\" data-v-2f7ba529>Search</button></form></div> "), _c('DesktopViewOption'), _vm._ssrNode(" <div class=\"col-4 ms-auto mobile_view\" data-v-2f7ba529><div class=\"mobile_nav_option\" data-v-2f7ba529><a class=\"search_form\" data-v-2f7ba529><i class=\"fa-solid fa-magnifying-glass\" data-v-2f7ba529></i></a></div></div> "), _c('Common_MobileSearchProduct')], 2)])]), _vm._ssrNode(" "), _vm.loading ? _vm._ssrNode("<div class=\"loading-indicator\" data-v-2f7ba529>", "</div>", [_vm._ssrNode("<div class=\"loader-container\" data-v-2f7ba529>", "</div>", [_c('center', {
    staticClass: "loader-text"
  }, [_vm._v("Loading...")]), _vm._ssrNode(" <img src=\"/loader/loader.gif\" alt=\"Loader\" data-v-2f7ba529>")], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"main_content\" data-v-2f7ba529>", "</section>", [_vm._ssrNode("<div class=\"container\" data-v-2f7ba529>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-2f7ba529>", "</div>", [_vm._ssrNode("<div class=\"col-md-4\" data-v-2f7ba529>", "</div>", [_c('SellerLeftsidebar')], 1), _vm._ssrNode(" <div class=\"col-md-8\" data-v-2f7ba529><ul id=\"pills-tab\" role=\"tablist\" class=\"tab_btns nav-pills mb-3 mt-3\" data-v-2f7ba529><li role=\"presentation\" class=\"nav-item\" data-v-2f7ba529><button id=\"pills-here-tab\" data-bs-toggle=\"pill\" data-bs-target=\"#seller_account\" type=\"button\" role=\"tab\" aria-controls=\"pills-home\" aria-selected=\"true\" class=\"nav-link active\" data-v-2f7ba529>Seller Account</button></li> <li role=\"presentation\" class=\"nav-item\" data-v-2f7ba529><button id=\"pills-profile-tab\" data-bs-toggle=\"pill\" data-bs-target=\"#pills-business\" type=\"button\" role=\"tab\" aria-controls=\"pills-profile\" aria-selected=\"false\" class=\"nav-link\" data-v-2f7ba529>Business Information</button></li> <li role=\"presentation\" class=\"nav-item\" data-v-2f7ba529><button id=\"pills-contact-tab\" data-bs-toggle=\"pill\" data-bs-target=\"#pills-warehouse\" type=\"button\" role=\"tab\" aria-controls=\"pills-warehouse\" aria-selected=\"false\" class=\"nav-link\" data-v-2f7ba529>WareHouse</button></li> <li role=\"presentation\" class=\"nav-item\" data-v-2f7ba529><button id=\"pills-contact-tab\" data-bs-toggle=\"pill\" data-bs-target=\"#pills-return\" type=\"button\" role=\"tab\" aria-controls=\"pills-return\" aria-selected=\"false\" class=\"nav-link\" data-v-2f7ba529>Return Address</button></li></ul> <div id=\"pills-tabContent\" class=\"tab-content\" data-v-2f7ba529><div id=\"seller_account\" role=\"tabpanel\" aria-labelledby=\"pills-here-tab\" class=\"tab-pane fade show active\" data-v-2f7ba529><div class=\"main_profile\" data-v-2f7ba529><div class=\"user_details\" data-v-2f7ba529><div class=\"d-flex align-items-center justify-content-between\" data-v-2f7ba529><h4 data-v-2f7ba529>Seller Account </h4> <button type=\"button\" class=\"btn_edit\" data-v-2f7ba529><i class=\"fa-solid fa-pen\" data-v-2f7ba529></i></button> <div class=\"modal_address_here edit_div\" data-v-2f7ba529><div class=\"address_form_modal\" data-v-2f7ba529><div class=\"d-flex justify-content-between\" data-v-2f7ba529><p data-v-2f7ba529>Update Seller Details </p> <button type=\"button\" class=\"btn-close btn_address_close\" data-v-2f7ba529></button></div> <form id=\"userSubmitFrm\" enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-2f7ba529><div data-v-2f7ba529><label for=\"name\" data-v-2f7ba529>First Name</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.userdata.first_name) + " class=\"form-control\" data-v-2f7ba529> " + (_vm.errors.first_name ? "<span class=\"text-danger\" data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.errors.first_name[0])) + "</span>" : "<!---->") + "</div> <div data-v-2f7ba529><label for=\"name\" data-v-2f7ba529>Last Name</label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.userdata.last_name) + " class=\"form-control\" data-v-2f7ba529> " + (_vm.errors.last_name ? "<span class=\"text-danger\" data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.errors.last_name[0])) + "</span>" : "<!---->") + "</div> <div data-v-2f7ba529><label for data-v-2f7ba529>Email </label> <input type=\"email\"" + _vm._ssrAttr("value", _vm.userdata.email) + " class=\"form-control\" data-v-2f7ba529> " + (_vm.errors.email ? "<span class=\"text-danger\" data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</span>" : "<!---->") + "</div> <div data-v-2f7ba529><label for data-v-2f7ba529>Phone </label> <br data-v-2f7ba529> <input type=\"text\"" + _vm._ssrAttr("value", _vm.userdata.phone_number) + " class=\"form-control mobile_code\" data-v-2f7ba529> " + (_vm.errors.phone_number ? "<span class=\"text-danger\" data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.errors.phone_number[0])) + "</span>" : "<!---->") + "</div> <div class=\"mt-3\" data-v-2f7ba529><button type=\"submit\" class=\"btn_cart mt-2\" style=\"visibility: unset;\" data-v-2f7ba529>Save</button></div></form></div></div></div> <div class=\"user_info\" data-v-2f7ba529><h5 data-v-2f7ba529>Seller ID</h5> <p data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.userdata.id)) + "</p></div> <div class=\"user_info\" data-v-2f7ba529><h5 data-v-2f7ba529>First Name </h5> <p data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.userdata.first_name)) + "</p></div> <div class=\"user_info\" data-v-2f7ba529><h5 data-v-2f7ba529>Last Name </h5> <p data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.userdata.last_name)) + "</p></div> <div class=\"user_info\" data-v-2f7ba529><h5 data-v-2f7ba529>Email</h5> <p data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.userdata.email)) + "</p></div> <div class=\"user_info\" data-v-2f7ba529><h5 data-v-2f7ba529>Phone</h5> <p data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.userdata.phone_number)) + "</p></div></div></div></div> <div id=\"pills-business\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\" class=\"tab-pane fade\" data-v-2f7ba529><div class=\"main_profile\" data-v-2f7ba529><div class=\"user_details\" data-v-2f7ba529><div class=\"d-flex align-items-center justify-content-between\" data-v-2f7ba529><h4 data-v-2f7ba529>Business Information </h4> <button type=\"button\" class=\"btn_edit\" data-v-2f7ba529><i class=\"fa-solid fa-pen\" data-v-2f7ba529></i></button> <div class=\"modal_address_here edit_div\" data-v-2f7ba529><div class=\"address_form_modal\" data-v-2f7ba529><div class=\"d-flex justify-content-between\" data-v-2f7ba529><p data-v-2f7ba529>Update Business Information </p> <button type=\"button\" class=\"btn-close btn_address_close\" data-v-2f7ba529></button></div> <form id=\"userSubmitFrm\" enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-2f7ba529><div data-v-2f7ba529><label for=\"name\" class=\"d-flex\" data-v-2f7ba529>Business Owner Name<p class=\"text-danger d-block\" data-v-2f7ba529>*</p></label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.userdata.business_owner_name) + " class=\"form-control\" data-v-2f7ba529> " + (_vm.errors.business_owner_name ? "<span class=\"text-danger\" data-v-2f7ba529><small data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.errors.business_owner_name[0])) + "</small></span>" : "<!---->") + "</div> <div data-v-2f7ba529><label for=\"name\" class=\"d-flex\" data-v-2f7ba529>Business Name<p class=\"text-danger d-block\" data-v-2f7ba529>*</p></label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.userdata.business_name) + " class=\"form-control\" data-v-2f7ba529> " + (_vm.errors.business_name ? "<span class=\"text-danger\" data-v-2f7ba529><small data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.errors.business_name[0])) + "</small></span>" : "<!---->") + "</div> <div data-v-2f7ba529><label for class=\"d-flex\" data-v-2f7ba529>Business Registration Number <p class=\"text-danger d-block\" data-v-2f7ba529>*</p></label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.userdata.business_register_num) + " class=\"form-control\" data-v-2f7ba529> " + (_vm.errors.business_register_num ? "<span class=\"text-danger\" data-v-2f7ba529><small data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.errors.business_register_num[0])) + "</small></span>" : "<!---->") + "</div> <div data-v-2f7ba529><label for class=\"d-flex\" data-v-2f7ba529>Business Address <p class=\"text-danger d-block\" data-v-2f7ba529>*</p></label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.userdata.business_address) + " class=\"form-control\" data-v-2f7ba529> " + (_vm.errors.business_address ? "<span class=\"text-danger\" data-v-2f7ba529><small data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.errors.business_address[0])) + "</small></span>" : "<!---->") + "</div> <div class=\"mt-3\" data-v-2f7ba529><button type=\"submit\" class=\"btn_cart mt-2\" style=\"visibility: unset;\" data-v-2f7ba529>Save</button></div></form></div></div></div> <div class=\"user_info\" data-v-2f7ba529><h5 data-v-2f7ba529>Business Owner Name</h5> <p data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.userdata.business_owner_name)) + "</p></div> <div class=\"user_info\" data-v-2f7ba529><h5 data-v-2f7ba529>Business Name </h5> <p data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.userdata.business_name)) + "</p></div> <div class=\"user_info\" data-v-2f7ba529><h5 data-v-2f7ba529>Business Registration number</h5> <p data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.userdata.business_register_num)) + "</p></div> <div class=\"user_info\" data-v-2f7ba529><h5 data-v-2f7ba529>Address </h5> <p data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.userdata.business_address)) + "</p></div></div></div></div> <div id=\"pills-warehouse\" role=\"tabpanel\" aria-labelledby=\"pills-contact-tab\" class=\"tab-pane fade\" data-v-2f7ba529><div id=\"seller_account\" role=\"tabpanel\" aria-labelledby=\"pills-here-tab\" class=\"tab-pane fade show active\" data-v-2f7ba529><div class=\"main_profile\" data-v-2f7ba529><div class=\"user_details\" data-v-2f7ba529><div class=\"d-flex align-items-center justify-content-between\" data-v-2f7ba529><h4 data-v-2f7ba529>WareHouse </h4> <button type=\"button\" class=\"btn_edit\" data-v-2f7ba529><i class=\"fa-solid fa-pen\" data-v-2f7ba529></i></button> <div class=\"modal_address_here edit_div\" data-v-2f7ba529><div class=\"address_form_modal\" data-v-2f7ba529><div class=\"d-flex justify-content-between\" data-v-2f7ba529><p data-v-2f7ba529>WareHouse Address </p> <button type=\"button\" class=\"btn-close btn_address_close\" data-v-2f7ba529></button></div> <form id=\"userSubmitFrm\" enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-2f7ba529><div data-v-2f7ba529><label for=\"name\" data-v-2f7ba529>Address </label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.userdata.business_warehouse_address) + " class=\"form-control\" data-v-2f7ba529></div> <div data-v-2f7ba529><label for data-v-2f7ba529>Email </label> <input type=\"email\"" + _vm._ssrAttr("value", _vm.userdata.business_email) + " class=\"form-control\" data-v-2f7ba529></div> <div data-v-2f7ba529><label for data-v-2f7ba529>Phone </label> <br data-v-2f7ba529> <input type=\"text\"" + _vm._ssrAttr("value", _vm.userdata.business_phone) + " class=\"form-control mobile_code\" data-v-2f7ba529></div> <div class=\"mt-3\" data-v-2f7ba529><button type=\"submit\" class=\"btn_cart mt-2\" style=\"visibility: unset;\" data-v-2f7ba529>Save</button></div></form></div></div></div> <div class=\"user_info\" data-v-2f7ba529><h5 data-v-2f7ba529>Address</h5> <p data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.userdata.business_warehouse_address)) + "</p></div> <div class=\"user_info\" data-v-2f7ba529><h5 data-v-2f7ba529>Email</h5> <p data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.userdata.business_email)) + "</p></div> <div class=\"user_info\" data-v-2f7ba529><h5 data-v-2f7ba529>Phone</h5> <p data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.userdata.business_phone)) + "</p></div></div></div></div></div> <div id=\"pills-return\" role=\"tabpanel\" aria-labelledby=\"pills-contact-tab\" class=\"tab-pane fade\" data-v-2f7ba529><div class=\"main_profile\" data-v-2f7ba529><div class=\"user_details\" data-v-2f7ba529><div class=\"d-flex align-items-center justify-content-between\" data-v-2f7ba529><h4 data-v-2f7ba529>Return Address </h4> <button type=\"button\" class=\"btn_edit\" data-v-2f7ba529><i class=\"fa-solid fa-pen\" data-v-2f7ba529></i></button> <div class=\"modal_address_here edit_div\" data-v-2f7ba529><div class=\"address_form_modal\" data-v-2f7ba529><div class=\"d-flex justify-content-between\" data-v-2f7ba529><p data-v-2f7ba529>Return Address </p> <button type=\"button\" class=\"btn-close btn_address_close\" data-v-2f7ba529></button></div> <form id=\"userSubmitFrm\" enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-2f7ba529><div data-v-2f7ba529><label for=\"name\" data-v-2f7ba529>Full Name </label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.userdata.business_return_name) + " class=\"form-control\" data-v-2f7ba529></div> <div data-v-2f7ba529><label for data-v-2f7ba529>Email </label> <input type=\"text\"" + _vm._ssrAttr("value", _vm.userdata.business_return_email) + " class=\"form-control\" data-v-2f7ba529></div> <div data-v-2f7ba529><label for data-v-2f7ba529>Phone </label> <br data-v-2f7ba529> <input type=\"text\"" + _vm._ssrAttr("value", _vm.userdata.business_return_phone) + " class=\"form-control\" data-v-2f7ba529></div> <div data-v-2f7ba529><label for data-v-2f7ba529>Address </label> <br data-v-2f7ba529> <input type=\"text\"" + _vm._ssrAttr("value", _vm.userdata.business_return_address) + " class=\"form-control\" data-v-2f7ba529></div> <div class=\"mt-3\" data-v-2f7ba529><button type=\"submit\" class=\"btn_cart mt-2\" style=\"visibility: unset;\" data-v-2f7ba529>Save</button></div></form></div></div></div> <div class=\"user_info\" data-v-2f7ba529><h5 data-v-2f7ba529>Name</h5> <p data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.userdata.business_return_name)) + "</p></div> <div class=\"user_info\" data-v-2f7ba529><h5 data-v-2f7ba529>Address</h5> <p data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.userdata.business_return_address)) + "</p></div> <div class=\"user_info\" data-v-2f7ba529><h5 data-v-2f7ba529>Email</h5> <p data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.userdata.business_return_email)) + "</p></div> <div class=\"user_info\" data-v-2f7ba529><h5 data-v-2f7ba529>Phone</h5> <p data-v-2f7ba529>" + _vm._ssrEscape(_vm._s(_vm.userdata.business_return_phone)) + "</p></div></div></div></div></div></div>")], 2)])]), _vm._ssrNode(" <div class=\"back_top\" data-v-2f7ba529><a href=\"#top\" data-v-2f7ba529><i class=\"fa-solid fa-angle-up\" data-v-2f7ba529></i></a></div> "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/seller/seller-profile.vue?vue&type=template&id=2f7ba529&scoped=true&

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(32);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// EXTERNAL MODULE: ./components/Common_MobileSidebar.vue + 4 modules
var Common_MobileSidebar = __webpack_require__(58);

// EXTERNAL MODULE: ./components/Common_MiniTabNavbar.vue + 4 modules
var Common_MiniTabNavbar = __webpack_require__(59);

// EXTERNAL MODULE: ./components/Common_MobileSearchProduct.vue + 2 modules
var Common_MobileSearchProduct = __webpack_require__(60);

// EXTERNAL MODULE: ./pages/seller/seller-leftsidebar.vue + 4 modules
var seller_leftsidebar = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seller/seller-profile.vue?vue&type=script&lang=js&





/* harmony default export */ var seller_profilevue_type_script_lang_js_ = ({
  middleware: 'auth',
  components: {
    Common_MobileSidebar: Common_MobileSidebar["default"],
    Common_MiniTabNavbar: Common_MiniTabNavbar["default"],
    Common_MobileSearchProduct: Common_MobileSearchProduct["default"],
    SellerLeftsidebar: seller_leftsidebar["default"]
  },
  head: {
    title: 'Seller Profile'
  },
  data() {
    return {
      loading: false,
      userdata: {
        id: '',
        first_name: '',
        last_name: '',
        name: '',
        email: '',
        phone_number: '',
        address: '',
        business_owner_name: '',
        business_name: '',
        business_register_num: '',
        business_address: '',
        //WareHouse Address
        business_warehouse_address: '',
        business_email: '',
        business_phone: '',
        //Return Address
        business_return_name: '',
        business_return_email: '',
        business_return_address: '',
        business_return_phone: ''
      },
      passdata: {
        password: '',
        password_confirmation: ''
      },
      notifmsg: '',
      orders: [],
      errors: {}
    };
  },
  mounted() {
    this.defaultLoading();
  },
  methods: {
    businessInfoupdate() {
      const formData = new FormData();
      formData.append('business_owner_name', this.userdata.business_owner_name);
      formData.append('business_name', this.userdata.business_name);
      formData.append('business_register_num', this.userdata.business_register_num);
      formData.append('business_address', this.userdata.business_address);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/auth/updateBusinessprofile', formData, {
        headers
      }).then(res => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Business Info. has been successfully updated",
          showConfirmButton: false,
          timer: 1000
        });
        this.sellerAccModalCls();
        this.defaultLoading();
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    profileupdate() {
      const formData = new FormData();
      formData.append('first_name', this.userdata.first_name);
      formData.append('last_name', this.userdata.last_name);
      formData.append('phone_number', this.userdata.phone_number);
      formData.append('email', this.userdata.email);
      formData.append('business_warehouse_address', this.userdata.business_warehouse_address);
      formData.append('business_email', this.userdata.business_email);
      formData.append('business_phone', this.userdata.business_phone);
      formData.append('business_return_name', this.userdata.business_return_name);
      formData.append('business_return_email', this.userdata.business_return_email);
      formData.append('business_return_address', this.userdata.business_return_address);
      formData.append('business_return_phone', this.userdata.business_return_phone);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/auth/updateprofile', formData, {
        headers
      }).then(res => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your profile has been successfully updated",
          showConfirmButton: false,
          timer: 1500
        });
        this.sellerAccModalCls();
        this.defaultLoading();
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    async defaultLoading() {
      this.loading = true;
      await this.$axios.post(`/auth/me`).then(response => {
        // Seller Account Info
        this.userdata.id = response.data.id;
        this.userdata.first_name = response.data.first_name;
        this.userdata.last_name = response.data.last_name;
        this.userdata.name = response.data.name;
        this.userdata.email = response.data.email;
        this.userdata.phone_number = response.data.phone_number;
        this.userdata.address = response.data.address;
        //Business Information 
        this.userdata.business_owner_name = response.data.business_owner_name;
        this.userdata.business_name = response.data.business_name;
        this.userdata.business_register_num = response.data.business_register_num;
        this.userdata.business_address = response.data.business_address;
        //WareHouse Address
        this.userdata.business_warehouse_address = response.data.business_warehouse_address;
        this.userdata.business_email = response.data.business_email;
        this.userdata.business_phone = response.data.business_phone;
        //Return Address
        this.userdata.business_return_name = response.data.business_return_name;
        this.userdata.business_return_email = response.data.business_return_email;
        this.userdata.business_return_address = response.data.business_return_address;
        this.userdata.business_return_phone = response.data.business_return_phone;
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
    },

    async loadingOrders() {
      const response = await this.$axios.get(`/order/getOrder`);
      this.orders = response.data.orderdata;
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      });
    },
    logout() {
      this.$auth.logout();
      localStorage.removeItem('jwtToken');
      this.$router.push('/');
    },
    returnaddresspopup() {
      external_jquery_default()(".modal_address_here").fadeIn();
    },
    returnaddresspopupClose() {
      external_jquery_default()(".modal_address_here").fadeOut();
    },
    whareHouseModal() {
      external_jquery_default()(".modal_address_here").fadeIn();
    },
    whareHouseModalCls() {
      external_jquery_default()(".modal_address_here").fadeOut();
    },
    businessInfoModal() {
      external_jquery_default()(".modal_address_here").fadeIn();
    },
    businessInfoModalCls() {
      external_jquery_default()(".modal_address_here").fadeOut();
    },
    sellerAccModal() {
      external_jquery_default()(".modal_address_here").fadeIn();
    },
    sellerAccModalCls() {
      external_jquery_default()(".modal_address_here").fadeOut();
    }
  }
});
// CONCATENATED MODULE: ./pages/seller/seller-profile.vue?vue&type=script&lang=js&
 /* harmony default export */ var seller_seller_profilevue_type_script_lang_js_ = (seller_profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/seller/seller-profile.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(161)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  seller_seller_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2f7ba529",
  "e13ec2c6"
  
)

/* harmony default export */ var seller_profile = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LogoAndPayment: __webpack_require__(56).default,DesktopViewOption: __webpack_require__(57).default,Footer: __webpack_require__(52).default})


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("7fc38d74", content, true, context)
};

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=476ebada&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<footer>", "</footer>", [_vm._ssrNode("<div class=\"mobile_view\">", "</div>", [_vm._ssrNode("<div class=\"f_posi\">", "</div>", [_vm._ssrNode("<div style=\"height: 20px;\"></div> "), _vm._ssrNode("<div class=\"m_footer\">", "</div>", [_vm._ssrNode("<div class=\"f_option\">", "</div>", [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/all-categorys"
    }
  }, [_c('div', {
    staticClass: "circle"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa-solid fa-table-cells-large"
  }), _vm._v(" "), _c('p', [_vm._v("Category")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-whichlist"
    }
  }, [_c('div', {
    staticClass: "circle"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa-solid fa-heart"
  }), _vm._v(" "), _c('p', [_vm._v("Wishlist")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"active\">", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('div', {
    staticClass: "circle"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa-solid fa-house"
  }), _vm._v(" "), _c('p', [_vm._v("Home")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/cart"
    }
  }, [_c('div', {
    staticClass: "circle"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa-solid fa-cart-shopping"
  }), _vm._v(" "), _c('p', [_vm._v("Cart")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-profile"
    }
  }, [_c('div', {
    staticClass: "circle"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa-solid fa-user"
  }), _vm._v(" "), _c('p', [_vm._v("User")])])], 1)], 2)])])], 2)]), _vm._ssrNode(" <div class=\"footer_top desktop_view\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-4 col-md-4 col-sm-12 m-auto\"><div class=\"logo\"><a href=\"#\" class=\"text-white\">Ecommerce <i class=\"fa-regular fa-star\"></i></a></div></div> <div class=\"ccol-lg-4 col-md-4 col-sm-12 m-auto\"><div class=\"newsletter\"><h3>New to Ecommerce</h3> <p>Subscribe to our newsletter to get updates on our latest offers!</p> <div class=\"d-flex\" style=\"position: relative;\"><i class=\"fas fa-envelope\"></i> <input type=\"text\" placeholder=\"Enter email address\" name id class=\"form-control\"> <button type=\"button\">Send</button></div></div></div> <div class=\"col-lg-4 col-md-12 m-auto\"><div class=\"store_app\"><div class=\"d-flex\"><div><i class=\"fa-regular fa-star\"></i></div> <div><h5>DOWNLOAD ECOMMERCE FREE APP</h5> <p>Get access to exclusive offers!</p></div></div> <div class=\"d-flex align-items-center\"><a href=\"#\" target=\"_blank\" role=\"button\" class=\"market-btn a\"><div class=\"d-flex justify-content-between\"><div><img src=\"/images/apple-logo.svg\" alt></div> <div><span class=\"market-button-subtitle\">Download on the</span> <span class=\"market-button-title\">Google Play</span></div></div></a> <a href=\"#\" target=\"_blank\" role=\"button\" class=\"market-btn\"><div class=\"d-flex justify-content-between\"><div><img src=\"/images/google-play-store.svg\" alt></div> <div><span class=\"market-button-subtitle\">Download on the</span> <span class=\"market-button-title\">Google Play</span></div></div></a></div></div></div></div></div></div> "), _vm._ssrNode("<div class=\"footer_links desktop_view\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-3 col-6\">", "</div>", [_vm._ssrNode("<h6>Pages</h6> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/all-categorys"
    }
  }, [_vm._v("All Category")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/category-list"
    }
  }, [_vm._v("Category List")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_vm._v("Product List")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/cart"
    }
  }, [_vm._v("Cart")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/checkout"
    }
  }, [_vm._v("CheckOut")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/payment"
    }
  }, [_vm._v("Payment")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-3 col-6\">", "</div>", [_vm._ssrNode("<h6>Login and service </h6> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("Login & Signup ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/sell-on-ecommerce"
    }
  }, [_vm._v("Sellon")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller-form"
    }
  }, [_vm._v("Seller Register ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "#"
    }
  }, [_vm._v("Offical Store")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-3 col-6\">", "</div>", [_vm._ssrNode("<h6>User Profile </h6> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-profile"
    }
  }, [_vm._v("User Profile")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-orders"
    }
  }, [_vm._v("User Orders")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-whichlist"
    }
  }, [_vm._v("User Wishlist")])], 1)], 2), _vm._ssrNode(" <h6>Policy </h6> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/refund"
    }
  }, [_vm._v("Refund")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/return-and-replacement"
    }
  }, [_vm._v("Return and Replacement")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-3 col-6\">", "</div>", [_vm._ssrNode("<h6>Seller Dashboard</h6> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-products"
    }
  }, [_vm._v("Seller Products")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-products-post"
    }
  }, [_vm._v("Add Products")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/Seller/seller-orders"
    }
  }, [_vm._v("Seller Orders")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-customer-returns"
    }
  }, [_vm._v("Customer Returns")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-profile"
    }
  }, [_vm._v("Seller Profile")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-account-setting"
    }
  }, [_vm._v("Account Settings")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-3 col-6\">", "</div>", [_vm._ssrNode("<h6>Make Money With Us </h6> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/sell-on-ecommerce"
    }
  }, [_vm._v("Sell On Ecommerce")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/affiliate/affiliate-programe"
    }
  }, [_vm._v("Affiliate Programme")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/affiliate/affiliate-programe-register"
    }
  }, [_vm._v("Affiliate Programme Register")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/affiliate/affiliate-dashboard"
    }
  }, [_vm._v("Affiliate Dashboard")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/affiliate/affiliate-transfer"
    }
  }, [_vm._v("Transfer Affiliate Money")])], 1)], 2)], 2)], 2), _vm._ssrNode(" <div class=\"row\"><div class=\"col-lg-3 col-md-3 col-sm-3 col-12\"><div class=\"social_links\"><h6>Join us on </h6> <ul><li><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-youtube\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-instagram\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a></li></ul></div></div> <div class=\"col-lg-3 col-md-3 col-sm-3 col-12\"><div class=\"social_links\"><h6>Payment Method &amp; Delivery partners </h6> <ul><li><a href=\"#\"><i class=\"fa-brands fa-cc-mastercard\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-cc-visa\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-stripe\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-dhl\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-cc-discover\"></i></a></li></ul></div></div></div>")], 2), _vm._ssrNode(" <div class=\"container\"><div class=\"btm_links bg-transparent\"><div class=\"row\"><div class=\"col-9 m-auto text-center\"><div class=\"payment_part\"><a href=\"#\" class=\"a_link active\">Ecommerce</a> <a href=\"#\" class=\"a_link\">PaymentOption</a> <a href=\"#\" class=\"a_link\">PaymentOption</a> <a href=\"#\" class=\"a_link\">PaymentOption</a></div></div></div></div></div>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=476ebada&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "75052f44"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(52).default})


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoginPopup.vue?vue&type=template&id=3e58ccba&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"login_popup\">", "</div>", [_vm._ssrNode("<div class=\"popup_box_modal\">", "</div>", [_vm._ssrNode("<div><div class=\"row\"><div class=\"col-6 ms-auto text-end\"><button class=\"btn_edit close_login\"><i class=\"fa-solid fa-x\"></i></button></div></div></div> <div class=\"popup_title\"><h1>Login</h1> <p>Login and get access to all the features</p></div> "), _vm._ssrNode("<div>", "</div>", [_c('center', [_c('span', {
    staticClass: "show_error text-danger"
  })]), _vm._ssrNode(" "), _vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\">", "</form>", [_vm._ssrNode("<div class=\"input_group\">" + (_vm.errors.email ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</span>" : "<!---->") + " <input type=\"text\" placeholder=\"Email\"" + _vm._ssrAttr("value", _vm.login.email) + "> <i class=\"fa-solid fa-user\"></i></div> <div class=\"input_group\">" + (_vm.errors.password ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.password[0])) + "</span>" : "<!---->") + " <input type=\"password\" placeholder=\"Password\"" + _vm._ssrAttr("value", _vm.login.password) + "> <i class=\"toggle-password fa-solid fa-eye\"></i></div> "), _vm._ssrNode("<div class=\"d-flex justify-content-between align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"d-flex align-items-center d-none\"><input type=\"checkbox\" id=\"remeber\"><label for=\"remeber\">Remember me</label></div> "), _c('nuxt-link', {
    attrs: {
      "to": "/forget-password"
    }
  }, [_vm._v("Forget Password")])], 2), _vm._ssrNode(" <div><button type=\"submit\" class=\"btn_logins\">Login</button></div> "), _vm._ssrNode("<div class=\"d-flex\">", "</div>", [_vm._ssrNode("<p style=\"font-size: 12px !important;\">", "</p>", [_vm._ssrNode("Don't have Account? "), _c('nuxt-link', {
    staticClass: "btn_signup",
    attrs: {
      "to": "/login",
      "type": "button"
    }
  }, [_vm._v("SignUp")])], 2)])], 2)], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LoginPopup.vue?vue&type=template&id=3e58ccba&

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(32);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoginPopup.vue?vue&type=script&lang=js&

/* harmony default export */ var LoginPopupvue_type_script_lang_js_ = ({
  data() {
    return {
      loading: false,
      login: {
        email: '',
        password: ''
      },
      notifmsg: '',
      errors: {}
      // loggedIn: false,
    };
  },

  mounted() {},
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    }
  },
  methods: {
    closePopup() {
      external_jquery_default()(".login_popup").fadeOut();
    },
    gotoCheckOut() {
      this.$router.push('/checkout');
    },
    async customerLogin() {
      try {
        external_jquery_default()(".show_error").html("");
        const postData = {
          email: this.login.email,
          password: this.login.password
        };
        let {
          data
        } = await this.$axios.post('/auth/login', postData);
        await this.$auth.setUserToken(data.access_token);
        if (data.role_id === 3) {
          return this.$router.push('/seller/seller-dashboard');
        } else if (data.role_id === 2) {
          return this.$router.push('/user/user-profile');
        } else {
          console.warn('Unsupported role_id:', data.role_id);
        }
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Has been successfully login...",
          showConfirmButton: false,
          timer: 1500
        });

        //this.loginForm.reset();
      } catch (err) {
        console.log(err);
        console.error('Login error:', err);
        if (err.response && err.response.status === 401) {
          external_jquery_default()(".show_error").html("Invalid credentials. Please try again.");
        } else {
          external_jquery_default()(".show_error").html('An error occurred. Please try again later.');
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/LoginPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LoginPopupvue_type_script_lang_js_ = (LoginPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LoginPopup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LoginPopupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2e7edc06"
  
)

/* harmony default export */ var LoginPopup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoAndPayment_vue_vue_type_style_index_0_id_00d3e9f8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoAndPayment_vue_vue_type_style_index_0_id_00d3e9f8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoAndPayment_vue_vue_type_style_index_0_id_00d3e9f8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoAndPayment_vue_vue_type_style_index_0_id_00d3e9f8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoAndPayment_vue_vue_type_style_index_0_id_00d3e9f8_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".payment_part a{color:#000;font-size:12px;font-weight:400;margin-right:10px;text-transform:capitalize;transition:all .4s ease-in-out}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LogoAndPayment.vue?vue&type=template&id=00d3e9f8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"links desktop_view\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-3\">", "</div>", [_vm._ssrNode("<div class=\"web_part\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/sell-on-ecommerce"
    }
  }, [_c('i', {
    staticClass: "fa-regular fa-star"
  }), _vm._v("Sell On Ecommerce")])], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-9\">", "</div>", [_vm._ssrNode("<div class=\"payment_part\">", "</div>", [_c('nuxt-link', {
    staticClass: "a_link",
    class: {
      active: _vm.$route.path === '/allbrands'
    },
    attrs: {
      "to": "/allbrands"
    }
  }, [_vm._v("All Brands")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "a_link",
    class: {
      active: _vm.$route.path === '/allshop'
    },
    attrs: {
      "to": "/allshop"
    }
  }, [_vm._v("All Shops")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "a_link",
    class: {
      active: _vm.$route.path === '/coupons'
    },
    attrs: {
      "to": "/coupons"
    }
  }, [_vm._v("Coupons")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "a_link",
    class: {
      active: _vm.$route.path === '/flas-sale'
    },
    attrs: {
      "to": "/flas-sale"
    }
  }, [_vm._v("Flash Sale")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "a_link",
    class: {
      active: _vm.$route.path === '/today-deal'
    },
    attrs: {
      "to": "/today-deal"
    }
  }, [_vm._v("Todays Deal ")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "a_link",
    class: {
      active: _vm.$route.path === '/charity'
    },
    attrs: {
      "to": "/charity"
    }
  }, [_vm._v("Charity Products")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "a_link",
    class: {
      active: _vm.$route.path === '/required'
    },
    attrs: {
      "to": "/required"
    }
  }, [_vm._v("Required")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "a_link",
    class: {
      active: _vm.$route.path === '/blog'
    },
    attrs: {
      "to": "/blog"
    }
  }, [_vm._v("Blog")])], 2)])], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LogoAndPayment.vue?vue&type=template&id=00d3e9f8&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LogoAndPayment.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6813187d"
  
)

/* harmony default export */ var LogoAndPayment = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DesktopViewOption.vue?vue&type=template&id=502f2dc4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-lg-3 col-md-2 col-2 desktop_view"
  }, [_vm._ssrNode("<div class=\"menus\">", "</div>", [_vm._ssrNode("<div class=\"dropdown\">", "</div>", [_vm._ssrNode("<button type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"btn dropdown-toggle btn_account b_link\"><i class=\"fas fa-user\"></i> Account\r\n            </button> "), _vm._ssrNode("<ul class=\"dropdown-menu\">", "</ul>", [_vm.loggedIn ? _vm._ssrNode("<span>", "</span>", [_vm._ssrNode("<button type=\"button\" class=\"drop_btn\">Sign Out</button>")], 2) : _vm._ssrNode("<span>", "</span>", [_vm._ssrNode("<button type=\"button\" class=\"drop_btn\">Sign In</button> "), _c('nuxt-link', {
    staticClass: "drop_btn text-white",
    attrs: {
      "to": "/login",
      "type": "button"
    }
  }, [_vm._v("Signup")])], 2), _vm._ssrNode(" "), _vm.loggedIn ? _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": _vm.getProfileLink()
    }
  }, [_vm._v("MY Account")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn && _vm.userRole === 3 ? _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/seller/seller-orders"
    }
  }, [_vm._v("Orders")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn && _vm.userRole === 2 ? _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/user/user-orders"
    }
  }, [_vm._v("Orders")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn && _vm.userRole === 2 ? _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/user/user-whichlist"
    }
  }, [_vm._v("Wishlist")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn && _vm.userRole === 3 ? _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/seller/seller-wishlist"
    }
  }, [_vm._v("Wishlist")])], 1) : _vm._e()], 2)], 2), _vm._ssrNode(" <div class=\"dropdown\"><button type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"btn dropdown-toggle\"><i class=\"fas fa-circle-question\"></i> Help\r\n            </button> <ul class=\"dropdown-menu\"><li><a href=\"#\" class=\"dropdown-item\">Help Center </a></li> <li><a href=\"#\" class=\"dropdown-item\">Place An Order</a></li> <li><a href=\"#\" class=\"dropdown-item\">Payment Option </a></li> <li><a href=\"#\" class=\"dropdown-item\">Truck an order </a></li> <li><a href=\"#\" class=\"dropdown-item\">Cancel an order </a></li> <li><a href=\"#\" class=\"dropdown-item\">Return &amp; Refund </a></li> <button type=\"button\" class=\"drop_btn\">live Chart </button></ul></div> "), _c('Nuxt-link', {
    staticClass: "cart_count",
    attrs: {
      "to": "/cart"
    }
  }, [_c('i', {
    staticClass: "fas fa-cart-shopping"
  }), _c('span', {
    staticStyle: {
      "top": "-16px"
    }
  }, [_vm._v(_vm._s(_vm.itemCount))]), _vm._v("Cart")])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"login_popup\">", "</div>", [_vm._ssrNode("<div class=\"popup_box_modal\">", "</div>", [_vm._ssrNode("<div><div class=\"row\"><div class=\"col-6 ms-auto text-end\"><button class=\"btn_edit close_login\"><i class=\"fa-solid fa-x\"></i></button></div></div></div> <div class=\"popup_title\"><h1>Login</h1> <p>Login and get access to all the features</p></div> "), _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<div>", "</div>", [_c('center', [_c('span', {
    staticClass: "show_error text-danger"
  })]), _vm._ssrNode(" "), _vm._ssrNode("<form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\">", "</form>", [_vm._ssrNode("<div class=\"input_group\">" + (_vm.errors.email ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</span>" : "<!---->") + " <input type=\"text\" placeholder=\"Email\"" + _vm._ssrAttr("value", _vm.login.email) + "> <i class=\"fa-solid fa-user\"></i></div> <div class=\"input_group\">" + (_vm.errors.password ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.password[0])) + "</span>" : "<!---->") + " <input type=\"password\" placeholder=\"Password\"" + _vm._ssrAttr("value", _vm.login.password) + "> <i class=\"toggle-password fa-solid fa-eye\"></i></div> "), _vm._ssrNode("<div class=\"d-flex justify-content-between align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"d-flex align-items-center d-none\"><input type=\"checkbox\" id=\"remeber\"><label for=\"remeber\">Remember me</label></div> "), _c('nuxt-link', {
    attrs: {
      "to": "/forget-password"
    }
  }, [_vm._v("Forget Password")])], 2), _vm._ssrNode(" <div><button type=\"submit\" class=\"btn_logins\">Login</button></div> "), _vm._ssrNode("<div class=\"d-flex\">", "</div>", [_vm._ssrNode("<p style=\"font-size: 12px !important;\">", "</p>", [_vm._ssrNode("Don't have Account? "), _c('nuxt-link', {
    staticClass: "btn_signup",
    attrs: {
      "to": "/login",
      "type": "button"
    }
  }, [_vm._v("SignUp")])], 2)])], 2)], 2)])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DesktopViewOption.vue?vue&type=template&id=502f2dc4&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/LoginPopup.vue + 4 modules
var LoginPopup = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DesktopViewOption.vue?vue&type=script&lang=js&


/* harmony default export */ var DesktopViewOptionvue_type_script_lang_js_ = ({
  components: {
    LoginPopup: LoginPopup["default"]
  },
  // middleware: "auth",
  data() {
    return {
      login: {
        email: '',
        password: ''
      },
      cart: [],
      itemCount: 0,
      limit: 12,
      id: '',
      categories: [],
      errors: []
    };
  },
  async mounted() {
    this.$eventBus.$on('cartItemCountUpdated', this.handleCartItemCountUpdated);
    this.loadCart();
    await this.fetchData();
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    },
    userRole() {
      return this.$auth.loggedIn ? this.$auth.user.role_id : null;
    }
  },
  methods: {
    async customerLogin() {
      try {
        $(".show_error").html("");
        const postData = {
          email: this.login.email,
          password: this.login.password
        };
        let {
          data
        } = await this.$axios.post('/auth/login', postData);
        await this.$auth.setUserToken(data.access_token);
        if (data.role_id === 3) {
          return this.$router.push('/seller/seller-dashboard');
        } else if (data.role_id === 2) {
          return this.$router.push('/user/user-profile');
        } else {
          console.warn('Unsupported role_id:', data.role_id);
        }
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Has been successfully login...",
          showConfirmButton: false,
          timer: 1500
        });

        //this.loginForm.reset();
      } catch (err) {
        console.log(err);
        console.error('Login error:', err);
        if (err.response && err.response.status === 401) {
          $(".show_error").html("Invalid credentials. Please try again.");
        } else {
          $(".show_error").html('An error occurred. Please try again later.');
        }
      }
    },
    getProfileLink() {
      // Generate the profile link based on the user's role_id
      return this.userRole === 3 ? '/seller/seller-profile' : '/user/user-profile';
    },
    openLoginModal() {
      $(".login_popup").fadeIn();
    },
    closePopup() {
      $(".login_popup").fadeOut();
    },
    loadCart() {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.cart = JSON.parse(savedCart);
      }
      let itemCount = 0;
      this.cart.forEach(item => {
        itemCount += parseInt(item.quantity);
      });
      this.itemCount = itemCount;
    },
    handleCartItemCountUpdated(itemCount) {
      // This method will be called when the event is emitted from ComponentA
      console.log('Received  DesktopViewOptions Com.:', itemCount);
      // Update the local data property with the received itemCount
      this.itemCount = itemCount;
    },
    async fetchData() {
      const response = await this.$axios.get(`/unauthenticate/getCategoryList`);
      this.categories = response.data;
    },
    getUser() {
      let user = this.$store.state.auth.user;
      console.log("Users data: " + user);
    },
    async logout() {
      await this.$auth.logout();
    }
  }
});
// CONCATENATED MODULE: ./components/DesktopViewOption.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DesktopViewOptionvue_type_script_lang_js_ = (DesktopViewOptionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/DesktopViewOption.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DesktopViewOptionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "549c5c7a"
  
)

/* harmony default export */ var DesktopViewOption = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common_MobileSidebar.vue?vue&type=template&id=c4ebd79a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "side_nav"
  }, [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"sidenav_title\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/user-profile"
    }
  }, [_c('h6', [_vm._v("My Ecommerce Account")]), _c('i', {
    staticClass: "fa-solid fa-chevron-right"
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<ul>", "</ul>", [_vm.loggedIn ? _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/user-orders"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-box"
  }), _vm._v("Order")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn ? _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/my-reviews"
    }
  }, [_c('i', {
    staticClass: "fa-regular fa-comment-dots"
  }), _vm._v("Pending Reviews")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn ? _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "#"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-ticket-simple"
  }), _vm._v("Voucher ")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.loggedIn ? _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/user/user-whichlist"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-heart"
  }), _vm._v("Save items ")])], 1) : _vm._e()], 2)], 2)]), _vm._ssrNode(" "), _vm._l(_vm.categories, function (category) {
    return _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"sidenav_title\">", "</div>", [_c('Nuxt-link', {
      attrs: {
        "to": "/category/all-categorys"
      }
    }, [_c('h6', [_vm._v(_vm._s(category.name))]), _vm._v(" "), _c('p', [_vm._v("See all")])])], 1), _vm._ssrNode(" <ul>" + _vm._ssrList(category.children, function (childCategory) {
      return "<li><a href=\"#\"><i class=\"fa-solid fa-mobile-screen-button\"></i>" + _vm._ssrEscape(" " + _vm._s(childCategory.name)) + "</a></li>";
    }) + "</ul>")], 2)]);
  }), _vm._ssrNode(" <div class=\"row\"><div class=\"col-12\"><ul><li><a href=\"#\">Contact Us</a></li> <li><a href=\"#\">Terms and condition</a></li></ul></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common_MobileSidebar.vue?vue&type=template&id=c4ebd79a&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common_MobileSidebar.vue?vue&type=script&lang=js&

/* harmony default export */ var Common_MobileSidebarvue_type_script_lang_js_ = ({
  data() {
    return {
      limit: 12,
      categories: []
    };
  },
  async mounted() {
    await this.fetchData();
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    }
  },
  methods: {
    redirectCategory(slug) {
      this.$router.push({
        path: '/category/category-list',
        query: {
          slug: slug
        }
      });
    },
    redirectCategory(slug) {
      this.$router.push({
        path: '/category/category-list',
        query: {
          slug: slug
        }
      });
    },
    async fetchData() {
      const response = await this.$axios.get(`/unauthenticate/getCategoryList`);
      this.categories = response.data;
    }
  }
});
// CONCATENATED MODULE: ./components/Common_MobileSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Common_MobileSidebarvue_type_script_lang_js_ = (Common_MobileSidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Common_MobileSidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Common_MobileSidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "79cebae9"
  
)

/* harmony default export */ var Common_MobileSidebar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common_MiniTabNavbar.vue?vue&type=template&id=485eb692&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"nav_bar desktop_view\">", "</div>", [_vm._ssrNode("<button type=\"button\" class=\"btn_menu\"><i class=\"fa-solid fa-bars-staggered\"></i></button> "), _vm._ssrNode("<div class=\"nav_menu nav_op\">", "</div>", [_vm._ssrNode("<nav>", "</nav>", [_vm._ssrNode(_vm._ssrList(_vm.categories, function (category, index) {
    return "<ul>" + (index < _vm.limit ? "<li><a href=\"#\" class=\"d-flex justify-content-between align-items-center\"><div class=\"d-flex align-items-center\"><i class=\"fa-solid fa-list\"></i>" + _vm._ssrEscape("\r\n                                " + _vm._s(category.name)) + "</div> <i class=\"fa-solid fa-angle-right\"></i></a> <div class=\"sub_menu\">" + (category.children && category.children.length > 0 ? "<div class=\"row\">" + _vm._ssrList(category.children, function (childCategory) {
      return "<div class=\"col-4\"><h6><a href=\"#\">" + _vm._ssrEscape(" " + _vm._s(childCategory.name)) + "</a></h6> " + (childCategory.children && childCategory.children.length > 0 ? "<ul>" + _vm._ssrList(childCategory.children, function (inSubCategory) {
        return "<li><a href=\"#\">" + _vm._ssrEscape(_vm._s(inSubCategory.name)) + "</a></li>";
      }) + "</ul>" : "<!---->") + "</div>";
    }) + "</div>" : "<!---->") + "</div></li>" : "<!---->") + "</ul>";
  }) + " "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    staticClass: "d-flex justify-content-between",
    attrs: {
      "to": "/category/all-categorys"
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "/images/cat_svg/more-100.png",
      "alt": ""
    }
  }), _vm._v("Other Categories")]), _vm._v(" "), _c('div', [_c('i', {
    staticClass: "fa-solid fa-angle-right"
  })])])], 1)])], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common_MiniTabNavbar.vue?vue&type=template&id=485eb692&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common_MiniTabNavbar.vue?vue&type=script&lang=js&

/* harmony default export */ var Common_MiniTabNavbarvue_type_script_lang_js_ = ({
  data() {
    return {
      limit: 12,
      categories: []
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    redirectCategory(slug) {
      this.$router.push({
        path: '/category/category-list',
        query: {
          slug: slug
        }
      });
    },
    async fetchData() {
      const response = await this.$axios.get(`/unauthenticate/getCategoryList`);
      this.categories = response.data;
    }
  }
});
// CONCATENATED MODULE: ./components/Common_MiniTabNavbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Common_MiniTabNavbarvue_type_script_lang_js_ = (Common_MiniTabNavbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Common_MiniTabNavbar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Common_MiniTabNavbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0a6b89fd"
  
)

/* harmony default export */ var Common_MiniTabNavbar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Common_MobileSearchProduct.vue?vue&type=template&id=541f2510&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"search_form_modal\"><div class=\"search_box_main\"><div class=\"bar_search\"><div><a class=\"close_search_modal\"><i class=\"fa-solid fa-arrow-left\"></i></a></div> <div><input type=\"text\" name placeholder=\"Search Product, Brands, Categories\" id></div> <div><button type=\"submit\"><i class=\"fa-solid fa-magnifying-glass\"></i></button></div></div> <ul><li><img src=\"/images/product(1).jpg\" alt> <a href=\"product-details.html\">Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!</a></li> <li><img src=\"/images/product(1).jpg\" alt> <a href=\"product-details.html\">Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!</a></li></ul></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Common_MobileSearchProduct.vue?vue&type=template&id=541f2510&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Common_MobileSearchProduct.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "03cb5874"
  
)

/* harmony default export */ var Common_MobileSearchProduct = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("1eb94e2e", content, true, context)
};

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_leftsidebar_vue_vue_type_style_index_0_id_0f4af44c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_leftsidebar_vue_vue_type_style_index_0_id_0f4af44c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_leftsidebar_vue_vue_type_style_index_0_id_0f4af44c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_leftsidebar_vue_vue_type_style_index_0_id_0f4af44c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_leftsidebar_vue_vue_type_style_index_0_id_0f4af44c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading-indicator[data-v-0f4af44c]{background-color:hsla(0,0%,100%,.8);height:100%;left:0;position:fixed;top:0;width:100%;z-index:9999}.loader-container[data-v-0f4af44c],.loading-indicator[data-v-0f4af44c]{align-items:center;display:flex;justify-content:center}.loader-container[data-v-0f4af44c]{flex-direction:column;height:100vh;position:relative}.loader-text[data-v-0f4af44c]{margin:0}.loader-top[data-v-0f4af44c]{top:0}.loader-bottom[data-v-0f4af44c]{bottom:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seller/seller-leftsidebar.vue?vue&type=template&id=0f4af44c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"user_sidebar\" data-v-0f4af44c>", "</div>", [_vm._ssrNode("<div class=\"user_page_list\" data-v-0f4af44c>", "</div>", [_vm._ssrNode("<ul data-v-0f4af44c>", "</ul>", [_vm._ssrNode("<li data-v-0f4af44c>", "</li>", [_c('NuxtLink', {
    attrs: {
      "to": '/business/' + _vm.business_name_slug,
      "exact": ""
    }
  }, [_vm._v("My Shop")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/seller/seller-dashboard'
  }) + " data-v-0f4af44c>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-dashboard",
      "exact": ""
    }
  }, [_vm._v("Dashboard ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/seller/seller-products'
  }) + " data-v-0f4af44c>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-products",
      "exact": ""
    }
  }, [_vm._v("Products ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/seller/seller-products-post'
  }) + " data-v-0f4af44c>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-products-post",
      "exact": ""
    }
  }, [_vm._v("Add Products ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/seller/seller-orders'
  }) + " data-v-0f4af44c>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-orders",
      "exact": ""
    }
  }, [_vm._v("Orders ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/seller/seller-wishlist'
  }) + " data-v-0f4af44c>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-wishlist",
      "exact": ""
    }
  }, [_vm._v("Wishlist ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/seller/seller-wallet'
  }) + " data-v-0f4af44c>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-wallet",
      "exact": ""
    }
  }, [_vm._v("Wallet")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/seller/seller-profile'
  }) + " data-v-0f4af44c>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-profile",
      "exact": ""
    }
  }, [_vm._v("Profile information")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/seller/seller-comission-history'
  }) + " data-v-0f4af44c>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-comission-history",
      "exact": ""
    }
  }, [_vm._v("Comission History")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/seller/seller-payment-history'
  }) + " data-v-0f4af44c>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-payment-history",
      "exact": ""
    }
  }, [_vm._v("Payment History")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass(null, {
    active: _vm.$route.path === '/seller/seller-account-setting'
  }) + " data-v-0f4af44c>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-account-setting",
      "exact": ""
    }
  }, [_vm._v("Account Settings")])], 1), _vm._ssrNode(" <li data-v-0f4af44c><a href=\"#\" data-v-0f4af44c>LogOut </a></li>")], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/seller/seller-leftsidebar.vue?vue&type=template&id=0f4af44c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seller/seller-leftsidebar.vue?vue&type=script&lang=js&
/* harmony default export */ var seller_leftsidebarvue_type_script_lang_js_ = ({
  middleware: 'auth',
  data() {
    return {
      loading: false,
      business_name_slug: '',
      notifmsg: '',
      orders: [],
      errors: {}
    };
  },
  mounted() {
    this.defaultLoading();
  },
  methods: {
    async defaultLoading() {
      this.loading = true;
      await this.$axios.post(`/auth/me`).then(response => {
        // Seller Account Info
        this.business_name_slug = response.data.business_name_slug;
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
    },

    logout() {
      this.$auth.logout();
      localStorage.removeItem('jwtToken');
      this.$router.push('/');
    }
  }
});
// CONCATENATED MODULE: ./pages/seller/seller-leftsidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var seller_seller_leftsidebarvue_type_script_lang_js_ = (seller_leftsidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/seller/seller-leftsidebar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  seller_seller_leftsidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0f4af44c",
  "31d02669"
  
)

/* harmony default export */ var seller_leftsidebar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=seller-profile.js.map