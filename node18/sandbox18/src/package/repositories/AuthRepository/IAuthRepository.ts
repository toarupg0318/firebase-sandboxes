import {AuthUser} from "@/package/types/AuthUser";

export interface IAuthRepository {
    checkLoggedIn: (handlers: {
        loggedInHandler: (user: AuthUser) => void,
        notLoggedInHandler: (user: AuthUser) => void
    }) => void;

    getAuthUser: () => Promise<AuthUser>;

    execLogin: () => Promise<void>
}