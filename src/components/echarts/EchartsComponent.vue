<template>
    <div class="echarts">

    </div>
</template>

<script>
    import Echarts from 'echarts'
    export default {
        data(){
            return {
                chartInstance:null
            }
        },
        mounted(){
            this.init()
        },
        methods:{
            init(){
                this.chartInstance = Echarts.init(this.$el)
            }
        }
    }   
</script>

<style scoped lang="scss">

</style>