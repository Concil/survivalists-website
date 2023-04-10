import React from "react";
import {Box, Container, Flex, HStack, Spacer, VStack} from "@chakra-ui/react";
import {NavigateFunction, Outlet, useNavigate} from "react-router-dom";
import LogoSmall from '../assets/logo_small.png';
import Logo from "../assets/logo.png";
import {FaDiscord, FaFacebookF, FaInstagram} from "react-icons/all";

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
                        <a href="javascript:;" onClick={() => this.props.nav("/about")}>Über uns</a>
                        <a href="javascript:;" onClick={() => this.props.nav("/faq")}>FAQ</a>
                        <a href="javascript:;" onClick={() => window.location.href="https://discord.gg/wgB9xU4zBq" }>Discord</a>
                    </HStack>
                </Flex>
            </nav>
            <section className="content">
                <Outlet />
            </section>


            <Box p={20} bg={"#191622"}>
                <Flex color='white'>
                    <img src={Logo} />
                    <Flex align={"center"}>
                        <div style={{width: 400, marginLeft: 10}}>
                            Survivalists ist deine Plattform für spannende
                            Gameserver. Starte jetzt deine Gaming Karriere und Zeige jedem was in dir Steckt!
                        </div>
                    </Flex>
                    <Spacer />
                    <VStack>
                        <div><strong>Kontakt</strong></div>
                        <ul>
                            <li><a href="javascript:;">Support</a></li>
                            <li><a href="javascript:;">Discord</a></li>
                            <li><a href="javascript:;">Allgemeiner Kontakt</a></li>
                        </ul>
                    </VStack>
                    <Spacer />
                    <VStack>
                        <div><strong>Folge uns</strong></div>
                        <HStack style={{fontSize: 30}}>
                            <a href="javascript:;"><FaFacebookF /></a>
                            <a href="javascript:;"><FaInstagram /></a>
                            <a href="javascript:;"><FaDiscord /></a>
                        </HStack>
                    </VStack>
                </Flex>
            </Box>
            <Box p={20} bg={"#111111"}>
                <Flex color='white' align={"center"}>
                    <HStack>
                        <a href="javascript:;" onClick={() => this.props.nav("/about")}>Über Uns</a>
                        <a href="javascript:;" onClick={() => this.props.nav("/faq")}>FAQ</a>
                        <a href="javascript:;" onClick={() => this.props.nav("/data")}>Datenschutz</a>
                        <a href="javascript:;" onClick={() => this.props.nav("/imprint")}>Impressum</a>
                        <a href="javascript:;" onClick={() => window.location.href="https://status.survivalists.gg" }>Status</a>
                    </HStack>
                    <Spacer />
                    <div>
                        &copy; 2023 <a href="javascript:;">survivalists.gg</a> / Alle Rechte vorbehalten
                    </div>
                </Flex>
            </Box>
        </>;
    }
}