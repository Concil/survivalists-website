import * as React from "react"
import * as ReactDOM from "react-dom/client"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./layouts/default";
import { NextUIProvider, createTheme } from '@nextui-org/react';
//import useDarkMode from 'use-dark-mode';

import './assets/css/base.css';

import {Page404} from "./pages/404";
import {PageHome} from "./pages/home";
import {PageAbout} from "./pages/about";
import {PageSupport} from "./pages/support";
import {Soon} from "./pages/soon";


const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

const darkTheme = createTheme({
    type: 'dark',
    theme: {
        colors: {
            background: '#05102D',
            link: '#ad1d1d',
        },
    }
});

root.render(
    <NextUIProvider theme={darkTheme}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<PageHome />} />
                    <Route path="/about" element={<Soon />} />
                    <Route path="/support" element={<Soon />} />
                    <Route path="/faq" element={<Soon />} />
                    <Route path="/*" element={<Page404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </NextUIProvider>
);
