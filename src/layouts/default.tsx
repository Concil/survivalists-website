import React from "react";

import {NavigateFunction, Outlet, useNavigate} from "react-router-dom";
import LogoSmall from '../assets/logo_small.png';
import Logo from "../assets/logo.png";
import {Button, Link, Navbar, Text, Grid, Container, Image} from "@nextui-org/react";

export function DefaultLayout() {
    const nav = useNavigate();
    const cancelRef = React.useRef()
    return <Component nav={nav} cancelRef={cancelRef} />
}

interface iProps {
    nav: NavigateFunction;
    cancelRef: any;
}
interface iStates {
    login: boolean;
}

class Component extends React.Component<iProps, any> {

    constructor(props: iProps) {
        super(props);

        this.state = {
            login: false
        }
    }

    render() {
        return <>
            <Navbar isBordered variant={"floating"}>
                <Navbar.Brand>
                    <a href="javascript:;" onClick={() => this.props.nav("/")}><img src={LogoSmall} /></a>
                    <Text b color="inherit" hideIn="xs" size={"lg"}>
                        Survivalists.gg
                    </Text>
                </Navbar.Brand>
                <Navbar.Content>
                    <Navbar.Link onClick={() => this.props.nav("/about") }>Über uns</Navbar.Link>
                    <Navbar.Link onClick={() => this.props.nav("/faq") }>FAQ</Navbar.Link>
                    <Navbar.Link onClick={() => window.location.href="https://discord.gg/wgB9xU4zBq" }>Discord</Navbar.Link>
                    <Navbar.Item>
                        <Button auto as={Link} href="#" color="error" rounded onClick={() => this.props.nav("/")}>
                            Account
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>

            <section className="content">
                <Outlet />
            </section>

            <footer style={{backgroundColor: 'rgb(25, 22, 34)', color: 'white', paddingTop: 40, paddingBottom: 40}}>
                <Container>
                    <Grid.Container gap={2} justify="center">
                        <Grid xs={12} md={1}>
                            <Image src={LogoSmall} />
                        </Grid>
                        <Grid xs={12} md={3}>
                            <Grid.Container justify="center" alignItems={"center"}>
                                <div style={{width: '80%'}}>
                                    Survivalists ist deine Plattform für spannende Gameserver. Starte jetzt deine Gaming Karriere und Zeige jedem was in dir Steckt!
                                </div>
                            </Grid.Container>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <div>
                                <ul>
                                    <li><strong>Kontakt</strong></li>
                                    <li><a href="javascript:;" onClick={() => this.props.nav("/about") }>Support</a></li>
                                    <li><a href="javascript:;" onClick={() => this.props.nav("/about") }>Discord</a></li>
                                    <li><a href="javascript:;" onClick={() => window.location.href="https://discord.gg/wgB9xU4zBq" }>Allgemeiner Kontakt</a></li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <ul>
                                <li><strong>Folge uns</strong></li>
                                <li><a href="javascript:;" onClick={() => this.props.nav("/about") }>INSTA</a></li>
                                <li><a href="javascript:;" onClick={() => this.props.nav("/about") }>DISCORD</a></li>
                            </ul>
                        </Grid>
                    </Grid.Container>
                </Container>
            </footer>
            <footer style={{backgroundColor: 'rgb(17, 17, 17)', color: 'white', paddingTop: 20, paddingBottom: 20}}>
                <Container>
                    <Grid.Container gap={2} justify="center">
                        <Grid xs={12} md={6}>
                            <ul className="list-inline">
                                <li><a href="javascript:;" onClick={() => this.props.nav("/about") }>Über Uns</a></li>
                                <li><a href="javascript:;" onClick={() => this.props.nav("/faq") }>FAQ</a></li>
                                <li><a href="javascript:;" onClick={() => this.props.nav("/datenschutz") }>Datenschutz</a></li>
                                <li><a href="javascript:;" onClick={() => this.props.nav("/impressum") }>Impressum</a></li>
                                <li><a href="javascript:;" onClick={() => window.location.href="https://status.survivalists.gg" }>Status</a></li>
                            </ul>
                        </Grid>
                        <Grid xs={12} md={6}>
                            &copy; 2023 <a href="javascript:;">survivalists.gg</a> / Alle Rechte vorbehalten
                        </Grid>
                    </Grid.Container>
                </Container>
            </footer>
        </>

         /*return <Layout>
            <nav>
                <Flex align={"center"}>
                    <img src={LogoSmall} alt="" />
                    <a href="javascript:;" onClick={() => this.props.nav("/")}>Survivalists.gg</a>
                    <Spacer />
                    <HStack spacing='24px'>
                        <a href="javascript:;" onClick={() => this.props.nav("/about")}>Über uns</a>
                        <a href="javascript:;" onClick={() => this.props.nav("/faq")}>FAQ</a>
                        <a href="javascript:;" onClick={() => window.location.href="https://discord.gg/wgB9xU4zBq" }>Discord</a>
                        <Button bg='red' onClick={() => this.setState({login: true})}>Login</Button>
                    </HStack>
                </Flex>
            </nav>

            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={this.props.cancelRef}
                onClose={() => this.setState({login: false})}
                isOpen={this.state.login}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Login: Work in Progress</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        Der Login ist Aktuell noch nicht verfügbar, falls du Unterstützung benötigt melde dich bei uns in Discord im #support Kanal.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button colorScheme='red' ml={3} onClick={() => this.setState({login: false})}>
                            Alles klar
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

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
        </Layout>;*/
    }
}