<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <div class="border p-4 rounded">
                        <div class="text-center">
                            <h3 class="">Đăng Ký Để Trở Thành Shipper Ngay</h3>
                            <p>Giao đồ ăn tận tay đến khách hàng thân yêu của bạn!!!!</p>
                        </div>
                        <div class="form-body">
                            <form class="row g-3 mt-2">
                                <div class="col-lg-6">
                                    <label class="form-label">Họ và Tên</label>
                                    <input v-model="input_shipper.shipper_name" type="text" class="form-control"
                                        placeholder="Điền họ tên vào đây...">
                                </div>
                                <div class="col-lg-6">
                                    <label class="form-label">Email Address</label>
                                    <input v-model="input_shipper.shipper_email" type="text" class="form-control"
                                        placeholder="Điền địa chỉ email...">
                                </div>
                            </form>
                            <form class="row g-3 mt-2">
                                <div class="col-lg-6">
                                    <label class="form-label">Số Điện Thoại</label>
                                    <input v-model="input_shipper.shipper_phone" type="text" class="form-control"
                                        placeholder="Điền số điện thoại...">
                                </div>
                                <div class="col-lg-6">
                                    <label class="form-label">CMND</label>
                                    <input v-model="input_shipper.shipper_cmnd" type="text" class="form-control"
                                        placeholder="Điền số CMND...">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Mật Khẩu</label>
                                    <div class="input-group" id="show_hide_password">
                                        <input v-model="input_shipper.shipper_pass" type="password"
                                            class="form-control border-end-0" placeholder="Nhập Mật Khẩu"> <a
                                            href="javascript:;" class="input-group-text bg-transparent"></a>
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
                            </form>
                            <form class="row g-3 mt-2">
                                <form class="row g-3 mt-2">
                                    <div class="col-lg-12">
                                        <label class="form-label">Địa Chỉ Thường Trú</label>
                                        <textarea v-model="input_shipper.shipper_local" class="form-control" rows="3"
                                            name="" id=""></textarea>
                                    </div>
                                </form>
                                <div class="col-lg-6">
                                    <label class="form-label">Tỉnh Thành</label>
                                    <input v-model="input_shipper.shipper_city" type="text" class="form-control"
                                        placeholder="-- Điền Tỉnh Thành --">
                                </div>
                                <div class="col-lg-6">
                                    <label class="form-label">Quận Huyện</label>
                                    <input v-model="input_shipper.shipper_district" type="text" class="form-control"
                                        placeholder="-- Điền Quận Huyện --">
                                </div>
                            </form>
                            <form class="row g-3 mt-2">
                                <div class="col-lg-6">
                                    <label class="form-label">Toạ Độ X</label>
                                    <input v-model="input_shipper.shipper_point_x" type="text" class="form-control"
                                        placeholder="">
                                </div>
                                <div class="col-lg-6">
                                    <label class="form-label">Toạ Độ Y</label>
                                    <input v-model="input_shipper.shipper_point_y" type="text" class="form-control"
                                        placeholder="">
                                </div>
                            </form>
                            <form class="row g-3 mt-2">
                                <div class="col-12 mt-4">
                                    <div class="d-grid">
                                        <button v-on:click="signupShipper()" type="button" class="btn btn-success"><i
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
            list_shipper: [],
            input_shipper: {
                shipper_name: "",
                shipper_email: "",
                shipper_phone: "",
                shipper_cmnd: "",
                shipper_local: "",
                shipper_pass: "",
                shipper_city: "",
                shipper_district: "",
                shipper_point_x: "",
                shipper_point_y: ""
            },
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            axios
                .get('http://127.0.0.1:8000/api/list-shipper')
                .then(response => {
                    this.list_shipper = response.data.data;
                })
                .catch(err => {
                    console.log(err);
                })
        },
        signupShipper() {
            axios
                .post('http://127.0.0.1:8000/api/signup-shipper', this.input_shipper)
                .then(response => {
                    if (response.data.status == true) {
                        this.$toast.success(response.data.message);
                        // this.input_shipper = {}
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