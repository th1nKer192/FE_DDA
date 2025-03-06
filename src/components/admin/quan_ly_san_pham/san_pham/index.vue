<template>
    <div>
        <div class="row">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h4 class="mt-3">Danh Sách Sản Phẩm</h4>
                        </div>
                        <div class="col-lg-6 col-md-12 text-end mt-2">
                            <button class="btn btn-lg btn-primary" data-bs-toggle="modal" data-bs-target="#themMoi">Thêm
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
                                <th class="text-center align-middle">Tên Sản Phẩm</th>
                                <th class="text-center align-middle">Slug Sản Phẩm</th>
                                <th class="text-center align-middle">Hình ảnh</th>
                                <th class="text-center align-middle">Số Lượng</th>
                                <th class="text-center align-middle">Giá Bán</th>
                                <th class="text-center align-middle">Đơn Vị Tính</th>
                                <th class="text-center align-middle">Danh Mục</th>
                                <th class="text-center align-middle">Tình Trạng</th>
                                <th class="text-center align-middle">Tuỳ Chọn</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(v, k) in list_san_pham" :key="k">
                                <td class="text-center align-middle">{{ k + 1 }}</td>
                                <td class="align-middle text-center">{{ v.ten_san_pham }}</td>
                                <td class="align-middle text-center">{{ v.slug_san_pham }}</td>
                                <td class="align-middle text-center"><img :src="v.hinh_anh" alt=""
                                        style="width: 150px;"></td>
                                <td class="align-middle text-center">{{ v.so_luong }}</td>
                                <td class="align-middle text-center">{{ v.gia_ban }}</td>
                                <td class="align-middle text-center">{{ v.dvt }}</td>
                                <td class="align-middle text-center">{{ v.ten_danh_muc }}</td>
                                <td class="text-center align-middle">
                                    <button v-if="v.tinh_trang == 1" class="btn btn-success">Hiển Thị</button>
                                    <button v-else class="btn btn-warning">Tạm Tắt</button>
                                </td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                        data-bs-target="#capNhat" v-on:click="Object.assign(edit_san_pham, v)">Cập
                                        Nhật</button>
                                    <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoaBo"
                                        v-on:click="Object.assign(delete_san_pham, v)">Xóa
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
                        Thêm Mới Sản Phẩm
                    </h3>
                    <button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <label for="">Tên Sản Phẩm</label>
                    <input v-model="input_san_pham.ten_san_pham" type="text" class="form-control" placeholder="">
                    <label for="">Slug Sản Phẩm</label>
                    <input v-model="input_san_pham.slug_san_pham" type="text" class="form-control" placeholder="">
                    <label for="">Hình Ảnh</label>
                    <input v-model="input_san_pham.hinh_anh" type="text" class="form-control" placeholder="">
                    <label for="">Số Lượng</label>
                    <input v-model="input_san_pham.so_luong" type="text" class="form-control" placeholder="">
                    <label for="">Giá Bán</label>
                    <input v-model="input_san_pham.gia_ban" type="text" class="form-control" placeholder="">
                    <label for="">Đơn Vị Tính</label>
                    <input v-model="input_san_pham.dvt" type="text" class="form-control" placeholder="">
                    <label for="">Danh Mục</label>
                    <select class="form-select" v-model="input_san_pham.id_danh_muc">
                        <template v-for="(v, k) in list_danh_muc" :key="k">
                            <option :value="v.id">{{ v.ten_danh_muc }}</option>
                        </template>
                    </select>
                    <label class="mt-3" for="">Tình Trạng</label>
                    <select v-model="input_san_pham.tinh_trang" class="form-select" id="">
                        <option value="1">Hiển Thị</option>
                        <option value="0">Tạm Tắt</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="addSanPham()">Thêm
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
                    <label for="">Tên Sản Phẩm</label>
                    <input v-model="edit_san_pham.ten_san_pham" type="text" class="form-control" placeholder="">
                    <label for="">Slug Sản Phẩm</label>
                    <input v-model="edit_san_pham.slug_san_pham" type="text" class="form-control" placeholder="">
                    <label for="">Hình Ảnh</label>
                    <input v-model="edit_san_pham.hinh_anh" type="text" class="form-control" placeholder="">
                    <label for="">Số Lượng</label>
                    <input v-model="edit_san_pham.so_luong" type="text" class="form-control" placeholder="">
                    <label for="">Giá Bán</label>
                    <input v-model="edit_san_pham.gia_ban" type="text" class="form-control" placeholder="">
                    <label for="">Đơn Vị Tính</label>
                    <input v-model="edit_san_pham.dvt" type="text" class="form-control" placeholder="">
                    <label for="">Danh Mục</label>
                    <select class="form-select" id="">
                        <template v-for="(v, k) in list_danh_muc" :key="k">
                            <option :value="v.id">{{ v.ten_danh_muc }}</option>
                        </template>
                    </select>
                    <label class="mt-3" for="">Tình Trạng</label>
                    <select v-model="edit_san_pham.tinh_trang" class="form-select" id="">
                        <option value="1">Hiển Thị</option>
                        <option value="0">Tạm Tắt</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                        v-on:click="updateSanPham()">Cập
                        Nhật</button>
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
                        <p>Bạn có muốn xoá sản phẩm <b><i>{{ delete_san_pham.ten_san_pham }}</i></b> này không?</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                        v-on:click="deleteSanPham()">Xoá
                        luôn</button>
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
            list_danh_muc: [],
            list_san_pham: [],
            input_san_pham: {
                ten_san_pham: "",
                slug_san_pham: "",
                hinh_anh: "",
                so_luong: null,
                gia_ban: null,
                dvt: "",
                tinh_trang: null,
                id_danh_muc: null
            },
            delete_san_pham: {
                ten_san_pham: "",
                slug_san_pham: "",
                hinh_anh: "",
                so_luong: null,
                gia_ban: null,
                dvt: "",
                tinh_trang: null,
                id_danh_muc: null
            },
            edit_san_pham: {
                ten_san_pham: "",
                slug_san_pham: "",
                hinh_anh: "",
                so_luong: null,
                gia_ban: null,
                dvt: "",
                tinh_trang: null,
                id_danh_muc: null
            },
        }
    },
    mounted() {
        this.getData();
        this.getDanhMuc();
    },
    methods: {
        getDanhMuc() {
            axios
                .get('http://127.0.0.1:8000/api/list-danh-muc')
                .then(response => {
                    this.list_danh_muc = response.data.data;
                })
                .catch(err => {
                    console.log(err);
                })
        },
        getData() {
            axios
                .get('http://127.0.0.1:8000/api/list-san-pham')
                .then(response => {
                    this.list_san_pham = response.data.data;
                })
                .catch(err => {
                    console.log(err);
                })
        },
        addSanPham() {
            axios
                .post('http://127.0.0.1:8000/api/add-san-pham', this.input_san_pham)
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
        deleteSanPham() {
            axios
                .post('http://127.0.0.1:8000/api/delete-san-pham', this.delete_san_pham)
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
        updateSanPham() {
            axios
                .post('http://127.0.0.1:8000/api/update-san-pham', this.edit_san_pham)
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