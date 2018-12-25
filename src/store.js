import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navBar:[
      {name:'数据采集总览',icon:'ios-paper',fz:24,children:[{name:'数据采集总览',icon:'',fz:24 ,to:{ name: 'dataview'}}]},
      {name:'数据任务管理',icon:'md-cog',fz:24,children:[{name:'采集任务',icon:'',fz:24 ,to:{ name: 'datacollection'}},{name:'采集日志',icon:'',fz:24 ,to:{ name: 'log'}}]},
      {name:'采集成果管理',icon:'md-build',fz:24,children:[{name:'采集成果管理',icon:'',fz:24 ,to:{ name: 'dataview'}}]},
      {name:'数据导入',icon:'ios-cloud-download',fz:24,children:[{name:'采集成果管理',icon:'',fz:24 ,to:{ name: 'dataview'}}]},
      {name:'成果目录',icon:'md-trophy',fz:24,children:[{name:'采集成果管理',icon:'',fz:24 ,to:{ name: 'dataview'}}]},
      {name:'数据提取',icon:'ios-paper',fz:24,children:[{name:'采集成果管理',icon:'',fz:24 ,to:{ name: 'dataview'}}]},


    ]
  },
  mutations: {

  },
  actions: {

  }
})
