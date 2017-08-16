import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function loadPages(component) {
  return () => System.import(`src/pages/${component}.vue`)
}

function load(component) {
  // '@' is aliased to src/components
  return () => System.import(`@/${component}.vue`)
}

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: loadPages('MainPage'),
      children: [
        {
          name: 'main',
          path: '/',
          component: load('Main')
        },
        {
          name: 'main2',
          path: '/main2',
          component: load('Main2')
        }]
    },
    { path: '/login', name: 'login', component: loadPages('LoginPage') },
    // Always leave this last one
    { path: '*', component: loadPages('Error404') } // Not found
  ]
})
