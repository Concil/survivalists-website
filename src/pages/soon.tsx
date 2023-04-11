import {Grid} from "@nextui-org/react";


export function Soon() {
    return <Grid.Container gap={2} justify="center" alignItems={"stretch"} style={{height: '60vh'}}>
        <Grid.Container gap={2} justify="center" alignItems={"center"}>
            <h2>Kommt bald...</h2>
        </Grid.Container>
    </Grid.Container>
}