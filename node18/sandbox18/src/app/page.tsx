'use client';

import {AuthFactory} from "@/package/repositories/AuthRepository/AuthFactory";

export default function Home() {
    const authRepo = AuthFactory.getAuthRepository()
    return (
        <main>
            <div>a</div>
            <button
                onClick={async () => {
                    console.log(await authRepo.getAuthUser())}
                }
            >
                console.log user
            </button>
            <button
                onClick={async () => {
                    await authRepo.execLogin()}
                }
            >
                exec login
            </button>
        </main>
    )
}
