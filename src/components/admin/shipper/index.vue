<template>
    <div>
        <div class="row">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h4 class="mt-3"><i class="fa-solid fa-motorcycle"></i> Danh Sách Shipper</h4>
                        </div>
                        <div class="col-lg-6 col-md-12 text-end mt-2">
                            <button class="btn btn-lg btn-primary" data-bs-toggle="modal"
                                data-bs-target="#addModal">Thêm
                                Mới Shipper</button>
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
                                <th class="text-center align-middle">CMND</th>
                                <th class="text-center align-middle">Địa Chỉ Thường Trú</th>
                                <th class="text-center align-middle">Tỉnh Thành</th>
                                <th class="text-center align-middle">Quận Huyện</th>
                                <th class="text-center align-middle">Toạ Độ X</th>
                                <th class="text-center align-middle">Toạ Độ Y</th>
                                <th class="text-center align-middle" style="width: 150px;">Trạng Thái</th>
                                <th class="text-center align-middle" style="width: 170px;">Kích Hoạt</th>
                                <th class="text-center align-middle" style="width: 210px;">Tuỳ Chọn</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(v, k) in list_shipper" :key="k">
                                <td class="text-center align-middle"><b>{{ k + 1 }}</b></td>
                                <td class="align-middle">{{ v.shipper_name }}</td>
                                <td class="align-middle">{{ v.shipper_email }}</td>
                                <td class="align-middle">{{ v.shipper_phone }}</td>
                                <td class="align-middle">{{ v.shipper_cmnd }}</td>
                                <td class="align-middle">{{ v.shipper_local }}</td>
                                <td class="align-middle">{{ v.shipper_city }}</td>
                                <td class="align-middle">{{ v.shipper_district }}</td>
                                <td class="align-middle">{{ v.shipper_point_x }}</td>
                                <td class="align-middle">{{ v.shipper_point_x }}</td>
                                <td class="text-center align-middle">
                                    <button v-if="v.shipper_status == 1" class="btn btn-success">Đang Làm</button>
                                    <button v-else class="btn btn-danger">Đã Nghỉ</button>
                                </td>
                                <td class="text-center align-middle">
                                    <button v-if="v.shipper_active == 1" class="btn btn-warning">Đã Kích Hoạt</button>
                                    <button v-else class="btn btn-secondary">Chưa Kích Hoạt</button>
                                </td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                        data-bs-target="#updateModal" v-on:click="Object.assign(edit_shipper, v)">Cập
                                        Nhật</button>
                                    <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#deleteModal"
                                        v-on:click="Object.assign(delete_shipper, v)">Xóa
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
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title fs-5" id="exampleModalLabel">
                        Thêm Mới Shipper
                    </h3>
                    <button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <label for="">Họ Và Tên</label>
                    <input v-model="input_shipper.shipper_name" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Email</label>
                    <input v-model="input_shipper.shipper_email" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Mật Khẩu</label>
                    <input v-model="input_shipper.shipper_pass" type="text" class="form-control" placeholder="">
                    <div class="row">
                        <div class="col-lg-6">
                            <label class="mt-3" for="">Số Điện Thoại</label>
                            <input v-model="input_shipper.shipper_phone" type="text" class="form-control"
                                placeholder="">
                        </div>
                        <div class="col-lg-6">
                            <label class="mt-3" for="">CMND</label>
                            <input v-model="input_shipper.shipper_cmnd" type="text" class="form-control" placeholder="">
                        </div>
                    </div>
                    <label class="mt-3" for="">Địa Chỉ Thường Trú</label>
                    <textarea v-model="input_shipper.shipper_local" class="form-control" rows="4" name=""
                        id=""></textarea>
                    <div class="row">
                        <div class="col-lg-6">
                            <label class="mt-3" for="">Tỉnh Thành</label>
                            <input v-model="input_shipper.shipper_city" type="text" class="form-control" placeholder="">
                        </div>
                        <div class="col-lg-6">
                            <label class="mt-3" for="">Quận Huyện</label>
                            <input v-model="input_shipper.shipper_district" type="text" class="form-control"
                                placeholder="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <label class="mt-3" for="">Toạ Độ X</label>
                            <input v-model="input_shipper.shipper_point_x" type="text" class="form-control"
                                placeholder="">
                        </div>
                        <div class="col-lg-6">
                            <label class="mt-3" for="">Toạ Độ Y</label>
                            <input v-model="input_shipper.shipper_point_y" type="text" class="form-control"
                                placeholder="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <label class="mt-3" for="">Trạng Thái</label>
                            <select v-model="input_shipper.shipper_status" class="form-select" id="">
                                <option value="1">Đang Làm</option>
                                <option value="0">Đã Nghỉ</option>
                            </select>
                        </div>
                        <div class="col-lg-6">
                            <label class="mt-3" for="">Kích Hoạt</label>
                            <select v-model="input_shipper.shipper_active" class="form-select" id="">
                                <option value="1">Đã Kích Hoạt</option>
                                <option value="0">Chưa Kích Hoạt</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="addShipper()">Thêm
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
                    <input v-model="edit_shipper.shipper_name" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Email</label>
                    <input v-model="edit_shipper.shipper_email" type="text" class="form-control" placeholder="">
                    <div class="row">
                        <div class="col-lg-6">
                            <label class="mt-3" for="">Số Điện Thoại</label>
                            <input v-model="edit_shipper.shipper_phone" type="text" class="form-control"
                                placeholder="">
                        </div>
                        <div class="col-lg-6">
                            <label class="mt-3" for="">CMND</label>
                            <input v-model="edit_shipper.shipper_cmnd" type="text" class="form-control" placeholder="">
                        </div>
                    </div>
                    <label class="mt-3" for="">Địa Chỉ Thường Trú</label>
                    <textarea v-model="edit_shipper.shipper_local" class="form-control" rows="4" name=""
                        id=""></textarea>
                    <div class="row">
                        <div class="col-lg-6">
                            <label class="mt-3" for="">Tỉnh Thành</label>
                            <input v-model="edit_shipper.shipper_city" type="text" class="form-control" placeholder="">
                        </div>
                        <div class="col-lg-6">
                            <label class="mt-3" for="">Quận Huyện</label>
                            <input v-model="edit_shipper.shipper_district" type="text" class="form-control"
                                placeholder="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <label class="mt-3" for="">Toạ Độ X</label>
                            <input v-model="edit_shipper.shipper_point_x" type="text" class="form-control"
                                placeholder="">
                        </div>
                        <div class="col-lg-6">
                            <label class="mt-3" for="">Toạ Độ Y</label>
                            <input v-model="edit_shipper.shipper_point_y" type="text" class="form-control"
                                placeholder="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <label class="mt-3" for="">Trạng Thái</label>
                            <select v-model="edit_shipper.shipper_status" class="form-select" id="">
                                <option value="1">Đang Làm</option>
                                <option value="0">Đã Nghỉ</option>
                            </select>
                        </div>
                        <div class="col-lg-6">
                            <label class="mt-3" for="">Kích Hoạt</label>
                            <select v-model="edit_shipper.shipper_active" class="form-select" id="">
                                <option value="1">Đã Kích Hoạt</option>
                                <option value="0">Chưa Kích Hoạt</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                        v-on:click="updateShipper()">Cập Nhật</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title fs-5" id="exampleModalLabel">Xoá Nhân Viên</h3>
                    <button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        <p>Bạn có muốn xoá khách hàng <b><i>{{ delete_shipper.shipper_name }}</i></b> này không?</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                        v-on:click="deleteShipper()">Xoá luôn</button>
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
            list_shipper: [],
            input_shipper: {
                shipper_name: "",
                shipper_email: "",
                shipper_phone: "",
                shipper_cmnd: "",
                shipper_local: "",
                shipper_pass: "",
                shipper_city: "",
                shipper_district: "",
                shipper_point_x: "",
                shipper_point_y: "",
                shipper_status: null,
                shipper_active: null
            },
            delete_shipper: {
                shipper_name: "",
                shipper_email: "",
                shipper_phone: "",
                shipper_cmnd: "",
                shipper_local: "",
                shipper_pass: "",
                shipper_city: "",
                shipper_district: "",
                shipper_point_x: "",
                shipper_point_y: "",
                shipper_status: null,
                shipper_active: null
            },
            edit_shipper: {
                shipper_name: "",
                shipper_email: "",
                shipper_phone: "",
                shipper_cmnd: "",
                shipper_local: "",
                shipper_pass: "",
                shipper_city: "",
                shipper_district: "",
                shipper_point_x: "",
                shipper_point_y: "",
                shipper_status: null,
                shipper_active: null
            },
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            axios
                .get('http://127.0.0.1:8000/api/list-shipper')
                .then(response => {
                    this.list_shipper = response.data.data;
                })
                .catch(err => {
                    console.log(err);
                })
        },
        addShipper() {
            axios
                .post('http://127.0.0.1:8000/api/add-shipper', this.input_shipper)
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
        deleteShipper() {
            axios
                .post('http://127.0.0.1:8000/api/delete-shipper', this.delete_shipper)
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
        updateShipper() {
            axios
                .post('http://127.0.0.1:8000/api/update-shipper', this.edit_shipper)
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