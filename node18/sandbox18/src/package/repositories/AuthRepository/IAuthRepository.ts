import {AuthUser} from "@/package/types/AuthUser";

export interface IAuthRepository {
    checkLoggedIn: (handlers: {
        loggedInHandler: () => void,
        notLoggedInHandler: () => void
    }) => void;

    getAuthUser: () => Promise<AuthUser>;

    execLogin: () => Promise<void>
}