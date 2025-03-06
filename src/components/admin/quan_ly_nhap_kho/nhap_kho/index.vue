<template>
    <div class="row">
        <div class="col-lg-4 col-md-21">
            <div class="card">
                <div class="card-header">
                    <h3 class="mt-3">Danh Sách Sản Phẩm</h3>
                </div>
                <div class="card-body">

                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Nhập thông tin cần tìm" />
                        <button class="btn btn-primary" type="button"><i class="bx bx-search"></i>
                        </button>
                    </div>

                    <table class="table table-bordered table-hover mt-3">
                        <thead>
                            <tr>
                                <th class="text-center align-middle">#</th>
                                <th class="text-center align-middle">Tên Sản Phẩm</th>
                                <th class="text-center align-middle">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center align-middle"></td>
                                <td class="text-center align-middle"></td>
                                <td class="text-center align-middle" style="width: 100px;">
                                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#">
                                        Thêm</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-lg-8 col-md-21">
            <div class="card">
                <div class="card-header">
                    <h3 class="mt-3">Danh Sách Nhập Kho</h3>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead class="table" style="background-color: wheat">
                            <tr>
                                <th class="text-center align-middle">#</th>
                                <th class="text-center align-middle">Tên Sản Phẩm</th>
                                <th class="text-center align-middle">Số Lượng</th>
                                <th class="text-center align-middle">Đơn Giá</th>
                                <th class="text-center align-middle">Thành Tiền</th>
                                <th class="text-center align-middle">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center align-middle"></td>
                                <td class="text-center align-middle"></td>
                                <td class="text-center align-middle"></td>
                                <td class="text-center align-middle"></td>
                                <td class="text-center align-middle"></td>
                                <td class="text-center align-middle" style="width: 200px;">
                                    <button class="btn btn-outline-warning"><i class="fa-solid fa-trash-can fa-2x"
                                            style="color: #DB2323;"></i></button>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td class="align-middle" colspan="5">
                                    <label class="" for=""><b>Chọn Nhà Cung Cấp</b></label>
                                    <select class="form-select" name="" id="" aria-placeholder="Chọn Nhà Cung Cấp">
                                        <option value=""></option>
                                    </select>
                                </td>
                                <td class="text-center">
                                    <b class="">Tổng Tiền:</b>
                                    <p class="mt-3"> VNĐ</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="align-middle" colspan="6">
                                    <label class="" for=""><b>Nhập Ghi Chú Nhập Kho</b></label>
                                    <textarea class="form-control" name="" id="" rows="3"></textarea>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary">Nhập Kho</button>
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
                        Cập Nhật Bài Học
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label for=""><b>Chọn Khoá Học</b></label>
                    <select class="form-select" name="" id="">
                        <option value="">Laravel Cơ Bản</option>
                        <option value="">VueJs Nâng Cao</option>
                        <option value="">VS Code</option>
                    </select>
                    <label class="mt-4" for=""><b>Tên Bài Học</b></label>
                    <input type="text" class="form-control" placeholder="Nhập tên bài học" />
                    <label class="mt-4" for=""><b>Slug Bài Học</b></label>
                    <input type="text" class="form-control" placeholder="Nhập slug bài học" />
                    <label class="mt-4" for=""><b>Url Video</b></label>
                    <input type="text" class="form-control" placeholder="Nhập url video" />
                    <label class="mt-4" for=""><b>Số Thứ Tự</b></label>
                    <input type="text" class="form-control" placeholder="Nhập số thứ tự" />
                    <label class="mt-4" for=""><b>Mô Tả</b></label>
                    <textarea class="form-control" name="" id=""></textarea>
                    <label class="mt-4" for=""><b>Tình trạng</b></label>
                    <select class="form-select" name="" id="">
                        <option value="1">Hoạt Động</option>
                        <option value="0">Tạm Tắt</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
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
                    Bạn có muốn xoá
                    <b><i></i></b>
                    này không?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-danger">
                        Xoá Ngay
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import axios from "axios";

// export default {
//     data() {
//         return {
//             list_baihoc: [],
//             input_baihoc: {
//                 ten_bai_hoc: "",
//                 slug_bai_hoc: "",
//                 hinh_anh: "",
//                 so_thu_tu: null,
//                 mo_ta: "",
//                 tinh_trang: null,
//             },
//             delete_baihoc: {
//                 ten_bai_hoc: "",
//                 slug_bai_hoc: "",
//                 hinh_anh: "",
//                 so_thu_tu: null,
//                 mo_ta: "",
//                 tinh_trang: null,
//             },
//             edit_baihoc: {
//                 ten_bai_hoc: "",
//                 slug_bai_hoc: "",
//                 hinh_anh: "",
//                 so_thu_tu: null,
//                 mo_ta: "",
//                 tinh_trang: null,
//             },
//             xem_mo_ta: {},
//             list_khoahoc: []
//         };
//     },
//     mounted() {
//         this.getData();
//         this.getDataKH();
//     },
//     methods: {
//         getDataKH() {
//             axios
//                 .get("http://127.0.0.1:8000/api/list-khoahoc")
//                 .then((response) => {
//                     this.list_khoahoc = response.data.data;
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         },
//         getData() {
//             axios
//                 .get("http://127.0.0.1:8000/api/list-baihoc")
//                 .then((response) => {
//                     this.list_baihoc = response.data.data;
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         },
//         addBaiHoc() {
//             axios
//                 .post("http://127.0.0.1:8000/api/add-baihoc", this.input_baihoc)
//                 .then((response) => {
//                     if (response.data.status == true) {
//                         this.$toast.success(response.data.message);
//                         this.getData();
//                     } else {
//                         this.$toast.error(`Fail`);
//                     }
//                 })
//                 .catch((error) => {
//                     var obj = error.response.data.errors;
//                     var result = Object.keys(obj).map((key) => [key, obj[key]]);
//                     result.forEach((value_1, key_1) => {
//                         var xxx = value_1[1];
//                         xxx.forEach((value, key) => {
//                             this.$toast.error(value);
//                         });
//                     });
//                 });
//         },
//         deleteBaiHoc() {
//             axios
//                 .post("http://127.0.0.1:8000/api/delete-baihoc", this.delete_baihoc)
//                 .then((response) => {
//                     if (response.data.status == true) {
//                         this.$toast.success(response.data.message);
//                         this.getData();
//                     } else {
//                         this.$toast.error(`Fail`);
//                     }
//                 })
//                 .catch((error) => {
//                     var obj = error.response.data.errors;
//                     var result = Object.keys(obj).map((key) => [key, obj[key]]);
//                     result.forEach((value_1, key_1) => {
//                         var xxx = value_1[1];
//                         xxx.forEach((value, key) => {
//                             this.$toast.error(value);
//                         });
//                     });
//                 });
//         },
//         updateBaiHoc() {
//             axios
//                 .post("http://127.0.0.1:8000/api/update-baihoc", this.edit_baihoc)
//                 .then((response) => {
//                     if (response.data.status == true) {
//                         this.$toast.success(response.data.message);
//                         this.getData();
//                     } else {
//                         this.$toast.error(`Fail`);
//                     }
//                 })
//                 .catch((error) => {
//                     var obj = error.response.data.errors;
//                     var result = Object.keys(obj).map((key) => [key, obj[key]]);
//                     result.forEach((value_1, key_1) => {
//                         var xxx = value_1[1];
//                         xxx.forEach((value, key) => {
//                             this.$toast.error(value);
//                         });
//                     });
//                 });
//         },
//     },
// };
</script>
<style></style>