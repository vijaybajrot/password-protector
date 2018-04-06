<template>
<div>
  <div class="row">
    <div class="col-sm-12 mt-2">
      <h4>{{ msg }}</h4>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Website</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item,index in items">
            <th scope="row">{{ index }}</th>
            <td> {{ item.website }} </td>
            <td>{{ item.username }}</td>
            <td>{{ item.password }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PasswordList',
  data () {
    return {
      msg: 'Manage Passwords',
      items : [],
      response : {}
    }
  },
  methods : {
    getData(){
      console.log("getting data");
      axios.get(`/password`)
      .then(response => {
        this.items = response.data;
        console.log(response.data);
      })
      .catch(e => {
        this.response.hasError = true;
        this.response = e.data;
        console.log(e.data);
      })
    }
  },
  mounted(){
    this.getData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
