import React from 'react'
import TableComponent from '../../../../components/Table/Table'
import { dataChildDevice } from '../../../../api/testData'

const ChildDevice = () => {
    const dataTable = {
        columns: [
            {
                title: 'STT',
                dataIndex: 'stt',
                key: 'stt',
                align: 'center'
            },
            {
                title: 'Tên thiết bị',
                dataIndex: 'name',
                key: 'name',
                align: 'center'
            },
            {
                title: 'Tình trạng',
                dataIndex: 'state',
                key: 'state',
                align: 'center'
            },
            {
                title: 'Trạng Thái',
                dataIndex: 'status',
                key: 'status',
                align: 'center'
            },
        ],
        data: dataChildDevice.map((value, index) => ({
            stt: index,
            name: value.name,
            state: value.state,
            status: value.status,
            id: value.id
        }))
    }
    return (
        <div>
            <TableComponent
                dataTable={dataTable}
                click={true}
                text={"lịch sử"}
            />
        </div>
    )
}

export default ChildDevice