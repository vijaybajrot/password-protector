<template>
  <div id="app">
    <div class="row">
      <div class="col-sm-12">
        <h2>Password Protector</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <router-link to="/foo" class="btn btn-primary">Add New</router-link>
        <router-link to="/bar" class="btn btn-primary">Go to List</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #34373a;
  margin-top: 60px;
}
</style>
