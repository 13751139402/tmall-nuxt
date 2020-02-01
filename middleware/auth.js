/*
 * @Author: your name
 * @Date: 2020-01-25 09:18:50
 * @LastEditTime : 2020-01-29 23:33:35
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\middleware\auth.js
 */

const needLoginGage = [];
export default function ({ app: { store } }) {
      store.dispatch('auth/check_auth')
}