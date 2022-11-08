import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

import Layout from "./layouts/MainLayout";
import ROUTES from "./routes";
import { Home, NewsDetail } from "./pages";

function App() {
    const location = useLocation();

    return (
        <Layout>
            <TransitionGroup component={null}>
                <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                >
                    <Routes location={location}>
                        <Route path={ROUTES.HOME} element={<Home />} />
                        <Route
                            element={<NewsDetail />}
                            path={ROUTES.NEWS_DETAIL}
                        />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </Layout>
    );
}

export default App;
