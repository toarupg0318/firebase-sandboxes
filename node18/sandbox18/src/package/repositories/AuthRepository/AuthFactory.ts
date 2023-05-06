import {IAuthRepository} from "@/package/repositories/AuthRepository/IAuthRepository";
import {FirebaseAuthRepository} from "@/package/repositories/AuthRepository/FirebaseAuthRepository";

export class AuthFactory {
    public static getAuthRepository(): IAuthRepository {
        return new FirebaseAuthRepository();
    }
}