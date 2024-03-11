<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div v-for="(category, index) in categories" :key="index" class="top_selling">
                    <div class="row mb-2">
                        <div class="sell_title stock_deals">
                            <div>
                                <h5>{{ category.name }}</h5>
                            </div>
                            <div>
                                <nuxt-link :to="'category/category-grid?slug=' + category.slug" class="catLink">See
                                    All<i class="fas fa-arrow-right"></i></nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="container text-center my-3">
                        <div class="loading-indicator" v-if="loading" style="text-align: center;">
                            <div class="loader-container">
                                <center class="loader-text">Loading...</center>
                                <img src="/loader/loader.gif" alt="Loader" />
                            </div>
                        </div>
                        <div class="slider-container">
                            <div class="slider" ref="slider">
                                <div class="slide" v-for="item in category.products" :key="item.product_id">
                                    <!-- <nuxt-link :to="`/product-details/${item.slug}`">
                                    <img :src="item.thumnail" alt="" style="height: 150px; width: 150px;" />
                                    <h1 class="text-center">{{ item.name }}</h1>
                                    <div class="d-flex align-items-center">
                                        <p class="text-center">${{ item.price }}</p>
                                        <span>{{ item.discount }}%</span>
                                    </div>
                                </nuxt-link> -->
                                    <div class="product_grid text-start">
                                        <nuxt-link :to="`/product-details/${item.slug}`">
                                            <img :src="item.thumnail" class="img-fluid" loading="lazy">

                                            <span v-if="item.free_shopping == 1">Free Delivery</span>
                                            <strong>Official Store </strong>
                                            <h1>{{ item.name }}</h1>
                                            <div v-if="item.discount_status == 1">
                                                <p>${{ item.price - (item.price * item.discount / 100) }}</p>
                                                <p><strike>${{ item.price }}</strike> <span>{{ item.discount }}%</span> </p>
                                            </div>
                                            <div v-else-if="item.discount_status == 3">
                                                <p>${{ item.price - (item.price * item.discount / 100) }}</p>
                                                <p><strike>${{ item.price }}</strike> <br>
                                                <p>${{ item.discount }} Discount</p> </p>
                                            </div><div v-else>
                                                <p>${{ item.price }}</p>
                                                <p><strike>${{ item.price }}</strike></p>
                                            </div>

                                        </Nuxt-link>

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
                                    </div>

                                    <!-- <nuxt-link :to="`/product-details/${item.slug}`">
                                        <div class="sell_itm text-start" bis_skin_checked="1">
                                            <img :src="item.thumnail_img" class="img-fluid" alt="product-image">
                                            <span>{{ item.discount }}%</span>
                                            <h5>{{ item.name }}</h5>
                                            <h6> {{ item.price - (item.price * item.discount / 100) }} USD</h6>
                                            <h6><strike> {{ item.price }} USD</strike></h6>
                                        </div>
                                    </Nuxt-link> -->

                                </div>
                                <div class="prev-slide" @click="scrollLeft(index)">&lsaquo;</div>
                                <div class="next-slide" @click="scrollRight(index)">&rsaquo;</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            categoryname: '',
            currentSlide: 0,
            category_slug: '',
            categories: [],
            // slider: [],
            cart: [],
            products: [],
            product: [],
            categories: [],
            pro_count: 0,
            categoryname: '',
        };
    },
    async mounted() {

        this.calculateSubtotal();
        this.loadCart();
        this.cartItemCount();

        await this.initOwlCarousel();
        await this.fetchDefaultProduct();
        this.$nextTick(() => {
            const slider = this.$refs.slider;
        });
    },

    methods: {


        calculateSubtotal() {
            return 0;
        },
        cartItemCount() {
            let itemCount = 0;
            this.cart.forEach((item) => {
                itemCount += item.quantity;
            });
            this.itemCount = itemCount;
            console.log('Emitting cartItemCountUpdated event with itemCount:', this.itemCount);
            this.$eventBus.$emit('cartItemCountUpdated', this.itemCount);

        },
        updateQuantity(productId, newQuantity) {
            const index = this.cart.findIndex((item) => item.product.id === productId);

            if (index !== -1) {
                this.cart[index].quantity = newQuantity;
                this.saveCart();
                this.calculateSubtotal(); // Optionally recalculate subtotal after updating quantity
            }
        },
        addToCart(productId) {
            const productToAdd = this.products.find((product) => product.id === productId);
            //const existingItem = this.cart.find((item) => item.product.id === productId);

            if (productToAdd) {
                this.cart.push({
                    product: productToAdd,
                    quantity: 1
                });
            }

            this.saveCart();
        },

        loadCart() {
            const savedCart = localStorage.getItem('cart');

            if (savedCart) {
                this.cart = JSON.parse(savedCart);
            }
        },
        saveCart() {
            this.loading = true;
            localStorage.setItem('cart', JSON.stringify(this.cart));
            setTimeout(() => {
                this.loading = false;
            }, 2000);

        },


        scrollLeft() {

            if (this.currentSlide > 0) {
                this.currentSlide--;
                this.scrollToCurrentSlide();
            }
        },
        scrollRight() {
            if (this.currentSlide < this.products.length - 1) {
                this.currentSlide++;
                this.scrollToCurrentSlide();
            }

        },
        scrollToCurrentSlide() {
            const slidesContainer = this.$refs.slider;
            slidesContainer.scrollLeft = this.currentSlide * (150 + 10); // Adjust for slide width and margin
        },
        async fetchDefaultProduct() {
            this.loading = true;
            const category_id = 25;
            await this.$axios.get('/unauthenticate/searchProductCategory', {
                params: {
                    category_id: category_id,
                    // Add more parameters as needed
                }
            }).then(response => {
                // console.log("======" + response.data.result);
                this.products = response.data.result;
                this.product = response.data.result;
                this.categories = response.data.result;
            })
                .catch(error => {
                    // Handle error
                })
                .finally(() => {
                    this.loading = false; // Hide loader after response
                });;

        },
        async initOwlCarousel() {
            const slider = this.$el.querySelector('.slider');
            if (!slider) {
                console.error('Slider element not found');
                return;
            }
            let isDown = false;
            let startX;
            let scrollLeft;

            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                startX = e.pageX;
                scrollLeft = slider.scrollLeft;
            });

            slider.addEventListener('mouseleave', () => {
                isDown = false;
            });

            slider.addEventListener('mouseup', () => {
                isDown = false;
            });

            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX;
                const walk = (x - startX) * 3; // Adjust this value for smoother scrolling
                slider.scrollLeft = scrollLeft - walk;
            });
        },
    },
};
</script>
<style>
.catLink {
    font-size: 14px;

}

.catLink i {
    margin-left: 5px;
}
</style>