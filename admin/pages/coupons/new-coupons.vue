<template>
    <div>
        <!--start page wrapper -->
        <div class="page-wrapper">
            <div class="page-content">

                <!--top header banner row-->
                <div class="row">
                    <div class="col-md-8 m-auto">
                        <div class="form_container bg-white p-3">
                            <h5>Add New Coupons</h5>
                            <form @submit.prevent="savecoupon()" id="couponform" class="forms-sample"
                                enctype="multipart/form-data">
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-6">Promo Name <span class="text-danger">*</span>
                                    </label>
                                    <input type="text" name="name" id="" class="form-control" ref="name">
                                </div>
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-6">Promo Code <span class="text-danger">*</span>
                                    </label>
                                    <input type="text" name="promocode" id="" class="form-control" ref="promocode">
                                </div>
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-6">Coupon type <span
                                            class="text-danger">*</span></label>
                                    <select name="code_type" ref="code_type" id="" class="form-control">
                                        <option value="percentage">In percentage</option>
                                        <option value="fixed">Fixed Amount</option>
                                    </select>
                                </div>
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-6">Min. Shopping Amount <span
                                            class="text-danger">*</span></label>
                                    <input type="text" name="min_shopping" id="" class="form-control"
                                        ref="min_shopping">
                                </div>
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-6">Discount in percentage(%) <span
                                            class="text-secondary" style="font-size: 12px;">(If coupon type
                                            "Percentage")</span></label>
                                    <input type="text" name="d_percent" id="" class="form-control" ref="d_percent">
                                </div>
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-6">Discount in Fixed amount($) <span
                                            class="text-secondary" style="font-size: 12px;">(If coupon type "Fiexed
                                            Amount")</span></label>
                                    <input type="text" name="d_fvalue" id="" class="form-control" ref="d_fvalue">
                                </div>
                                <div class="form-group mb-2">
                                    <label for="" class="text-dark fs-6">Status <span
                                            class="text-danger">*</span></label>
                                    <select name="status" ref="status" id="" class="form-control">
                                        <option value="1">Active</option>
                                        <option value="2">Inactive</option>
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
            promocode: null,
            status: "1",
            errors: {},
        };
    },
    mounted() {
    },
    methods: {

        savecoupon() {
            const formData = new FormData();
            formData.append('name', this.$refs.name.value);
            formData.append('promocode', this.$refs.promocode.value);
            formData.append('code_type', this.$refs.code_type.value);
            formData.append('min_shopping', this.$refs.min_shopping.value);
            formData.append('d_percent', this.$refs.d_percent.value);
            formData.append('d_fvalue', this.$refs.d_fvalue.value);
            formData.append('status', this.$refs.status.value);

            // Make a POST request to your API endpoint
            this.$axios.post('/setting/addcoupons', formData)
                .then(response => {
                    // Handle successful response
                    Lobibox.notify('success', {
                        pauseDelayOnHover: true,
                        continueDelayOnInactiveTab: false,
                        position: 'top right',
                        icon: 'bx bx-check-circle',
                        msg: 'Your Coupon has been successfully Created.'
                    });
                    $('#couponform')[0].reset();
                    this.$router.push('/coupons/all-coupons');

                })
                .catch(error => {
                    // Handle error
                    // Check if error.response exists
                    Lobibox.notify('error', {
                        pauseDelayOnHover: true,
                        continueDelayOnInactiveTab: false,
                        position: 'top right',
                        icon: 'bx bx-error-circle',
                        msg: 'An error occurred while saving data.'
                    });
                });

        },


    }
};
</script>