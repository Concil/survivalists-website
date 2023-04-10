import * as React from "react"
import * as ReactDOM from "react-dom/client"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./layouts/default";
import './assets/css/base.css';
import {Page404} from "./pages/404";
import {PageHome} from "./pages/home";
import {ChakraProvider} from "@chakra-ui/react";
import {PageAbout} from "./pages/about";
import {PageSupport} from "./pages/support";


const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
    <ChakraProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<PageHome />} />
                    <Route path="/about" element={<PageAbout />} />
                    <Route path="/support" element={<PageSupport />} />
                    <Route path="/faq" element={<PageSupport />} />
                    <Route path="/*" element={<Page404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </ChakraProvider>
);
