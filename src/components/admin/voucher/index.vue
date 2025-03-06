<template>
    <div>
        <div class="row">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h4 class="mt-3"><i class="fa-solid fa-ticket"></i> Danh Sách Mã Giảm Giá</h4>
                        </div>
                        <div class="col-lg-6 col-md-12 text-end mt-2">
                            <button class="btn btn-lg btn-primary" data-bs-toggle="modal"
                                data-bs-target="#addModal">Thêm
                                Mã Giảm Giá</button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead class="table table-primary">
                            <tr>
                                <th class="text-center align-middle">#</th>
                                <th class="text-center align-middle" style="width: 400px;">Mã Code</th>
                                <th class="text-center align-middle">Thời Gian Bắt Đầu</th>
                                <th class="text-center align-middle">Thời Gian Kết Thúc</th>
                                <th class="text-center align-middle">Loại Giảm</th>
                                <th class="text-center align-middle">Số Giảm Giá</th>
                                <th class="text-center align-middle">Số Tiền Tối Đa</th>
                                <th class="text-center align-middle">Đơn Hàng Tối Thiểu</th>
                                <th class="text-center align-middle">Tình Trạng</th>
                                <th class="text-center align-middle">Tuỳ Chọn</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(v, k) in list_voucher" :key="k">
                                <td class="text-center align-middle"><b>{{ k + 1 }}</b></td>
                                <td class="align-middle text-center">{{ v.code_num }}</td>
                                <td class="align-middle text-center">{{ v.datetime_start }}</td>
                                <td class="align-middle text-center">{{ v.datetime_end }}</td>
                                <td class="align-middle">
                                    <p class="align-middle mt-3" v-if="v.discount_type == 1">Giảm %</p>
                                    <p class="align-middle mt-3" v-else>Giảm Tiền</p>
                                </td>
                                <td class="align-middle">{{ v.discount_num }}</td>
                                <td class="align-middle">{{ v.max_discount }}</td>
                                <td class="align-middle">{{ v.max_order }}</td>
                                <td class="text-center align-middle">
                                    <button v-if="v.status_type == 1" class="btn btn-success">Hiển Thị</button>
                                    <button v-else class="btn btn-warning">Tạm Tắt</button>
                                </td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                        data-bs-target="#updateModal" v-on:click="Object.assign(edit_voucher, v)">Cập
                                        Nhật</button>
                                    <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"
                                        v-on:click="Object.assign(delete_voucher, v)">Xóa
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
                        Thêm Mới Mã Voucher
                    </h3>
                    <button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <label for="">Mã Code</label>
                    <input v-model="input_voucher.code_num" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Thời Gian Bắt Đầu</label>
                    <input v-model="input_voucher.datetime_start" type="date" class="form-control" placeholder="">
                    <label class="mt-3" for="">Thời Gian Kết Thúc</label>
                    <input v-model="input_voucher.datetime_end" type="date" class="form-control" placeholder="">
                    <label class="mt-3" for="">Loại Giảm</label>
                    <select v-model="input_voucher.discount_type" class="form-select" id="">
                        <option value="1">Giảm %</option>
                        <option value="0">Tiền Mặt</option>
                    </select>
                    <label class="mt-3" for="">Số Giảm Giá (% hoặc VND)</label>
                    <input v-model="input_voucher.discount_num" type="number" class="form-control" placeholder="">
                    <label class="mt-3" for="">Giảm Giá Tối Đa (VND)</label>
                    <input v-model="input_voucher.max_discount" type="number" class="form-control" placeholder="">
                    <label class="mt-3" for="">Đơn Hàng Tối Thiểu (VND)</label>
                    <input v-model="input_voucher.max_order" type="number" class="form-control" placeholder="">
                    <label class="mt-3" for="">Tình Trạng</label>
                    <select v-model="input_voucher.status_type" class="form-select" id="">
                        <option value="1">Hiển Thị</option>
                        <option value="0">Tạm Tắt</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="addVoucher()">Thêm
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
                        Cập Nhật Mã Voucher
                    </h3>
                    <button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <label for="">Mã Code</label>
                    <input v-model="edit_voucher.code_num" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Thời Gian Bắt Đầu</label>
                    <input v-model="edit_voucher.datetime_start" type="date" class="form-control" placeholder="">
                    <label class="mt-3" for="">Thời Gian Kết Thúc</label>
                    <input v-model="edit_voucher.datetime_end" type="date" class="form-control" placeholder="">
                    <label class="mt-3" for="">Loại Giảm</label>
                    <select v-model="edit_voucher.discount_type" class="form-select" id="">
                        <option value="1">Giảm %</option>
                        <option value="0">Tiền Mặt</option>
                    </select>
                    <label class="mt-3" for="">Số Giảm Giá (% hoặc VND)</label>
                    <input v-model="edit_voucher.discount_num" type="number" class="form-control" placeholder="">
                    <label class="mt-3" for="">Giảm Giá Tối Đa (VND)</label>
                    <input v-model="edit_voucher.max_discount" type="number" class="form-control" placeholder="">
                    <label class="mt-3" for="">Đơn Hàng Tối Thiểu (VND)</label>
                    <input v-model="edit_voucher.max_order" type="number" class="form-control" placeholder="">
                    <label class="mt-3" for="">Tình Trạng</label>
                    <select v-model="edit_voucher.status_type" class="form-select" id="">
                        <option value="1">Hiển Thị</option>
                        <option value="0">Tạm Tắt</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="updateVoucher()">Cập Nhật</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title fs-5" id="exampleModalLabel">Xoá Mã Voucher</h3>
                    <button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        <p>Bạn có muốn xoá mã giảm giá <b><i>{{ delete_voucher.code_num }}</i></b> này không?</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                        v-on:click="deleteVoucher()">Xoá luôn</button>
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
            list_voucher: [],
            input_voucher: {
                code_num: "",
                datetime_start: null,
                datetime_end: null,
                discount_type: null,
                discount_num: null,
                max_discount: null,
                max_order: null,
                status_type: null
            },
            delete_voucher: {
                code_num: "",
                datetime_start: null,
                datetime_end: null,
                discount_type: null,
                discount_num: null,
                max_discount: null,
                max_order: null,
                status_type: null
            },
            edit_voucher: {
                code_num: "",
                datetime_start: null,
                datetime_end: null,
                discount_type: null,
                discount_num: null,
                max_discount: null,
                max_order: null,
                status_type: null
            },
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            axios
                .get('http://127.0.0.1:8000/api/list-voucher')
                .then(response => {
                    this.list_voucher = response.data.data;
                })
                .catch(err => {
                    console.log(err);
                })
        },
        addVoucher() {
            axios
                .post('http://127.0.0.1:8000/api/add-voucher', this.input_voucher)
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
        deleteVoucher() {
            axios
                .post('http://127.0.0.1:8000/api/delete-voucher', this.delete_voucher)
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
        updateVoucher() {
            axios
                .post('http://127.0.0.1:8000/api/update-voucher', this.edit_voucher)
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