/*
 * @Author: your name
 * @Date: 2020-01-25 09:50:49
 * @LastEditTime : 2020-01-27 23:58:21
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\assets\util\jwt.js
 */
const ID_TOKEN_KEY = "id_token";

export const getToken = () => {
    if (process.client) {
        return window.localStorage.getItem(ID_TOKEN_KEY);
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
    }
};

export default { getToken, saveToken, destroyToken };