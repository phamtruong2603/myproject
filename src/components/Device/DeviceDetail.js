import React from 'react'
import './DeviceDetail.css'
import { Image } from 'antd'
import { dataHistoyChildDevice } from '../../api/testData'
import TableComponent from '../Table/Table'

const DeviceDetail = () => {
    const dataTable = {
        columns: [
            {
                title: 'STT',
                dataIndex: 'stt',
                key: 'stt',
                align: 'center'
            },
            {
                title: 'Thời gian',
                dataIndex: 'time',
                key: 'time',
                align: 'center'
            },
            {
                title: 'Trạng thái',
                dataIndex: 'state',
                key: 'state',
                align: 'center'
            },
            {
                title: 'Tình trạng',
                dataIndex: 'status',
                key: 'status',
                align: 'center'
            },
        ],
        data: dataHistoyChildDevice.map((value, index) => ({
            stt: index,
            time: value.time,
            state: value.state,
            status: value.status,
            id: value.id
        }))
    }
    return (
        <div>
            <div className='info_DeviceDetail'>
                <Image
                    width={200}
                    src="https://thietbibenthanh.com/uploads/images/2019/08/1566981169-single_pcat23-bientan1.jpg"
                />
                <div>
                    <span>tên</span>
                    <span>thời gian sử dụng</span>
                    <span>trạng thái hiện tại</span>
                    <span><button>click</button></span>
                </div>
            </div>
            <div className='history_DeviceDetail'>
                <p>Lịch sử</p>
                <TableComponent dataTable={dataTable} />
            </div>
        </div>
    )
}

export default DeviceDetail