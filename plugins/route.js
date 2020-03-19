/*
 * @Author: your name
 * @Date: 2020-02-24 22:06:16
 * @LastEditTime: 2020-02-24 22:14:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tmall-nuxt\plugins\route.js
 */
const authRouter = ["/boughtList", "/shopCart"];
export default ({ app, store }) => {
  app.router.afterEach(({ path }, from) => {
    if (!store.getters.isAuthenticated && authRouter.includes(path)) {
      app.router.push("/login");
    }
  });
};
