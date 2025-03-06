<template>
    <div>
        <div class="container">
            <div class="main-body">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img src="../../../assets/images/avatars/avatar-2.png" alt="Admin"
                                        class="rounded-circle p-1 bg-primary" width="110">
                                    <div class="mt-3">
                                        <h4>Thắng Nguyễn</h4>
                                        <p class="text-secondary mb-1">Admin</p>
                                        <p class="text-muted font-size-sm"><i
                                                class="bx bxs-circle me-1 text-success"></i>Đang Hoạt Động</p>
                                    </div>
                                </div>
                                <hr class="my-4">
                                <ul class="list-group list-group-flush">
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 class="mb-0">
                                            <i class="fa-regular fa-envelope"></i>
                                            Email
                                        </h6>
                                        <span class="text-secondary">truongthinh@gmail.com</span>
                                    </li>
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center flex-wrap mt-2">
                                        <h6 class="mb-0">
                                            <i class="fa-solid fa-phone"></i>
                                            Số Điện Thoại
                                        </h6>
                                        <span class="text-secondary">0829769379</span>
                                    </li>
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center flex-wrap mt-2">
                                        <h6 class="mb-0">
                                            <i class="fa-solid fa-calendar-days"></i>
                                            Ngày Tham Gia
                                        </h6>
                                        <span class="text-secondary">19/12/2024</span>
                                    </li>
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center flex-wrap mt-2">
                                        <h6 class="mb-0">
                                            <i class="fa-solid fa-clock"></i>
                                            Đăng Nhập Lần Cuối
                                        </h6>
                                        <span class="text-secondary">Hôm nay, 10:03</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="mt-2"><i class="fa-regular fa-user"></i>
                                    Thông Tin Cá Nhân</h4>
                            </div>
                            <div class="card-body">
                                <div class="row mb-3 mt-2">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Họ Tên</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" value="Trương Quang Thịnh">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" value="truongthinh@gmail.com">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Số Điện Thoại</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" value="0829769379">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Address</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" value="72 Ỷ Lan Nguyên Phi">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="mt-2"><i class="fa-solid fa-lock"></i>   
                                            Đổi Mật Khẩu</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="row mb-3 mt-2">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Mật Khẩu Hiện Tại</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control" placeholder="Nhập Mật Khẩu Hiện Tại...">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Mật Khẩu Mới</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control" placeholder="Nhập Mật Khẩu Mới...">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Xác Nhận Mật Khẩu</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control" placeholder="Nhập Lại Mật Khẩu Mới...">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="card">
                                    <div class="card-body text-end">
                                        <button class="btn btn-secondary me-2">Huỷ Thay Đổi</button>
                                        <button class="btn btn-primary"><i class="fa-regular fa-floppy-disk"></i> Lưu Lại Thay Đổi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>