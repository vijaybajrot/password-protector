<template>
   <nav aria-label="Pagination">
        <ul class="pagination">
          <li :class="{'page-item' : pagination.total > 0 ,'disabled' : pagination.prev_page_url == null }">
            <a class="page-link" @click="fetchData(pagination.prev_page_url)" tabindex="-1">Previous</a>
          </li>

          <li :class="{'page-item' : link ,'active --disable' : link.title == pagination.current_page }" v-for="link in links" aria-disabled="true">
              <a class="page-link" @click="fetchData(link.url)">{{ link.title }} <span v-if="link.title == pagination.current_page" class="sr-only">(current)</span></a>
          </li>
          
          <li :class="{'page-item' : pagination.total > 0 ,'disabled' : pagination.next_page_url == null }">
            <a class="page-link"  @click="fetchData(pagination.next_page_url)">Next</a>
          </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name : "Pagination",
  data(){
      return {
          pagination : {},
          links : [],
          request : {},
      }
  },
  props : {
      "for" : { type : Object|Array },
      "callback" : {
          type: Function,
      }
  },
  methods: {
      fetchData(url){
          if(!_.isEmpty(url)){
                console.log("server call");
                this.callback(url);
          }
      }
  },
  created(){
        this.$on("paginationInit",()=>{
            this.request.path = this.pagination.path;
            this.request.next = qs.parse(this.pagination.next_page_url,{ delimiter : '?' });
            this.request.last = qs.parse(this.pagination.last_page_url,{ delimiter : '?' });
            this.request.first = qs.parse(this.pagination.first_page_url,{ delimiter : '?' });

            if(_.isEmpty(this.links)){
                for (let index = 1; index <= this.pagination.last_page; index++) {
                    let nextPageUrl = '#';
                    if(this.request.next.page == index){
                        nextPageUrl = this.pagination.next_page_url
                    }else{
                        nextPageUrl = this.request.path + "?page="+index
                    }
                    this.links.push({
                        title : index,
                        active : (index == this.pagination.current_page) ? true : false,
                        url : nextPageUrl,
                    });      
                }
            }
        });
  },
  watch : {
      for(){
          if(!_.isEmpty(this.for)){
              this.pagination = this.for;
              this.$emit("paginationInit");
          }
      }
  }
}
</script>

<style scoped>
    .--disable { pointer-events: none !important; }
</style>


