<template>
  <div class="footer">
    <p class="footer-text">Copyright © 2018 清华同衡技术创新中心</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
    .footer{
        background: #fff;
        border-top: 1px solid #dedede;
        text-align: center;
        color: #333;
        position: fixed;
        z-index: 9;
        bottom: 0;
        width: 100%;
        &-text{
          line-height: 40px;
        }
    }
</style>