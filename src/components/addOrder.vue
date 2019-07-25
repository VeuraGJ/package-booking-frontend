<template>
    <Form :model="formOrder" :label-width="100">
        <FormItem label="运单号：">
            <Input v-model="formOrder.id" placeholder="Enter something..."/>
        </FormItem>
        <FormItem label="收件人：">
            <Input v-model="formOrder.cutomerName"  size="large" placeholder="Enter something..."/>
        </FormItem>
        <FormItem label="电话：">
            <Input v-model="formOrder.telphoneNumber"  size="large" placeholder="Enter something..."/>
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