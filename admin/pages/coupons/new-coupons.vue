<template>
    <div>
        <!--start page wrapper -->
        <div class="page-wrapper">
            <div class="page-content">
                <div class="row">
                    <div class="col-md-6 m-auto">
                        <div class="bg-white p-4 ">
                            <form @submit.prevent="saveData()">
                                <h4>Add New Coupon</h4>
                                <div class="form-group mb-2">
                                    <label for="" class="mb-1">Coupons Type </label>
                                    <select name="" v-model="insertdata.coupon_type" id="" class="form-control">
                                        <option value="" selected disabled>Selected</option>
                                        <option value="percent">In Percentage</option>
                                        <option value="fixed">Fixed Value</option>
                                    </select>
                                </div>
                                <div class="form-group mb-2">
                                    <label for="" class="mb-1">Promo code</label>
                                    <input type="text" v-model="insertdata.code" placeholder="PROMO123" class="form-control">
                                </div>
                                <div class="form-group mb-2">
                                    <label for="" class="mb-1">Min Shopping Amount</label>
                                    <input type="text" v-model="insertdata.s_amt" placeholder="$00.00" class="form-control">
                                </div>
                                <!-- <h5>If Discount in %</h5> -->
                                <div class="form-group mb-2">
                                    <label for="" class="mb-1">Discount in percentage(%)</label>
                                    <input type="text" placeholder="00" v-model="insertdata.d_percent" class="form-control">
                                </div>
                                <div class="form-group mb-3">
                                    <label for="" class="mb-1">Discount in Value($)</label>
                                    <input type="text" placeholder="00" v-model="insertdata.d_value" class="form-control">
                                </div>
                                <div class="form-group">
                                    <button class="btn-success w-100 border-0 py-1 rounded-2" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end page wrapper -->
    </div>
</template>

<script>
export default {
    head: {
        title: 'Add New Coupons',
    },
    data() {
        return {
            insertdata: {
                coupon_type: '',
                code: '',
                s_amt: '',
                d_percent: '',
                d_value: ''
            }
        };
    },
    mounted() {
        // this.saveData();
        
    },
    methods: {
        saveData() {
            const formData = new FormData();            
            formData.append('coupon_type', this.insertdata.coupon_type);
            formData.append('code', this.insertdata.code);
            formData.append('s_amt', this.insertdata.s_amt);
            formData.append('d_percent', this.insertdata.d_percent);
            formData.append('d_value', this.insertdata.d_value);

            // console.log(formData);
            alert(formData)
        },
    },
};
</script>

<style>
input,
select,
button {
    outline: 0 !important;
    box-shadow: none !important;
}
</style>
