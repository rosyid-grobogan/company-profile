/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
// Add vform
import { Form, HasError, AlertError } from 'vform'
window.Form = Form; // register
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

// Add momentjs
import moment from 'moment'

// Import Gate Class
import Gate from './Gate'
// we can use it anywhere
Vue.prototype.$gate = new Gate(window.user)


// Vue Progressbar
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '3px'
})

// Add Sweet alert
import Swal from 'sweetalert2'
window.Swal = Swal

// add toast swal
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
// agar lebih mudah
window.Toast = Toast


// Add
//import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes = [
    { path: '/dashboard', component: () => import('./components/Dashboard.vue') },
    { path: '/users', component: () => import('./components/Users.vue') },
    { path: '/developers', component: () => import('./components/Developers.vue') },
    { path: '/profile', component: () => import('./components/Profile.vue') },
    { path: '*', component: () => import('./components/NotFound.vue') }
  ]

  const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })

  // globar filter in vue
  Vue.filter('upText', function (text) {
    if (!text) return ''
    text = text.toString()
    return text.charAt(0).toUpperCase() + text.slice(1)
  })

  //
  Vue.filter('myDate', function(created) {
    return moment(created).format('MMMM Do YYYY, h:mm:ss a')
  })

  window.Fire = new Vue()

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Global app, jadi bisa diakses anywhere
Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);

Vue.component(
    'not-found',
    require('./components/NotFound.vue').default
);

Vue.component(
    'pagination',
    require('laravel-vue-pagination')
);
// Contoh
Vue.component(
        'example-component',
        require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    data: {
        search: ''
    },
    methods: {
        searchit: _.debounce( () => {
            Fire.$emit('searching')
        }, 1000),

        printme() {
            window.print()
        }
    }
});
