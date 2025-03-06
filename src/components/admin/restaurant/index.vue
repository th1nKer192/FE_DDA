<template>
    <div>
        <div class="row">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h4 class="mt-3"><i class="fa-solid fa-utensils"></i> Danh Sách Quán Ăn</h4>
                        </div>
                        <div class="col-lg-6 col-md-12 text-end mt-2">
                            <button class="btn btn-lg btn-primary" data-bs-toggle="modal"
                                data-bs-target="#addModal">Thêm
                                Quán Ăn</button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead class="table table-success">
                            <tr>
                                <th class="text-center align-middle">#</th>
                                <th class="text-center align-middle">Tên Quán Ăn</th>
                                <th class="text-center align-middle">Email</th>
                                <th class="text-center align-middle">Số Điện Thoại</th>
                                <th class="text-center align-middle">Chi Tiết</th>
                                <th class="text-center align-middle">Trạng Thái</th>
                                <th class="text-center align-middle">Kích Hoạt</th>
                                <th class="text-center align-middle">Tuỳ Chọn</th>
                            </tr>
                        </thead>
                        <!-- <tbody>
                            <tr v-for="(v, k) in list_restaurant" :key="k">
                                <td class="text-center align-middle"><b>{{ k + 1 }}</b></td>
                                <td class="align-middle">{{ v.restaurant_name }}</td>
                                <td class="align-middle">{{ v.restaurant_email }}</td>
                                <td class="align-middle">{{ v.restaurant_phone }}</td>
                                <td class="align-middle">{{ v.restaurant_info }}</td>
                                <td class="text-center align-middle">
                                    <button v-if="v.restaurant_status == 1" class="btn btn-success">Hoạt Động</button>
                                    <button v-else class="btn btn-danger">Tạm Tắt</button>
                                </td>
                                <td class="text-center align-middle">
                                    <button v-if="v.restaurant_active == 1" class="btn btn-warning">Đã Kích Hoạt</button>
                                    <button v-else class="btn btn-secondary">Chưa Kích Hoạt</button>
                                </td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                        data-bs-target="#updateModal" v-on:click="Object.assign(edit_restaurant, v)">Cập
                                        Nhật</button>
                                    <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#deleteModal"
                                        v-on:click="Object.assign(delete_restaurant, v)">Xóa
                                        Bỏ</button>
                                </td>
                            </tr>
                        </tbody> -->
                        <tbody>
                            <tr>
                                <td class="text-center align-middle"><b>1</b></td>
                                <td class="align-middle">ABC</td>
                                <td class="align-middle">abc@gmail.com</td>
                                <td class="align-middle">082936134</td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#infoModal"><i class="fa-solid fa-info"></i> Chi Tiết</button>
                                </td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-success">Hoạt Động</button>
                                </td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-warning">Đã Kích
                                        Hoạt</button>
                                </td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                        data-bs-target="#updateModal">Cập
                                        Nhật</button>
                                    <button class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#deleteModal">Xóa
                                        Bỏ</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title fs-5" id="exampleModalLabel">Thông Tin Chi Tiết</h3>
                    <button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-warning" role="alert">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit porro ipsam itaque at velit
                            voluptas dolor officiis recusandae asperiores odio hic reprehenderit magnam cupiditate,
                            illum cumque perferendis, laudantium libero a.
                        </p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Ok
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title fs-5" id="exampleModalLabel">
                        Thêm Mới Quán Ăn
                    </h3>
                    <button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <label for="">Tên Quán Ăn</label>
                    <input type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Email</label>
                    <input type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Số Điện Thoại</label>
                    <input type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Mã Số Thuế</label>
                    <input type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Tỉnh Thành</label>
                    <input type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Quận Huyện</label>
                    <input type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Địa Chỉ</label>
                    <input type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Trạng Thái</label>
                    <select class="form-select" id="">
                        <option value="1">Đang Làm</option>
                        <option value="0">Đã Nghỉ</option>
                    </select>
                    <label class="mt-3" for="">Kích Hoạt</label>
                    <select class="form-select" id="">
                        <option value="1">Đã Kích Hoạt</option>
                        <option value="0">Chưa Kích Hoạt</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Thêm
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
                        Cập Nhật Thông Tin Quán Ăn
                    </h3>
                    <button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <label for="">Tên Quán Ăn</label>
                    <input type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Email</label>
                    <input type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Số Điện Thoại</label>
                    <input type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Mã Số Thuế</label>
                    <input type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Tỉnh Thành</label>
                    <input type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Quận Huyện</label>
                    <input type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Địa Chỉ</label>
                    <input type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Trạng Thái</label>
                    <select class="form-select" id="">
                        <option value="1">Đang Làm</option>
                        <option value="0">Đã Nghỉ</option>
                    </select>
                    <label class="mt-3" for="">Kích Hoạt</label>
                    <select class="form-select" id="">
                        <option value="1">Đã Kích Hoạt</option>
                        <option value="0">Chưa Kích Hoạt</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập Nhật</button>
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
                        <p>Bạn có muốn xoá khách hàng <b><i>ABC</i></b> này không?
                        </p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xoá luôn</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import axios from 'axios';
export default {
    // data() {
    //     return {
    //         list_restaurant: [],
    //         input_restaurant: {
    //             restaurant_name: "",
    //             restaurant_email: "",
    //             restaurant_phone: null,
    //             restaurant_info: "",
    //             restaurant_status: null,
    //             restaurant_active: null
    //         },
    //         delete_restaurant: {
    //             restaurant_name: "",
    //             restaurant_email: "",
    //             restaurant_phone: null,
    //             restaurant_info: "",
    //             restaurant_status: null,
    //             restaurant_active: null
    //         },
    //         edit_restaurant: {
    //             restaurant_name: "",
    //             restaurant_email: "",
    //             restaurant_phone: null,
    //             restaurant_info: "",
    //             restaurant_status: null,
    //             restaurant_active: null
    //         },
    //     }
    // },
    // mounted() {
    //     this.getData();
    // },
    // methods: {
    //     getData() {
    //         axios
    //             .get('http://127.0.0.1:8000/api/list-restaurant')
    //             .then(response => {
    //                 this.list_restaurant = response.data.data;
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //             })
    //     },
    //     addRestaurant() {
    //         axios
    //             .post('http://127.0.0.1:8000/api/add-restaurant', this.input_restaurant)
    //             .then(response => {
    //                 if (response.data.status == true) {
    //                     this.$toast.success(response.data.message);
    //                     this.getData();
    //                 } else {
    //                     this.$toast.error(`Fail`);
    //                 }
    //             })
    //             .catch(error => {
    //                 var obj = error.response.data.errors;
    //                 var result = Object.keys(obj).map((key) => [key, obj[key]]);
    //                 result.forEach((value_1, key_1) => {
    //                     var xxx = value_1[1];
    //                     xxx.forEach((value, key) => {
    //                         this.$toast.error(value);
    //                     });
    //                 });
    //             });
    //     },
    //     deleteRestaurant() {
    //         axios
    //             .post('http://127.0.0.1:8000/api/delete-restaurant', this.delete_restaurant)
    //             .then(response => {
    //                 if (response.data.status == true) {
    //                     this.$toast.success(response.data.message);
    //                     this.getData()
    //                 } else {
    //                     this.$toast.error(`Fail`);
    //                 }
    //             })
    //             .catch(error => {
    //                 var obj = error.response.data.errors;
    //                 var result = Object.keys(obj).map((key) => [key, obj[key]]);
    //                 result.forEach((value_1, key_1) => {
    //                     var xxx = value_1[1];
    //                     xxx.forEach((value, key) => {
    //                         this.$toast.error(value);
    //                     });
    //                 });
    //             });
    //     },
    //     updateRestaurant() {
    //         axios
    //             .post('http://127.0.0.1:8000/api/update-restaurant', this.edit_restaurant)
    //             .then(response => {
    //                 if (response.data.status == true) {
    //                     this.$toast.success(response.data.message);
    //                     this.getData()
    //                 } else {
    //                     this.$toast.error(`Fail`);
    //                 }
    //             })
    //             .catch(error => {
    //                 var obj = error.response.data.errors;
    //                 var result = Object.keys(obj).map((key) => [key, obj[key]]);
    //                 result.forEach((value_1, key_1) => {
    //                     var xxx = value_1[1];
    //                     xxx.forEach((value, key) => {
    //                         this.$toast.error(value);
    //                     });
    //                 });
    //             });
    //     }
    // }
}
</script>
<style></style>