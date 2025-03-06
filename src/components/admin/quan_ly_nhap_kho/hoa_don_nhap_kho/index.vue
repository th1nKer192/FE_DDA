<template>
    <div>
        <div class="row">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h4 class="mt-3">Danh Sách Hoá Đơn Nhập Kho</h4>
                        </div>
                        <div class="col-lg-6 col-md-12 text-end mt-2">

                        </div>
                    </div>
                </div>
                <div class="card-body">

                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th class="text-center align-middle">Từ Ngày</th>
                                <th class="text-center align-middle">
                                    <input type="date" class="form-control" placeholder="">
                                </th>
                                <th class="text-center align-middle">Đến Ngày</th>
                                <th class="text-center align-middle">
                                    <input type="date" class="form-control" placeholder="">
                                </th>
                                <th class="text-center align-middle">
                                    <button class="btn btn-primary">
                                        Thống Kê</button>
                                </th>
                                <th class="align-middle" colspan="2">Tổng Tiền: VNĐ</th>
                            </tr>
                            <tr>
                                <th class="text-center align-middle">#</th>
                                <th class="text-center align-middle">Mã Hoá Đơn</th>
                                <th class="text-center align-middle">Tổng Tiền</th>
                                <th class="text-center align-middle">Nhà Cung Cấp</th>
                                <th class="text-center align-middle">Ghi Chú</th>
                                <th class="text-center align-middle">Chi Tiết Hoá Đơn</th>
                                <th class="text-center align-middle">Nhân Viên</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center align-middle"></td>
                                <td class="align-middle text-center"></td>
                                <td class="align-middle text-center"></td>
                                <td class="align-middle text-center"></td>
                                <td class="align-middle text-center"><i class="fa-solid fa-square-plus fa-2x" style="color: #36E522;"></i></td>
                                <td class="align-middle text-center"><i class="fa-solid fa-circle-info fa-2x" style="color: #17A3FF;"></i></td>
                                <td class="align-middle text-center"></td>
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