<template>
  <div class="task-item">
    <div class="task-header">
      <p class="task-header-container">
        <span v-text="title" class="task-header-title"></span>
        <span class="total">
          总计:
          <b class="total-num">{{total?total:0}}</b>
        </span>
      </p>
    </div>
    <div class="task-content">{{detail}}</div>
    <div class="task-btn">
      <Button>下载工具</Button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: String,
    title: String,
    total: [String, Number],
    detail: String
  }
};
</script>

<style scoped lang="scss">
.task-item {
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 20px;
  position: relative;
  margin-bottom: 30px;
  background: #f8f8f9;
}
.total {
  float: right;
  > b {
    font-size: 28px;
  }
}
.task-header-container{
   overflow: hidden;
   line-height: 50px;
   
}
.task-header-title{
    font-size: 24px;
    font-weight: bold;
}
.task-btn{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
}
</style>