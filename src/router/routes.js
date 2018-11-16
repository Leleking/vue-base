import welcome from '@/components/views/welcome'
import login from '@/components/views/auth/login'
import signup from '@/components/views/auth/signup'
import categoryShow from '@/components/views/category/categoryShow'
import checkout from '@/components/views/checkout/'
import invoice from '@/components/views/invoice'
import faq from '@/components/views/staticPages/faq'
import about from '@/components/views/staticPages/about'
import services from '@/components/views/staticPages/services'
import contact from '@/components/views/staticPages/contact'
import NotFound from '@/components/views/errors/NotFound'
import verifyEmail from '@/components/views/auth/verifyEmail/verifyEmail'
import verified from '@/components/views/auth/verifyEmail/verified'
import profile from '@/components/views/user/profile'
export const routes = [
    {path:'/',name:'welcome',component:welcome},
    {path:'/invoice',name:'invoice',component:invoice,meta:{requiresAuth:true}},
    {path:'/signup',name:'signup',component:signup},
    {path:'/category/:id',name:'categoryShow',component:categoryShow},
    {path:'/checkout',name:'checkout',component:checkout},
    {path:'/profile',name:'profile',component:profile,meta:{requiresAuth:true}},
    {path:'/faq',name:'faq',component:faq},
    {path:'/about',name:'about',component:about},
    {path:'/contact',name:'contact',component:contact},
    {path:'/services',name:'services',component:services},
    {path:'/verifyEmail',name:'verifyEmail',component:verifyEmail},
    {path:'/verified/:verifyToken/:email',name:'verified',component:verified},
    { path: '/pageNotFound', name: 'NotFound',component:NotFound },  
    { path: '*', redirect: '/pageNotFound' },  
    {path:'/login',name:'login',component:login,meta:{bodyClass: '!animsition page-login layout-full page-dark',login:true}}

]