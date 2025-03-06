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
                            <button class="btn btn-lg btn-primary" data-bs-toggle="modal"
                                data-bs-target="#addModal">Thêm
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
                                <th class="text-center align-middle" style="width: 300px;">Họ Và Tên</th>
                                <th class="text-center align-middle" style="width: 400px;">Email</th>
                                <th class="text-center align-middle">Số Điện Thoại</th>
                                <th class="text-center align-middle" style="width: 200px;">Địa Chỉ</th>
                                <th class="text-center align-middle">Chức Vụ</th>
                                <th class="text-center align-middle" style="width: 130px;">Tình Trạng</th>
                                <th class="text-center align-middle" style="width: 210px;">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center align-middle"></td>
                                <td class="align-middle text-center"></td>
                                <td class="align-middle text-center"></td>
                                <td class="align-middle text-center"></td>
                                <td class="align-middle"></td>
                                <td class="align-middle"></td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-success">Hoạt Động</button>
                                    <!-- <button class="btn btn-warning">Tạm Tắt</button> -->
                                </td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                        data-bs-target="#updateModal">Cập
                                        Nhật</button>
                                    <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"
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
</template>
<script>
// import axios from 'axios';
// export default {
//     data() {
//         return {
//             list_voucher: [],
//             input_voucher: {
//                 code_num: "",
//                 datetime_start: null,
//                 datetime_end: null,
//                 discount_type: null,
//                 discount_num: null,
//                 max_discount: null,
//                 max_order: null,
//                 status_type: null
//             },
//             delete_voucher: {
//                 code_num: "",
//                 datetime_start: null,
//                 datetime_end: null,
//                 discount_type: null,
//                 discount_num: null,
//                 max_discount: null,
//                 max_order: null,
//                 status_type: null
//             },
//             edit_voucher: {
//                 code_num: "",
//                 datetime_start: null,
//                 datetime_end: null,
//                 discount_type: null,
//                 discount_num: null,
//                 max_discount: null,
//                 max_order: null,
//                 status_type: null
//             },
//         }
//     },
//     mounted() {
//         this.getData();
//     },
//     methods: {
//         getData() {
//             axios
//                 .get('http://127.0.0.1:8000/api/list-voucher')
//                 .then(response => {
//                     this.list_voucher = response.data.data;
//                 })
//                 .catch(err => {
//                     console.log(err);
//                 })
//         },
//         addVoucher() {
//             axios
//                 .post('http://127.0.0.1:8000/api/add-voucher', this.input_voucher)
//                 .then(response => {
//                     if (response.data.status == true) {
//                         this.$toast.success(response.data.message);
//                         this.getData();
//                     } else {
//                         this.$toast.error(`Fail`);
//                     }
//                 })
//                 .catch(error => {
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
//         deleteVoucher() {
//             axios
//                 .post('http://127.0.0.1:8000/api/delete-voucher', this.delete_voucher)
//                 .then(response => {
//                     if (response.data.status == true) {
//                         this.$toast.success(response.data.message);
//                         this.getData()
//                     } else {
//                         this.$toast.error(`Fail`);
//                     }
//                 })
//                 .catch(error => {
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
//         updateVoucher() {
//             axios
//                 .post('http://127.0.0.1:8000/api/update-voucher', this.edit_voucher)
//                 .then(response => {
//                     if (response.data.status == true) {
//                         this.$toast.success(response.data.message);
//                         this.getData()
//                     } else {
//                         this.$toast.error(`Fail`);
//                     }
//                 })
//                 .catch(error => {
//                     var obj = error.response.data.errors;
//                     var result = Object.keys(obj).map((key) => [key, obj[key]]);
//                     result.forEach((value_1, key_1) => {
//                         var xxx = value_1[1];
//                         xxx.forEach((value, key) => {
//                             this.$toast.error(value);
//                         });
//                     });
//                 });
//         }
//     }
// }
</script>
<style></style>