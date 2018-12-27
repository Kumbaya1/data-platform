<template>
  <div class="charts"></div>
</template>

<script>
import Echarts from "echarts";
export default {
  props: ["option", "autoResize"],
  data() {
    return {
      chartInstance: null,
      lastArea: 0,
      timer: null
    };
  },
  mounted() {
    if (this.option) {
      this.init();
    }
  },
  methods: {
    init() {
      this.chartInstance = Echarts.init(this.$el);
      this.chartInstance.setOption(this.option);
      this.lastArea = this.getArea();
      window.addEventListener("resize", this.resize);
    },
    resize() {
      this.chartInstance.resize();
    },
    getArea() {
      return this.$el.offsetWidth * this.$el.offsetHeight;
    },
    destroy() {
      if (this.autoResize) {
        this.timer = null;
      }
      this.chartInstance = null;
      this.lastArea = null;
      window.removeEventListener("resize", this.resize);
    }
  },
  watch: {
    option(val, oldVal) {
      this.chartInstance.setOption(val, val !== oldVal);
    }
  }
};
</script>

<style scoped lang="scss">
.charts {
  width: 100%;
  height: 100%;
}
</style>