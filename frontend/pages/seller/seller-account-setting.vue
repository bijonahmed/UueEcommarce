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
                    <ul class="tab_btns nav-pills mb-3 mt-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-here-tab" data-bs-toggle="pill" data-bs-target="#seller_account" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Change Photos</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-business" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Login Information</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="seller_account" role="tabpanel" aria-labelledby="pills-here-tab">
                            <div class="main_profile">
                                <div class="user_details">
                                    <div class="d-flex align-items-center justify-content-between mb-3">
                                        <h4>Profile image and Logo </h4>

                                    </div>

                                    <form @submit.prevent="updateLogo()" id="userSubmitFrm" class="forms-sample" enctype="multipart/form-data">
                                        <div>
                                            <h6>Profile Image</h6>
                                            <!-- <p>{{ message }}</p> -->
                                            <div class="imagePreview" id="imagePreview"></div>
                                            <div>
                                                <label for="">Upload Profile Image</label>
                                                <input id="uploadFile" type="file" ref="file" @change="onFileSelected" class="img form-control uploadFile " accept="image/gif, image/jpeg, image/png" />
                                                <img :src="profileLogo" alt="Profile Logo" style="height:80px;width:100px;" />
                                            </div>
                                        </div>
                                        <button type="submit" class="btn_cart" style="visibility: unset; width: fit-content; margin-top: 10px;">Upload</button>
                                    </form>

                                    <form @submit.prevent="updateLogo()" id="userSubmitFrm" class="forms-sample" enctype="multipart/form-data">
                                        <div class="mt-4">
                                            <h6>Business Logo</h6>
                                            <div class="imagePreview1" id="imagePreview"></div>

                                            <div>
                                                <label for="">Upload Profile Image</label>
                                                <input id="uploadFile1" type="file" ref="business_logo" @change="onFileSelectedbusiness" class="img form-control uploadFile1" accept="image/gif, image/jpeg, image/png" />
                                                <img :src="businessLogo" alt="Business Logo" style="height:80px;width:100px;" />
                                            </div>
                                            <button type="submit" class="btn_cart" style="visibility: unset; width: fit-content; margin-top: 10px;">--Upload</button>

                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-business" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div class="main_profile">
                                <div class="user_details">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h4>Login Information </h4>
                                        <button type="button" class="btn_edit" @click="popupOpen"><i class="fa-solid fa-pen"></i></button>
                                        <!-- profile update modal here  -->
                                        <div class="modal_address_here edit_div">
                                            <div class="address_form_modal">
                                                <div class="d-flex justify-content-between">
                                                    <p>Login Information </p>
                                                    <button type="button" class="btn-close btn_address_close" @click="popupOpenClose"></button>
                                                </div>
                                                <form @submit.prevent="profileupdate()" id="userSubmitFrm" class="forms-sample" enctype="multipart/form-data">
                                                    <div>
                                                        <label for="name" class="d-flex">Email <p class="text-danger d-block">*</p></label>
                                                        <input type="text" v-model="userdata.email" class="form-control">
                                                        <span class="text-danger" v-if="errors.email"><small>{{ errors.email[0] }}</small></span>
                                                    </div>
                                                    <div class="">
                                                        <label for="">Phone </label> <br>
                                                        <input type="text" class="form-control mobile_code" v-model="userdata.phone_number">
                                                        <span class="text-danger" v-if="errors.phone_number"><small>{{ errors.phone_number[0] }}</small></span>
                                                    </div>
                                                    <div class="mt-3">
                                                        <button type="submit" class="btn_cart mt-2" style="visibility: unset;">Save</button>
                                                    </div>

                                                </form>
                                            </div>

                                        </div>
                                        <!-- modal end  -->
                                    </div>
                                    <div class="user_info">
                                        <h5>Email</h5>
                                        <p>{{ userdata.email }}</p>
                                    </div>

                                    <div class="user_info">
                                        <h5>Phone number </h5>
                                        <p>{{ userdata.phone_number }}</p>
                                    </div>
                                    <div class="user_info">
                                        <h5>Password <nuxt-link to="/seller/change-password" class="btn_edit"><i class="fa-solid fa-pen"></i></nuxt-link>
                                        </h5>
                                        <p>***********</p>
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
        title: 'Account Setting',
    },

    data() {
        return {
            loading: false,
            userdata: {
                id: '',
                email: '',
                phone_number: '',

            },
            passdata: {
                password: '',
                password_confirmation: '',
            },
            notifmsg: '',
            profileLogo: '',
            businessLogo: '',
            message: '',
            orders: [],
            errors: {},

        }
    },
    mounted() {
        this.defaultLoading();
    },
    methods: {

        onFileSelected() {
            this.file = this.$refs.file.files[0];
        },
        onFileSelectedbusiness() {
            this.business_logo = this.$refs.business_logo.files[0];
        },
        updateLogo() {
            const formData = new FormData();
            formData.append('file', this.file);
            formData.append('business_logo', this.business_logo);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/auth/updateLogo',
                formData, {
                    headers
                }).then((res) => {

                this.profileLogo = res.data.profileLogo;
                this.businessLogo = res.data.businessLogo;
                this.message = res.data.message;

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logo has been successfully updated",
                    showConfirmButton: false,
                    timer: 1500
                });

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });

        },

        profileupdate() {
            const formData = new FormData();
            formData.append('phone_number', this.userdata.phone_number);
            formData.append('email', this.userdata.email);

            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/auth/updateprofile',
                formData, {
                    headers
                }).then((res) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your profile has been successfully updated",
                    showConfirmButton: false,
                    timer: 1500
                });
                this.popupOpenClose();
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
                    this.userdata.email = response.data.email;
                    this.userdata.phone_number = response.data.phone_number;
                    this.profileLogo = response.data.profileLogo;
                    this.businessLogo = response.data.businessLogo;
                    this.message = response.data.message;

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
        popupOpen() {
            $(".modal_address_here").fadeIn();
        },

        popupOpenClose() {
            $(".modal_address_here").fadeOut();
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
