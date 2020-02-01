/*
 * @Author: your name
 * @Date: 2020-01-25 09:50:49
 * @LastEditTime : 2020-01-31 13:28:15
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\assets\util\jwt.js
 */
import Cookies from 'js-cookie'

const ID_TOKEN_KEY = "token";
let replaceToken = false;
export const setReplaceToken = (token) => {
    replaceToken = token;
};

export const getToken = () => {
    if (process.client) {
        return window.localStorage.getItem(ID_TOKEN_KEY);
    } else if (replaceToken) {
        return replaceToken;
    } else {
        false
    }
};

export const saveToken = token => {
    if (process.client) {
        window.localStorage.setItem(ID_TOKEN_KEY, token);
    }
};

export const destroyToken = () => {
    if (process.client) {
        window.localStorage.removeItem(ID_TOKEN_KEY);
        Cookies.remove(ID_TOKEN_KEY);
    }
};

export default { getToken, saveToken, destroyToken, setReplaceToken };