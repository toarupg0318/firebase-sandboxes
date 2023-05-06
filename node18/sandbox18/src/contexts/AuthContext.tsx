'use client';

import React, {createContext, Dispatch, SetStateAction, useState} from 'react';
import {AuthUser} from "@/package/types/AuthUser";

export const AuthContext = createContext<{
    authUser: AuthUser,
    setAuthUser: Dispatch<SetStateAction<AuthUser>>|undefined
}>({
    authUser: {
        id: undefined,
        name: undefined,
        token: undefined
    },
    setAuthUser: undefined
});

export const AuthContextProvider = ({ children }: {children: React.ReactNode}) => {
    const [authUser, setAuthUser] = useState<AuthUser>({
        id: undefined,
        name: undefined,
        token: undefined
    });

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};