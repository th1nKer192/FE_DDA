<template>
    <div>
        <div class="row">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h4 class="mt-3">Danh Sách nhà Cung Cấp</h4>
                        </div>
                        <div class="col-lg-6 col-md-12 text-end mt-2">
                            <button class="btn btn-lg btn-primary" data-bs-toggle="modal"
                                data-bs-target="#themMoi">Thêm
                                Mới</button>
                        </div>
                    </div>
                </div>
                <div class="card-body">

                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Nhập thông tin cần tìm" />
                        <button class="btn btn-primary" type="button"><i class="bx bx-search"></i>
                        </button>
                    </div>

                    <table class="table table-bordered table-hover mt-3">
                        <thead class="table table-primary">
                            <tr>
                                <th class="text-center align-middle">#</th>
                                <th class="text-center align-middle">Mã Số Thuế</th>
                                <th class="text-center align-middle">Tên Công Ty</th>
                                <th class="text-center align-middle">Tên Người Đại Diện</th>
                                <th class="text-center align-middle">Số Điện Thoại</th>
                                <th class="text-center align-middle">Email</th>
                                <th class="text-center align-middle">Địa Chỉ</th>
                                <th class="text-center align-middle">Tên Gợi Nhớ</th>
                                <th class="text-center align-middle">Tình Trạng</th>
                                <th class="text-center align-middle">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(v, k) in list_ncc" :key="k">
                                <td class="text-center align-middle">{{ k + 1 }}</td>
                                <td class="text-center align-middle">{{ v.ma_so_thue }}</td>
                                <td class="text-center align-middle">{{ v.ten_cong_ty }}</td>
                                <td class="text-center align-middle">{{ v.ten_nguoi_dai_dien }}</td>
                                <td class="text-center align-middle">{{ v.so_dien_thoai }}</td>
                                <td class="text-center align-middle">{{ v.email }}</td>
                                <td class="text-center align-middle">{{ v.dia_chi }}</td>
                                <td class="text-center align-middle">{{ v.ten_goi_nho }}</td>
                                <td class="text-center align-middle">
                                    <button v-if="v.tinh_trang == 1" class="btn btn-success">Hiển thị</button>
                                    <button v-else class="btn btn-warning">Tạm Tắt</button>
                                </td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                        data-bs-target="#capNhat" v-on:click="Object.assign(edit_ncc, v)">Cập
                                        Nhật</button>
                                    <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoaBo" v-on:click="Object.assign(delete_ncc, v)"
                                        >Xóa
                                        Bỏ</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="themMoi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title fs-5" id="exampleModalLabel">
                        Thêm Mới Nhà Cung Cấp
                    </h3>
                    <button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <label for="">Mã Số Thuế</label>
                    <input v-model="input_ncc.ma_so_thue" type="text" class="form-control" placeholder="">
                    <label for="">Tên Công Ty</label>
                    <input v-model="input_ncc.ten_cong_ty" type="text" class="form-control" placeholder="">
                    <label for="">Tên Người Đại Diện</label>
                    <input v-model="input_ncc.ten_nguoi_dai_dien" type="text" class="form-control" placeholder="">
                    <label for="">Số Điện Thoại</label>
                    <input v-model="input_ncc.so_dien_thoai" type="text" class="form-control" placeholder="">
                    <label for="">Email</label>
                    <input v-model="input_ncc.email" type="text" class="form-control" placeholder="">
                    <label for="">Địa Chỉ</label>
                    <input v-model="input_ncc.dia_chi" type="text" class="form-control" placeholder="">
                    <label for="">Tên Gợi Nhớ</label>
                    <input v-model="input_ncc.ten_goi_nho" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Tình Trạng</label>
                    <select v-model="input_ncc.tinh_trang" class="form-select" id="">
                        <option value="1">Hiển Thị</option>
                        <option value="0">Tạm Tắt</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="addNCC()">Thêm
                        Mới</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="capNhat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title fs-5" id="exampleModalLabel">
                        Cập Nhật Sản Phẩm
                    </h3>
                    <button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <label for="">Mã Số Thuế</label>
                    <input v-model="edit_ncc.ma_so_thue" type="text" class="form-control" placeholder="">
                    <label for="">Tên Công Ty</label>
                    <input v-model="edit_ncc.ten_cong_ty" type="text" class="form-control" placeholder="">
                    <label for="">Tên Người Đại Diện</label>
                    <input v-model="edit_ncc.ten_nguoi_dai_dien" type="text" class="form-control" placeholder="">
                    <label for="">Số Điện Thoại</label>
                    <input v-model="edit_ncc.so_dien_thoai" type="text" class="form-control" placeholder="">
                    <label for="">Email</label>
                    <input v-model="edit_ncc.email" type="text" class="form-control" placeholder="">
                    <label for="">Địa Chỉ</label>
                    <input v-model="edit_ncc.dia_chi" type="text" class="form-control" placeholder="">
                    <label for="">Tên Gợi Nhớ</label>
                    <input v-model="edit_ncc.ten_goi_nho" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Tình Trạng</label>
                    <select v-model="edit_ncc.tinh_trang" class="form-select" id="">
                        <option value="1">Hiển Thị</option>
                        <option value="0">Tạm Tắt</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="updateNCC()">Cập Nhật</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="xoaBo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title fs-5" id="exampleModalLabel">Xoá Sản Phẩm</h3>
                    <button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        <p>Bạn có muốn xoá công ty <b><i>{{ delete_ncc.ten_cong_ty }}</i></b> này không?</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" v-on:click="deleteNCC()"
                       >Xoá luôn</button>
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
            list_ncc: [],
            input_ncc: {
                ma_so_thue: "",
                ten_cong_ty: "",
                ten_nguoi_dai_dien: "",
                so_dien_thoai: "",
                email: "",
                dia_chi: "",
                ten_goi_nho: "",
                tinh_trang: null
            },
            delete_ncc: {
                ma_so_thue: "",
                ten_cong_ty: "",
                ten_nguoi_dai_dien: "",
                so_dien_thoai: "",
                email: "",
                dia_chi: "",
                ten_goi_nho: "",
                tinh_trang: null
            },
            edit_ncc: {
                ma_so_thue: "",
                ten_cong_ty: "",
                ten_nguoi_dai_dien: "",
                so_dien_thoai: "",
                email: "",
                dia_chi: "",
                ten_goi_nho: "",
                tinh_trang: null
            },
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            axios
                .get('http://127.0.0.1:8000/api/list-ncc')
                .then(response => {
                    this.list_ncc = response.data.data;
                })
                .catch(err => {
                    console.log(err);
                })
        },
        addNCC() {
            axios
                .post('http://127.0.0.1:8000/api/add-ncc', this.input_ncc)
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
        deleteNCC() {
            axios
                .post('http://127.0.0.1:8000/api/delete-ncc', this.delete_ncc)
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
        updateNCC() {
            axios
                .post('http://127.0.0.1:8000/api/update-ncc', this.edit_ncc)
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