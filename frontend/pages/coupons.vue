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
                            <button type="button" class="btn_menu mobile_view" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i
                                    class="fa-solid fa-bars-staggered"></i></button>
                            <!-- sidebar offcanvas  -->
                            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                                aria-labelledby="offcanvasExampleLabel">
                                <div class="offcanvas-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
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
                            <input type="text" name="" id="" placeholder="Search Product" class="form-control"> <button
                                type="button">Search</button>
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

        <section class="main_content  mt-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="couponsList">
                            <div class="coupon">
                                <div class="ctop">
                                    <h3>Filon Asset Store <a href="#">Visit Store</a></h3>
                                    <p>20% OFF</p>
                                </div>
                                <div class="cmiddle">
                                    <span class="middleCircleLeft"></span>
                                    <hr class="dashLine">
                                    <span class="middleCircleRight"></span>
                                </div>
                                <div class="cbottom">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src="/images/product(1).jpg" class="img-fluid" alt="product">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/images/product(1).jpg" alt="product" class="img-fluid">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/images/product(1).jpg" alt="product" class="img-fluid">
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="copyCode">
                                        <p>Code: <strong>MAS500</strong> </p><button class="btn_copy" @click="copyCode(coupon.code)"><i
                                                class="fa-regular fa-copy"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="coupon">
                                <div class="ctop">
                                    <h3>Filon Asset Store <a href="#">Visit Store</a></h3>
                                    <p>$50.000 OFF</p>
                                </div>
                                <div class="cmiddle">
                                    <span class="middleCircleLeft"></span>
                                    <hr class="dashLine">
                                    <span class="middleCircleRight"></span>
                                </div>
                                <div class="cbottom">
                                    <p>Min Spend $150.000 from Filon Asset Store to get 20% OFF on total orders</p>
                                    <div class="copyCode">
                                        <p>Code: <strong>{{ coupcode }}</strong> </p><button
                                        @click="copyCode(coupon.code)" class="btn_copy"><i
                                                class="fa-regular fa-copy"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="coupon">
                                <div class="ctop">
                                    <h3>Filon Asset Store <a href="#">Visit Store</a></h3>
                                    <p>20% OFF</p>
                                </div>
                                <div class="cmiddle">
                                    <span class="middleCircleLeft"></span>
                                    <hr class="dashLine">
                                    <span class="middleCircleRight"></span>
                                </div>
                                <div class="cbottom">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src="/images/product(1).jpg" class="img-fluid" alt="product">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/images/product(1).jpg" alt="product" class="img-fluid">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/images/product(1).jpg" alt="product" class="img-fluid">
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="copyCode">
                                        <p>Code: <strong>MAS500</strong> </p><button class="btn_copy" @click="copyCode(coupon.code)"><i
                                                class="fa-regular fa-copy"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="coupon">
                                <div class="ctop">
                                    <h3>Filon Asset Store <a href="#">Visit Store</a></h3>
                                    <p>$50.000 OFF</p>
                                </div>
                                <div class="cmiddle">
                                    <span class="middleCircleLeft"></span>
                                    <hr class="dashLine">
                                    <span class="middleCircleRight"></span>
                                </div>
                                <div class="cbottom">
                                    <p>Min Spend $150.000 from Filon Asset Store to get 20% OFF on total orders</p>
                                    <div class="copyCode">
                                        <p>Code: <strong>{{ coupcode }}</strong> </p><button
                                        @click="copyCode(coupon.code)" class="btn_copy"><i
                                                class="fa-regular fa-copy"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="coupon">
                                <div class="ctop">
                                    <h3>Filon Asset Store <a href="#">Visit Store</a></h3>
                                    <p>20% OFF</p>
                                </div>
                                <div class="cmiddle">
                                    <span class="middleCircleLeft"></span>
                                    <hr class="dashLine">
                                    <span class="middleCircleRight"></span>
                                </div>
                                <div class="cbottom">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src="/images/product(1).jpg" class="img-fluid" alt="product">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/images/product(1).jpg" alt="product" class="img-fluid">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/images/product(1).jpg" alt="product" class="img-fluid">
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="copyCode">
                                        <p>Code: <strong>MAS500</strong> </p><button class="btn_copy" @click="copyCode(coupon.code)"><i
                                                class="fa-regular fa-copy"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="coupon">
                                <div class="ctop">
                                    <h3>Filon Asset Store <a href="#">Visit Store</a></h3>
                                    <p>$50.000 OFF</p>
                                </div>
                                <div class="cmiddle">
                                    <span class="middleCircleLeft"></span>
                                    <hr class="dashLine">
                                    <span class="middleCircleRight"></span>
                                </div>
                                <div class="cbottom">
                                    <p>Min Spend $150.000 from Filon Asset Store to get 20% OFF on total orders</p>
                                    <div class="copyCode">
                                        <p>Code: <strong>{{ coupcode }}</strong> </p><button
                                        @click="copyCode(coupon.code)" class="btn_copy"><i
                                                class="fa-regular fa-copy"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="coupon">
                                <div class="ctop">
                                    <h3>Filon Asset Store <a href="#">Visit Store</a></h3>
                                    <p>20% OFF</p>
                                </div>
                                <div class="cmiddle">
                                    <span class="middleCircleLeft"></span>
                                    <hr class="dashLine">
                                    <span class="middleCircleRight"></span>
                                </div>
                                <div class="cbottom">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src="/images/product(1).jpg" class="img-fluid" alt="product">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/images/product(1).jpg" alt="product" class="img-fluid">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/images/product(1).jpg" alt="product" class="img-fluid">
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="copyCode">
                                        <p>Code: <strong>MAS500</strong> </p><button class="btn_copy" @click="copyCode(coupon.code)"><i
                                                class="fa-regular fa-copy"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="coupon">
                                <div class="ctop">
                                    <h3>Filon Asset Store <a href="#">Visit Store</a></h3>
                                    <p>$50.000 OFF</p>
                                </div>
                                <div class="cmiddle">
                                    <span class="middleCircleLeft"></span>
                                    <hr class="dashLine">
                                    <span class="middleCircleRight"></span>
                                </div>
                                <div class="cbottom">
                                    <p>Min Spend $150.000 from Filon Asset Store to get 20% OFF on total orders</p>
                                    <div class="copyCode">
                                        <p>Code: <strong>{{ coupcode }}</strong> </p><button
                                        @click="copyCode(coupon.code)" class="btn_copy"><i
                                                class="fa-regular fa-copy"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
import RecentView from '~/components/RecentView.vue';
import FlashSaleFilter from '~/components/FlashSaleFilter.vue';
import OfficialStoreProductList from '~/components/OfficialStoreProductList.vue';



export default {
    components: {
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        RecentView,
        FlashSaleFilter,
        OfficialStoreProductList,

    },
    head: {
        title: 'Coupns',
    },
    data() {
        return {
            coupcode: "MAS500"
        }
    },
    mounted() {
        // this.copyTestingCode();
    },
    methods: {
        copyCode(code) {
            const tempInput = document.createElement('input');
            tempInput.value = code;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            alert('Code copied to clipboard: ' + code);
        },
    },
}
</script>
    