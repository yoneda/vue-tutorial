<template>
  <div>
    <h3>detail</h3>
    <p>{{cname}} like music</p>
    <p>Holiday, {{cname}} usually make software things in my house</p>
    <p>My height is {{height}} cm</p>
    <button v-on:click="calcHalf">half</button>
  </div>
</template>

<script>
export default{
  name:"Detail",
  data(){
    return{
      name: "kohei",
      height: 168
    }
  },
  computed:{
    cname(){
      var name = this.$store.getters.getName
      return name
    }
  },
  methods:{
    calcHalf: function(){
      var halfheight = this.height*0.5;
      if(halfheight>=1.0){
        this.height = halfheight;
      }
    }
  }
}
</script>
