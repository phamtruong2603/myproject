import React from 'react'
import "./Header.css"
import { Badge, Button, Dropdown, Space, theme } from 'antd';
import { Link } from 'react-router-dom';
import { BellFilled } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';
import Avatar from '../Avatar/Avatar';
import type { MenuProps } from 'antd';

const ItemNotification = () => {
    return (
        <>
            <Link to="https://www.aliyun.com">thông báo</Link>
            <Button type="primary">Click me!</Button>
        </>
    )
}
const items: MenuProps['items'] = [
    {
        label: ItemNotification(),
        key: '0',
    },
    {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];

const HeaderMain = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Header className="header" style={{ background: colorBgContainer, marginBottom: "1.5rem" }} >
            <div>
                <h2>LOGO</h2>
            </div>

            <div className='header_right'>
                <Dropdown menu={{ items }} trigger={['click']}
                    placement="bottomRight" arrow={{ pointAtCenter: true }}
                >
                    <span onClick={(e) => e.preventDefault()}>
                        <Space size="middle">
                            <Badge count={0} showZero>
                                <BellFilled style={{ fontSize: 30 }} />
                            </Badge>
                        </Space>
                    </span>
                </Dropdown>

                <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight" arrow={{ pointAtCenter: true }} >
                    <span onClick={(e) => e.preventDefault()}>
                        <Space size="middle">
                            <Avatar circle={"50px"} />
                        </Space>
                    </span>
                </Dropdown>

            </div>
        </Header>
    )
}

export default HeaderMain
