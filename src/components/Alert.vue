<template>
  <div class="row">
    <div class="col-sm-12">
      <div v-if="showAlert">
        <div :class="{
            'alert' : Object.keys(response).length > 0, 
            'alert-success' : response.leval == 'success' , 
            'alert-danger' : response.leval == 'error'
          }" role="alert">
            {{ response.message }}
            <button type="button" @click="showAlert = false" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'Alert',
  data() {
      return {
        showAlert : false
      }
  },
  props : [
      'response'
  ],
  watch : {
      response(){
          if(!_.isEmpty(this.response)) {
              console.log(this.response);
              this.showAlert = true;
            }
      }
  }
}
</script>

<style scoped>

</style>