<template>
    <div>
        <div class="row">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h4 class="mt-3"><i class="fa-regular fa-user"></i> Danh Sách Khách Hàng</h4>
                        </div>
                        <div class="col-lg-6 col-md-12 text-end mt-2">
                            <button class="btn btn-lg btn-primary" data-bs-toggle="modal"
                                data-bs-target="#addModal">Thêm
                                Khách Hàng</button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead class="table table-success">
                            <tr>
                                <th class="text-center align-middle">#</th>
                                <th class="text-center align-middle">Họ Và Tên</th>
                                <th class="text-center align-middle">Email</th>
                                <th class="text-center align-middle">Số Điện Thoại</th>
                                <th class="text-center align-middle">Địa Chỉ</th>
                                <th class="text-center align-middle">Ngày Sinh</th>
                                <th class="text-center align-middle">Trạng Thái</th>
                                <th class="text-center align-middle">Kích Hoạt</th>
                                <th class="text-center align-middle">Tuỳ Chọn</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(v, k) in list_customer" :key="k">
                                <td class="text-center align-middle"><b>{{ k + 1 }}</b></td>
                                <td class="align-middle">{{ v.customer_name }}</td>
                                <td class="align-middle">{{ v.customer_email }}</td>
                                <td class="align-middle">{{ v.customer_phone }}</td>
                                <td class="align-middle">{{ v.customer_local }}</td>
                                <td class="align-middle">{{ v.customer_birth }}</td>
                                <td class="text-center align-middle">
                                    <button v-if="v.customer_status == 1" class="btn btn-success">Hoạt Động</button>
                                    <button v-else class="btn btn-danger">Tạm Tắt</button>
                                </td>
                                <td class="text-center align-middle">
                                    <button v-if="v.customer_active == 1" class="btn btn-warning">Đã Kích Hoạt</button>
                                    <button v-else class="btn btn-secondary">Chưa Kích Hoạt</button>
                                </td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                        data-bs-target="#updateModal" v-on:click="Object.assign(edit_customer, v)">Cập
                                        Nhật</button>
                                    <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#deleteModal"
                                        v-on:click="Object.assign(delete_customer, v)">Xóa
                                        Bỏ</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title fs-5" id="exampleModalLabel">
                        Thêm Mới Khách Hàng
                    </h3>
                    <button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <label for="">Họ Và Tên</label>
                    <input v-model="input_customer.customer_name" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Email</label>
                    <input v-model="input_customer.customer_email" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Số Điện Thoại</label>
                    <input v-model="input_customer.customer_phone" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Địa Chỉ</label>
                    <input v-model="input_customer.customer_local" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Mật Khẩu</label>
                    <input v-model="input_customer.customer_pass" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Ngày Sinh</label>
                    <input v-model="input_customer.customer_birth" type="date" class="form-control" placeholder="">
                    <label class="mt-3" for="">Trạng Thái</label>
                    <select v-model="input_customer.customer_status" class="form-select" id="">
                        <option value="1">Đang Làm</option>
                        <option value="0">Đã Nghỉ</option>
                    </select>
                    <label class="mt-3" for="">Kích Hoạt</label>
                    <select v-model="input_customer.customer_active" class="form-select" id="">
                        <option value="1">Đã Kích Hoạt</option>
                        <option value="0">Chưa Kích Hoạt</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="addCustomer()">Thêm
                        Mới</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title fs-5" id="exampleModalLabel">
                        Cập Nhật Thông Tin Khách Hàng
                    </h3>
                    <button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <label for="">Họ Và Tên</label>
                    <input v-model="edit_customer.customer_name" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Email</label>
                    <input v-model="edit_customer.customer_email" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Số Điện Thoại</label>
                    <input v-model="edit_customer.customer_phone" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Địa Chỉ</label>
                    <input v-model="edit_customer.customer_local" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Mật Khẩu</label>
                    <input v-model="edit_customer.customer_pass" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Ngày Sinh</label>
                    <input v-model="edit_customer.customer_birth" type="date" class="form-control" placeholder="">
                    <label class="mt-3" for="">Trạng Thái</label>
                    <select v-model="edit_customer.customer_status" class="form-select" id="">
                        <option value="1">Hoạt Động</option>
                        <option value="0">Tạm Tắt</option>
                    </select>
                    <label class="mt-3" for="">Kích Hoạt</label>
                    <select v-model="edit_customer.customer_active" class="form-select" id="">
                        <option value="1">Đã Kích Hoạt</option>
                        <option value="0">Chưa Kích Hoạt</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="updateCustomer()">Cập Nhật</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title fs-5" id="exampleModalLabel">Xoá Khách Hàng</h3>
                    <button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        <p>Bạn có muốn xoá khách hàng <b><i>{{ delete_customer.customer_name }}</i></b> này không?</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                        v-on:click="deleteCustomer()">Xoá luôn</button>
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
                customer_phone: null,
                customer_local: "",
                customer_pass: "",
                customer_birth: null,
                customer_status: null,
                customer_active: null
            },
            delete_customer: {
                customer_name: "",
                customer_email: "",
                customer_phone: "",
                customer_local: "",
                customer_pass: "",
                customer_birth: null,
                customer_status: null,
                customer_active: null
            },
            edit_customer: {
                customer_name: "",
                customer_email: "",
                customer_phone: "",
                customer_local: "",
                customer_pass: "",
                customer_birth: null,
                customer_status: null,
                customer_active: null
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
        addCustomer() {
            axios
                .post('http://127.0.0.1:8000/api/add-customer', this.input_customer)
                .then(response => {
                    if (response.data.status == true) {
                        this.$toast.success(response.data.message);
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
        deleteCustomer() {
            axios
                .post('http://127.0.0.1:8000/api/delete-customer', this.delete_customer)
                .then(response => {
                    if (response.data.status == true) {
                        this.$toast.success(response.data.message);
                        this.getData()
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
        updateCustomer() {
            axios
                .post('http://127.0.0.1:8000/api/update-customer', this.edit_customer)
                .then(response => {
                    if (response.data.status == true) {
                        this.$toast.success(response.data.message);
                        this.getData()
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
        }
    }
}
</script>
<style></style>