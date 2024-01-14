<template>
<div>
    <LogoAndPayment />
    <!-- navbar section start here  -->
    <section class="search_bar">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-3 col-md-4 col-4">
                    <div class="logo nav_tab">
                        <!-- mobile view sidebar  -->
                        <button type="button" class="btn_menu mobile_view" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i class="fa-solid fa-bars-staggered"></i></button>
                        <!-- sidebar offcanvas  -->
                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header">
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Ecommerce</h5>
                            </div>
                            <div class="offcanvas-body">
                                <!-- offf canvas start here  -->
                                <Common_MobileSidebar />
                            </div>
                        </div>
                        <!-- mini tab view navbar here  -->
                        <Common_MiniTabNavbar />
                        <!-- nav end  -->
                        <Nuxt-link to="/">Ecommerce <i class=" fa-regular fa-star"></i></Nuxt-link>
                    </div>
                </div>
                <div class="col-6 desktop_view mini_tab_hide">
                    <form action="" class="">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" name="" id="" placeholder="Search Product" class="form-control"> <button type="button">Search</button>
                    </form>
                </div>
                <!-- desktop_view options  -->
                <DesktopViewOption />
                <!-- mobile view options  -->
                <div class="col-4 ms-auto  mobile_view">
                    <div class="mobile_nav_option">
                        <a class="search_form"><i class="fa-solid fa-magnifying-glass"></i></a>
                    </div>
                </div>
                <!-- search modal  -->
                <Common_MobileSearchProduct />
            </div>
        </div>
    </section>
    <!-- Main section start here  -->

    <!-- Main section start here  -->
    <section class="main_content ">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <SellerLeftsidebar />

                </div>
                <div class="col-md-8">

                    <div class="top_filter">
                        <h4>Product Management</h4>
                        <div class="returns_alert">
                            <div class="alert alert-primary"> <i class="fa-solid fa-exclamation"></i>Since we have upgraded the product management, For a better experience, the older operation of file uploading on the current page would be offline in a few days. You can experience the new one in the menu 'Products / Bulk Add/Edit Products'
                                Your products are not yet visible to buyers. Please add address to make them visible</div>
                        </div>
                        <ul>
                            <li>
                                <button type="button " class="active">All</button>
                            </li>
                            <li>
                                <button type="button">Online(0)</button>
                            </li>
                            <li>
                                <button type="button">Draft(0)</button>
                            </li>
                            <li>
                                <button type="button">Pending QC(0)</button>
                            </li>
                            <li>
                                <button type="button">Out Of stock(0)</button>
                            </li>
                            <li>
                                <button type="button">Inactive(0)</button>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <Nuxt-link to="/seller/seller-products-post" class="btn_download mb-2">Add New </Nuxt-link>
                    </div>
                    <div class="top_search_box">
                        <form action="">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Product Id ">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="Product Name ">
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <input type="text" placeholder="SKU ">
                                </div>

                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                                    <button type="button" class="btn_cart" style="visibility: unset; color: #fff; width: fit-content;">Search </button>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div class="main_profile">
                        <div class="user_details order_details_table">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Product ID</th>
                                        <th>Price </th>
                                        <th>Stock</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="table_product">
                                            <div>
                                                <img src="/images/product(1).jpg" class="img-fluid" alt="">

                                            </div>
                                            <div>
                                                <a href="/product-details.html">
                                                    <h6>ID:101,Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illo et amet perferendis mollitia excepturi similique numquam, possimus sit nesciunt repellat perspiciatis. Alias sunt iure nisi debitis adipisci molestias quod?</h6>
                                                </a>
                                            </div>
                                        </td>

                                        <td>199TK</td>
                                        <td>122</td>
                                        <td>Active</td>

                                    </tr>

                                </tbody>
                            </table>
                            <!-- pagination -->
                            <center><button class="btn_cart" style="visibility: unset; color: #fff; width: fit-content;">Load More...</button></center>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- END Main Section here -->
    <!-- back to top button  -->
    <div class="back_top">
        <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
    </div>
    <Footer />
</div>
</template>

<script>
import $ from 'jquery';
import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
import Common_MobileSearchProduct from '~/components/Common_MobileSearchProduct.vue';
import SellerLeftsidebar from '~/pages/seller/seller-leftsidebar.vue';
export default {
    middleware: 'auth',
    components: {
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        SellerLeftsidebar,
    },
    head: {
        title: 'Products List & Inventory',
    },

}
</script>

<style scoped>
.top_search_box {
    background: #fff;
    box-shadow: 0 0 20px #ededed;
    padding: 0px;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-top: 10px;
}
</style>
