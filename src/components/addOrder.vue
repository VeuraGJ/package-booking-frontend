<template>
  <div class="addOrder">
      
      <Layout>
        <Header>
             <h1>包裹入库</h1>
        </Header>
        <Content>
        <Form :model="formItem" :label-width="80">
            <FormItem label="运单单号">
            <Input v-model="formItem.orderId" placeholder="Enter something..."/>
            </FormItem>
            <FormItem label="收件人">
            <Input v-model="formItem.orderId" placeholder="Enter something..."/>
            </FormItem>
            <FormItem label="电话">
            <Input v-model="formItem.orderId" placeholder="Enter something..."/>
            </FormItem>
            <FormItem>
            <Button type="primary">Submit</Button>
            <Button style="margin-left: 8px">Cancel</Button>
            </FormItem>
        </Form>
        </Content>
    </Layout>
  </div>
</template>

<script>
import packageList from './packageList'
export default {
  name: 'HelloWorld',
  data () {
            return {
                formItem: {
                   
                }
            }
  },
  components:{
      packageList
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1{
    color:#fff
}
</style>
