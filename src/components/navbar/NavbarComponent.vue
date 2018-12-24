<template>
    <div class="nav-bar" :class="{ 'sharink-nav':isSharink }">
        <div class="x-slide_left" @click="toggleNav"></div>
         <Menu theme="dark">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        数据采集总览
                    </template>
                    <MenuItem name="1-1">文章管理</MenuItem>
                    <MenuItem name="1-2">评论管理</MenuItem>
                    <MenuItem name="1-3">举报管理</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        数据任务管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        采集成果管理
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
                 <Submenu name="4">
                    <template slot="title">
                        <Icon type="ios-people" />
                        数据导入
                    </template>
                    <MenuItem name="4-1">新增用户</MenuItem>
                    <MenuItem name="4-2">活跃用户</MenuItem>
                </Submenu>
                 <Submenu name="5">
                    <template slot="title">
                        <Icon type="ios-people" />
                        成果目录
                    </template>
                    <MenuItem name="5-1">新增用户</MenuItem>
                    <MenuItem name="5-2">活跃用户</MenuItem>
                </Submenu>
                  <Submenu name="6">
                    <template slot="title">
                        <Icon type="ios-people" />
                        数据提取
                    </template>
                    <MenuItem name="6-1">新增用户</MenuItem>
                    <MenuItem name="6-2">活跃用户</MenuItem>
                </Submenu>
            </Menu>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isSharink:false
            }
        },
        methods:{
            toggleNav(){
                this.isSharink = !this.isSharink;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .nav-bar{
        height: 100%;
        position: relative;
        transition: all ease .3s;
    }
    .nav-bar .ivu-menu-dark{
        background: #393D49;
    }
    .nav-bar .ivu-menu{
        height: 100%;
    }
    .nav-bar .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover{
        background: #009688!important;
    }
    .x-slide_left {
        width: 17px;
        height: 61px;
        background: url(../../assets/images/collapse-icon.png) 0 0 no-repeat;
        position: absolute;
        top: 200px;
        left: 240px;
        cursor: pointer;
    }
    .sharink-nav{
        margin-left:-240px;
    }
</style>
