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
    <section class="main_content ">
        <div class="container">

            <h2 class="text-center">{{ business_name }}</h2>
            <!-- bannar slider  -->
            <div class="store_bannar">
                <img src="/images/Slider_fold.jpg" class="img-fluid" alt="">
                <div class="store_details">
                    <div class="row">
                        <div class="col-sm-3 text-center m-auto justify-content-center">
                            <div class="img_box">

                                <span v-if="isObjectNotEmpty(business_logo)">
                                    <img :src="business_logo" class="img-fluid" alt="">
                                </span>
                                <!-- If business_logo is an empty object or not provided, show a default image -->
                                <span v-else>
                                    <img src="/images/user-100.png" class="img-fluid" alt="">
                                </span>

                            </div>
                            <div class="ratings">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star "></span>
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="store_information">
                                <ul>
                                    <li>
                                        <a href="#"><i class="fa-solid fa-location-dot"></i>{{ business_address }} </a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa-solid fa-phone"></i> {{ business_phone }}</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa-regular fa-envelope"></i> {{ business_email }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <center>
                <div class="loading-indicator" v-if="loading">
                    <div class="loader-container">
                        <center class="loader-text">Loading...</center>
                        <img src="/loader/loader.gif" alt="Loader" />
                    </div>
                </div>
            </center>
            <!-- Top deals  -->
            <div class="row">
                <div class="col-12">
                    <div class="top_selling">
                        <div class="row mb-2">
                            <div class="col-6">
                                <div class="sell_title">
                                    <h5>Top Deals </h5>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div v-for="(item, index) in slidersImg" :key="index" class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6">
                                <nuxt-link :to="`/product-details/${item.slug}`">
                                    <div class="sell_itm">
                                        <img :src="item.thumnail" class=" img-fluid" alt="">
                                        <h5>{{ item.name }}</h5>
                                        <h6>Price: {{ item.price }}</h6>
                                        <p v-if="item.discount !==0"><strike>${{ item.discount }}</strike></p>
                                    </div>
                                </nuxt-link>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- top deals end here  -->

            <!-- ads bannar 3 img  -->
            <div class="row">
                <div class="col-12">
                    <div class="deal_foryou">

                        <div class="row">
                            <div class="col-4">
                                <a href="#">
                                    <img src="/images/deal(1).jpg" class="img-fluid" alt="">
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="#">
                                    <img src="/images/deal(2).jpg" class="img-fluid" alt="">
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="#">
                                    <img src="/images/deal(1).jpg" class="img-fluid" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ads bannar 2 img  -->
            <div class="row">
                <div class="col-12">
                    <div class="deal_foryou">
                        <div class="row">
                            <div class="col-6">
                                <a href="#">
                                    <img src="/images/deal(1).jpg" class="img-fluid" alt="">
                                </a>
                            </div>
                            <div class="col-6">
                                <a href="#">
                                    <img src="/images/deal(2).jpg" class="img-fluid" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- phone accessories part start here  -->
            <div class="row">
                <div class="col-12">
                    <div class="top_selling">
                        <div class="row mb-2">
                            <div class="col-6">
                                <div class="sell_title">
                                    <h5>Phone accessories </h5>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <div class="owl-carousel product_slider">
                                <div class="swiper-slide">
                                    <a href="product-details.html">
                                        <div class="sell_itm">
                                            <img src="/images/product(1).jpg" class=" img-fluid" alt="">
                                            <span>-10%</span>
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                            <h6>Price: 2,000TK</h6>
                                            <h6><strike>Price: 2,000TK</strike></h6>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="product-details.html">
                                        <div class="sell_itm">
                                            <img src="/images/product(2).jpg" class=" img-fluid" alt="">
                                            <span>-100%</span>
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                            <h6>Price: 2,000TK</h6>
                                            <h6><strike>Price: 2,000TK</strike></h6>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="product-details.html">
                                        <div class="sell_itm">
                                            <img src="/images/product(3).jpg" class=" img-fluid" alt="">
                                            <span>-59%</span>
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                            <h6>Price: 2,000TK</h6>
                                            <h6><strike>Price: 2,000TK</strike></h6>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="product-details.html">
                                        <div class="sell_itm">
                                            <img src="/images/product(4).jpg" class=" img-fluid" alt="">
                                            <span>-55%</span>
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                            <h6>Price: 2,000TK</h6>
                                            <h6><strike>Price: 2,000TK</strike></h6>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="product-details.html">
                                        <div class="sell_itm">
                                            <img src="/images/product(5).jpg" class=" img-fluid" alt="">
                                            <span>-50%</span>
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                            <h6>Price: 2,000TK</h6>
                                            <h6><strike>Price: 2,000TK</strike></h6>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="product-details.html">
                                        <div class="sell_itm">
                                            <img src="/images/product(6).jpg" class=" img-fluid" alt="">
                                            <span>-80%</span>
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                            <h6>Price: 2,000TK</h6>
                                            <h6><strike>Price: 2,000TK</strike></h6>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="product-details.html">
                                        <div class="sell_itm">
                                            <img src="/images/product(7).jpg" class=" img-fluid" alt="">
                                            <span>-90%</span>
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                            <h6>Price: 2,000TK</h6>
                                            <h6><strike>Price: 2,000TK</strike></h6>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="product-details.html">
                                        <div class="sell_itm">
                                            <img src="/images/product(8).jpg" class=" img-fluid" alt="">
                                            <span>-10%</span>
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                            <h6>Price: 2,000TK</h6>
                                            <h6><strike>Price: 2,000TK</strike></h6>
                                        </div>
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <!-- phone accessories part end here  -->

            <!-- video ads section  -->
            <div class="video_ads">
                <iframe src="https://www.youtube.com/embed/0pTqynKiki4" frameborder="0"></iframe>
            </div>

            <!-- product grid part start here  -->
            <div class="row">
                <div class="col-12">
                    <div class="product_section">
                        <div class="row px-2">
                            <!-- sidebar fillter  -->
                            <div class="col-md-4 desktop_view">
                                <div class="left_side_product">
                                    <div class="category_list">
                                        <h6>Category</h6>
                                        <ul>
                                            <li>
                                                <a href="#">Computing</a>
                                            </li>
                                            <li>
                                                <a href="#">Electronics</a>
                                            </li>
                                            <li>
                                                <a href="#">Phone & tablates</a>
                                            </li>
                                            <li>
                                                <a href="#">Fashion</a>
                                            </li>
                                            <li>
                                                <a href="#">Home & office </a>
                                            </li>
                                            <li>
                                                <a href="#">Grocery</a>
                                            </li>
                                            <li>
                                                <a href="#">Health & beauty</a>
                                            </li>

                                            <li>
                                                <a href="#">Baby Product</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="delivery_list">
                                        <h6>Express delivery</h6>
                                        <ul>
                                            <li>
                                                <input type="checkbox"><label for="">DHL </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="delivery_list">
                                        <h6>Shipped from </h6>
                                        <ul>
                                            <li>
                                                <input type="radio" checked name="from" id="from"><label for="from">From Bangladesh </label>
                                            </li>
                                            <li>
                                                <input type="radio" name="from" id="from"><label for="from">From Bangladesh </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="brands_list">
                                        <h6>Brand</h6>
                                        <div class="search_side">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                            <input type="text" class="form-control" placeholder="Search">
                                        </div>
                                        <ul class="brand_scroll">
                                            <li>
                                                <input type="checkbox"><label for="">Addidas </label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">AGM </label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">Apple </label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">Walton </label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">Addidas </label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">AGM </label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">Apple </label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">Walton </label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">Addidas </label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">AGM </label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">Apple </label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">Walton </label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">Addidas </label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">AGM </label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">Apple </label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">Walton </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="price_range">
                                        <div class="sidebr_title">
                                            <h6>Price Range </h6>
                                            <button type="button" class="btn_apply">Apply</button>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div id="slider-range" class="price-filter-range" name="rangeInput"></div>

                                                <div class="d-flex" style="margin:10px auto">
                                                    <input type="number" style="width: 45%;margin: 0px 3px;" min=0 max="9900" oninput="validity.valid||(value='0');" id="min_price" class="price-range-field" />
                                                    <input type="number" style="width: 45%;margin: 0px 3px" min=0 max="10000" oninput="validity.valid||(value='10000');" id="max_price" class="price-range-field" />
                                                </div>

                                                <!-- <button class="price-range-search" id="price-range-submit">Search</button>

                                          <div id="searchResults" class="search-results-block"></div> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="brands_list">
                                        <h6>size</h6>
                                        <div class="search_side">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                            <input type="text" class="form-control" placeholder="Search">
                                        </div>
                                        <ul class="brand_scroll">
                                            <li>
                                                <input type="checkbox"><label for="">XS</label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">S</label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">L</label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">M </label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">XL </label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">XXL </label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">XXL </label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">0-2 Years</label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">2-3 Years</label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">3-5 Years</label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">5-7 Years</label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">7-10 Years</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="brands_list">
                                        <h6>Gender</h6>

                                        <ul class="brand_scroll">
                                            <li>
                                                <input type="checkbox"><label for="">Boys</label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">Girls</label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">Man</label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">Woman</label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">Male</label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">Female</label>
                                            </li>
                                            <li>
                                                <input type="checkbox"><label for="">Teen</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- grid  -->
                            <div class="col-md-8">
                                <div class="product_list">
                                    <div class="title_product">
                                        <div>
                                            <h6>Officail Store Deals</h6>
                                        </div>
                                        <div>
                                            <label for="">Short By:</label>
                                            <select name="" id="">
                                                <option value="">Popularity</option>
                                                <option value="">New arrival</option>
                                                <option value="">Low to High</option>
                                                <option value="">high to low</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="grid_list">
                                        <div>
                                            <p>5,000 product found</p>
                                        </div>
                                        <div class="d-flex">
                                            <a type="button" class="filter_btn mobile_view"><i class="fa-solid fa-sliders"></i></a>
                                            <a href="official-store-list.html"><i class="fa-solid fa-list"></i></a>
                                            <a href="official-store-grid.html" class="active"><i class="fa-solid fa-grip"></i></a>
                                        </div>
                                        <div class="filter_modal">
                                            <div class="row px-4">
                                                <div class="col-6"></div>
                                                <div class="col-6 text-end "><i class="fa-solid fa-x filter_close" style="cursor: pointer;"></i></div>
                                            </div>
                                            <div class="modal_fdiv">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="left_side_product">
                                                            <div class="category_list">
                                                                <h6>Category</h6>
                                                                <ul>
                                                                    <li>
                                                                        <a href="#">Computing</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">Electronics</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">Phone & tablates</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">Fashion</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">Home & office </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">Grocery</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">Health & beauty</a>
                                                                    </li>

                                                                    <li>
                                                                        <a href="#">Baby Product</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="delivery_list">
                                                                <h6>Express delivery</h6>
                                                                <ul>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">DHL </label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="delivery_list">
                                                                <h6>Shipped from </h6>
                                                                <ul>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">From Bangladesh </label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">From Bangladesh </label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="brands_list">
                                                                <h6>Brand</h6>
                                                                <div class="search_side">
                                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                                    <input type="text" class="form-control" placeholder="Search">
                                                                </div>
                                                                <ul class="brand_scroll">
                                                                    <li>
                                                                        <input type="checkbox"><label for="">Addidas </label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">AGM </label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">Apple </label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">Walton </label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">Addidas </label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">AGM </label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">Apple </label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">Walton </label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">Addidas </label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">AGM </label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">Apple </label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">Walton </label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">Addidas </label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">AGM </label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">Apple </label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">Walton </label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="price_range">
                                                                <div class="sidebr_title">
                                                                    <h6>Price Range </h6>
                                                                    <button type="button" class="btn_apply">Apply</button>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div id="slider-range" class="price-filter-range" name="rangeInput"></div>

                                                                        <div class="d-flex" style="margin:10px auto">
                                                                            <input type="number" style="width: 45%;margin: 0px 3px;" min=0 max="9900" oninput="validity.valid||(value='0');" id="min_price" class="price-range-field" />
                                                                            <input type="number" style="width: 45%;margin: 0px 3px" min=0 max="10000" oninput="validity.valid||(value='10000');" id="max_price" class="price-range-field" />
                                                                        </div>

                                                                        <!-- <button class="price-range-search" id="price-range-submit">Search</button>

                                                                  <div id="searchResults" class="search-results-block"></div> -->
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="brands_list">
                                                                <h6>size</h6>
                                                                <div class="search_side">
                                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                                    <input type="text" class="form-control" placeholder="Search">
                                                                </div>
                                                                <ul class="brand_scroll">
                                                                    <li>
                                                                        <input type="checkbox"><label for="">XS</label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">S</label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">L</label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">M </label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">XL </label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">XXL </label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">XXL </label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">0-2 Years</label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">2-3 Years</label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">3-5 Years</label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">5-7 Years</label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">7-10 Years</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="brands_list">
                                                                <h6>Gender</h6>

                                                                <ul class="brand_scroll">
                                                                    <li>
                                                                        <input type="checkbox"><label for="">Boys</label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">Girls</label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">Man</label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">Woman</label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">Male</label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">Female</label>
                                                                    </li>
                                                                    <li>
                                                                        <input type="checkbox"><label for="">Teen</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <a href="product-details.html">
                                                <div class="product_grid">
                                                    <img src="/images/product(1).jpg" class="img-fluid" alt="">
                                                    <span>Free Delivery</span>
                                                    <strong>Official Store </strong>
                                                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, totam!</h1>
                                                    <p>TK 6,500</p>
                                                    <p><strike>TK 6,500</strike> <span>-5%</span></p>
                                                    <div class="d-flex align-items-center">
                                                        <div class="rating">
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star "></i>
                                                        </div>
                                                        <h6>(200)</h6>
                                                    </div>
                                                    <button type="button" class="btn_cart">Add to cart </button>
                                                    <!-- <button type="button" class="btn_sold">SoldOut</button> -->
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <a href="product-details.html">
                                                <div class="product_grid">
                                                    <img src="/images/product(2).jpg" class="img-fluid" alt="">
                                                    <span>Free Delivery</span>
                                                    <strong>Official Store </strong>
                                                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, totam!</h1>
                                                    <p>TK 6,500</p>
                                                    <p><strike>TK 6,500</strike> <span>-5%</span></p>
                                                    <div class="d-flex align-items-center">
                                                        <div class="rating">
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star "></i>
                                                        </div>
                                                        <h6>(200)</h6>
                                                    </div>
                                                    <button type="button" class="btn_cart">Add to cart </button>
                                                    <!-- <button type="button" class="btn_sold">SoldOut</button> -->
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <a href="product-details.html">
                                                <div class="product_grid">
                                                    <img src="/images/product(3).jpg" class="img-fluid" alt="">
                                                    <span>Free Delivery</span>
                                                    <strong>Official Store </strong>
                                                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, totam!</h1>
                                                    <p>TK 6,500</p>
                                                    <p><strike>TK 6,500</strike> <span>-5%</span></p>
                                                    <div class="d-flex align-items-center">
                                                        <div class="rating">
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star "></i>
                                                        </div>
                                                        <h6>(200)</h6>
                                                    </div>
                                                    <button type="button" class="btn_cart">Add to cart </button>
                                                    <!-- <button type="button" class="btn_sold">SoldOut</button> -->
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <a href="product-details.html">
                                                <div class="product_grid">
                                                    <img src="/images/product(4).jpg" class="img-fluid" alt="">
                                                    <span>Free Delivery</span>
                                                    <strong>Official Store </strong>
                                                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, totam!</h1>
                                                    <p>TK 6,500</p>
                                                    <p><strike>TK 6,500</strike> <span>-5%</span></p>
                                                    <div class="d-flex align-items-center">
                                                        <div class="rating">
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star "></i>
                                                        </div>
                                                        <h6>(200)</h6>
                                                    </div>
                                                    <button type="button" class="btn_cart">Add to cart </button>
                                                    <!-- <button type="button" class="btn_sold">SoldOut</button> -->
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <a href="product-details.html">
                                                <div class="product_grid">
                                                    <img src="/images/product(5).jpg" class="img-fluid" alt="">
                                                    <span>Free Delivery</span>
                                                    <strong>Official Store </strong>
                                                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, totam!</h1>
                                                    <p>TK 6,500</p>
                                                    <p><strike>TK 6,500</strike> <span>-5%</span></p>
                                                    <div class="d-flex align-items-center">
                                                        <div class="rating">
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star "></i>
                                                        </div>
                                                        <h6>(200)</h6>
                                                    </div>
                                                    <button type="button" class="btn_cart">Add to cart </button>
                                                    <!-- <button type="button" class="btn_sold">SoldOut</button> -->
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <a href="product-details.html">
                                                <div class="product_grid">
                                                    <img src="/images/product(6).jpg" class="img-fluid" alt="">
                                                    <span>Free Delivery</span>
                                                    <strong>Official Store </strong>
                                                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, totam!</h1>
                                                    <p>TK 6,500</p>
                                                    <p><strike>TK 6,500</strike> <span>-5%</span></p>
                                                    <div class="d-flex align-items-center">
                                                        <div class="rating">
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star "></i>
                                                        </div>
                                                        <h6>(200)</h6>
                                                    </div>
                                                    <button type="button" class="btn_cart">Add to cart </button>
                                                    <!-- <button type="button" class="btn_sold">SoldOut</button> -->
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <a href="product-details.html">
                                                <div class="product_grid">
                                                    <img src="/images/product(7).jpg" class="img-fluid" alt="">
                                                    <span>Free Delivery</span>
                                                    <strong>Official Store </strong>
                                                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, totam!</h1>
                                                    <p>TK 6,500</p>
                                                    <p><strike>TK 6,500</strike> <span>-5%</span></p>
                                                    <div class="d-flex align-items-center">
                                                        <div class="rating">
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star "></i>
                                                        </div>
                                                        <h6>(200)</h6>
                                                    </div>
                                                    <button type="button" class="btn_cart">Add to cart </button>
                                                    <!-- <button type="button" class="btn_sold">SoldOut</button> -->
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <a href="product-details.html">
                                                <div class="product_grid">
                                                    <img src="/images/product(8).jpg" class="img-fluid" alt="">
                                                    <span>Free Delivery</span>
                                                    <strong>Official Store </strong>
                                                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, totam!</h1>
                                                    <p>TK 6,500</p>
                                                    <p><strike>TK 6,500</strike> <span>-5%</span></p>
                                                    <div class="d-flex align-items-center">
                                                        <div class="rating">
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star "></i>
                                                        </div>
                                                        <h6>(200)</h6>
                                                    </div>
                                                    <button type="button" class="btn_cart">Add to cart </button>
                                                    <!-- <button type="button" class="btn_sold">SoldOut</button> -->
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <a href="product-details.html">
                                                <div class="product_grid">
                                                    <img src="/images/product(9).jpg" class="img-fluid" alt="">
                                                    <span>Free Delivery</span>
                                                    <strong>Official Store </strong>
                                                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, totam!</h1>
                                                    <p>TK 6,500</p>
                                                    <p><strike>TK 6,500</strike> <span>-5%</span></p>
                                                    <div class="d-flex align-items-center">
                                                        <div class="rating">
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star checked"></i>
                                                            <i class="fa fa-star "></i>
                                                        </div>
                                                        <h6>(200)</h6>
                                                    </div>
                                                    <button type="button" class="btn_cart">Add to cart </button>
                                                    <!-- <button type="button" class="btn_sold">SoldOut</button> -->
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="pagination">
                                                <ul>
                                                    <li>
                                                        <a href="#"> prv </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="active"> 1 </a>
                                                    </li>
                                                    <li>
                                                        <a href="#"> 2 </a>
                                                    </li>
                                                    <li>
                                                        <a href="#"> 3 </a>
                                                    </li>
                                                    <li>
                                                        <a href="#"> next </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- product grid part end here  -->

            <!-- recent view part start here  -->
            <div class="row">
                <div class="col-12">
                    <div class="top_selling">
                        <div class="row mb-2">
                            <div class="col-6">
                                <div class="sell_title">
                                    <h5>Recent Views</h5>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <div class="owl-carousel product_slider">
                                <div class="swiper-slide">
                                    <a href="product-details.html">
                                        <div class="sell_itm">
                                            <img src="/images/product(1).jpg" class=" img-fluid" alt="">
                                            <span>-10%</span>
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                            <h6>Price: 2,000TK</h6>
                                            <h6><strike>Price: 2,000TK</strike></h6>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="product-details.html">
                                        <div class="sell_itm">
                                            <img src="/images/product(2).jpg" class=" img-fluid" alt="">
                                            <span>-100%</span>
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                            <h6>Price: 2,000TK</h6>
                                            <h6><strike>Price: 2,000TK</strike></h6>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="product-details.html">
                                        <div class="sell_itm">
                                            <img src="/images/product(3).jpg" class=" img-fluid" alt="">
                                            <span>-59%</span>
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                            <h6>Price: 2,000TK</h6>
                                            <h6><strike>Price: 2,000TK</strike></h6>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="product-details.html">
                                        <div class="sell_itm">
                                            <img src="/images/product(4).jpg" class=" img-fluid" alt="">
                                            <span>-55%</span>
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                            <h6>Price: 2,000TK</h6>
                                            <h6><strike>Price: 2,000TK</strike></h6>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="product-details.html">
                                        <div class="sell_itm">
                                            <img src="/images/product(5).jpg" class=" img-fluid" alt="">
                                            <span>-50%</span>
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                            <h6>Price: 2,000TK</h6>
                                            <h6><strike>Price: 2,000TK</strike></h6>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="product-details.html">
                                        <div class="sell_itm">
                                            <img src="/images/product(6).jpg" class=" img-fluid" alt="">
                                            <span>-80%</span>
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                            <h6>Price: 2,000TK</h6>
                                            <h6><strike>Price: 2,000TK</strike></h6>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="product-details.html">
                                        <div class="sell_itm">
                                            <img src="/images/product(7).jpg" class=" img-fluid" alt="">
                                            <span>-90%</span>
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                            <h6>Price: 2,000TK</h6>
                                            <h6><strike>Price: 2,000TK</strike></h6>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="product-details.html">
                                        <div class="sell_itm">
                                            <img src="/images/product(8).jpg" class=" img-fluid" alt="">
                                            <span>-10%</span>
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5>
                                            <h6>Price: 2,000TK</h6>
                                            <h6><strike>Price: 2,000TK</strike></h6>
                                        </div>
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <!-- recent view part end here  -->

        </div>
    </section>
    <!-- Main section end here  -->
    <!-- back to top button  -->
    <div class="back_top">
        <a href="#top"><i class="fa-solid fa-angle-up"></i></a>
    </div>

</div>
</template>

<script>
import $ from 'jquery';
import Common_MobileSidebar from '~/components/Common_MobileSidebar.vue';
import Common_MiniTabNavbar from '~/components/Common_MiniTabNavbar.vue';
import Common_MobileSearchProduct from '~/components/Common_MobileSearchProduct.vue';
export default {
    components: {
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,

    },

    head: {
        title: 'My Business',
    },

    async asyncData({
        params
    }) {
        const productSlug = params.slug;
        return {
            //cart
            loading: false,
            pro_row: '',
            productSlug: '',
            business_owner_name: '',
            business_name: '',
            business_register_num: '',
            business_address: '',
            business_logo: '',
            business_email: '',
            business_phone: '',
            slidersImg: []
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.initCarousel();
        });
        this.fetchData();
    },

    methods: {
        isObjectNotEmpty(obj) {
            return Object.keys(obj).length > 0;
        },
        async fetchData() {
            const prosulg = this.$route.params.slug; //this.$route.query.slug;
            this.loading = true;
            const response = await this.$axios.get(`/unauthenticate/getSeller/${prosulg}`);
            this.business_owner_name = response.data.business_owner_name;
            this.business_name = response.data.business_name;
            this.business_register_num = response.data.business_register_num;
            this.business_address = response.data.business_address;
            this.business_logo = response.data.business_logo;
            this.business_email = response.data.business_email;
            this.business_phone = response.data.business_phone;
            this.slidersImg = response.data.slidersImg;
            this.loading = false;
        },

        initCarousel() {
            // Main slider box
            new Swiper(".cat_slider_box", {
                slidesPerView: 5,
                spaceBetween: 10,
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 5
                    },
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 5
                    },
                    377: {
                        slidesPerView: 2,
                        spaceBetween: 5
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 5
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 5
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 5
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    }
                }
            });

        }

    },

}
</script>

<style scoped>
.cat_box {
    position: relative;
    /* margin: 0px 5px; */
    border-radius: 5px;
    width: 100%;
    max-width: 250px;
    overflow: hidden;
    max-height: 320px;
}

.cat_box a {
    height: 100%;
    width: 100%;
    display: block;
}

.cat_box a img {
    width: 100%;
    height: 100%;
}

.cat_box::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #000;
    width: 100%;
    height: 50%;
    background: linear-gradient(0deg, #000000c7, transparent);
}

.top_search_box {
    background: #fff;
    box-shadow: 0 0 20px #ededed;
    padding: 0px;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-top: 10px;
}

.loading-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

/* For Loader */
.loader-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
}

.loader-text {
    margin: 0;
    /* Remove default margin */
}

.loader-top {
    top: 0;
}

.loader-bottom {
    bottom: 0;
}
</style>
