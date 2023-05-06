'use client';

import {AuthFactory} from "@/package/repositories/AuthRepository/AuthFactory";
import {AuthContext} from "@/contexts/AuthContext";
import {useContext} from "react";

export default function Home() {
    const authRepo = AuthFactory.getAuthRepository()
    const {authUser, setAuthUser} = useContext(AuthContext)

    return (
        <main>
            <div>a</div>
            <button
                onClick={async () => {
                    console.log(await authRepo.getAuthUser())
                }}
            >
                getAuthUser
            </button>
            <br />
            <button
                onClick={async () => {
                    await authRepo.execLogin()}
                }
            >
                execLogin
            </button>
            <br />
            <button
                onClick={async () => {
                    if (setAuthUser === undefined) {
                        return;
                    }

                    const authUser = await authRepo.getAuthUser();
                    authRepo.checkLoggedIn({
                        loggedInHandler: () => {
                            setAuthUser(authUser);
                        },
                        notLoggedInHandler: () => {
                            setAuthUser({id: undefined, name: undefined, token: undefined});
                        }
                    });
                }}
            >
                checkLoggedIn
            </button>
            <br />
            <br />
            <>
                {(authUser.token === undefined)
                    ? 'ログインしてない'
                    : 'ログインしてる'}
            </>
        </main>
    )
}
