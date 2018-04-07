<template>
<div>
  <div class="row">
    <div class="col-sm-12 mt-2">
      <h4>{{ msg }}</h4>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <table class="table table-outline-bordered">
        <thead class="thead-light">
          <tr>
            <th >#</th>
            <th >Website</th>
            <th >Username</th>
            <th >Password</th>
            <th width="10%">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item,index in items.data">
            <th scope="row" v-text="index+1"></th>
            <td> {{ item.website }} </td>
            <td>{{ item.username }}</td>
            <td>{{ item.password }}</td>
            <td ><button class="btn btn-primary">Show</button></td>
          </tr>
        </tbody>
      </table>
      <Pagination :callback="getData" :for="items"></Pagination>
    </div>
  </div>
</div>
</template>

<script>
import Pagination from '@/components/Pagination';
export default {
  name: 'PasswordList',
  data () {
    return {
      msg: 'Manage Passwords',
      items : [],
      paginate: ['passwords'],
      response : {},
    }
  },
  methods : {
    getData(url = '/password'){
      axios.get(url)
      .then(response => {
        this.items = response.data;
      })
      .catch(e => {
        this.response.hasError = true;
        this.response = e.data;
      })
    }
  },
  mounted(){
    this.getData();
  },
  components : {
    Pagination
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .table-outline-bordered { border : 1px solid #ddd}
</style>
