import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

const baseURL = __IS_DEV__ ? "http://localhost:8000" : "https://prod.ru";

export const $api = axios.create({
    baseURL: baseURL,
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.authorization =
            localStorage.getItem(USER_LOCALSTORAGE_KEY) || "";
    }
    return config;
});
 