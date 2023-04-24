import {Collapse, Container, Grid, Radio, Text} from "@nextui-org/react";
import MC4 from "../assets/images/mc4.png";
import React, {useState} from "react";


export function PageFAQ() {
    const [gameServer, setGameServer] = useState<string>("1");


    return <>
        <div style={{
            width: '100%',
            height: '500px',
            backgroundImage: `url(${MC4})`,
            backgroundSize: "cover"
        }}></div>
        <Container style={{marginTop: 20}}>
            <Text h1>Meist gestellte Fragen (FAQ)</Text>
            <Radio.Group label="Gameserver Auswahl" defaultValue="1" orientation="horizontal" onChange={(d) => setGameServer(d)}>
                <Radio value="1">
                    Minecraft
                </Radio>
                <Radio value="2">
                    DayZ
                </Radio>
                <Radio value="3">
                    Survive the Nights
                </Radio>
            </Radio.Group>
            { gameServer === "1" &&
                <div className="minecraft">
                    <Grid.Container gap={2}>
                        <Grid>
                            <Collapse
                                shadow
                                title="Wie Betrette ich den Server?"
                                subtitle="Der schnellste weg, den Server zu betretten"
                            >
                                <Text>
                                    IP: mc.survivalists.gg
                                </Text>
                            </Collapse>
                        </Grid>
                        <Grid>
                            <Collapse.Group shadow>
                                <Collapse title="Wie verdiene ich Geld?">
                                    <Text>
                                        Du kannst indem du dich raus in die Wildnis bewegst, Resourcen wie
                                        Kupfer, Eisen, Diamanten und viele weitere Gegenstände abbaust,
                                        beim Schmied "Bob" in der Burg Verkaufen und damit deine SURVCOINS verdienen.
                                    </Text>
                                </Collapse>
                                <Collapse title="Wo finde ich die Wildnis/Farmwelt?">
                                    <Text>
                                        Bewege dich aus der Burge raus und gehe die Treppen runter, anschließend bewegst
                                        du dich einfach der Straße entlang. Sobald du eine Mauer siehst, siehst du das dahinter die Wildnest/Farmwelt
                                        befindet. Einfach durchgehen und Resourcen suchen.
                                    </Text>
                                </Collapse>
                                <Collapse title="Ich habe meine gegenstände Verloren, könnt ihr mir die wieder zurück geben?">
                                    <Text>
                                        Nein, da wir den Survival aspekt von Minecraft ernst nehmen, und du deine Gegenstände beim Tot,
                                        oder diverse andere Aktionen verloren hast, musst du selbst deine Gegenstände wieder finden.
                                    </Text>
                                    <Text>
                                        Bitte sei also Vorsichtig da draußen!
                                    </Text>
                                </Collapse>
                                <Collapse title="Wie bekomme ich ein Grundstück?">
                                    <Text>
                                        Dazu kannst du einfach jedes Grundstück, das auf dem Schild "Frei/Zur Vermietung" steht,
                                        mit einem Rechtsklick mieten sobald du das Geld besitzt.
                                    </Text>
                                </Collapse>
                                <Collapse title="Kann ich ein Grundstück umziehen?">
                                    <Text>
                                        Ja, melde dich dazu einfach in Discord in den #Support bereich, wir bieten dir die möglichkeit,
                                        dein Grundstück einfach umzuziehen.
                                    </Text>
                                </Collapse>
                                <Collapse title="Ich würde gern das Team unterstützen">
                                    <Text>
                                        Du kannst uns auf diverse Arten unterstützen, ob Videos auf Youtube, Entwickler für weitere Projekte,
                                        Supporter für die Spieler.
                                        Wir sind für jede Hilfe dankbar sofern du über 16 Jahre alt bist, ein Mikrofon besitzt und nicht Schüchtern beim Reden bist,
                                        bist du bei uns im Team herzlich Willkommen.
                                    </Text>
                                    <Text>
                                        Melde dich hierzu bei uns einfach in Discord & erstelle ein Ticket um deine Bewerbung in kurzen Sätzen an uns zu Senden.
                                    </Text>
                                </Collapse>
                            </Collapse.Group>
                        </Grid>
                    </Grid.Container>
                </div>
            }
        </Container>
        <Container style={{marginTop: 50, marginBottom: 50}}>
            <Text h2 css={{textAlign:'center'}}>Weitere Fragen an uns?</Text>
            <Text h3 css={{textAlign:'center'}}>Betrette unseren Discord Server und stelle deine Fragen!</Text>
        </Container>
    </>;
}