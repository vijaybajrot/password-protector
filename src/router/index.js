import Vue from 'vue'
import Router from 'vue-router'
import PasswordList from '@/components/PasswordList'
import AddNewPassword from '@/components/AddNewPassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PasswordList',
      component: PasswordList
    },
    {
      path: '/add',
      name: 'AddNewPassword',
      component: AddNewPassword
    }
  ]
})
