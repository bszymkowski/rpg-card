import React from 'react';
import {api} from "../config/api";
import {strings} from './../strings';
import googleNormal from "./signin/google/btn_google_signin_dark_normal_web.png"
import googleFocus from "./signin/google/btn_google_signin_dark_focus_web.png"
import googlePressed from "./signin/google/btn_google_signin_dark_pressed_web.png"

const {login} = strings;

export default function LoginView() {
    return (
        <div>
            <a href={api.login.google}>
                <img src={googleNormal}
                     alt={strings.google}
                     onFocus={e => e.currentTarget.src = googleFocus}
                     onClickCapture={e => e.currentTarget.src = googlePressed}
                />
            </a>
        </div>
    )
}