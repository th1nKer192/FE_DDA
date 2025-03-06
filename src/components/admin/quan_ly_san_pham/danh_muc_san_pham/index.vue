<template>
    <div class="row">
        <div class="col-lg-4 col-md-21">
            <div class="card">
                <div class="card-header">
                    <h3 class="mt-3">Thêm Mới Danh Mục</h3>
                </div>
                <div class="card-body">
                    <label for="">Tên Danh Mục</label>
                    <input v-model="input_danh_muc.ten_danh_muc" type="text" class="form-control"
                        placeholder="Nhập tên danh mục">
                    <label class="mt-3" for="">Slug Danh Mục</label>
                    <input v-model="input_danh_muc.slug_danh_muc" type="text" class="form-control"
                        placeholder="Nhập slug danh mục">
                    <label class="mt-3" for="">Tình Trạng</label>
                    <select v-model="input_danh_muc.tinh_trang" class="form-select" id="">
                        <option value="1">Hoạt Động</option>
                        <option value="0">Tạm Tắt</option>
                    </select>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary" v-on:click="addDanhMuc()">
                        Thêm Mới
                    </button>
                </div>
            </div>
        </div>
        <div class="col-lg-8 col-md-21">
            <div class="card">
                <div class="card-header">
                    <h3 class="mt-3">Danh Sách Danh Mục</h3>
                </div>
                <div class="card-body">

                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Nhập thông tin cần tìm" />
                        <button class="btn btn-primary" type="button"><i class="bx bx-search"></i>
                        </button>
                    </div>

                    <table class="table table-bordered table-hover mt-3">
                        <thead class="table" style="background-color: wheat">
                            <tr>
                                <th class="text-center align-middle">#</th>
                                <th class="text-center align-middle">Tên Danh Mục</th>
                                <th class="text-center align-middle">Slug Danh Mục</th>
                                <th class="text-center align-middle">Tình Trạng</th>
                                <th class="text-center align-middle">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(v, k) in list_danh_muc" :key="k">
                                <td class="text-center align-middle">{{ k + 1 }}</td>
                                <td class="text-center align-middle">{{ v.ten_danh_muc }}</td>
                                <td class="text-center align-middle">{{ v.slug_danh_muc }}</td>
                                <td class="text-center align-middle">
                                    <button v-if="v.tinh_trang == 1"
                                        class="btn btn-success">Hiển Thị</button>
                                    <button v-else class="btn btn-warning">Tạm Tắt</button>
                                </td>
                                <td class="text-center align-middle" style="width: 200px;">
                                    <button class="btn btn-info me-2" data-bs-toggle="modal"
                                        data-bs-target="#capNhat" v-on:click="Object.assign(edit_danh_muc, v)">
                                        Cập Nhật</button>
                                        <button class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#xoaBo" v-on:click="Object.assign(delete_danh_muc, v)">
                                        Xoá
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="moTa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Mô Tả</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <b></b>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="capNhat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Cập Nhật Danh Mục
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label for="">Tên Danh Mục</label>
                    <input v-model="edit_danh_muc.ten_danh_muc" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Slug Danh Mục</label>
                    <input v-model="edit_danh_muc.slug_danh_muc" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Tình Trạng</label>
                    <select v-model="edit_danh_muc.tinh_trang" class="form-select" id="">
                        <option value="1">Hoạt Động</option>
                        <option value="0">Tạm Tắt</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="updateDanhMuc()">
                        Lưu Lại
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="xoaBo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xoá Danh Mục</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Bạn có muốn xoá danh mục
                    <b><i>{{ delete_danh_muc.ten_danh_muc }}</i></b>
                    này không?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" v-on:click="deleteDanhMuc()">
                        Xoá Ngay
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            list_danh_muc: [],
            input_danh_muc: {
                ten_danh_muc: "",
                slug_danh_muc: "",
                tinh_trang: null
            },
            delete_danh_muc: {
                ten_danh_muc: "",
                slug_danh_muc: "",
                tinh_trang: null
            },
            edit_danh_muc: {
                ten_danh_muc: "",
                slug_danh_muc: "",
                tinh_trang: null
            },
        }
    },
    mounted() {
        this.getData();
        // this.getDataKH();
    },
    methods: {
        // getDataKH() {
        //     axios
        //         .get("http://127.0.0.1:8000/api/list-khoahoc")
        //         .then((response) => {
        //             this.list_khoahoc = response.data.data;
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //         });
        // },
        getData() {
            axios
                .get("http://127.0.0.1:8000/api/list-danh-muc")
                .then((response) => {
                    this.list_danh_muc = response.data.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        addDanhMuc() {
            axios
                .post("http://127.0.0.1:8000/api/add-danh-muc", this.input_danh_muc)
                .then((response) => {
                    if (response.data.status == true) {
                        this.$toast.success(response.data.message);
                        this.getData();
                    } else {
                        this.$toast.error(`Fail`);
                    }
                })
                .catch((error) => {
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
        deleteDanhMuc() {
            axios
                .post("http://127.0.0.1:8000/api/delete-danh-muc", this.delete_danh_muc)
                .then((response) => {
                    if (response.data.status == true) {
                        this.$toast.success(response.data.message);
                        this.getData();
                    } else {
                        this.$toast.error(`Fail`);
                    }
                })
                .catch((error) => {
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
        updateDanhMuc() {
            axios
                .post("http://127.0.0.1:8000/api/update-danh-muc", this.edit_danh_muc)
                .then((response) => {
                    if (response.data.status == true) {
                        this.$toast.success(response.data.message);
                        this.getData();
                    } else {
                        this.$toast.error(`Fail`);
                    }
                })
                .catch((error) => {
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
    },
};
</script>
<style></style>