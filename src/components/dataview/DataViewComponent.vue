<template>
  <div class="data-view">
    <div class="dashboard">
      <div class="dashboard-item">
        <MyCard bgcolor="#70c0b3" title="99.9%" content="this is detail">
          <Icon slot="icon" type="logo-pinterest" size="50"/>
        </MyCard>
      </div>
      <div class="dashboard-item">
        <MyCard bgcolor="#b3dbc0" title="1,208" content="this is detail"></MyCard>
      </div>
      <div class="dashboard-item">
        <MyCard bgcolor="#f3ffbd" color="#5c6339" title="$2000" content="this is detail">
          <Icon slot="icon" type="logo-yen" size="50"/>
        </MyCard>
      </div>
      <div class="dashboard-item">
        <MyCard bgcolor="#eb547d" title="+42%" content="this is detail">
          <Icon slot="icon" type="md-person-add" size="50"/>
        </MyCard>
      </div>
    </div>
    <div class="charts-container">
      <div class="222">
        <MyEChart></MyEChart>
      </div>
      <div>
        
      </div>
    </div>
    <!-- <Collapse value="1">
            <Panel name="1">
                仪表盘数据
                <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
            </Panel>
    </Collapse>
      <Card style="width:320px">
        <div style="text-align:center">
            <img src="../../assets/images/logo.png">
            <h3>A high quality UI Toolkit based on Vue.js</h3>
        </div>
    </Card>
     <Card style="width:320px">
        <div style="text-align:center">
            <img src="../../assets/images/logo.png">
            <h3>A high quality UI Toolkit based on Vue.js</h3>
        </div>
    </Card>-->
  </div>
</template>
<script>

import MyCard from "@/components/dataview/CardComponent"
import MyEChart from "@/components/echarts/EchartsComponent"
export default {
  data() {
    return {
     
    };
  },
  methods:{
   
  },
  components: {
    MyCard,
    MyEChart
  }
};
</script>

<style scoped lang="scss">
$gap: 30px;
.data-view {
  padding: $gap;
  height: calc(100vh - 100px);
  overflow: hidden auto;
  // background: #ccc;
}
.dashboard {
  display: flex;
  justify-content: space-between;
  &-item {
    width: 20%;
    height: 150px;
  }
}
.charts-container {
  height: 300px;
  display: flex;
  margin-top: $gap;
  // justify-content: space-between;
  > div {
    flex: 1;
    border: 1px solid;
    height: 100%;
    margin-right: $gap;
    &:nth-last-of-type(1) {
      margin-right: 0;
    }
  }
}
.charts-container /deep/ .echarts {
  width: 100%;
  height: 100%;
}
</style>