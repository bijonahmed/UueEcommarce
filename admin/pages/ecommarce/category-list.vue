<template>
<div>
    <!--start page wrapper -->
    <div class="page-wrapper">
        <div class="page-content">
            <!--breadcrumb-->
            <div class="page-breadcrumb d-none d-sm-flex align-items-center">
                <div class="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item">
                                <router-link to="/"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Category List</li>
                        </ol>
                    </nav>
                </div>
                <div class="ms-auto">
                    <div class="btn-group mb-3">

                        <Nuxt-link to="/ecommarce/category-add"><button type="button" class="btn btn-primary" style="margin-right: 10px;"><i class="bx bx-plus"></i>New</button></Nuxt-link>
                        <button type="button" class="btn btn-primary" @click="fetchData"><i class="lni lni-search"></i></button>
                    </div>
                </div>
            </div>
            <!--end breadcrumb-->
            <!-- <span class="loader"></span> -->
            <div class="card">
                <div class="card-body">

                    <div style="display: none;" class="customerSpinner">
                        <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-8">
                            <ul class="nav nav-tabs nav-primary" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link active" data-bs-toggle="tab" href="#primaryhome" role="tab" aria-selected="true">
                                        <div class="d-flex align-items-center">
                                            <div class="tab-icon"><i class='bx bx-link font-18 me-1'></i>
                                            </div>
                                            <div class="tab-title">Active List</div>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" href="#primaryprofile" role="tab" aria-selected="false">
                                        <div class="d-flex align-items-center">
                                            <div class="tab-icon"><i class='bx bx-link font-18 me-1'></i>
                                            </div>
                                            <div class="tab-title">Inactive List</div>
                                        </div>
                                    </a>
                                </li>

                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" href="#commissionlist" role="tab" aria-selected="false">
                                        <div class="d-flex align-items-center">
                                            <div class="tab-icon"><i class='bx bx-link font-18 me-1'></i>
                                            </div>
                                            <div class="tab-title">Commission List</div>
                                        </div>
                                    </a>
                                </li>

                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" href="#productsliders" role="tab" aria-selected="false">
                                        <div class="d-flex align-items-center">
                                            <div class="tab-icon"><i class='bx bx-link font-18 me-1'></i>
                                            </div>
                                            <div class="tab-title">Products Slider</div>
                                        </div>
                                    </a>
                                </li>

                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="primaryhome" role="tabpanel">
                                    <ul>
                                        <li v-for="category in categories" :key="category.id">
                                            <span class="badge bg-dark">{{ category.name }} <span @click="editCategory(category.id)"><i class="bx bx-edit"></i></span></span>

                                            <span style="font-size: 20px;font-weight: bold; color:#db0f0f;" v-if="category.commission !== null">[{{ category.commission }}%]</span>

                                            <TreeView :categories="category.children" v-if="category.children && category.children.length > 0" />
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="primaryprofile" role="tabpanel">
                                    <ul>
                                        <li v-for="category in Inacategories" :key="category.id">
                                            <span class="badge bg-danger">{{ category.name }} <span @click="editCategory(category.id)"><i class="bx bx-edit"></i></span></span>

                                        </li>
                                    </ul>
                                </div>

                                <div class="tab-pane fade" id="commissionlist" role="tabpanel">
                                    <ul v-for="category in categories" :key="category.id">
                                        <li v-if="category.commission !== null">
                                            <span style="font-size: 15px;">{{ category.name }} [{{ category.commission }}%]</span> <span @click="editCategory(category.id)"><i class="bx bx-edit"></i></span>
                                        </li>
                                    </ul>
                                </div>

                                <div class="tab-pane fade" id="productsliders" role="tabpanel">
                                    <div class="card">
                                        <div class="card-body">
                                            <center>This configration only for home pages category sliders</center>
                                            <hr />
                                            <div class="row">

                                                <div class="col-md-8">
                                                    <table class="table table-responsive table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Status</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="productCats in productCat" :key="productCats.id">
                                                                <td>{{ productCats.name }}</td>
                                                                <td>{{ productCats.status === 1 ? 'Active' : 'Inactive' }}</td>
                                                                <td><button @click="removeProSliderCat(productCats.id)">DEL</button></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div class="col-md-4">
                                                    <form @submit.prevent="insertCategoryProSlider()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                                                        <div class="mb-3">
                                                            <label for="category" class="form-label">Select Category</label>
                                                            <select class="form-select" v-model="sliderInsert.select_category_id">
                                                                <option selected="selected">Select a category</option>
                                                                <option v-for="category in subcategories" :key="category.id" :value="category.id">
                                                                    {{ category.name }}
                                                                </option>
                                                            </select>
                                                            <span class="text-danger" v-if="errors.category_id">{{ errors.category_id[0] }}</span>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="product" class="form-label">Status</label>
                                                            <select class="form-select" v-model="sliderInsert.status">
                                                                <option value="1">Active</option>
                                                                <option value="0">Inactive</option>
                                                            </select>
                                                            <span class="text-danger" v-if="errors.status">{{ errors.status[0] }}</span>
                                                        </div>
                                                        <button type="submit" class="btn btn-primary w-100">Submit</button>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->

    <!-- END Modal -->
    <!--end page wrapper -->
</div>
</template>

<script>
import _ from 'lodash';
export default {
    head: {
        title: 'Category List',
    },
    data() {
        return {
            insertdata: {
                id: '',
                name: '',
                status: '',
            },

            sliderInsert: {
                id: '',
                select_category_id: '',
                status: 1,
            },

            notifmsg: '',
            errors: {},
            data: [],
            categories: [],
            Inacategories: [],
            productCat: [],
            subcategories: [],

        };
    },
    async mounted() {
        await this.fetchData();
        await this.fetchInacCatData();
        await this.fetchProducsCategoryData();
    },
    computed: {

    },
    methods: {

        removeProSliderCat(id) {
           
            this.$axios.get(`/category/removeProctCategory`, {
                params: {
                    id: id
                }
            }).then(response => {
                //console.log(`Varient History: ${response.data}`);
                this.fetchProducsCategoryData();
            });
        },

        insertCategoryProSlider() {
            const formData = new FormData();
            formData.append('category_id', this.sliderInsert.select_category_id);
            formData.append('status', this.sliderInsert.status);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/category/categoryProSlidersave',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.fetchProducsCategoryData();
                //    this.$router.push('/ecommarce/category-list');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        success_noti() {
            Lobibox.notify('success', {
                pauseDelayOnHover: true,
                continueDelayOnInactiveTab: false,
                position: 'top right',
                icon: 'bx bx-check-circle',
                msg: 'Your data has been successfully inserted.'
            });
        },
        editCategory(id) {
            this.$router.push({
                path: '/ecommarce/category-edit', // Specify the path to the target page
                query: {
                    id
                } // Pass the parameter as a query parameter
            });
        },
        async fetchData() {
            $(".customerSpinner").show();
            try {
                const response = await this.$axios.get(`/category/getCategoryList`);
                this.categories = response.data;
                $(".customerSpinner").hide();
            } catch (error) {
                console.error(error);
            }
        },

        async fetchInacCatData() {
            $(".customerSpinner").show();
            try {
                const response = await this.$axios.get(`/category/getInacCategoryList`);
                this.Inacategories = response.data;
                $(".customerSpinner").hide();
            } catch (error) {
                console.error(error);
            }
        },

        async fetchProducsCategoryData() {
            $(".customerSpinner").show();
            try {
                const response = await this.$axios.get(`/category/getProductCategoryList`);
                this.productCat = response.data.category;
                this.subcategories = response.data.subcategories;
                $(".customerSpinner").hide();
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>

<style scoped>
/* Add CSS styles for the hover effect */
ul li:hover {
    background-color: #f0f0f0;
    /* Change the background color on hover */
    cursor: pointer;
    /* Change the cursor to a pointer on hover */
}

ul li:hover .bx-edit {
    color: #007bff;
    /* Change the color of the edit icon on hover */
}
</style>
