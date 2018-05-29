import React from 'react';
import {api} from "../config/api";
import {strings} from './strings';
import googleNormal from "./signin/google/btn_google_signin_dark_normal_web.png"
import googleFocus from "./signin/google/btn_google_signin_dark_focus_web.png"
import googlePressed from "./signin/google/btn_google_signin_dark_pressed_web.png"
import {Jumbotron, Container, Col, Row} from 'reactstrap'

export default function LoginView() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h1>
                                {strings.notLoggedIn}
                            </h1>
                            <p>
                                {strings.click2LogIn}
                            </p>
                            <a href={api.login.google}>
                                <img src={googleNormal}
                                     alt={strings.login.with.google}
                                     onFocus={e => e.currentTarget.src = googleFocus}
                                     onClickCapture={e => e.currentTarget.src = googlePressed}
                                />
                            </a>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}