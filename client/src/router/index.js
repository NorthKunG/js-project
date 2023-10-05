import Vue from 'vue'
import Router from 'vue-router'

//Users
import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'

//Computers
import ComputerIndex from '@/components/Computers/Index'
import ComputerCreate from '@/components/Computers/CreateComputer'
import ComputerEdit from '@/components/Computers/EditComputer'
import ComputerShow from '@/components/Computers/ShowComputer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/computers',
      name: 'computers',
      component: ComputerIndex
    },
    {
      path: '/computer/create',
      name: 'computer-create',
      component: ComputerCreate
    },
    {
      path: '/computer/edit/:computerId',
      name: 'computer-edit',
      component: ComputerEdit
    },
    {
      path: '/computer/:computerId',
      name: 'computer',
      component: ComputerShow
    }
  ]
})
