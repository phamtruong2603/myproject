import Statistical from "../layout/admin/Statistical/Statistical.js";

import Device from "../layout/admin/Device";
import ManageDevice from "../layout/admin/Device/Manage/index.js";

import Staff from "../layout/admin/Staff";
import ManageStaff from "../layout/admin/Staff/manage/Manage";

import CreateAccount from "../layout/admin/CreateAccount/CreateAccount";

export const Admin_option = [
    {
        id: 0,
        name: 'Thống kê số liệu',
        path: 'statistical',
        component: Statistical,
    },
    {
        id: 1,
        name: 'Thiết bị',
        path: 'device',
        component: Device,
        children: [
            {
                id: 11,
                name: 'Quản lý',
                path: 'manage',
                component: ManageDevice
            },
        ]
    },
    {
        id: 2,
        name: 'Nhân Viên',
        path: 'staff',
        component: Staff,
        children: [
            {
                id: 21,
                name: 'Quản lý',
                path: 'manage',
                component: ManageStaff
            },
        ]
    },
    {
        id: 3,
        name: 'Tạo tài khoản',
        path: 'createaccount',
        component: CreateAccount,
    },
    {
        id: 7,
        name: 'Thông báo',
        path: 'dashboard',
        component: Statistical,
    },
]