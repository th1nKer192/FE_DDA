<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <div class="border p-4 rounded">
                        <div class="text-center">
                            <h3 class="">Đăng Ký Tài Khoản</h3>
                            <p class="mb-5">Tham gia ngay để thưởng thức mọi món ăn tuyệt vời!!!</p>
                        </div>
                        <div class="form-body">
                            <form class="row g-3">
                                <div class="col-12">
                                    <label class="form-label">Họ và Tên</label>
                                    <input v-model="input_customer.customer_name" type="text" class="form-control" placeholder="Điền họ tên vào đây...">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Email Address</label>
                                    <input v-model="input_customer.customer_email" type="email" class="form-control" placeholder="Điền địa chỉ email...">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Số Điện Thoại</label>
                                    <input v-model="input_customer.customer_phone" type="text" class="form-control" placeholder="Điền số điện thoại...">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Địa Chỉ</label>
                                    <input v-model="input_customer.customer_local" type="text" class="form-control" placeholder="Điền địa chỉ thường trú...">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Ngày Sinh</label>
                                    <input v-model="input_customer.customer_birth" type="date" class="form-control" placeholder="">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Mật Khẩu</label>
                                    <div class="input-group" id="show_hide_password">
                                        <input v-model="input_customer.customer_pass" type="password" class="form-control border-end-0"
                                            placeholder="Nhập Mật Khẩu"> <a href="javascript:;"
                                            class="input-group-text bg-transparent"></a>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Xác Nhận Mật Khẩu</label>
                                    <div class="input-group" id="show_hide_password">
                                        <input type="password" class="form-control border-end-0"
                                            placeholder="Nhập Lại Mật Khẩu"> <a href="javascript:;"
                                            class="input-group-text bg-transparent"></a>
                                    </div>
                                </div>
                                <div class="col-12 mt-4">
                                    <div class="d-grid">
                                        <button v-on:click="signupCustomer()" type="button" class="btn btn-success"><i
                                                class="fa-solid fa-right-to-bracket"></i>Đăng Ký</button>
                                    </div>
                                </div>
                                <div class="col-12 text-center">
                                    <p>Đã có tài khoản? <a href="sign-in">Đăng Nhập
                                            ở đây</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            list_customer: [],
            input_customer: {
                customer_name: "",
                customer_email: "",
                customer_phone: "",
                customer_pass: "",
                customer_local: "",
                customer_birth: null,
            },
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            axios
                .get('http://127.0.0.1:8000/api/list-customer')
                .then(response => {
                    this.list_customer = response.data.data;
                })
                .catch(err => {
                    console.log(err);
                })
        },
        signupCustomer() {
            axios
                .post('http://127.0.0.1:8000/api/signup-customer', this.input_customer)
                .then(response => {
                    if (response.data.status == true) {
                        this.$toast.success(response.data.message);
                        // this.input_customer = {}
                        this.getData();
                    } else {
                        this.$toast.error(`Fail`);
                    }
                })
                .catch(error => {
                    var obj = error.response.data.errors;
                    var result = Object.keys(obj).map((key) => [key, obj[key]]);
                    result.forEach((value_1, key_1) => {
                        var xxx = value_1[1];
                        xxx.forEach((value, key) => {
                            this.$toast.error(value);
                        });
                    });
                });
        },
    }
}
</script>
<style></style>