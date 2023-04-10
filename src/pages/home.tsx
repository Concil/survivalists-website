import Logo from '../assets/logo.png';
import React from "react";
import {Box, Button, Center, Flex, Grid, Heading, HStack, Image, Spacer, VStack, WrapItem} from "@chakra-ui/react";
import {FaDiscord, FaFacebookF, FaInstagram} from "react-icons/all";

export function PageHome() {
    return <>
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
                    <Box bg='blue.500'>
                        <Image src="https://placehold.co/600x400" />
                    </Box>
                    <Box  bg='blue.500'>
                        <Image src="https://placehold.co/600x400" />
                    </Box>
                    <Box bg='blue.500'>
                        <Image src="https://placehold.co/600x400" />
                    </Box>
                </Grid>
            </Center>
        </Box>
    </>
}