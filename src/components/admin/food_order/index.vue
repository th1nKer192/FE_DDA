<template>
    <div>
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="row mb-3">
                            <div class="col-lg-6">
                                <div class="position-relative search-bar-box mt-3">
                                    <input style="width: 600px;" type="text" class="form-control search-control"
                                        placeholder="Tìm Kiếm Đơn Đặt...">
                                    <span class="position-absolute top-50 search-show translate-middle-y"><i
                                            class="bx bx-search"></i></span>
                                    <span class="position-absolute top-50 search-close translate-middle-y"><i
                                            class="bx bx-x"></i></span>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="row text-end mt-3">
                                    <div class="col">
                                        <select class="form-select">
                                            <option value="">Sắp Xếp Theo</option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <select class="form-select">
                                            <option value="">Trạng Thái</option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <select class="form-select">
                                            <option value="">Khoảng Giá</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th class="align-middle text-center">Mã Đơn</th>
                                    <th class="align-middle text-center">Khách Hàng</th>
                                    <th class="align-middle text-center">Tổng Tiền</th>
                                    <th class="align-middle text-center">Ngày Đặt</th>
                                    <th class="align-middle text-center">Trạng Thái</th>
                                    <th class="align-middle text-center" style="width: 500px;">Tuỳ Chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="align-middle text-center">#097TYGS</td>
                                    <td class="align-middle text-center">Vũ Thái Minh</td>
                                    <td class="align-middle text-center">180.000đ</td>
                                    <td class="align-middle text-center">2025-01-01</td>
                                    <td class="align-middle text-center">
                                        <button class="btn btn-sm btn-warning">Chờ Xác Nhận</button>
                                    </td>
                                    <td class="align-middle text-center">
                                        <button class="btn btn-info me-2"><i class="fa-solid fa-circle-info"></i> Chi
                                            Tiết</button>
                                        <button class="btn btn-success me-2"><i class="fa-solid fa-check"></i> Xác
                                            Nhận</button>
                                        <button class="btn btn-danger"><i class="fa-solid fa-x"></i> Huỷ</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="align-middle text-center">#023TRGL</td>
                                    <td class="align-middle text-center">Nguyễn Văn An</td>
                                    <td class="align-middle text-center">230.000đ</td>
                                    <td class="align-middle text-center">2025-01-01</td>
                                    <td class="align-middle text-center">
                                        <button class="btn btn-sm btn-primary">Đang Giao</button>
                                    </td>
                                    <td class="align-middle text-center">
                                        <button class="btn btn-info me-2"><i class="fa-solid fa-circle-info"></i> Chi
                                            Tiết</button>
                                        <button class="btn btn-danger"><i class="fa-solid fa-x"></i> Huỷ</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer">
                        <div class="row mt-3">
                            <div class="col-lg-6">
                                <p>Hiển thị 1-10 trong số 100 đơn hàng</p>
                            </div>
                            <div class="col-lg-6 text-end">
                                <div class="btn-group" role="group" aria-label="First group">
                                    <button type="button" class="btn btn-outline-primary"><i
                                            class="fa-solid fa-arrow-left"></i></button>
                                    <button type="button" class="btn btn-outline-primary">1</button>
                                    <button type="button" class="btn btn-outline-primary">2</button>
                                    <button type="button" class="btn btn-outline-primary">3</button>
                                    <button type="button" class="btn btn-outline-primary"><i
                                            class="fa-solid fa-arrow-right"></i></button>
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