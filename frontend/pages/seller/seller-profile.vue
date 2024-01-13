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
    <div class="loading-indicator" v-if="loading">
        <div class="loader-container">
            <center class="loader-text">Loading...</center>
            <img src="/loader/loader.gif" alt="Loader" />
        </div>
    </div>
    <!-- Main section start here  -->
    <section class="main_content ">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <SellerLeftsidebar />
                </div>

                <div class="col-md-8">
                    <ul class="tab_btns nav-pills mb-3 mt-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-here-tab" data-bs-toggle="pill" data-bs-target="#seller_account" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Seller Account</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-business" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Business Information</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-warehouse" type="button" role="tab" aria-controls="pills-warehouse" aria-selected="false">WareHouse</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-return" type="button" role="tab" aria-controls="pills-return" aria-selected="false">Return Address</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="seller_account" role="tabpanel" aria-labelledby="pills-here-tab">
                            <div class="main_profile">
                                <div class="user_details">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h4>Seller Account </h4>
                                        <button type="button" class="btn_edit" @click="sellerAccModal"><i class="fa-solid fa-pen"></i></button>
                                        <!-- profile update modal here  -->
                                        <div class="modal_address_here edit_div">
                                            <div class="address_form_modal">
                                                <div class="d-flex justify-content-between">
                                                    <p>Update Seller Details </p>
                                                    <button type="button" class="btn-close btn_address_close" @click="sellerAccModalCls"></button>
                                                </div>
                                                <form action="">
                                                    <div>
                                                        <label for="name">First Name</label>
                                                        <input type="text" class="form-control" v-model="userdata.first_name">
                                                    </div>
                                                    <div>
                                                        <label for="name">Last Name</label>
                                                        <input type="text" class="form-control" v-model="userdata.last_name">
                                                    </div>
                                                    <div>
                                                        <label for="">Email </label>
                                                        <input type="email" v-model="userdata.email" class="form-control">
                                                    </div>
                                                    <div class="">
                                                        <label for="">Phone </label> <br>
                                                        <input type="text" class="form-control mobile_code" v-model="userdata.phone_number">

                                                    </div>
                                                    <div class="mt-3">
                                                        <button type="button" class="btn_cart mt-2" style="visibility: unset;">Save</button>
                                                    </div>

                                                </form>
                                            </div>

                                        </div>
                                        <!-- modal end  -->
                                    </div>
                                    <div class="user_info">
                                        <h5>Seller ID</h5>
                                        <p>{{ userdata.id }}</p>
                                    </div>
                                    <div class="user_info">
                                        <h5>Full Name </h5>
                                        <p>{{ userdata.name }}</p>
                                    </div>
                                    <div class="user_info">
                                        <h5>Email</h5>
                                        <p>{{ userdata.email }}</p>
                                    </div>
                                    <div class="user_info">
                                        <h5>Phone</h5>
                                        <p>{{ userdata.phone_number }}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-business" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div class="main_profile">
                                <div class="user_details">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h4>Business Information </h4>
                                        <button type="button" class="btn_edit"><i class="fa-solid fa-pen"></i></button>
                                        <!-- profile update modal here  -->
                                        <div class="modal_address_here edit_div">
                                            <div class="address_form_modal">
                                                <div class="d-flex justify-content-between">
                                                    <p>Update Business Information </p>
                                                    <button type="button" class="btn-close btn_address_close"></button>
                                                </div>
                                                <form action="">

                                                    <div>
                                                        <label for="name" class="d-flex">Legal Name/Business Owner<p class="text-danger d-block">*</p></label>
                                                        <input type="text" name="name" id="name" class="form-control">
                                                    </div>
                                                    <div>
                                                        <label for="" class="d-flex">Business Legal Form<p class="text-danger d-block">*</p> </label>
                                                        <select name="" id="" class="form-control">
                                                            <option value="" selected disabled>Select One</option>
                                                            <option value="">Limited Liability Company</option>
                                                            <option value="">Public Company</option>
                                                            <option value="">No-minimum capital unlimited liabity of partners, Non-business </option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label for="" class="d-flex">Business Registration Number <p class="text-danger d-block">*</p></label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                    <div>
                                                        <label for="" class="d-flex">Country <p class="text-danger d-block">*</p></label>
                                                        <select name="" id="country" class="form-control">
                                                            <option value="" selected disabled>Select One</option>

                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label for="" class="d-flex">State<p class="text-danger d-block">*</p></label>
                                                        <select name="" id="state" class="form-control">
                                                            <option value="" selected disabled>Select One</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label for="" class="d-flex">City/Town <p class="text-danger d-block">*</p></label>
                                                        <input type="text" value="" class="form-control">
                                                    </div>
                                                    <div>
                                                        <label for="" class="d-flex">Area <p class="text-danger d-block">*</p> </label>
                                                        <input type="text" value="" class="form-control">
                                                    </div>
                                                    <div>
                                                        <label for="" class="d-flex">Id Type <p class="text-danger d-block">*</p></label>
                                                        <select name="" class="form-control" id="">
                                                            <option value="" selected disabled>Select One </option>
                                                            <option value="">National Id </option>
                                                            <option value="">Driving Licence </option>
                                                            <option value="">Passport Number</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label for="" class="d-flex">Id Number <p class="text-danger d-block">*</p> </label>
                                                        <input type="text" value="" class="form-control">
                                                    </div>

                                                    <div class="mt-3">
                                                        <button type="button" class="btn_cart mt-2" style="visibility: unset;">Save</button>
                                                    </div>

                                                </form>
                                            </div>

                                        </div>
                                        <!-- modal end  -->
                                    </div>
                                    <div class="user_info">
                                        <h5>Legal Name/Business Owner</h5>
                                        <p>Jhone Due </p>
                                    </div>

                                    <div class="user_info">
                                        <h5>Business Legal Form </h5>
                                        <p>Limited Liability Company</p>
                                    </div>
                                    <div class="user_info">
                                        <h5>Business Registration number</h5>
                                        <p>74557411654</p>
                                    </div>
                                    <div class="user_info">
                                        <h5>Address </h5>
                                        <p>Road #12, House #ga-129, Banani </p>
                                        <p>Banani, Dhaka-1212, Bangladesh </p>
                                    </div>
                                    <div class="user_info">
                                        <h5>National Id</h5>
                                        <p>74557411654</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-warehouse" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div class="tab-pane fade show active" id="seller_account" role="tabpanel" aria-labelledby="pills-here-tab">
                                <div class="main_profile">
                                    <div class="user_details">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4>WareHouse </h4>
                                            <button type="button" class="btn_edit"><i class="fa-solid fa-pen"></i></button>
                                            <!-- profile update modal here  -->
                                            <div class="modal_address_here edit_div">
                                                <div class="address_form_modal">
                                                    <div class="d-flex justify-content-between">
                                                        <p>WareHouse Address </p>
                                                        <button type="button" class="btn-close btn_address_close"></button>
                                                    </div>
                                                    <form action="">
                                                        <div>
                                                            <label for="name">Full Name </label>
                                                            <input type="text" name="name" id="name" class="form-control">
                                                        </div>
                                                        <div>
                                                            <label for="" class="d-flex">Country <p class="text-danger d-block">*</p></label>
                                                            <select name="" id="country" class="form-control">
                                                                <option value="" selected disabled>Select One</option>

                                                            </select>
                                                        </div>
                                                        <div>
                                                            <label for="" class="d-flex">State<p class="text-danger d-block">*</p></label>
                                                            <select name="" id="state" class="form-control">
                                                                <option value="" selected disabled>Select One</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            <label for="">Email </label>
                                                            <input type="email" value="usermail@mail.com" class="form-control">
                                                        </div>
                                                        <div class="">
                                                            <label for="">Phone </label> <br>
                                                            <input type="text" id="" class="form-control mobile_code" placeholder=" " name="name">
                                                        </div>
                                                        <div class="">
                                                            <label for="">Postal Code </label> <br>
                                                            <input type="text" id="" class="form-control " placeholder="Postal code" name="name">
                                                        </div>

                                                        <div class="mt-3">
                                                            <button type="button" class="btn_cart mt-2" style="visibility: unset;">Save</button>
                                                        </div>

                                                    </form>
                                                </div>

                                            </div>
                                            <!-- modal end  -->
                                        </div>
                                        <div class="user_info">
                                            <h5>Full Name</h5>
                                            <p>Jhone Due</p>
                                        </div>
                                        <div class="user_info">
                                            <h5>Address</h5>
                                            <p>House #165, school road</p>
                                            <p>Dhaka-1212, Bangladesh</p>

                                        </div>
                                        <div class="user_info">
                                            <h5>Email</h5>
                                            <p>useremail@mail.com</p>
                                        </div>
                                        <div class="user_info">
                                            <h5>Phone</h5>
                                            <p>+880 15000000</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-return" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div class="main_profile">
                                <div class="user_details">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h4>Return Address </h4>
                                        <button type="button" class="btn_edit"><i class="fa-solid fa-pen"></i></button>
                                        <!-- profile update modal here  -->
                                        <div class="modal_address_here edit_div">
                                            <div class="address_form_modal">
                                                <div class="d-flex justify-content-between">
                                                    <p>Return Address </p>
                                                    <button type="button" class="btn-close btn_address_close"></button>
                                                </div>
                                                <form action="">
                                                    <div>
                                                        <label for="name">As Warehouse Address </label>
                                                        <div class="d-flex align-items-center">
                                                            <div class="me-2"><input type="radio" name="name" id="name"> <label for=""> Yes</label></div>
                                                            <div><input type="radio" name="name" checked id="name"> <label for=""> No</label></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label for="name">Full Name </label>
                                                        <input type="text" name="name" id="name" class="form-control">
                                                    </div>
                                                    <div>
                                                        <label for="" class="d-flex">Country <p class="text-danger d-block">*</p></label>
                                                        <select name="" id="country" class="form-control">
                                                            <option value="" selected disabled>Select One</option>

                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label for="" class="d-flex">State<p class="text-danger d-block">*</p></label>
                                                        <select name="" id="state" class="form-control">
                                                            <option value="" selected disabled>Select One</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label for="">Email </label>
                                                        <input type="email" value="usermail@mail.com" class="form-control">
                                                    </div>
                                                    <div class="">
                                                        <label for="">Phone </label> <br>
                                                        <input type="text" id="" class="form-control mobile_code" placeholder=" " name="name">
                                                    </div>
                                                    <div class="">
                                                        <label for="">Postal Code </label> <br>
                                                        <input type="text" id="" class="form-control " placeholder="Postal code" name="name">
                                                    </div>

                                                    <div class="mt-3">
                                                        <button type="button" class="btn_cart mt-2" style="visibility: unset;">Save</button>
                                                    </div>

                                                </form>
                                            </div>

                                        </div>
                                        <!-- modal end  -->
                                    </div>
                                    <div class="user_info">
                                        <h5>Full Name</h5>
                                        <p>Jhone Due</p>
                                    </div>
                                    <div class="user_info">
                                        <h5>Address</h5>
                                        <p>House #165, school road</p>
                                        <p>Dhaka-1212, Bangladesh</p>

                                    </div>
                                    <div class="user_info">
                                        <h5>Email</h5>
                                        <p>useremail@mail.com</p>
                                    </div>
                                    <div class="user_info">
                                        <h5>Phone</h5>
                                        <p>+880 15000000</p>
                                    </div>

                                </div>
                            </div>
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
        title: 'Seller Profile',
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
                address_1: '',
                address_2: '',
                address_3: '',
                created_at: null,
            },
            passdata: {
                password: '',
                password_confirmation: '',
            },
            notifmsg: '',
            orders: [],
            errors: {},
        }
    },
    mounted() {

        this.defaultLoading();
        this.loadingOrders();

    },
    methods: {
        saveData() {
            const formData = new FormData();
            formData.append('password', this.passdata.password);
            formData.append('password_confirmation', this.passdata.password_confirmation);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/auth/updatePassword',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                alert("success");
                this.$router.push('/user/user-profile');

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        sellerAccModal() {
            $(".modal_address_here").fadeIn();
        },
        sellerAccModalCls() {
            $(".modal_address_here").fadeOut();
        },

        profileupdate() {
            const formData = new FormData();
            formData.append('name', this.userdata.name);
            formData.append('email', this.userdata.email);
            formData.append('phone_number', this.userdata.phone_number);
            formData.append('address_1', this.userdata.address_1);
            formData.append('address_2', this.userdata.address_2);
            formData.append('address_3', this.userdata.address_3);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/auth/updateprofile',
                formData, {
                    headers
                }).then((res) => {
                $(".profileupdate").fadeOut();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your profile has been successfully updated",
                    showConfirmButton: false,
                    timer: 1500
                });

            });

        },
        async defaultLoading() {

            this.loading = true;
            await this.$axios.post(`/auth/me`).then(response => {
                    this.userdata.id = response.data.id;
                    this.userdata.first_name = response.data.first_name;
                    this.userdata.last_name = response.data.last_name;
                    this.userdata.name = response.data.name;
                    this.userdata.email = response.data.email;
                    this.userdata.phone_number = response.data.phone_number;
                    this.userdata.address = response.data.address;
                    this.userdata.address_1 = response.data.address_1;
                    this.userdata.address_2 = response.data.address_2;
                    this.userdata.address_3 = response.data.address_3;
                    // Assuming response.data.created_at is a date string like "2023-11-18T03:04:53.000000Z"
                    const createdAtDate = new Date(response.data.created_at);

                    // Format the date as "YYYY-MM-DD"
                    const formattedCreatedAt = createdAtDate.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit"
                    }).replace(/-/g, '');

                    this.userdata.created_at = formattedCreatedAt;

                    console.log("Formatted created_at: " + formattedCreatedAt);

                })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
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
    }
}
</script>

<style scoped>
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
