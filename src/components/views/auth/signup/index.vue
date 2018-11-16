<template>
   <div>
     <div>
       <div class="vertical-align text-center" data-animsition-in="fade-in" data-animsition-out="fade-out">
      <div class="page-content vertical-align-middle animation-slide-top animation-duration-1">
        <div class="brand">
          <!--<img class="brand-img" width="150px" height="140px" src="/static/assets/images/logo.jpg" alt="...">-->
          <h2 class="brand-text">Vue-base</h2>
        </div>
        <p>Sign up to find interesting things</p>
        <form method="post" role="form">
          <div class="form-group">
            <label class="sr-only" for="inputName">Name</label>
            <input type="text" v-model="userObj.name" class="form-control" id="inputName" v-validate="'required'" name="name" placeholder="Name">
             <span style="color:red"><small>{{ errors.first('name') }}</small></span>
          </div>
          <div class="form-group">
            <label class="sr-only" for="inputEmail">Email</label>
            <input type="email" v-model="userObj.email" v-validate="'required|email'" class="form-control" id="inputEmail" name="email" placeholder="Email">
             <span style="color:red"><small>{{ errors.first('email') }}</small></span>
          </div>
          <div class="form-group">
            <label class="sr-only" for="inputPassword">Password</label>
            <input v-validate="'required'" class="form-control" name="password" v-model="userObj.password" type="password" placeholder="Password" ref="password">
             <span style="color:red"><small>{{ errors.first('password') }}</small></span>
          </div>
          <div class="form-group">
            <label class="sr-only" for="inputPasswordCheck">Retype Password</label>
            <input v-validate="'required|confirmed:password'" class="form-control" v-model="userObj.password_confirmation" name="password_confirmation" type="password"  placeholder="Password Confirmation" data-vv-as="password">
             <span style="color:red"><small>{{ errors.first('password_confirmation') }}</small></span>
          </div>
          

          <button type="submit" @click.prevent="signupUser()" class="btn btn-primary btn-block">Register</button>
        </form>
        <p>Have account already? Please go to <a href="login.html">Sign In</a></p>

        <footer class="page-copyright page-copyright-inverse">
          <p>WEBSITE BY amazingSurge</p>
          <p>© 2018. All RIGHT RESERVED.</p>
          <div class="social">
            <a class="btn btn-icon btn-pure" href="javascript:void(0)">
          <i class="icon bd-twitter" aria-hidden="true"></i>
        </a>
            <a class="btn btn-icon btn-pure" href="javascript:void(0)">
          <i class="icon bd-facebook" aria-hidden="true"></i>
        </a>
            <a class="btn btn-icon btn-pure" href="javascript:void(0)">
          <i class="icon bd-dribbble" aria-hidden="true"></i>
        </a>
          </div>
        </footer>
      </div>
    </div>
     </div>
   </div>
</template>
<script>
import {signupMixin} from '@/mixins'
    export default{
      data(){
        return {
        }
      },
      mixins:[signupMixin],
     
    }
</script>