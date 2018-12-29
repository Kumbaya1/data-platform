<template>
  <div class="import-data">
    <Upload
      multiple
      type="drag"
      action="//jsonplaceholder.typicode.com/posts/"
      :default-file-list="defaultFileList"
    >
      <div style="padding: 20px 0">
        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
        <p>Click or drag files here to upload</p>
      </div>
    </Upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultFileList: [
        {
          name: "img1.jpg",
          url:
            "http://gbres.dfcfw.com/Files/picture/20170306/size500/9FEA9AB789FA665C3418A84E561F3FCB.jpg"
        },
        {
          name: "img2.jpg",
          url: "http://www.xxx.com/img2.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>