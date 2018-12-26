<template>
  <div id="home">
    <HeaderComponent></HeaderComponent>
    <div class="computed-height home-content">
      <NavbarComponent :menuIndexs="menuIndexs"></NavbarComponent>
      <div class="container-fluid">
        <div class="bread-crumb">
          <Breadcrumb>
            <BreadcrumbItem v-for="(item,index) in breadCrumb" :key="index">{{item}}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from "vuex";
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import NavbarComponent from "@/components/navbar/NavbarComponent.vue";
export default {
  name: "home",
  data() {
    return {
      breadCrumb: [],
      menuIndexs : []
    };
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next(vm => {
      vm.breadCrumb = vm.getBreakCrumb(to.meta.nameIndexs,vm.navBar);
    });
    // next();
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    this.breadCrumb = this.getBreakCrumb(to.meta.nameIndexs,this.navBar);
    next();
  },
  methods: {
    getBreakCrumb(indexs,navBar){
      let nameIndexs = indexs.concat([]);
      this.menuIndexs = indexs;
      if(nameIndexs.length >0 ){
        let arr = [];
        const firstIndex = nameIndexs.shift();
        let target = navBar[firstIndex];
        arr.push(target.name);
        nameIndexs.forEach(el=>{
          target = target.children[el];
          arr.push(target.name);
        })
        return arr;
      }else{
        return [];
      }
    }
  },
  computed: {
    ...mapState(["navBar"])
  },
  components: {
    // HelloWorld
    HeaderComponent,
    NavbarComponent
  }
};
</script>
<style lang="scss" scoped>
#home {
  height: 100%;
}
.computed-height {
  height: calc(100% - 60px);
}
.home-content {
  display: flex;
}
.container-fluid {
  flex: 1;
}
.bread-crumb {
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  background: #f2f2f2;
  border: 1px solid #e5e5e5;
}
</style>

