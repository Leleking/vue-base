<template>
    <div>
          <nav class="site-navbar navbar navbar-default navbar-fixed-top navbar-mega navbar-inverse"
      role="navigation">
    
      <div class="navbar-header">
        <button type="button" class="navbar-toggler hamburger hamburger-close navbar-toggler-left hided"
          data-toggle="menubar">
          <span class="sr-only">Toggle navigation</span>
          <span class="hamburger-bar"></span>
        </button>
        <button type="button" class="navbar-toggler collapsed" data-target="#site-navbar-collapse"
          data-toggle="collapse">
          <i class="icon wb-more-horizontal" aria-hidden="true"></i>
        </button>
        <router-link class="navbar-brand navbar-brand-center" to="/">
          <img class="navbar-brand-logo" src="/static/assets/images/logo.jpg" title="a1bread">
          <span class="navbar-brand-text hidden-xs-down"> A1 Bread</span>
        </router-link>
        <button type="button" class="navbar-toggler collapsed" data-target="#site-navbar-search"
          data-toggle="collapse">
          <span class="sr-only">Toggle Search</span>
          <i class="icon wb-search" aria-hidden="true"></i>
        </button>
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
            <li class="nav-item hidden-float">
              <a class="nav-link icon wb-search" data-toggle="collapse" href="#" data-target="#site-navbar-search"
                role="button">
                <span class="sr-only">Toggle Search</span>
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
                <span class="avatar avatar-online">
                  <img src="/static/assets/portraits/5.jpg" alt="...">
                  <i></i>
                </span>
              </a>
              <div class="dropdown-menu" role="menu">
                <a class="dropdown-item" href="javascript:void(0)" role="menuitem"><i class="icon wb-user" aria-hidden="true"></i> Profile</a>
                <a class="dropdown-item" href="javascript:void(0)" role="menuitem"><i class="icon wb-payment" aria-hidden="true"></i> Billing</a>
                <a class="dropdown-item" href="javascript:void(0)" role="menuitem"><i class="icon wb-settings" aria-hidden="true"></i> History</a>
                <div class="dropdown-divider" role="presentation"></div>
                <a class="dropdown-item" @click.prevent="logout()" href="javascript:void(0)" role="menuitem"><i class="icon wb-power" aria-hidden="true"></i> Logout</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" data-toggle="dropdown" href="javascript:void(0)" title="Notifications"
                aria-expanded="false" data-animation="scale-up" role="button">
                <i class="icon wb-bell" aria-hidden="true"></i>
                <span class="badge badge-pill badge-danger up">5</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
                <div class="dropdown-menu-header">
                  <h5>NOTIFICATIONS</h5>
                  <span class="badge badge-round badge-danger">New 5</span>
                </div>
    
                <div class="list-group">
                  <div data-role="container">
                    <div data-role="content">
                      <a class="list-group-item dropdown-item" href="javascript:void(0)" role="menuitem">
                        <div class="media">
                          <div class="pr-10">
                            <i class="icon wb-order bg-red-600 white icon-circle" aria-hidden="true"></i>
                          </div>
                          <div class="media-body">
                            <h6 class="media-heading">Empty</h6>
                            <time class="media-meta" datetime="2018-06-12T20:50:48+08:00">5 hours ago</time>
                          </div>
                        </div>
                      </a>
                      
                    </div>
                  </div>
                </div>
                <div class="dropdown-menu-footer">
                  <a class="dropdown-menu-footer-btn" href="javascript:void(0)" role="button">
                    <i class="icon wb-settings" aria-hidden="true"></i>
                  </a>
                  <a class="dropdown-item" href="javascript:void(0)" role="menuitem">
                    All notifications
                  </a>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link" data-toggle="dropdown" href="javascript:void(0)" title="Notifications"
                  aria-expanded="false" data-animation="scale-up" role="button">
                  <i class="icon wb-shopping-cart" aria-hidden="true"></i>
                  <span class="badge badge-pill badge-danger up">{{this.$store.getters.getCartLength}}</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
                  <div class="dropdown-menu-header">
                    <h5>Cart Items</h5>
                  </div>
                  <div class="list-group">
                    <div data-role="container">
                      <div data-role="content">
                        <a v-if="!this.$store.getters.getCartLength" class="list-group-item dropdown-item" href="javascript:void(0)" role="menuitem">
                          <div class="media">
                            <div class="pr-10">
                              <i class="icon wb-order bg-red-600 white icon-circle" aria-hidden="true"></i>
                            </div>
                            <div class="media-body">
                              <h6 class="media-heading">Empty</h6>
                              
                            </div>
                          </div>
                        </a>
                        <a v-for="cart in cartProduct" class="list-group-item dropdown-item" href="javascript:void(0)" role="menuitem">
                          <div class="media">
                            <div class="pr-10">
                           <img  height="50px" width="50px" v-bind:src="'http://localhost:8000/img/product/'+ cart.image" alt="...">                            
                            </div>
                            <div class="media-body">
                              <h6 class="media-heading">{{cart.name}}</h6>
                              
                            </div>
                          </div>
                        </a>
                        
                      </div>
                    </div>
                  </div>
                  <div class="dropdown-menu-footer">
                    <a class="dropdown-menu-footer-btn" href="javascript:void(0)" role="button">
                      <i class="icon wb-settings" aria-hidden="true"></i>
                    </a>
                    <router-link to="/checkout" class="dropdown-item" role="menuitem">
                      CheckOut
                    </router-link>
                  </div>
                </div>
              </li>
          </ul>
          <!-- End Navbar Toolbar Right -->
          
        </div>
        <!-- End Navbar Collapse -->
    
        <!-- Site Navbar Seach -->
        <div class="collapse navbar-search-overlap" id="site-navbar-search">
          <form role="search">
            <div class="form-group">
              <div class="input-search">
                <i class="input-search-icon wb-search" aria-hidden="true"></i>
                <input type="text" class="form-control" name="site-search" placeholder="Search...">
                <button type="button" class="input-search-close icon wb-close" data-target="#site-navbar-search"
                  data-toggle="collapse" aria-label="Close"></button>
              </div>
            </div>
          </form>
        </div>
        <!-- End Site Navbar Seach -->
      </div>
    </nav>
    <div class="site-menubar site-menubar-light">
      <div class="site-menubar-body">
        <div>
          <div>
            <ul class="site-menu" data-plugin="menu">
              <li class="dropdown site-menu-item ">
                <router-link data-toggle="dropdown" to="/" href="javascript:void(0)" data-dropdown-toggle="false">
                        <i class="site-menu-icon wb-home" aria-hidden="true"></i>
                        <span class="site-menu-title">Home</span>
                </router-link>
              </li>
              <li class="dropdown site-menu-item ">
                <router-link data-toggle="dropdown" to="/" href="javascript:void(0)" data-dropdown-toggle="false">
                        <i class="site-menu-icon wb-layout" aria-hidden="true"></i>
                        <span class="site-menu-title">Services</span>
                </router-link>
              </li>
               <li class="dropdown site-menu-item ">
                <router-link data-toggle="dropdown" to="/" href="javascript:void(0)" data-dropdown-toggle="false">
                        <i class="site-menu-icon wb-clipboard" aria-hidden="true"></i>
                        <span class="site-menu-title">FAQ</span>
                </router-link>
              </li>
               <li class="dropdown site-menu-item ">
                <router-link data-toggle="dropdown" to="/" href="javascript:void(0)" data-dropdown-toggle="false">
                        <i class="site-menu-icon wb-mobile" aria-hidden="true"></i>
                        <span class="site-menu-title">contact</span>
                </router-link>
               <li class="dropdown site-menu-item has-sub">
                <a data-toggle="dropdown" href="javascript:void(0)" data-dropdown-toggle="false">
                        <i class="site-menu-icon wb-info" aria-hidden="true"></i>
                        <span class="site-menu-title">About</span>
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
        }
    }
</script>