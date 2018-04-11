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
            <td v-show="$nextTick(() => { item.show_password.textContent == true })"><span class="--star-hashed-password"> {{ item.hashed_password | star_password | max }}</span></td>
            <td v-show="$nextTick(() => { item.show_password.textContent == true })">{{ item.password }}</td>
            <td ><button @click="item.show_password = true" class="btn btn-primary">Show</button></td>
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
        this.items.data.map((item) => {
          return item = _.extend(item,{show_password : false});
        });
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
  created(){
  },
  components : {
    Pagination
  },
  filters : {
    star_password(value){
      return value.replace(/\S/ig, '*');
    },
    words(value, words = 15){
      return value.substr(0,words);
    },
    max(value, max = 15){
      if(value.length > max){
        return value.substr(0,max);
      }
      return value;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .table-outline-bordered { border : 1px solid #ddd }
  .--star-hashed-password { font-size: 1.75rem; font-weight: 700; }
</style>
