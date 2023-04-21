import Logo from '../assets/logo.png';
import React from "react";
import {FaDiscord, FaFacebookF, FaInstagram, FiExternalLink} from "react-icons/all";
import {Container, Text, Grid, Image, Button, Card, Col, Badge, Spacer} from "@nextui-org/react";
import toast, { useToaster } from 'react-hot-toast/headless';

import MC4 from "../assets/images/mc4.png";
import ComingSoon from "../assets/images/comingSoon.png";
import MC3 from "../assets/images/mc3.png";


interface Card {
    title: string;
    subtitle?: string;
    image: string;
    ip?: string;
    planing?: boolean;
}

export function PageHome() {
    const { toasts, handlers } = useToaster();

    const cards: Card[] = [
        {
            title: 'Minecraft',
            subtitle: 'Grundstücke, Stadt, Zugriffe, ...',
            image: MC3,
            ip: 'mc.survivalists.gg'
        },
        {
            title: 'Rust',
            subtitle: 'PVE/PVP Zonen',
            image: ComingSoon,
            planing: true
        },
        {
            title: 'Valheim',
            subtitle: '',
            image: ComingSoon,
            planing: true
        },
        {
            title: 'DayZ',
            subtitle: '',
            image: ComingSoon,
            planing: true
        },
    ];


    return <>
        <div style={{
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${MC4})`,
                backgroundSize: "cover"
            }}></div>
            <div>
                <Container css={{
                    position: 'relative',
                    paddingTop: 150,
                    paddingBottom: 150,
                }}>
                    <Image width={320} height={180} src={Logo} />
                    <Spacer />
                    <Text h1 style={{textAlign: 'center', lineHeight: 1, textShadow: '0 0 16px black'}}>
                        Trete der besten und größten<br />
                        <span style={{color: "#ff1744"}}>Gaming-Community</span> bei und Spiele <br />
                        jetzt auf <span style={{color: "#ff1744"}}>unseren Gameservern</span>
                    </Text>
                    <Grid.Container justify="center" css={{marginTop: 50, marginBottom: 100}}>
                        <Button
                            shadow
                            color="error"
                            auto
                            iconRight={<FiExternalLink />}
                            onClick={() => window.location.href="https://discord.gg/wgB9xU4zBq"}
                        >
                            Discord
                        </Button>
                    </Grid.Container>
                </Container>
            </div>
        </div>

        <div style={{
            backgroundColor: '#212529'
        }}>
            <Container css={{paddingTop: 50, paddingBottom: 50}}>
                <Grid.Container gap={2} justify="center" css={{marginTop: 50, marginBottom: 100}}>
                    <Text h1 style={{textAlign: 'center', textTransform: 'uppercase', lineHeight: 1}}>
                        mehr als 5 <span style={{color: "#ff1744"}}>Spieletitel-<br />Gameservern</span>
                    </Text>
                </Grid.Container>
                <Grid.Container justify="center" css={{marginTop: 50, marginBottom: 100}}>
                    {
                        cards.map((card, index) => {
                            return <Card key={"card_" + index} css={{width: 500, marginBottom: 10, marginRight: 10}} isPressable isHoverable onPress={() => {
                                if ( !card.ip ) return;
                                toast.success('Always at the bottom.', {
                                    position: "bottom-center"
                                })
                                toast('Hello World');
                                //openSnackbar('This is the content of the Snackbar.');
                                navigator.clipboard.writeText(card.ip);
                            }}>
                                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                    <Col>
                                        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                            {card.subtitle}
                                        </Text>
                                        <Text h4 color="white">
                                            {card.title}
                                        </Text>
                                    </Col>
                                </Card.Header>
                                { card.planing &&
                                    <Card.Footer css={{ position: "absolute", zIndex: 1, bottom: 0}}>
                                        <Badge color="error" variant="bordered">
                                            IN PLANUNG
                                        </Badge>
                                    </Card.Footer>
                                }
                                { card.ip &&
                                    <Card.Footer css={{ position: "absolute", zIndex: 1, bottom: 0}}>
                                        <Badge color="default" variant="bordered">
                                            {card.ip}
                                        </Badge>
                                    </Card.Footer>
                                }

                                <Card.Image
                                    src={card.image}
                                    objectFit="cover"
                                    width="100%"
                                    height={340}
                                    alt={card.title}
                                />
                            </Card>
                        })
                    }

                </Grid.Container>

            </Container>
        </div>


    </>

    /*return <>
        <div className="text-center">
            <Center>
                <VStack mt={5}>
                    <img src={Logo} />
                    <Heading style={{textAlign: 'center', marginTop: 30, marginBottom: 30}}>
                        Trete der besten und größten<br />
                        <span style={{color: "red"}}>Gaming-Community </span>
                        bei und Spiele <br />
                        jetzt auf <span style={{color: "red"}}>unseren Gameservern.</span>
                    </Heading>

                    <Button colorScheme='red' mt={5} onClick={() => window.location.href="https://discord.gg/wgB9xU4zBq"}>Discord</Button>
                </VStack>
            </Center>
        </div>

        <Box pt={90} pb={90} bg={"#212529"} mt={150}>
            <Heading style={{textAlign: 'center', marginTop: 30, marginBottom: 30, textTransform: "uppercase"}}>
                mehr als 5 <span style={{color: "red"}}>gameserver </span>
            </Heading>

            <Center>
                <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                    <Box>
                        <Image src="https://placehold.co/600x400" borderRadius={"3xl"} />
                    </Box>
                    <Box>
                        <Image src="https://placehold.co/600x400" borderRadius={"3xl"} />
                    </Box>
                    <Box>
                        <Image src="https://placehold.co/600x400" borderRadius={"3xl"} />
                    </Box>
                </Grid>
            </Center>
        </Box>
    </>*/
}