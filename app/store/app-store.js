import { create } from "zustand";
import { getJWT, getMe, removeJWT, setJWT } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";

export const useStore = create((set) => ({
    isAuth: false,
    user: null,
    token: "",
    login: (user, token) => {
        set({
            isAuth: true,
            user,
            token
        });
        setJWT(token);
    },
    logout: () => {
        set({
            isAuth: false,
            user: null,
            token: ""
        });
        removeJWT();
    },
    checkAuth: async () => {
        const jwt = getJWT();
        if (jwt) {
            let user = await getMe(endpoints.me, jwt);
            if (user) {
                user = { ...user, id: user._id };
                set({
                    isAuth: true,
                    user,
                    token: jwt
                });
                setJWT(jwt);
            } else {
                set({
                    isAuth: false,
                    user: null,
                    token: null
                });
                removeJWT();
            }
        } else {
            set({
                isAuth: false,
                user: null,
                token: null
            });
        }
    }
}));
