import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "./layouts/MainLayout";
import ROUTES from "./routes";
import { Home } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.HOME} element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
