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
                <td>运单号</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="eachpackage in packagesInfo" :key="eachpackage.id">
                <td>{{eachpackage.id}}</td>
                <td>{{eachpackage.customerName}}</td>
                <td>{{eachpackage.telphone}}</td>
                <td v-if="eachpackage.status === 0">已预约</td>
                <td v-if="eachpackage.status === 1">已取件</td>
                <td v-if="eachpackage.status === 2">未预约</td>
                <td>{{eachpackage.time}}</td>
                <td>
                    <button  v-if ="eachpackage.status === 0 || eachpackage.status === 2">确认收货</button>
                </td>
            </tr>
        </tbody>
    </table>
    {{count}}
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
      },
      count(){
          return this.$store.state.count
      }
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
