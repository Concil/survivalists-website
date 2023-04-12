import React from "react";
import {Button, Link, Modal} from "@nextui-org/react";

interface iStates {
    login: boolean;
    open: boolean;
}
export class Login extends React.Component<any, iStates> {

    constructor(props: any) {
        super(props);

        this.state = {
            open: false,
            login: false,
        }
    }

    onModalHide() {
        if ( this.state.login ) return;
        this.setState({
            open: false
        })
    }

    onStartLogin() {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
        const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

        if (!accessToken) {
            return console.log('no accessToken')
        }

        fetch('https://discord.com/api/users/@me', {
            headers: {
                authorization: `${tokenType} ${accessToken}`,
            },
        })
            .then(result => result.json())
            .then(response => {
                const { username, discriminator } = response;
                console.log(username, discriminator);
                //document.getElementById('info').innerText += ` ${username}#${discriminator}`;
            })
            .catch(console.error);
    }

    render() {
        return <>

            <Button auto as={Link} href="#" color="error" rounded onClick={() => this.setState({open: true})}>
                Account
            </Button>

            <Modal
                closeButton
                blur
                open={this.state.open}
                onClose={this.onModalHide.bind(this)}
            >

                <Button onClick={this.onStartLogin.bind(this)}>Discord Login</Button>
            </Modal>
        </>;
    }
}