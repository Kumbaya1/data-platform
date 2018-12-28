<template>
  <div class="nav" :class="{ 'sharink-nav':isSharink }">
    <div class="nav-bar">
      <div class="nav-bar-scroll">
        <Menu
          theme="dark"
          :accordion="true"
          :active-name="menuIndexs.join('-')"
          :open-names="openNames"
          ref="submenu"
        >
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
            > {{menu.name}} </MenuItem>
          </Submenu>
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
      isSharink: false,
      openNames: []
    };
  },
  props: ["menuIndexs"],
  mounted() {
    // console.log(this.isSharink)
    // console.log(this.menuIndexs)
    // console.log(this.$refs.submenu1)
  },
  methods: {
    toggleNav() {
      this.isSharink = !this.isSharink;
      const myEventResize = new Event("resize");
      setTimeout(() => {
        window.dispatchEvent(myEventResize);
      }, 300);
    },
    updateOpened() {}
  },
  computed: {
    ...mapState(["navBar"])
  },
  watch: {
    menuIndexs(val) {
      this.openNames.splice(0,1,parseInt(val[0]));
      this.$nextTick(() => {
        // this.openNames.push(parseInt(val[0]));
        this.$refs.submenu.updateOpened();
      });
    }
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
      > ul {
        width: 100% !important;
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
