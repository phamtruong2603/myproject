import React from "react"
import { Route, Routes } from "react-router-dom"
import ManageMain from "./Manage"
import ChildDevice from "./ChildDevice"
import DeviceDetail from "../../../../components/Device/DeviceDetail"

const route = [
    {
        path: "/",
        component: ManageMain
    },
    {
        path: ":id",
        component: () => <></>,
        children: [
            {
                path: "",
                component: ChildDevice
            },
            {
                path: ":id",
                component: DeviceDetail
            }
        ]
    },
]

const ManageDevice = () => {
    return (
        <Routes>
            {route.map((value) => {
                let Render = value.component
                let path = `/${value.path}/*`
                if (value.children) {
                    return value.children.map((val: {id: number; component: any; path: string}) => {
                        Render = val.component
                        return (
                            <Route path={path}>
                                <Route key={val.id}
                                    path={val.path}
                                    element={<Render />}
                                />
                            </Route>
                        )
                    })
                }
                return (
                    <Route path={path} element={<Render />} />
                )
            })}
        </Routes>
    )
}

// const ManageDevice = () => {
//     return (
//         <Routes>
//             <Route path="/" element={<ManageMain />} />
//             <Route path="/:id" >
//                 <Route path="" element={<ChildDevice />} />
//                 <Route path=":id" element={<DeviceDetail />} />
//             </Route>
//         </Routes>
//     )
// }

export default ManageDevice