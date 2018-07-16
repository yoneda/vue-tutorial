<template>
  <div>
    <h3>detail</h3>
    <p><span v-bind:class="nameColor">{{cname}}</span> like music</p>
    <p>Holiday, <span v-bind:class="nameColor">{{cname}}</span> usually make software things in my house</p>
    <p>My height is {{height}} cm</p>
    <button v-on:click="calcHalf">half</button>
    <button v-on:click="changeNameColor">summer</button>
  </div>
</template>

<script>
export default{
  name:"Detail",
  data(){
    return{
      name: "kohei",
      height: 168,
      nameColor: "nameRed",
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
    },
    changeNameColor: function(){
      this.nameColor = "nameBlue";
    }
  }
}
</script>

<style>

.nameRed{
  color: red;
}

.nameBlue{
  color :lightskyblue;
}

</style>
