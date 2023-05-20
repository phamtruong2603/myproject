import React from 'react';
import TableComponent from '../../../../components/Table/Table';
import { dataDevice } from '../../../../api/testData';

const ManageMain = () => {
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
                title: 'Số Lượng',
                dataIndex: 'quantity',
                key: 'quantity',
                align: 'center'
            },
        ],
        data: dataDevice.map((value, index) => ({
            stt: index,
            id: value.id,
            name: value.name,
            quantity: value.quantity,
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

export default ManageMain