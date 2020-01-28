/*
 * @Author: your name
 * @Date: 2020-01-25 09:18:50
 * @LastEditTime : 2020-01-27 23:53:38
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\middleware\auth.js
 */

const needLoginGage = [];
export default function ({ app: { store } }) {
   if (process.client || process.static) {
      store.dispatch('auth/check_auth')
   }
}