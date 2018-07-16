<template>
  <div class="top">
    <h2>top</h2>
    <p>{{message}}</p>
    <Detail />
    <Work />
  </div>
</template>

<script>
import Work from "./Work.vue"
import Detail from "./Detail.vue"

export default{
  name: "Top",
  components:{
    Work,Detail
  },
  data(){
    return {
      message: "welcome to top!"
    }
  },
  methods:{
  },
  computed:{
  }
}
</script>
