<template>
    <Form :model="formOrder" :label-width="80">
        <FormItem label="运单号">
            <Input v-model="formOrder.id" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="取件时间">
             <DatePicker type="datetime" placeholder="Select date and time"></DatePicker>
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
                    date: '',
                    time: ''
                }
            }
        }
    }
</script>