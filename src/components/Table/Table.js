import { Button, Table } from 'antd';
import { useNavigate } from 'react-router-dom';

const TableComponent = ({ dataTable, click, text }) => {
    const navigate = useNavigate()
    const dataSource = [...dataTable.data]
    const handleNavigate = (id) => {
        navigate(`${id}`)
    };

    let defaultColumns
    if (click) {
        defaultColumns = [
            ...dataTable.columns,
            {
                title: '',
                dataIndex: '',
                render: (_, record) =>
                    dataSource.length > 0 ? (
                        <Button
                            style={{
                                backgroundColor: "#25c8f1", color: "white",
                                padding: "0px 8px"
                            }}
                            onClick={() => handleNavigate(record.id)}
                        >
                            {text}
                        </Button>
                    ) : null,
                    width: 50
            }
        ]
    } else {
        defaultColumns = [...dataTable.columns]
    }

    return (
        <div>
            <Table
                dataSource={dataSource}
                columns={defaultColumns}
                // bordered
            />
        </div>
    );
}
export default TableComponent;