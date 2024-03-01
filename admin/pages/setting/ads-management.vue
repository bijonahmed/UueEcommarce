<template>
    <div>
        <!--start page wrapper -->
        <div class="page-wrapper">
            <div class="page-content">

                <!--top header banner row-->
                <div class="row">
                    <div class="col-md-8 m-auto">
                        <div class="form_container bg-white p-3">
                            <form @submit.prevent="saveData()" id="formrest" class="forms-sample"
                                enctype="multipart/form-data">
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-6">Home page Top banner Ads</label>
                                    <span class="text-gray d-block mb-2">For better experience user .gif file</span>
                                    <div>
                                        <img id="bannerImage" :src="previewURL" alt="File Preview" class="preview-image">
                                    </div>
                                    <input type="file" class="form-control" @change="handleFileChange($event)" name="image">
                                    <p class="text-gray">Size: 640x33</p>
                                </div>
                                <div class="form-group mb-2">
                                    <label for="status" class="text-dark fs-6">Status</label>
                                    <select v-model="insertdata.status" id="status" class="form-control">
                                        <option value="draft">Draft</option>
                                        <option value="review">Review</option>
                                        <option value="published" selected>Published</option>
                                    </select>
                                </div>
                                <div class="form-group mb-2">
                                    <button type="submit" class="btn-success w-100 py-1 border-0">
                                        <i class="bx bx-check-circle mr-1"></i>Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!--top header banner row-->

                <!--top header banner row-->
                <div class="row">
                    <div class="col-md-8 m-auto">
                        <div class="form_container bg-white p-3">
                            <form @submit.prevent="updateDeals()" id="dealsforyou" class="forms-sample"
                                enctype="multipart/form-data">
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-6">Deals for you ads banner</label>
                                    <span class="text-gray d-block ">For better experience user .gif file</span>
                                    <span class="text-danger d-block mb-2">Upload both image for Update</span>
                                    
                                    <div class="row dealsBanner">
                                        <div class="col-md-6">
                                            <img id="dealsBanner" :src="dealsImageOne" alt="File Preview" class="img-fluid">
                                        </div>
                                        <div class="col-md-6">
                                            <img id="dealsBanner" :src="dealsImageTwo" alt="File Preview" class="img-fluid">
                                        </div>
                                    </div>
                                    <!-- input part  -->
                                    <input type="file" class="form-control mb-2" @change="dealsImage1" ref="imageOne">

                                    <input type="file" class="form-control" @change="dealsImage2" ref="imageTwo">
                                    <p class="text-gray">Size: 572x250</p>
                                </div>
                                <div class="form-group mb-2">
                                    <button type="submit" class="btn-success w-100 py-1 border-0">
                                        <i class="bx bx-check-circle mr-1"></i>Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!--top header banner row-->
            </div>
        </div>
        <!--end page wrapper -->
    </div>
</template>
    
        
<script>
export default {
    head: {
        title: 'Ads Management',
    },
    data() {
        return {
            bannerImage: '',
            dealsImageOne: null,
            dealsImageTwo: null,
            previewURL: null, // To store the preview URL of the selected file

            insertdata: {
                image: null, // To store the selected file
                status: 'published', // To store the selected status                
            },
            updateData: {
                imageOne: null,
                imageTwo: null,
            },
            dealsData: [],
            errors: {},
            bannerData: null,
        };
    },
    mounted() {
        this.fetchBannerData();
    },
    methods: {

        fetchBannerData() {
            this.$axios.get('/setting/bannerTopget').then(response => {
                this.previewURL = response.data.images;
            })
            .catch(error => {
                this.error = error.message;
                console.error('Error fetching Top header banner data:', error);
            });

            this.$axios.get('/setting/getdealsbanner').then(response => {
                this.dealsImageOne = response.data.imageone;
                this.dealsImageTwo = response.data.imagetwo;
                // console.log(response.data.imageone);
            })
            .catch(error => {
                this.error = error.message;
                console.error('Error fetching Deals banner data:', error);
            });
        },

        saveData() {
            const formData = new FormData();
            formData.append('image', this.insertdata.image);
            formData.append('status', this.insertdata.status);
            // console.log(formData);

            // Make a POST request to your API endpoint
            this.$axios.post('/setting/bannerTop', formData)
                .then(response => {
                    // Handle successful response
                    console.log('Data saved successfully:', response.data.images);
                    this.previewURL = response.data.images;
                    Lobibox.notify('success', {
                        pauseDelayOnHover: true,
                        continueDelayOnInactiveTab: false,
                        position: 'top right',
                        icon: 'bx bx-check-circle',
                        msg: 'Your data has been successfully updated.'
                    });
                    // Optionally, you can redirect the user or perform any other action
                })
                .catch(error => {
                    // Handle error
                    console.error('Error saving data:', error);
                    // Check if error.response exists
                    if (error.response) {
                        // If error.response.data exists, it contains error message from server
                        if (error.response.data && error.response.data.errors.image) {
                            Lobibox.notify('error', {
                                pauseDelayOnHover: true,
                                continueDelayOnInactiveTab: false,
                                position: 'top right',
                                icon: 'bx bx-error-circle',
                                msg: error.response.data.errors.image
                            });
                        } else {
                            Lobibox.notify('error', {
                                pauseDelayOnHover: true,
                                continueDelayOnInactiveTab: false,
                                position: 'top right',
                                icon: 'bx bx-error-circle',
                                msg: 'An error occurred while saving data.'
                            });
                        }
                    } else {
                        Lobibox.notify('error', {
                            pauseDelayOnHover: true,
                            continueDelayOnInactiveTab: false,
                            position: 'top right',
                            icon: 'bx bx-error-circle',
                            msg: 'An error occurred while saving data.'
                        });
                    }
                });
        },
        updateDeals() {
            const formData = new FormData();
            formData.append('imageOne', this.$refs.imageOne.files[0]);
            formData.append('imageTwo', this.$refs.imageTwo.files[0]);
            console.log(formData);

            // Make a POST request to your API endpoint
            this.$axios.post('/setting/dealsbannner', formData)
                .then(response => {
                    // Handle successful response
                    // console.log('Data saved successfully:', response.data.imageOne);
                    this.dealsImageOne = response.data.imageOne;
                    this.dealsImageTwo = response.data.imageTwo;
                    Lobibox.notify('success', {
                        pauseDelayOnHover: true,
                        continueDelayOnInactiveTab: false,
                        position: 'top right',
                        icon: 'bx bx-check-circle',
                        msg: 'Your data has been successfully updated.'
                    });
                    // Optionally, you can redirect the user or perform any other action
                })
                .catch(error => {
                    // Handle error
                    console.error('Error saving data:', error);
                    // Check if error.response exists
                    if (error.response) {
                        // If error.response.data exists, it contains error message from server
                        if (error.response.data && error.response.data.errors.image) {
                            Lobibox.notify('error', {
                                pauseDelayOnHover: true,
                                continueDelayOnInactiveTab: false,
                                position: 'top right',
                                icon: 'bx bx-error-circle',
                                msg: error.response.data.errors.image
                            });
                        } else {
                            Lobibox.notify('error', {
                                pauseDelayOnHover: true,
                                continueDelayOnInactiveTab: false,
                                position: 'top right',
                                icon: 'bx bx-error-circle',
                                msg: 'An error occurred while saving data.'
                            });
                        }
                    } else {
                        Lobibox.notify('error', {
                            pauseDelayOnHover: true,
                            continueDelayOnInactiveTab: false,
                            position: 'top right',
                            icon: 'bx bx-error-circle',
                            msg: 'An error occurred while saving data.'
                        });
                    }
                });

        },

        handleFileChange(event) {
            const file = event.target.files[0]; // Get the selected file
            if (file) {
                if (!file.type.startsWith('image/')) {
                    alert("Please select an image file.");
                    return;
                }
                this.insertdata.image = file;
                const reader = new FileReader();
                reader.onload = () => {
                    this.previewURL = reader.result;
                };
                reader.readAsDataURL(file);
            } else {
                this.previewURL = null; // Clear preview if no file selected
            }
        },
        dealsImage1(event) {
            const file = event.target.files[0]; // Get the selected file
            if (file) {
                if (!file.type.startsWith('image/')) {
                    alert("Please select an image file.");
                    return;
                }
                this.updateData.imageOne = file;
                const reader = new FileReader();
                reader.onload = () => {
                    this.dealsImageOne = reader.result;
                };
                reader.readAsDataURL(file);
            } else {
                this.dealsImageOne = null; // Clear preview if no file selected
            }
        },
        dealsImage2(event) {
            const file = event.target.files[0]; // Get the selected file
            if (file) {
                if (!file.type.startsWith('image/')) {
                    alert("Please select an image file.");
                    return;
                }
                this.updateData.dealsImageTwo = file;
                const reader = new FileReader();
                reader.onload = () => {
                    this.dealsImageTwo = reader.result;
                };
                reader.readAsDataURL(file);
            } else {
                this.dealsImageTwo = null; // Clear preview if no file selected
            }
        },

    }
};
</script>
<style>
input,
select,
textarea {
    outline: 0 !important;
    box-shadow: none !important;
}

.preview-image {
    max-width: 100%;
    max-height: 60px;
    margin-bottom: 10px;
    background: #f2f1f1;
    width: 100%;
    -o-object-fit: contain;
    object-fit: contain;
}
</style>