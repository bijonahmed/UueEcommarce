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

        <section class="main_content">

            <div class="container">
                <form @submit.prevent="placeOrder()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-md-8">

                            <div class="items_details">
                                <h5>Happy Shopping</h5>
                                <div class="row">
                                    <div class="col-12">
                                        <center>
                                            <div class="loading-indicator" v-if="loading">
                                                <div class="lodcontainer">
                                                    <center class="loader-text">Loading...</center>
                                                    <img src="/loader/loader.gif" alt="Loader" />
                                                </div>
                                            </div>
                                        </center>
                                        <!-- start -->

                                        <table class="table w-100" style="width: 100%; font-size: 12px;">
                                            <thead>
                                                <tr>

                                                    <th scope="col">Product Name</th>
                                                    <th scope="col">Images</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in cart" :key="item.product.id">
                                                    <td>
                                                        <nuxt-link :to="`/product-details/${item.product.pro_slug}`">{{
                    item.product.product_name }}</nuxt-link>
                                                    </td>
                                                    <td><img :src="item.product.thumnail_img" class="img-thumbnail"
                                                            style="width: 50px; height:10%;"></td>
                                                    <td>{{ item.quantity }} x ${{ item.product.price }}</td>
                                                    <td><button type="button" @click="removeFromCart(item.product)"><i
                                                                class="fa-solid fa-trash-can"></i></button></td>
                                                </tr>

                                            </tbody>
                                        </table>

                                        <!-- end  -->

                                    </div>

                                </div>
                                <div class="sub_total">
                                    <div class="row">

                                        <div class="col-12">
                                            <div class="s_item_sub">
                                                <p>{{ itemCount }} item(s). Subtotal: {{ subtotal }} TK</p>
                                                <!-- <span>Save 262 TK</span> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="delivery_addreess">
                                <strong>BILLING DETAILS</strong>
                                <div v-if="errors" style="text-align: center;">
                                    <ul style="font-size: 14px;">
                                        <li v-for="(error, field) in errors" :key="field">
                                            <span class="text-danger">{{ error[0] }}</span>
                                        </li>
                                    </ul>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="group ">
                                            <input type="text" class="input" v-model="insertdata.name" />
                                            <span class="text-danger" v-if="errors.name"><small>{{ errors.name[0]
                                                    }}</small></span>
                                            <span class="highlight"></span>
                                            <span class="bar"></span>
                                            <label>Name</label>

                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="group ">
                                            <input type="text" class="input" v-model="insertdata.email" />
                                            <span class="text-danger" v-if="errors.email"><small>{{ errors.email[0]
                                                    }}</small></span>
                                            <span class="highlight"></span>
                                            <span class="bar"></span>
                                            <label>Email</label>

                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="group ">
                                            <input type="text" class="input" v-model="insertdata.phone_number" />
                                            <span class="text-danger" v-if="errors.phone_number"><small>{{
                    errors.phone_number[0] }}</small></span>
                                            <span class="highlight"></span>
                                            <span class="bar"></span>
                                            <label>Phone</label>

                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="group ">
                                            <input type="text" class="input" v-model="insertdata.address" />
                                            <span class="text-danger" v-if="errors.address"><small>{{ errors.address[0]
                                                    }}</small></span>
                                            <span class="highlight"></span>
                                            <span class="bar"></span>
                                            <label>Address</label>

                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="group ">
                                            <input type="text" class="input" v-model="insertdata.country" />
                                            <span class="text-danger" v-if="errors.country"><small>{{ errors.country[0]
                                                    }}</small></span>
                                            <span class="highlight"></span>
                                            <span class="bar"></span>
                                            <label>Country</label>

                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="group ">
                                            <input type="text" class="input" v-model="insertdata.city" />
                                            <span class="text-danger" v-if="errors.city"><small>{{ errors.city[0]
                                                    }}</small></span>
                                            <span class="highlight"></span>
                                            <span class="bar"></span>
                                            <label>City</label>

                                        </div>
                                    </div>

                                </div>

                                <hr />
                                <div class="different-address-form-trigger">
                                    <input type="checkbox" id="direrent-address-toggle" class="sn-checkbox"
                                        v-model="showDifferentAddress" @click="copybillingAddress">
                                    <label for="direrent-address-toggle">SHIP TO DIFFERENT ADDRESS</label>
                                    <hr />
                                    <div class="row" v-if="showDifferentAddress">
                                        <div class="col-md-6">
                                            <div class="group ">
                                                <input type="text" class="input" v-model="insertdata.shipper_name" />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Name</label>

                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="group ">
                                                <input type="text" class="input" v-model="insertdata.shipper_email" />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Email</label>

                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="group ">
                                                <input type="text" class="input"
                                                    v-model="insertdata.shipper_phone_number" />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Phone</label>

                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="group ">
                                                <input type="text" class="input" v-model="insertdata.shipper_address" />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Address</label>

                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="group ">
                                                <input type="text" class="input" v-model="insertdata.shipper_country" />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>Country</label>

                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="group ">
                                                <input type="text" class="input" v-model="insertdata.shipper_city" />
                                                <span class="highlight"></span>
                                                <span class="bar"></span>
                                                <label>City</label>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="cart_sidebar">
                                <div class="d-flex align-items-center justify-content-between">
                                    <p>Ecommerce Voucher</p>
                                    <!-- <strong>{{ coupon.name }}</strong> -->
                                </div>

                                <form @submit.prevent="getCouponData()" id="coupon" action="">
                                    <div class=" d-flex align-items-center">
                                        <input type="text" style="font-size: 12px;border: none !important; border-bottom: 1px solid #900C3F !important;" v-model="coupons.couponCode"
                                            class="form-control me-2 rounded-0" placeholder="Enter Your Promo Code ">
                                        <button class="btn_confirm h-100 rounded-0"
                                            style="border: 1px solid;">Submit</button>
                                    </div>
                                    <p class="text-success msg mt-2" style="font-size: 12px;">Valid</p>
                                </form>

                                <div class="pirce_summary">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <strong>Order Summary</strong>
                                                </td>
                                                <td>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>Items Total</strong></td>
                                                <td>{{ itemCount }}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Delivery Fee </strong></td>
                                                <td>100 TK</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Total Payment</strong></td>
                                                <td>{{ subtotal + 100 }} TK</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <span v-if="cart.length > 0">
                                        <button type="submit" class="btn_cart text-center"
                                            style="visibility: unset; background-color: #900C3F; color: #fff; margin-top: 10px;">Place
                                            Order</button>
                                    </span>
                                    <span v-else>
                                        <center>Please add to cart.</center>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
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
import RecentView from '~/components/RecentView.vue';

export default {
    middleware: "auth",
    components: {
        Common_MobileSidebar,
        Common_MiniTabNavbar,
        Common_MobileSearchProduct,
        RecentView
    },
    head: {
        title: 'Checkout',
    },
    data() {
        return {
            insertdata: {
                name: '',
                address: '',
                email: '',
                phone_number: '',
                country: '',
                city: '',
                //ship
                shipper_name: '',
                shipper_email: '',
                shipper_phone_number: '',
                shipper_address: '',
                shipper_country: '',
                shipper_city: '',

            },
            coupons: {
                couponCode: '',
            },
            loading: false,
            email: '',
            showDifferentAddress: false,
            differentAddressField: '', // Initialize different address field if needed
            cart: [],
            notifmsg: '',
            invidecodeError: '',
            errors: {},
            itemCount: 0,
            subtotal: 0,
            updatedQuantity: 0,
            customer_id: '',
            coupon: '',
        };
    },

    computed: {
        loggedIn() {
            if (!$auth.loggedIn) {
                this.$router.push('/checkout');
            } else {
                this.$router.push('/');
            }
            return this.$auth.loggedIn;

        }
    },
    mounted() {
        this.defaultLoadingData();
        this.calculateSubtotal();
        this.loadCart();
        this.cartItemCount();
        this.subtotal = this.calculateSubtotal();
        this.openPromo();

        if (process.client) {
            $(document).ready(function () {
                $(".filter_btn").on('click', function () {
                    $(".filter_modal").show();
                });
                $(".filter_close").on('click', function () {
                    $(".filter_modal").hide();
                });
            })
            // Now you can work with myElement
        }
    },
    methods: {

        getCouponData() {
            const formData = new FormData();
            formData.append('couponCode', this.coupons.couponCode);

            this.$axios.get(`/unauthenticate/readcoupons/${this.coupons.couponCode}`).then(response => {
                this.coupon = response.data.data;
                $('.msg').fadeIn();
            });
        },

        openPromo() {
            $(".btn_promo").on("click", function () {
                $(".promo").fadeIn();
            });
            $(".modal_close").on("click", function () {
                $(".promo").fadeOut();
            });
        },
        copybillingAddress() {

            this.insertdata.shipper_name = this.insertdata.name;
            this.insertdata.shipper_email = this.insertdata.email;
            this.insertdata.shipper_phone_number = this.insertdata.phone_number;
            this.insertdata.shipper_address = this.insertdata.address;
            this.insertdata.shipper_country = this.insertdata.country;
            this.insertdata.shipper_city = this.insertdata.city;

        },
        defaultLoadingData() {
            this.$axios.get('/auth/showProfileData').then(response => {
                console.log(response.data.data.fname)
                this.insertdata.id = response.data.data.id;
                this.insertdata.name = response.data.data.name;
                this.insertdata.email = response.data.data.email;
                this.insertdata.phone_number = response.data.data.phone_number;
            });
        },

        clearCart() {
            this.loading = true;
            localStorage.removeItem('cart');
            this.cart = [];
            this.cartItemCount();
            setTimeout(() => {
                this.loading = false;
            }, 2000);

        },
        placeOrder() {

            const formData = new FormData();
            formData.append('cart', JSON.stringify(this.cart));
            //Billing
            formData.append('billing_name', this.insertdata.name);
            formData.append('billing_address', this.insertdata.address);
            formData.append('billing_email', this.insertdata.email);
            formData.append('billing_phone_number', this.insertdata.phone_number);
            formData.append('billing_country', this.insertdata.country);
            formData.append('billing_city', this.insertdata.city);
            //Shipping
            formData.append('shipper_name', this.insertdata.shipper_name);
            formData.append('shipper_email', this.insertdata.shipper_email);
            formData.append('shipper_phone_number', this.insertdata.shipper_phone_number);
            formData.append('shipper_address', this.insertdata.shipper_address);
            formData.append('shipper_country', this.insertdata.shipper_country);
            formData.append('shipper_city', this.insertdata.shipper_city);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/order/submitOrder',
                formData, {
                headers,
            }).then((response) => {
                const token = response.data.access_token;
                this.$auth.setUserToken(token);
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                this.clearCart();
                Toast.fire({
                    icon: "success",
                    title: "Order submitted successfully!"
                });
                this.$router.push('/');

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });

        },
        clearCart() {
            this.loading = true;
            localStorage.removeItem('cart');
            this.cart = [];
            this.cartItemCount();
            setTimeout(() => {
                this.loading = false;
            }, 2000);

        },
        updateQuantity(productId, newQuantity) {

            this.loading = true;
            const index = this.cart.findIndex((item) => item.product.id === productId);
            if (index !== -1) {
                this.cart[index].quantity = newQuantity;
                this.saveCart();
                this.calculateSubtotal(); // Optionally recalculate subtotal after updating quantity
                setTimeout(() => {
                    this.loading = false;
                }, 2000);

            }

        },
        loadCart() {
            this.loading = true;
            const savedCart = localStorage.getItem('cart');

            if (savedCart) {
                this.cart = JSON.parse(savedCart);
            }

            let itemCount = 0;
            this.cart.forEach((item) => {
                itemCount += parseInt(item.quantity);
            });
            this.itemCount = itemCount;
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        },
        handleCartItemCountUpdated(itemCount) {
            // This method will be called when the event is emitted from ComponentA
            console.log('Received  DesktopViewOptions Com.:', itemCount);
            // Update the local data property with the received itemCount
            this.itemCount = itemCount;
        },

        removeFromCart(product) {
            this.loading = true;
            const index = this.cart.findIndex((item) => item.product.id === product.id);

            if (index !== -1) {
                if (this.cart[index].quantity > 1) {
                    this.cart[index].quantity -= 1;
                } else {
                    this.cart.splice(index, 1);
                }

                this.saveCart();
                this.calculateSubtotal();
                this.cartItemCount();
                setTimeout(() => {
                    this.loading = false;
                }, 1000);
            }
        },
        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.cart));

        },
        addToCart(productId) {

            const productToAdd = this.prouducts.find((product) => product.id === productId);
            const existingItem = this.cart.find((item) => item.product.id === productId);

            if (existingItem) {
                // existingItem.quantity += 1;
            } else {
                this.cart.push({
                    product: productToAdd,
                    quantity: 1
                });
            }

            this.saveCart();
            this.cartItemCount();
            this.calculateSubtotal();
        },
        cartItemCount() {
            //  this.loading = true;
            let itemCount = 0;
            this.cart.forEach((item) => {
                itemCount += parseInt(item.quantity);
            });
            this.itemCount = itemCount;
            console.log('Emitting cartItemCountUpdated event with itemCount:', this.itemCount);
            this.$eventBus.$emit('cartItemCountUpdated', this.itemCount);

        },
        calculateSubtotal() {
            //  this.loading = true;
            let subtotal = 0;
            this.cart.forEach((item) => {
                const product = item.product;
                console.log(`Quantity: ${item.quantity}, Price: ${product.price}`);
                const priceWithoutCommas = product.price.replace(/,/g, '');
                const priceAsNumber = parseFloat(priceWithoutCommas);
                if (!isNaN(item.quantity) && !isNaN(priceAsNumber)) {
                    subtotal += item.quantity * priceAsNumber;
                } else {
                    console.error('Invalid quantity or price:', item.quantity, product.price);
                }
                // console.log(`Intermediate Subtotal: ${subtotal}`);
            });

            //console.log(`Final Subtotal: ${subtotal}`);
            return this.subtotal = subtotal;
            //return subtotal;
        },
    },
};
</script>
