<template>
  <div class="nav" :class="{ 'sharink-nav':isSharink }">
    <div class="nav-bar">
      <div class="nav-bar-scroll">
        <Menu theme="dark" :accordion="true" :active-name="menuIndexs.join('-')" :open-names="['0']">
          <Submenu :name="index" v-for="(item,index) in navBar" :key="index">
            <template slot="title">
              <Icon v-if="item.icon" :type="item.icon" :size="item.fz"/>
              {{item.name}}
            </template>
            <MenuItem
              v-for="(menu,idx) in item.children"
              :name="index+'-'+idx"
              :to="menu.to"
              :key="idx"
            >{{menu.name}}</MenuItem>
          </Submenu>
          <!-- <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper" :size="iconSize"/>数据采集总览
            </template>
            <MenuItem name="1-1" :to="{ name: 'dataview'}">数据采集总览</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="md-cog" :size="iconSize"/>数据任务管理
            </template>
            <MenuItem name="2-1" :to="{ name: 'datacollection'}">采集任务</MenuItem>
            <MenuItem name="2-2" :to="{ name: 'log'}">采集日志</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="md-build" :size="iconSize"/>采集成果管理
            </template>
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <Icon type="ios-cloud-download" :size="iconSize"/>数据导入
            </template>
            <MenuItem name="4-1">新增用户</MenuItem>
            <MenuItem name="4-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="5">
            <template slot="title">
              <Icon type="md-trophy" :size="iconSize"/>成果目录
            </template>
            <MenuItem name="5-1">新增用户</MenuItem>
            <MenuItem name="5-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="6">
            <template slot="title">
              <Icon type="ios-paper" :size="iconSize"/>数据提取
            </template>
            <MenuItem name="6-1">新增用户</MenuItem>
            <MenuItem name="6-2">活跃用户</MenuItem>
          </Submenu>-->
        </Menu>
      </div>
    </div>
    <div :class="{'x-slide-left-sharink':isSharink}" class="x-slide-left" @click="toggleNav"></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isSharink: false
    };
  },
  props:['menuIndexs'],
  mounted() {},
  methods: {
    toggleNav() {
      this.isSharink = !this.isSharink;
    }
  },
  computed: {
    ...mapState(["navBar"])
  }
};
</script>
<style lang="scss" scoped>
.nav {
  height: 100%;
  position: relative;
  transition: all ease 0.3s;
  &-bar {
    height: 100%;

    overflow: hidden;
    width: 200px;
    &-scroll {
      height: 100%;
      width: 220px;
      overflow-y: auto;
      overflow-x: hidden;
      >ul{
          width: 100%!important;
      }
    }
  }
}
.nav-bar .ivu-menu-dark {
  background: #393d49;
}
.nav-bar .ivu-menu {
  min-height: 100%;
}
.nav-bar
  .ivu-menu-dark.ivu-menu-vertical
  .ivu-menu-submenu
  .ivu-menu-item-active,
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover {
  background: #009688 !important;
}
.x-slide-left {
  width: 17px;
  height: 61px;
  background: url(../../assets/images/collapse-icon.png) 0 0 no-repeat;
  position: absolute;
  left: 200px;
  top: calc(50% - 30px);
  cursor: pointer;
}
.x-slide-left-sharink {
  background-position: 0px -61px;
}
.sharink-nav {
  margin-left: -200px;
}
.nav-bar .ivu-menu-item {
  padding-left: 70px !important;
}
</style>
