<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="border p-4 rounded">
                    <div class="text-center">
                        <h3 class="">Đăng Nhập</h3>
                        <p>Chưa có tài khoản? <a href="sign-up">Đăng ký tài khoản mới ở đây!</a>
                        </p>
                    </div>
                    <div class="d-grid">
                        <a class="btn my-4 shadow-sm btn-white" href="javascript:;"> <span
                                class="d-flex justify-content-center align-items-center">
                                <img class="me-2" src="../../../assets/images/icons/search.svg" width="16"
                                    alt="Image Description">
                                <span>Sign in with Google</span>
                            </span>
                        </a> <a href="javascript:;" class="btn btn-facebook"><i class="bx bxl-facebook"></i>Sign in with
                            Facebook</a>
                    </div>
                    <div class="login-separater text-center mb-4"> <span>OR SIGN IN WITH EMAIL</span>
                        <hr />
                    </div>
                    <div class="form-body">
                        <form class="row g-3">
                            <div class="col-12">
                                <label for="inputEmailAddress" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="inputEmailAddress"
                                    placeholder="Email Address">
                            </div>
                            <div class="col-12">
                                <label for="inputChoosePassword" class="form-label">Enter
                                    Password</label>
                                <div class="input-group" id="show_hide_password">
                                    <input type="password" class="form-control border-end-0" id="inputChoosePassword"
                                        value="12345678" placeholder="Nhập Mật Khẩu"> <a href="javascript:;"
                                        class="input-group-text bg-transparent"><i class='bx bx-hide'></i></a>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                                    <label class="form-check-label" for="flexSwitchCheckChecked">Remember Me</label>
                                </div>
                            </div>
                            <div class="col-md-6 text-end"> <a href="authentication-forgot-password.html">Forgot
                                    Password ?</a>
                            </div>
                            <div class="col-12">
                                <div class="d-grid">
                                    <button type="submit" class="btn btn-primary"><i class="bx bxs-lock-open"></i>Đăng Nhập</button>
                                </div>
                            </div>
                        </form>
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