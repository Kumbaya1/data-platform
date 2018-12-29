<template>
  <div class="achievement">
    <div class="tree-container">
      <Tree :data="data4" multiple ref="tree" :render="renderContent"></Tree>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data4: [
        {
          title: "数据目录",
          expand: true,
          selected: true,
          render: (h, { data }) => {
            return h(
              "span",
              {
                style: {
                  width: "100%",
                  display: "inline-block"
                },
                class: ["ivu-tree-title"],
                on: {
                  click: () => {
                    data.children ? (data.expand = !data.expand) : "";
                  }
                }
              },
              [
                h("span", [
                  h("Icon", {
                    props: {
                      type: "ios-folder-outline"
                    },
                    style: {
                      marginRight: "8px"
                    }
                  }),
                  h("span", data.title)
                ])
              ]
            );
          },
          children: this.getTreeDataList()
        }
      ]
    };
  },
  methods: {
    getTreeDataList(num = 20) {
      let arr = [];
      for (let i = 0; i < num; i++) {
        let o = {};
        o.title = "children" + i;
        o.expand = false;
        o.children = [
          {
            title: "item1"
          },
          {
            title: "item2"
          }
        ];
        arr.push(o);
      }
      return arr;
    },
    renderContent(h, { data }) {
      return h(
        "span",
        {
          style: {
            display: "inline-block",
            width: "100%"
          },
          class: ["ivu-tree-title"],
          on: {
            click: () => {
              data.children ? (data.expand = !data.expand) : "";
            }
          }
        },
        [
          h("span", [
            h("Icon", {
              props: {
                type: "ios-paper-outline"
              },
              style: {
                marginRight: "8px"
              }
            }),
            h("span", data.title)
          ])
        ]
      );
    }
  }
};
</script>

<style scoped>
.achievement {
  height: calc(100% - 40px);
  overflow: auto;   
  padding: 30px;
}
.tree-container {
  display: inline-block;
}
</style>