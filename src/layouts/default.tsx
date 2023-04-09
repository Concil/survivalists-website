import React from "react";
import {Box, Container, Flex, HStack, Spacer} from "@chakra-ui/react";
import {NavigateFunction, Outlet, useNavigate} from "react-router-dom";
import LogoSmall from '../assets/logo_small.png';

export function DefaultLayout() {
    const nav = useNavigate();
    return <Component nav={nav} />
}

interface iProps {
    nav: NavigateFunction;
}

class Component extends React.Component<iProps, any> {
    render() {
        return <>
            <nav>
                <Flex align={"center"}>
                    <img src={LogoSmall} alt="" />
                    <a href="javascript:;" onClick={() => this.props.nav("/")}>Survivalists.gg</a>
                    <Spacer />
                    <HStack spacing='24px'>
                        <a href="javascript:;" onClick={() => window.location.href="https://discord.gg/wgB9xU4zBq"}>Discord</a>
                    </HStack>
                </Flex>
            </nav>
            <section className="content">
                <Outlet />
            </section>
        </>;
    }
}