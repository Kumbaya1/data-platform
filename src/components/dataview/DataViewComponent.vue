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
      <div>
        <MyEChart :option="chart1" :autoResize="true"></MyEChart>
      </div>
      <div>
        <MyEChart :option="chart2" :autoResize="true"></MyEChart>
      </div>
    </div>
    <div class="data-list">
      <div class="data-list-table">
        <div class="data-toolbar" style="overflow:hidden;text-align:center">
          <span style="font-size:24px;font-weight:bold;">CAPTION</span>
          <Input suffix="ios-search" placeholder="Enter text" style="width: auto ;float:right;" />
        </div>
        <Table border :columns="columns6" :data="data5" height="330" width="100%"></Table>
        <div style="margin: 10px;overflow: hidden">
          <div style="float: right;">
            <Page :total="100" :current="1"></Page>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyCard from "@/components/dataview/CardComponent";
import MyEChart from "@/components/echarts/EchartsComponent";
export default {
  data() {
    return {
      chart1: {
        title: {
          text: "今日&昨日",
          left: "center"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          icon: "rect",
          itemGap: 13,
          data: ["接口响应时间"],
          right: "4%",
          textStyle: {
            fontSize: 12,
            color: "#999999"
          }
        },
        grid: {
          // containLabel: true
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#EEEEEE"
            }
          },
          axisLabel: {
            color: "#666",
            fontSize: 12
          },
          boundaryGap: false,
          data: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20"
          ]
        },
        yAxis: {
          name: "单位:ms",
          nameTextStyle: {
            color: "#777",
            fontSize: 12
          },
          axisLine: {
            lineStyle: {
              color: "#EEEEEE"
            }
          },
          type: "value",
          axisLabel: {
            show: true,
            interval: "0",
            color: "#666"
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#eeeeee",
              type: "solid"
            }
          }
        },
        series: [
          {
            name: "接口响应时间",
            color: ["red"],
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 3 //折线宽度
                }
              }
            },
            data: [
              46,
              56,
              86,
              65,
              563,
              423,
              236,
              165,
              1532,
              369,
              456,
              166,
              1235,
              656,
              415,
              458,
              356,
              565,
              789,
              495
            ]
          }
        ]
      },
      chart2: {
        title: {
          text: "海底捞事件",
          subtext: "Feature Sample: Gradient \nColor, Shadow, Click Zoom"
        },
        grid: {
          top: 10,
          left: 10,
          right: 10,
          bottom: 10
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          data: ["微博", "微信", "知乎", "支持海底捞", "反对海底捞", "中立观点"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],

            label: {
              normal: {
                position: "inner"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "微博", selected: true },
              { value: 679, name: "微信" },
              { value: 1548, name: "知乎" }
            ]
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "55%"],
            label: {
              normal: {
                formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
                backgroundColor: "#eee",
                borderColor: "#aaa",
                borderWidth: 1,
                borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                  a: {
                    color: "#999",
                    lineHeight: 22,
                    align: "center"
                  },
                  // abg: {
                  //     backgroundColor: '#333',
                  //     width: '100%',
                  //     align: 'right',
                  //     height: 22,
                  //     borderRadius: [4, 4, 0, 0]
                  // },
                  hr: {
                    borderColor: "#aaa",
                    width: "100%",
                    borderWidth: 0.5,
                    height: 0
                  },
                  b: {
                    fontSize: 16,
                    lineHeight: 33
                  },
                  per: {
                    color: "#eee",
                    backgroundColor: "#334455",
                    padding: [2, 4],
                    borderRadius: 2
                  }
                }
              }
            },
            data: [
              { value: 335, name: "微博" },
              { value: 310, name: "微信" },
              { value: 234, name: "知乎" },
              { value: 135, name: "支持海底捞" },
              { value: 1048, name: "反对海底捞" },
              { value: 251, name: "中立观点" }
            ]
          }
        ]
      },
      columns6: [
        {
          title: "Date",
          key: "date"
        },
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age",
          filters: [
            {
              label: "Greater than 25",
              value: 1
            },
            {
              label: "Less than 25",
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.age > 25;
            } else if (value === 2) {
              return row.age < 25;
            }
          }
        },
        {
          title: "Address",
          key: "address",
          filters: [
            {
              label: "New York",
              value: "New York"
            },
            {
              label: "London",
              value: "London"
            },
            {
              label: "Sydney",
              value: "Sydney"
            }
          ],
          filterMethod(value, row) {
            return row.address.indexOf(value) > -1;
          }
        }
      ],
      data5: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        },
        {
          name: "Jon Snow2",
          age: 23,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-05"
        },
        {
          name: "statf",
          age: 23,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-12-05"
        },
        {
          name: "Seven 7",
          age: 23,
          address: "Ottawa No. 2 Lake Park",
          date: "2010-12-05"
        }
      ]
    };
  },
  methods: {},
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
  padding-bottom: 70px;
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
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 100%;
    width: 0%;
    margin-right: $gap;
    overflow: hidden;
    box-shadow: 1px 1px 1px 1px rgba(170, 170, 170, 0.7);
    &:nth-last-of-type(1) {
      margin-right: 0;
    }
  }
}
.charts-container /deep/ .echarts {
  width: 100%;
  height: 100%;
}
.data-list {
  margin-top: $gap;
  width: 100%;
  height: 400px;
  // border: 1px solid red;
}
</style>