<template>
  <div>
    <h3>work</h3>
    <div v-for="job in jobs">
      <p>{{job.year}}, {{job.company}}</p>
    </div>
    <button v-on:click="jobfilter(2015,$event)">filter</button>
  </div>
</template>

<script>
export default{
  name: "Workl",
  data(){
    return{
      jobs:[
        {year:2010, company:"rakuten"},
        {year:2014, company:"microsoft"},
        {year:2016, company:"google"},
        {year:2020, company:"yahoo"}
      ]
    }
  },
  methods:{
    jobfilter:function(num,event){
      /*
      var jobs = this.jobs;
      var newjobs = []
      for(var job of jobs){
        if(job.year>num){
          newjobs.push(job);
        }
      }
      this.jobs = newjobs;
      */
      // filterを使うと同じロジックが簡単にかける
      // filterはjsの配列から特定の条件にマッチするデータだけで抽出するメソッド
      this.jobs = this.jobs.filter(function(job){
        return job.year>num
      })
    }
  },
  computed:{
  }
}
</script>
