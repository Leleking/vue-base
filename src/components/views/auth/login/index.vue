<template>
     <div>
          <div class="page vertical-align text-center" data-animsition-in="fade-in" data-animsition-out="fade-out">>
      <div class="page-content vertical-align-middle animation-slide-top animation-duration-1">
        <div class="brand">
          <img class="brand-img" width="150px" height="140px" src="/static/assets/images/logo.jpg" alt="...">
          <h2 class="brand-text">A1bread</h2>
        </div>
        <p>Sign into your A1bread account</p>
        <form method="post" action="login.html">
          <div class="form-group">
            <label class="sr-only" for="inputEmail">Email</label>
            <input type="email" class="form-control" id="inputEmail" v-validate="'required|email'" v-model="userObj.email" name="email" placeholder="Email">
            <span style="color:white"><small>{{ errors.first('email') }}</small></span>
          </div>
          <div class="form-group">
            <label class="sr-only" for="inputPassword">Password</label>
            <input type="password" v-model="userObj.password" v-validate="'required'" class="form-control" id="inputPassword" name="password"
              placeholder="Password">
            <span style="color:white"><small>{{ errors.first('password') }}</small></span>
          </div>
          <div class="form-group clearfix">
            <div class="checkbox-custom checkbox-inline checkbox-primary float-left">
              <input type="checkbox" id="inputCheckbox" name="remember">
              <label for="inputCheckbox">Remember me</label>
            </div>
            <a class="float-right" href="forgot-password.html">Forgot password?</a>
          </div>
          <button type="submit" @click.prevent="loginUser()" class="btn btn-primary btn-block">Login</button>
        </form>
        <p>Still no account? Please go to <router-link to="/signup">signup</router-link></p>

        <footer class="page-copyright page-copyright-inverse">
          <p>WEBSITE BY Geo</p>
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
    <!-- End Page -->

     </div>
</template>
<script>
import {loginMixin} from '@/mixins'
    export default{
      data(){
        return {
        }
      },
      mixins:[loginMixin],
     
    }
</script>
 <style src="../../../../assets/css/login.css"></style>