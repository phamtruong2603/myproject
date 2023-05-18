/* eslint-disable no-mixed-operators */
import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Admin_option } from '../../routes/adminRoutes.js';
import Header from '../../components/Header/Header.js';

const { Content, Sider } = Layout;

const Option = Admin_option.map((value, index) => {
    const key = value.id
    return {
        key: `${key}`,
        label: ` ${value.name}`,
        children: value.children && value.children.map((chil, index) => {
            const subKey = chil.id;
            return {
                key: subKey,
                label: `${chil.name}`,
            };
        }),
    };
});

const RenderOption = ({ id }) => {
    if (!id) return
    return (
        <Routes>
            {Admin_option.map((value, index) => {
                let Render = value.component
                let path = `/${value.path}/*`
                if (value.children) {
                    return value.children.map((val) => {
                        Render = val.component
                        return (
                            <Route path={path}>
                                <Route
                                    path={`${val.path}/*`}
                                    element={<Render />}
                                />
                            </Route>
                        )
                    })
                }
                return (
                    <Route
                        path={path}
                        element={<Render />}
                    />
                )
            })}
        </Routes>
    )
}

const Admin = () => {
    const navigate = useNavigate();
    const [option, setOption] = useState();
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const onclick = (value) => {
        let view = Admin_option.find(child => {
            if (child.children) {
                return child.children.find(check => check.id === Number(value.key))
            }
            return Number(value.key) === child.id
        })
        if (Number(value.key) !== view.id) {
            const data = view.children.find(child => child.id === Number(value.key))
            view = {
                ...data,
                path: `${view.path}/${data.path}`
            }
        }
        setOption({
            id: view.id,
            name: view.name,
            path: view.path,
            component: view.component
        })
        navigate(`${view.path}`)
    };

    return (
        <Layout>
            <Header />
            <Layout>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <Menu
                        mode="inline"
                        onClick={onclick}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={Option}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >

                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        <RenderOption
                            id={option && option.id || null}
                        />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default Admin;