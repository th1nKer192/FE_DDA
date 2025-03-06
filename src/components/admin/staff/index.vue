<template>
    <div>
        <div class="row">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <h4 class="mt-3"><i class="fa-solid fa-clipboard-user"></i> Danh Sách Nhân Viên</h4>
                        </div>
                        <div class="col-lg-6 col-md-12 text-end mt-2">
                            <button class="btn btn-lg" style="background-color: #FFF3CD" data-bs-toggle="modal"
                                data-bs-target="#addModal">Thêm
                                Nhân Viên</button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead class="table table-warning">
                            <tr>
                                <th class="text-center align-middle">#</th>
                                <th class="text-center align-middle" >Họ Và Tên</th>
                                <th class="text-center align-middle">Email</th>
                                <th class="text-center align-middle">Số Điện Thoại</th>
                                <th class="text-center align-middle">Địa Chỉ</th>
                                <th class="text-center align-middle">Ngày Sinh</th>
                                <th class="text-center align-middle">Tình Trạng</th>
                                <th class="text-center align-middle">Tuỳ Chọn</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(v, k) in list_staff" :key="k">
                                <td class="text-center align-middle"><b>{{ k + 1 }}</b></td>
                                <td class="align-middle">{{ v.staff_name }}</td>
                                <td class="align-middle">{{ v.staff_email }}</td>
                                <td class="align-middle">{{ v.staff_phone }}</td>
                                <td class="align-middle">{{ v.staff_local }}</td>
                                <td class="align-middle">{{ v.staff_birth }}</td>
                                <td class="text-center align-middle">
                                    <button v-if="v.staff_status == 1" class="btn btn-success">Đang Làm</button>
                                    <button v-else class="btn btn-danger">Đã Nghỉ</button>
                                </td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                        data-bs-target="#updateModal" v-on:click="Object.assign(edit_staff, v)">Cập
                                        Nhật</button>
                                    <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#deleteModal"
                                        v-on:click="Object.assign(delete_staff, v)">Xóa
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
                        Thêm Mới Nhân Viên
                    </h3>
                    <button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <label for="">Họ Và Tên</label>
                    <input v-model="input_staff.staff_name" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Email</label>
                    <input v-model="input_staff.staff_email" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Số Điện Thoại</label>
                    <input v-model="input_staff.staff_phone" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Địa Chỉ</label>
                    <input v-model="input_staff.staff_local" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Ngày Sinh</label>
                    <input v-model="input_staff.staff_birth" type="date" class="form-control" placeholder="">
                    <label class="mt-3" for="">Tình Trạng</label>
                    <select v-model="input_staff.staff_status" class="form-select" id="">
                        <option value="1">Đang Làm</option>
                        <option value="0">Đã Nghỉ</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="addStaff()">Thêm
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
                        Cập Nhật Thông Tin Nhân Viên
                    </h3>
                    <button type="button" class="btn btn-secondary btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <label for="">Họ Và Tên</label>
                    <input v-model="edit_staff.staff_name" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Email</label>
                    <input v-model="edit_staff.staff_email" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Số Điện Thoại</label>
                    <input v-model="edit_staff.staff_phone" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Địa Chỉ</label>
                    <input v-model="edit_staff.staff_local" type="text" class="form-control" placeholder="">
                    <label class="mt-3" for="">Ngày Sinh</label>
                    <input v-model="edit_staff.staff_birth" type="date" class="form-control" placeholder="">
                    <label class="mt-3" for="">Tình Trạng</label>
                    <select v-model="edit_staff.staff_status" class="form-select" id="">
                        <option value="1">Đang Làm</option>
                        <option value="0">Đã Nghỉ</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="updateStaff()">Cập Nhật</button>
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
                        <p>Bạn có muốn xoá nhân viên <b><i>{{ delete_staff.staff_name }}</i></b> này không?</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Huỷ
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                        v-on:click="deleteStaff()">Xoá luôn</button>
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
            list_staff: [],
            input_staff: {
                staff_name: "",
                staff_email: "",
                staff_phone: "",
                staff_local: "",
                staff_birth: null,
                staff_status: null
            },
            delete_staff: {
                staff_name: "",
                staff_email: "",
                staff_phone: "",
                staff_local: "",
                staff_birth: null,
                staff_status: null
            },
            edit_staff: {
                staff_name: "",
                staff_email: "",
                staff_phone: "",
                staff_local: "",
                staff_birth: null,
                staff_status: null
            },
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            axios
                .get('http://127.0.0.1:8000/api/list-staff')
                .then(response => {
                    this.list_staff = response.data.data;
                })
                .catch(err => {
                    console.log(err);
                })
        },
        addStaff() {
            axios
                .post('http://127.0.0.1:8000/api/add-staff', this.input_staff)
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
        deleteStaff() {
            axios
                .post('http://127.0.0.1:8000/api/delete-staff', this.delete_staff)
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
        updateStaff() {
            axios
                .post('http://127.0.0.1:8000/api/update-staff', this.edit_staff)
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