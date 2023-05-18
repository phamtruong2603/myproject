import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../layout/home/index.js";
import Admin from "../layout/admin/index.js";

export default (
    <Routes>
        <Route
            path="/"
            element={<Home />}
        />
            <Route
                path="/admin/*"
                element={<Admin />}
            />
            {/* <Route
                path="/dashboard/*"
                element={<User />}
            /> */}
    </Routes>
)