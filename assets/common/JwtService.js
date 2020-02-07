/*
 * @Author: your name
 * @Date: 2020-01-25 09:50:49
 * @LastEditTime : 2020-02-07 19:12:05
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\assets\util\jwt.js
 */
import Cookies from 'js-cookie'

const ID_TOKEN_KEY = "token";

export const getToken = () => {
    if (process.client) {
        return window.localStorage.getItem(ID_TOKEN_KEY);
    } else {
        return false;
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

export default { getToken, saveToken, destroyToken };