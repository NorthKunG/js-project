import Vue from 'vue'
import Router from 'vue-router'

//Computers
import ComputerIndex from '@/components/Computers/Index'
import ComputerCreate from '@/components/Computers/CreateComputer'
import ComputerEdit from '@/components/Computers/EditComputer'
import ComputerShow from '@/components/Computers/ShowComputer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/computers',
      name: 'computers',
      component: ComputerIndex
    },
    {
      path: '/computer/create',
      name: 'computers-create',
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
