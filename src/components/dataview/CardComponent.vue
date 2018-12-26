<template>
    <div class="card" :style="{background:bgcolor,color:color}">
        <div class="card-info">
            <h3 v-text='title'></h3>
            <p v-text='content'></p>
        </div>
        <div class="card-icon">
            <slot name="icon">
                <Icon slot="icon" type="ios-pie" size='50'/>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        props:['bgcolor','color','title','content'],
    }
</script>

<style scoped lang="scss">
    .card{
        padding: 20px;
        display: flex;
        height: 100%;
        align-items: center;
        border-radius: 4px;
        background: #ccc;
        color: #fff;
        overflow: hidden;
    }
    .card-info{
        flex: 1;
        margin-right: 20px;
        >h3{
            font-size: 30px;
        }
    }
</style>