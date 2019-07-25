<template>
  <div class="index">
    <h1>菜鸟驿站</h1>
    <button @click="activeKind='All'">All</button>
    <button @click="activeKind='hadOrder'">已预约</button>
    <button @click="activeKind='hadGot'">已取件</button>
    <button @click="activeKind='notOrder'">未预约</button>
    <button>+添加</button>
    <content :status="activeKind"></content>
  </div>
</template>

<script>
import content from './content'
export default {
  name: 'HelloWorld',
  data(){
      return {
          activeKind:'All'
      }
  },
  components:{
      content
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
