import welcome from '@/components/views/welcome'
import login from '@/components/views/auth/login'
import signup from '@/components/views/auth/signup'
import categoryShow from '@/components/views/category/categoryShow'
import checkout from '@/components/views/checkout/'
import invoice from '@/components/views/invoice'
export const routes = [
    {path:'/',name:'welcome',component:welcome},
    {path:'/invoice',name:'invoice',component:invoice,meta:{requiresAuth:true}},
    {path:'/signup',name:'signup',component:signup},
    {path:'/category/:id',name:'categoryShow',component:categoryShow},
    {path:'/checkout',name:'checkout',component:checkout},
    {path:'/login',name:'login',component:login,meta:{bodyClass: '!animsition page-login layout-full page-dark',login:true}}

]