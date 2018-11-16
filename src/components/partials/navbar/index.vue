<template>
    <div>
          <nav class="site-navbar navbar navbar-default navbar-fixed-top navbar-mega navbar-inverse"
      role="navigation">
    
      <div class="navbar-header">
        <button type="button" id="close_menu" class="navbar-toggler hamburger hamburger-close navbar-toggler-left hided"
          data-toggle="menubar">
          <span class="sr-only">Toggle navigation</span>
          <span class="hamburger-bar"></span>
        </button>
        <button type="button" class="navbar-toggler collapsed" data-target="#site-navbar-collapse"
          data-toggle="collapse">
          <i class="icon wb-more-horizontal" id="close_menu_right" aria-hidden="true"></i>
        </button>
        <router-link class="navbar-brand navbar-brand-center" to="/">
          <!--<img class="navbar-brand-logo" src="/static/assets/images/logo.jpg" title="a1bread">-->
          <span class="navbar-brand-text hidden-xs-down">Vue-base</span>
        </router-link>
      </div>
    
      <div class="navbar-container container-fluid">
        <!-- Navbar Collapse -->
        <div class="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
          <!-- Navbar Toolbar -->
          <ul class="nav navbar-toolbar">
            <li class="nav-item hidden-float" id="toggleMenubar">
              <a class="nav-link" data-toggle="menubar" href="#" role="button">
                <i class="icon hamburger hamburger-arrow-left">
                  <span class="sr-only">Toggle menubar</span>
                  <span class="hamburger-bar"></span>
                </i>
              </a>
            </li>
            
          </ul>
          <!-- End Navbar Toolbar -->
    
          <!-- Navbar Toolbar Right -->
          <ul class="nav navbar-toolbar navbar-right navbar-toolbar-right">
              <li v-if="!this.$store.getters.getAuthUser" class="nav-item dropdown">
                  <router-link to="/login" class="nav-link navbar-avatar" data-toggle="dropdown" href="#" aria-expanded="false"
                    data-animation="scale-up" role="button">
                     LOGIN
                      <i></i>
                  </router-link>
              </li>
              <li v-if="!this.$store.getters.getAuthUser" class="nav-item dropdown">
                  <router-link to="/signup" class="nav-link navbar-avatar" data-toggle="dropdown" href="#" aria-expanded="false"
                    data-animation="scale-up" role="button">
                      SIGN UP
                      <i></i>
                  </router-link>
              </li>
            <li v-if="this.$store.getters.getAuthUser" class="nav-item dropdown">
              <a class="nav-link navbar-avatar" data-toggle="dropdown" href="#" aria-expanded="false"
                data-animation="scale-up" role="button">
                  <i class="icon wb-user-circle" style="font-size:20px" aria-hidden="true"></i>
                  <i></i>
              </a>
              <div class="dropdown-menu" role="menu">
                <a class="dropdown-item" @click.prevent="route('profile',0)" href="javascript:void(0)" role="menuitem"><i class="icon wb-user" aria-hidden="true"></i> Profile</a>
                <a class="dropdown-item" @click.prevent="route('billing')"  href="javascript:void(0)" role="menuitem"><i class="icon wb-payment" aria-hidden="true"></i> Billing</a>
                <a class="dropdown-item" @click.prevent="route('history')" href="javascript:void(0)" role="menuitem"><i class="icon wb-settings" aria-hidden="true"></i> History</a>
                <div class="dropdown-divider" role="presentation"></div>
                <a class="dropdown-item" @click.prevent="logout()" href="javascript:void(0)" role="menuitem"><i class="icon wb-power" aria-hidden="true"></i> Logout</a>
              </div>
            </li>
           
          </ul>
          <!-- End Navbar Toolbar Right -->
          
        </div>
        <!-- End Navbar Collapse -->
    
        <!-- Site Navbar Seach -->
        <!-- End Site Navbar Seach -->
      </div>
    </nav>
    <div class="site-menubar site-menubar-light">
      <div class="site-menubar-body">
        <div>
          <div>
            <ul class="site-menu" data-plugin="menu">
              <li class="dropdown site-menu-item ">
                <a @click.prevent="route('welcome',1)" data-toggle="dropdown" href="javascript:void(0)" data-dropdown-toggle="false">
                        <i class="site-menu-icon wb-home" aria-hidden="true"></i>
                        <span class="site-menu-title">Home</span>
                </a>
              </li>
              <li class="dropdown site-menu-item ">
                <a  @click.prevent="route('services',1)" data-toggle="dropdown"  href="javascript:void(0)" data-dropdown-toggle="false">
                        <i class="site-menu-icon wb-layout" aria-hidden="true"></i>
                        <span class="site-menu-title">Services</span>
                </a>
              </li>
               <li class="dropdown site-menu-item ">
                <a @click.prevent="route('faq',1)" href="javascript:void(0)" data-dropdown-toggle="false">
                        <i class="site-menu-icon wb-clipboard" aria-hidden="true"></i>
                        <span class="site-menu-title">FAQ</span>
                </a>
              </li>
               <li class="dropdown site-menu-item ">
                <a @click.prevent="route('contact',1)" data-toggle="dropdown" to="/contact" href="javascript:void(0)" data-dropdown-toggle="false">
                        <i class="site-menu-icon wb-mobile" aria-hidden="true"></i>
                        <span class="site-menu-title">contact</span>
                </a>
               <li class="dropdown site-menu-item has-sub">
                <a @click.prevent="route('about',1)"  href="javascript:void(0)" data-dropdown-toggle="false">
                        <i class="site-menu-icon wb-info" aria-hidden="true"></i>
                        <span class="site-menu-title">About</span>
                </a>
              </li>
              <li style="float:right" class="dropdown site-menu-item has-sub">
                <a @click="$router.go(-1)">
                        <i class="site-menu-icon wb-arrow-left" aria-hidden="true"></i>
                        <span class="site-menu-title">Back</span>
                </a>
              </li>
            </ul> 
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import {getCategory} from '@/config'
    export default{
        data(){
            return{
               
                cartProducts:{

                }
            }
        },
        created(){
        },
        computed:{
          ...mapState({
            cartStore : state => state.cartStore,
          }),
          cartProduct(){
            return this.cartProducts= this.cartStore.cartItems
          },
          getCategoryData(){
            return this.category
          }
        },
        methods:{
          logout(){
                this.$store.dispatch('unsetUserObject')
            },
          route(path,nav){
            if(nav){
              $("#close_menu").click()
            }else{
              $("#close_menu_right").click()
            }
            this.$router.push({name:path})
          }
          
        }
    }
</script>