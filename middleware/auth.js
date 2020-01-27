/*
 * @Author: your name
 * @Date: 2020-01-25 09:18:50
 * @LastEditTime : 2020-01-26 21:19:39
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\middleware\auth.js
 */

const needLoginGage = [];
export default function ({ app: { store }, route: { name } }) {
    console.log(process.client)
    if (name === 'redirect-path') {
        return;
    }
    store.dispatch('auth/check_auth')
}