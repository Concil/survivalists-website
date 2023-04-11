import Logo from '../assets/logo.png';
import React from "react";
import {FaDiscord, FaFacebookF, FaInstagram} from "react-icons/all";
import {Container, Text, Grid, Image, Button, Card, Col} from "@nextui-org/react";

export function PageHome() {
    return <>
        <Container css={{
            marginTop: 150
        }}>
            <Image width={320} height={180} src={Logo} />
            <Grid.Container gap={2} justify="center" css={{marginTop: 50, marginBottom: 100}}>
                <Text h1 style={{textAlign: 'center', lineHeight: 1}}>
                    Trete der besten und größten <br />
                    <span style={{color: "red"}}>Gaming-Community</span> bei und Spiele <br />
                    jetzt auf <span style={{color: "red"}}>unseren Gameservern</span>
                </Text>
            </Grid.Container>
            <Grid.Container justify="center" css={{marginTop: 50, marginBottom: 100}}>
                <Button shadow color="error" auto onClick={() => window.location.href="https://discord.gg/wgB9xU4zBq"}>
                    Discord
                </Button>
            </Grid.Container>

        </Container>

        <div style={{
            marginTop: 150,
            backgroundColor: '#212529'
        }}>
            <Container css={{paddingTop: 50, paddingBottom: 50}}>
                <Grid.Container gap={2} justify="center" css={{marginTop: 50, marginBottom: 100}}>
                    <Text h1 style={{textAlign: 'center', textTransform: 'uppercase', lineHeight: 1}}>
                        mehr als 5 <span style={{color: "red"}}>Spieletitel-<br />Gameservern</span>
                    </Text>
                </Grid.Container>
                <Grid.Container justify="center" css={{marginTop: 50, marginBottom: 100}}>
                    <Card css={{width: 350, marginBottom: 10, marginRight: 10}} isPressable isHoverable>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    MINECRAFT
                                </Text>
                                <Text h4 color="white">
                                    Survival, Bedrock, Parkour, ...
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Image
                            src="https://cdn.prod.www.spiegel.de/images/aae10006-bf39-48c8-b688-9a44f991c277_w948_r1.778_fpx69.6_fpy50.jpg"
                            objectFit="cover"
                            width="100%"
                            height={340}
                            alt="MINECRAFT"
                        />
                    </Card>
                    <Card css={{width: 350, marginBottom: 10, marginRight: 10}} isPressable isHoverable>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    RUST
                                </Text>
                                <Text h4 color="white">
                                    PVP Zones
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Image
                            src="https://images.mein-mmo.de/medien/2023/03/steam-rust.jpg"
                            objectFit="cover"
                            width="100%"
                            height={340}
                            alt="RUST"
                        />
                    </Card>
                    <Card css={{width: 350, marginBottom: 10, marginRight: 10}} isPressable isHoverable>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    Valheim
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Image
                            src="https://img2.storyblok.com/f/157036/2560x1440/16c8a50ea6/2-troll.png"
                            objectFit="cover"
                            width="100%"
                            height={340}
                            alt="Valheim"
                        />
                    </Card>
                    <Card css={{width: 350, marginBottom: 10, marginRight: 10}} isPressable isHoverable>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    DayZ
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Image
                            src="https://media.altchar.com/prod/images/940_530/gm-9c4b1571-1bcf-48bc-9b1f-664ee51737cd-dayz.jpg"
                            objectFit="cover"
                            width="100%"
                            height={340}
                            alt="DayZ"
                        />
                    </Card>
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