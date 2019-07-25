<template>
    <Form :model="formOrder" :label-width="100">
        <FormItem label="运单号:">
            <Input v-model="formOrder.id" placeholder="运单号" size="large"/>
        </FormItem>
        <FormItem label="取件时间:">
             <DatePicker v-model="formOrder.date" type="datetime" placeholder="预约时间" size="large"></DatePicker>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="reserveTime">预约</Button>
            <Button style="margin-left: 8px">取消</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                formOrder: {
                    id: '',
                    date:''
                }
            }
        },
        methods:{
            reserveTime(){
                let order = {id : this.formOrder.id,orderTime: this.formatTime(this.formOrder.date)}
                this.$store.dispatch('reservePackage',order)
            },
            formatTime(date){
                return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            }
        }
    }
</script>