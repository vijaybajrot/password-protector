<template>
<div class="mt-4">
  <div class="row">
    <div class="col-sm-12 mt-2">
      <h4>{{ msg }}</h4>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <form @submit="validateForm" action="/">
        <div class="form-group">
          <label for="website">Website</label>
          <input type="text" class="form-control" id="website" aria-describedby="websiteHelp" placeholder="Enter Website Name" v-model="website">
          <small v-if="showValidationErrors && errors.hasOwnProperty('website')" id="websiteHelp" class="form-text text-danger pl-1">{{ errors.website }}</small>
        </div>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter Username" v-model="username">
          <small v-if="showValidationErrors && errors.hasOwnProperty('username')" id="usernameHelp" class="form-text text-danger pl-1">{{ errors.username }}</small>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input :type="passwordType" class="form-control" id="password" placeholder="Password" v-model="password">
          <small v-if="showValidationErrors && errors.hasOwnProperty('password')" id="passwordHelp" class="form-text text-danger pl-1">{{ errors.password }}</small>
          <small class="form-text text-muted pl-1"><a href="javascript:void(0)" @click="togglePasswordType">{{ showHidePasswordText }}</a></small>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import Error from "@/core/Error";
export default {
  name: 'AddNewPassword',
  data () {
    return {
      msg: 'Add New Password',
      website : null,
      username : null,
      password : null,
      passwordType : 'text',
      showHidePasswordText : 'Show Password',
      errors : {},
      showValidationErrors : false
    }
  },
  methods : {
    togglePasswordType () {
      if(this.passwordType == 'password'){
        this.passwordType = "text";
        this.showHidePasswordText = "Hide Password";
      }else{
        this.passwordType = "password";
        this.showHidePasswordText = "Show Password";
      }
    },
    validateForm(event){
      if(this.website && this.username && this.password) return true;
      if(!this.website) this.errors.website = "Website field is required";
      if(!this.username) this.errors.username = "Username field is required";
      if(!this.password) this.errors.password = "Password field is required";
      this.showValidationErrors = true;
      event.preventDefault();
    }
  },
  watch: {
    website : function (){
      if(this.website) delete this.errors.website;
    },
    username : function (){
      if(this.username) delete this.errors.username;
    },
    password : function (){
      if(this.password) delete this.errors.password;
    }
  },
  computed : {

  },
  mounted(){
    new Error();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
