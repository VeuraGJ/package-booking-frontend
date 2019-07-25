<template>
  <div class="index">
    <h1>菜鸟驿站</h1>
      <Layout>
        <Header>
             <Menu mode="horizontal" theme="dark">
                    <MenuItem name="1-1" >
                       <span  @click="activeKind='All'">All</span>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <span @click="activeKind='hadOrder'">已预约</span>
                    </MenuItem>
                    <MenuItem name="1-3">
                        <span @click="activeKind='hadGot'">已取件</span>
                    </MenuItem>
                    <MenuItem name="1-4">
                        <span @click="activeKind='notOrder'">未预约</span>
                    </MenuItem>
                    <MenuItem name="1-5">
                        <span @click="addOrder()">+添加</span>
                    </MenuItem>
            </Menu>
        </Header>
            <Content><packageList :status="activeKind"></packageList></Content>
    </Layout>
  </div>
</template>

<script>
import packageList from './packageList'
export default {
  name: 'HelloWorld',
  data(){
      return {
          activeKind:'All'
      }
  },
  components:{
      packageList
  },
  methods: {
    addOrder(){
        this.$router.push('/addOrder');
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
span{
    border: 1px solid #cccccc;
    padding:10px;
}

</style>
