import React from 'react'
import "./Header.css"
import { Badge, Button, Divider, Dropdown, Space, theme } from 'antd';
import { Link } from 'react-router-dom';
import { BellFilled } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';
const { useToken } = theme

const itemNotification = () => {
    return (
        <>
            <Link to="https://www.aliyun.com">thông báo</Link>
        </>
    )
}

const HeaderMain = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const items = [
        {
            label: itemNotification(),
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
    const { token } = useToken();
    const contentStyle = {
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
    };
    const menuStyle = {
        boxShadow: 'none',
    };
    return (
        <Header className="header" style={{ background: colorBgContainer, marginBottom: "1.5rem" }} >
            <div>
                <h2>LOGO</h2>
            </div>
            <Dropdown
                // overlayStyle={{ width: 300, maxHeight: 400, overflowY: 'auto' }}
                overlayClassName="custom-dropdown"
                menu={{
                    items,
                }}
                trigger={['click']}
                dropdownRender={(menu) => (
                    <div style={contentStyle}>
                        {React.cloneElement(menu, {
                            style: menuStyle,
                        })}
                        <Divider
                            style={{
                                margin: 0,
                            }}
                        />
                        <Space
                            style={{
                                padding: 8,
                            }}
                        >
                            <Button type="primary">Click me!</Button>
                        </Space>
                    </div>
                )}
            >
                <span onClick={(e) => e.preventDefault()}>
                    <Space size="middle">
                        <Badge count={0} showZero>
                            <BellFilled style={{ fontSize: 30 }} />
                        </Badge>
                    </Space>
                </span>
            </Dropdown>

        </Header>
    )
}

export default HeaderMain