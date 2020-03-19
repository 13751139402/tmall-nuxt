/*
 * @Author: your name
 * @Date: 2020-01-25 09:18:50
 * @LastEditTime: 2020-02-24 22:16:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\middleware\auth.js
 */

export default function({ app: { store } }) {
  if (process.client) {
    store.dispatch("check_auth");
  }
}
