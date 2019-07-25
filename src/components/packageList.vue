<template>
  <div class="content">
    <table>
        <thead>
            <tr>
                <td>运单号</td>
                <td>收件人</td>
                <td>电话</td>
                <td>状态</td>
                <td>预约时间</td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="eachpackage in packagesInfo" :key="eachpackage.id">
                <td>{{eachpackage.id}}</td>
                <td>{{eachpackage.cutomerName}}</td>
                <td>{{eachpackage.telphoneNumber}}</td>
                <td v-if="eachpackage.status === 0">已预约</td>
                <td v-if="eachpackage.status === 1">已取件</td>
                <td v-if="eachpackage.status === 2">未预约</td>
                <td>{{eachpackage.orderTime}}</td>
                <td>
                    <Button  v-if ="eachpackage.status === 0 || eachpackage.status === 2" @click="confirmPackage(eachpackage.id)">确认收货</Button>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'content',
  props:{
      status:String
  },
  computed:{
      packagesInfo(){
          switch(this.status){
              case 'hadOrder':
                  return this.$store.state.orders.filter(eachpackage => eachpackage.status === 0)
              case 'hadGot':
                  return this.$store.state.orders.filter(eachpackage => eachpackage.status === 1)
              case 'notOrder':
                  return this.$store.state.orders.filter(eachpackage => eachpackage.status === 2)
              default:
                  return this.$store.state.orders
          }
      }
  },
  methods:{
      confirmPackage(id){
          this.$store.dispatch('updatePackage',id);
      }
  },
  mounted:function(){
    this.$store.dispatch('getPackageLists');
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
table{
    margin: 0 auto;
    width:80%;
    border: 1px solid #cccccc;
    padding:10px;
}
</style>
