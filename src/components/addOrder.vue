<template>
    <Form :model="formItem" :label-width="80">
        <FormItem label="运单号：">
            <Input v-model="formOrder.id" placeholder="Enter something..."/>
        </FormItem>
        <FormItem label="收件人：">
            <Input v-model="formOrder.cutomerName" placeholder="Enter something..."/>
        </FormItem>
        <FormItem label="电话：">
            <Input v-model="formOrder.telphoneNumber" placeholder="Enter something..."/>
        </FormItem>
        <FormItem>
            <Button type="primary">Submit</Button>
            <Button style="margin-left: 8px">Cancel</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                formOrder: {
                    id: '',
                    cutomerName: '',
                    telphoneNumber: ''
                }
            }
        }
    }
</script>