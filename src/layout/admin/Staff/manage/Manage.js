import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TableComponent from '../../../../components/Table/Table';
import ProfileMain from '../../../../components/Profile/ProfileMain';
import { memberData } from '../../../../api/testData';
const MainMemberManage = () => {
    // const [users, setUsers] = useState(memberData)
    const dataTable = {
        columns: [
            {
                title: 'STT',
                dataIndex: 'stt',
                key: 'stt',
            },
            {
                title: 'Avatar',
                dataIndex: 'avatar',
                key: 'avatar',
            },
            {
                title: 'Họ tên',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: 'Ngày sinh',
                dataIndex: 'dateOfBirth',
                key: 'dateOfBirth',
            },
            {
                title: 'Phone',
                dataIndex: 'phone',
                key: 'phone',
            },
        ],
        data: memberData.map((value, index) => ({
            stt: index,
            avatar: value.avatar,
            name: value.name,
            email: value.email,
            dateOfBirth: value.dateOfBirth,
            phone: value.phone,
            id: value.id
        }))
    }
    return (
        <div>
            <TableComponent
                dataTable={dataTable}
                click={true}
                text={"chi tiết"}
            />
        </div>
    )
}

const ManageStaff = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<MainMemberManage />}
            />
            <Route
                path="/:id"
                element={<ProfileMain />}
            />
        </Routes>
    )
}

export default ManageStaff