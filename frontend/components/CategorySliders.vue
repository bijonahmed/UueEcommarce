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
                            <nuxt-link :to="'category/category-grid?slug=' + category.slug" class="catLink">See All<i class="fas fa-arrow-right"></i></nuxt-link>
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
                                <nuxt-link :to="`/product-details/${item.slug}`">
                                    <img :src="item.thumnail" alt="" style="height: 150px; width: 150px;" />
                                    <p class="text-center">{{ item.name }}</p>
                                </nuxt-link>
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
            categoryname: '',
            currentSlide: 0,
            category_slug: '',
            categories: [],
            // slider: [],
            loading: false,
            products: [],
        };
    },
    async mounted() {

        await this.initOwlCarousel();
        await this.fetchDefaultProduct();
        this.$nextTick(() => {
            const slider = this.$refs.slider;
        });
    },

    methods: {
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
                    console.log("======" + response.data.result);
                    //this.products = response.data.result;
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
.catLink{
    font-size: 14px;

}
.catLink i{
    margin-left: 5px;
}
</style>