import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path : '/',
        component: ()=>import('../components/admin/quan_ly_ban_hang/dich_vu/index.vue')
    },
    {
        path : '/admin/quan-ly-san-pham/san-pham',
        component: ()=>import('../components/admin/quan_ly_san_pham/san_pham/index.vue')
    },
    {
        path : '/admin/quan-ly-san-pham/danh-muc-san-pham',
        component: ()=>import('../components/admin/quan_ly_san_pham/danh_muc_san_pham/index.vue')
    },
    {
        path : '/admin/quan-ly-nhap-kho/nhap-kho',
        component: ()=>import('../components/admin/quan_ly_nhap_kho/nhap_kho/index.vue')
    },
    {
        path : '/admin/quan-ly-nhap-kho/hoa-don-nhap-kho',
        component: ()=>import('../components/admin/quan_ly_nhap_kho/hoa_don_nhap_kho/index.vue')
    },
    {
        path : '/admin/quan-ly-ban-hang/dich-vu',
        component: ()=>import('../components/admin/quan_ly_ban_hang/dich_vu/index.vue')
    },
    {
        path : '/admin/quan-ly-ban-hang/hoa-don-ban-hang',
        component: ()=>import('../components/admin/quan_ly_ban_hang/hoa_don_ban_hang/index.vue')
    },
    {
        path : '/admin/quan-ly-nhan-su/chuc-vu',
        component: ()=>import('../components/admin/quan_ly_nhan_su/chuc_vu/index.vue')
    },
    {
        path : '/admin/quan-ly-nhan-su/nhan-vien',
        component: ()=>import('../components/admin/quan_ly_nhan_su/nhan_vien/index.vue')
    },
    {
        path : '/admin/nha-cung-cap',
        component: ()=>import('../components/admin/nha_cung_cap/index.vue')
    },
    // nha cung cap
    {
        path : '/admin/nha-cung-cap',
        component: ()=>import('../components/admin/nha_cung_cap/index.vue')
    },
    {
        path : '/admin/nha-cung-cap',
        component: ()=>import('../components/admin/nha_cung_cap/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router