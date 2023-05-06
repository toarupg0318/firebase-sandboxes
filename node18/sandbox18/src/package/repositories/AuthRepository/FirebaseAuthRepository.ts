import {IAuthRepository} from "@/package/repositories/AuthRepository/IAuthRepository";
import {auth} from "@/lib/firebase";
import {onAuthStateChanged, signInWithPopup, GoogleAuthProvider} from "@firebase/auth"
import {AuthUser} from "@/package/types/AuthUser";

export class FirebaseAuthRepository implements IAuthRepository {
    public checkLoggedIn(handlers: {
        loggedInHandler: (user: AuthUser) => void;
        notLoggedInHandler: (user: AuthUser) => void
    }): void {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                handlers.loggedInHandler({
                    id: auth.currentUser?.uid,
                    name: auth.name,
                    token: await user.getIdToken()
                });
            }
        })
    }

    public getAuthUser = async (): Promise<AuthUser> => {
        const jwt = await auth.currentUser?.getIdToken();

        return {
            id: auth.currentUser?.uid,
            name: auth.currentUser?.displayName ?? undefined,
            token: jwt,
        };
    };

    public execLogin = async (): Promise<void> => {
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider)
    }
}