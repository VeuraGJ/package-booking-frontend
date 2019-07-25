<template>
  <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">菜鸟驿站</div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-1" theme="light" width="auto">
                         <MenuItem name="1-1">
                         <Icon type="ios-navigate"></Icon>
                            首页
                         </MenuItem>
                        <MenuItem name="1-2"> 
                        <Icon type="md-add"></Icon>
                            添加运单</MenuItem>
                        <MenuItem name="1-3">
                        <Icon type="ios-clipboard-outline"></Icon>
                        预约时间</MenuItem>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                      <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
      return {
          activeKind:'All'
      }
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
