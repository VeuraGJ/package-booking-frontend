<template>
    <Table border :columns="columns7" :data="data6"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns7: [
                    {
                        title: '运单号',
                        key: 'id',
                    },
                    {
                        title: '收件人',
                        key: 'cutomerName'
                    },
                    {
                        title: '电话',
                        key: 'telphoneNumber'
                    },
                    {
                        title: '状态',
                        key: 'status',
                        filters: [
                            {
                                label: '未预约',
                                value: 0
                            },
                            {
                                label: '已预约',
                                value: 1
                            },
                            {
                                label: '已取件',
                                value: 2
                            }
                            
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            return row.status === value
                        },
                         render: (h, params) => {
                            return h('div', [
                                h('span', this.changeStatus(params.row.status))
                            ]);
                        }
                    },
                    {
                        title: '预约时间',
                        key: 'orderTime'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'default',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        display : params.row.status === 2 ? 'none': 'inline-block'
                                    },
                                    on: {
                                        click: () => {
                                            this.confirmOrder(params.row.id)
                                        }
                                    }
                                }, '确认收货')
                    
                            ]);
                        }
                    }
                ],
                data6: this.$store.state.orders
            }
        },
        methods: {
            confirmOrder (index) {
                console.log(index)
                this.$store.dispatch('updatePackage',index).then(() => {
                   this.$Modal.confirm({
                    content: '<h1>确认收货成功！</h1>'
                });
                });
            },
            changeStatus(status){
                const statusType = ['未预约','已预约','已取件'];
                return statusType[status];
            }
        },
        mounted(){
            this.$store.dispatch('getPackageLists')
        }
    }
</script>
