import Logo from '../assets/logo.png';
import React from "react";
import {Box, Button, Center, Heading, Spacer, VStack, WrapItem} from "@chakra-ui/react";

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

        <Box>

        </Box>
    </>
}