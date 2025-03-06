<template>
    <div class="row">
        <div class="col-lg-4 col-md-21">
            <div class="card">
                <div class="card-header">
                    <h3 class="mt-3">Thêm Mới Khoá Học</h3>
                </div>
                <div class="card-body">
                    <label for=""><b>Tên Khoá Học</b></label>
                    <input v-model="input_khoahoc.ten_khoa_hoc" type="text" class="form-control"
                        placeholder="Nhập tên khoá học" />
                    <label class="mt-4" for=""><b>Slug Khoá Học</b></label>
                    <input v-model="input_khoahoc.slug_khoa_hoc" type="text" class="form-control"
                        placeholder="Nhập slug khoá học" />
                    <label class="mt-4" for=""><b>Hình Ảnh</b></label>
                    <input v-model="input_khoahoc.hinh_anh" type="text" class="form-control"
                        placeholder="Nhập link hình ảnh" />
                    <label class="mt-4" for=""><b>Học Phí</b></label>
                    <input v-model="input_khoahoc.hoc_phi" type="text" class="form-control"
                        placeholder="Nhập phí tiền học" />
                    <label class="mt-4" for=""><b>Giờ Học</b></label>
                    <input v-model="input_khoahoc.gio_hoc" type="text" class="form-control"
                        placeholder="Nhập số giờ học" />
                    <label class="mt-4" for=""><b>Mô Tả</b></label>
                    <textarea v-model="input_khoahoc.mo_ta" class="form-control" name="" id=""></textarea>
                    <label class="mt-4" for=""><b>Tình trạng</b></label>
                    <select v-model="input_khoahoc.tinh_trang" class="form-select" name="" id="">
                        <option value="1">Hoạt Động</option>
                        <option value="0">Tạm Tắt</option>
                    </select>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary" v-on:click="addKhoaHoc()">
                        Thêm Mới
                    </button>
                </div>
            </div>
        </div>
        <div class="col-lg-8 col-md-21">
            <div class="card">
                <div class="card-header">
                    <h3 class="mt-3">Danh Sách Khoá Học Học</h3>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead class="table" style="background-color: wheat">
                            <tr>
                                <th class="text-center align-middle">STT</th>
                                <th class="text-center align-middle" style="width: 150px">
                                    Tên Khoá Học Học
                                </th>
                                <th class="text-center align-middle" style="width: 150px">
                                    Slug Khoá Học
                                </th>
                                <th class="text-center align-middle" style="width: 150px">
                                    Hình Ảnh
                                </th>
                                <th class="text-center align-middle">Học Phí</th>
                                <th class="text-center align-middle">Giờ Học</th>
                                <th class="text-center align-middle">Mô Tả</th>
                                <th class="text-center align-middle" style="width: 200px">
                                    Tình Trạng
                                </th>
                                <th class="text-center align-middle" style="width: 200px">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(v, k) in list_khoahoc" :key="k">
                                <td class="text-center align-middle">{{ k + 1 }}</td>
                                <td class="text-center align-middle">{{ v.ten_khoa_hoc }}</td>
                                <td class="text-center align-middle">{{ v.slug_khoa_hoc }}</td>
                                <td class="text-center align-middle">
                                    <img :src="v.hinh_anh" alt="" style="width: 40%" />
                                </td>
                                <td class="text-center align-middle">{{ v.hoc_phi }}</td>
                                <td class="text-center align-middle">{{ v.gio_hoc }}</td>
                                <td class="text-center align-middle">
                                    <i class="fa-regular fa-eye fa-2x" v-on:click="Object.assign(xem_mo_ta, v)"
                                        data-bs-toggle="modal" data-bs-target="#moTa"></i>
                                </td>
                                <td class="text-center align-middle">
                                    <button v-if="v.tinh_trang == 1" class="btn btn-success">
                                        Hoạt Động
                                    </button>
                                    <button v-else class="btn btn-warning">Tạm Tắt</button>
                                </td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-warning me-2" data-bs-toggle="modal"
                                        data-bs-target="#capNhat" v-on:click="Object.assign(edit_khoahoc, v)">
                                        Cập Nhật</button><button class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#xoaBo" v-on:click="Object.assign(delete_khoahoc, v)">
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
                    <b>{{ xem_mo_ta.mo_ta }}</b>
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
                        Cập Nhật Bài Học
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label for=""><b>Tên Khoá Học</b></label>
                    <input v-model="edit_khoahoc.ten_khoa_hoc" type="text" class="form-control"
                        placeholder="Nhập tên khoá học" />
                    <label class="mt-4" for=""><b>Slug Khoá Học</b></label>
                    <input v-model="edit_khoahoc.slug_khoa_hoc" type="text" class="form-control"
                        placeholder="Nhập slug khoá học" />
                    <label class="mt-4" for=""><b>Hình Ảnh</b></label>
                    <input v-model="edit_khoahoc.hinh_anh" type="text" class="form-control"
                        placeholder="Nhập link hình ảnh" />
                    <label class="mt-4" for=""><b>Học Phí</b></label>
                    <input v-model="edit_khoahoc.hoc_phi" type="text" class="form-control"
                        placeholder="Nhập phí tiền học" />
                    <label class="mt-4" for=""><b>Tổng Thời Gian (Giờ)</b></label>
                    <input v-model="edit_khoahoc.gio_hoc" type="text" class="form-control"
                        placeholder="Nhập số giờ học" />
                    <label class="mt-4" for=""><b>Mô Tả</b></label>
                    <textarea v-model="edit_khoahoc.mo_ta" class="form-control" name="" id=""></textarea>
                    <label class="mt-4" for=""><b>Tình trạng</b></label>
                    <select v-model="edit_khoahoc.tinh_trang" class="form-select" name="" id="">
                        <option value="1">Hoạt Động</option>
                        <option value="0">Tạm Tắt</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="updateKhoaHoc()">
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
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xoá Bài Học</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Bạn có muốn xoá sản phẩm
                    <b><i>{{ delete_khoahoc.ten_khoa_hoc }}</i></b>
                    này không?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" v-on:click="deleteKhoaHoc()">
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
            list_khoahoc: [],
            input_khoahoc: {
                ten_khoa_hoc: "",
                slug_khoa_hoc: "",
                hinh_anh: "",
                hoc_phi: null,
                gio_hoc: null,
                mo_ta: "",
                tinh_trang: null,
            },
            delete_khoahoc: {
                ten_khoa_hoc: "",
                slug_khoa_hoc: "",
                hinh_anh: "",
                hoc_phi: null,
                gio_hoc: null,
                mo_ta: "",
                tinh_trang: null,
            },
            edit_khoahoc: {
                ten_khoa_hoc: "",
                slug_khoa_hoc: "",
                hinh_anh: "",
                hoc_phi: null,
                gio_hoc: null,
                mo_ta: "",
                tinh_trang: null,
            },
            xem_mo_ta: {}
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            axios
                .get("http://127.0.0.1:8000/api/list-khoahoc")
                .then((response) => {
                    this.list_khoahoc = response.data.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        addKhoaHoc() {
            axios
                .post("http://127.0.0.1:8000/api/add-khoahoc", this.input_khoahoc)
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
        deleteKhoaHoc() {
            axios
                .post("http://127.0.0.1:8000/api/delete-khoahoc", this.delete_khoahoc)
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
        updateKhoaHoc() {
            axios
                .post("http://127.0.0.1:8000/api/update-khoahoc", this.edit_khoahoc)
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