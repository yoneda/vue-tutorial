<template>
  <div class="mail">
    <h2>mail</h2>
    <p>I'm {{cname}}, {{message}}</p>
    <button v-on:click="changeName">hidebutton</button>
  </div>
</template>

<script>
export default{
  name: "Mail",
  data(){
    return{
      message: "fell free to mail me"
    }
  },
  methods:{
    changeName: function(){
      this.$store.commit("setName",{name:"hayashi"})
    }
  },
  computed:{
    cname(){
      var name = this.$store.getters.getName
      return name
    }
  }
}
</script>
