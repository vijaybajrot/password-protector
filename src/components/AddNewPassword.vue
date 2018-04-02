<template>
<div class="mt-4">
  <div class="row">
    <div class="col-sm-12 mt-2">
      <h4>{{ msg }}</h4>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <form @submit.prevent="validateForm" action="/">
        <div class="form-group">
          <label for="website">Website</label>
          <input type="text" class="form-control" id="website" aria-describedby="websiteHelp" placeholder="Enter Website Name" v-model="website" autocomplete="off">
          <small v-if="showErrors && errors.has('website')" id="websiteHelp" class="form-text text-danger pl-1">{{ errors.get('website') }}</small>
        </div>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter Username" v-model="username" autocomplete="off">
          <small v-if="showErrors && errors.has('username')" id="usernameHelp" class="form-text text-danger pl-1">{{ errors.get('username') }}</small>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input :type="passwordType" class="form-control" id="password" placeholder="Password" v-model="password" autocomplete="off">
          <small v-if="showErrors && errors.has('password')" id="passwordHelp" class="form-text text-danger pl-1">{{ errors.get('password') }}</small>
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
      errors : new Error,
      showErrors : false,
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
      if(this.website && this.username && this.password) return this.postData();
      if(!this.website) this.errors.store('website' ,"Website field is required");
      if(!this.username) this.errors.store('username', "Username field is required");
      if(!this.password) this.errors.store('password', "Password field is required");
      this.showErrors = true;
    },
    postData(){
      axios.post(`/password`, {
        website : this.website,
        username : this.username,
        password : this.password,
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e.data);
      })
    }
  },
  watch: {
    website : function (){
      if(this.website) this.errors.delete('website');
    },
    username : function (){
      if(this.username) this.errors.delete('username');
    },
    password : function (){
      if(this.password) this.errors.delete('password');
    }
  },
  computed : {

  },
  mounted(){
    //console.log(serverUrl);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
