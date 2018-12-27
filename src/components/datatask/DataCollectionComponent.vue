<template>
  <div class="data-collection">
    <CollectionTaskItem
      v-for="item in collectionlist"
      class="collect-item"
      :key="item.id"
      :title="item.title"
      :total="item.total"
      :detail="item.content"
    ></CollectionTaskItem>
    <!-- <CollectionTaskItem title="this is title" total="200" detail="this is detail" width="23%"></CollectionTaskItem> -->
  </div>
</template>

<script>
import CollectionTaskItem from "@/components/datatask/CollectionTaskItem.vue";
export default {
  data() {
    return {
      collectionlist: []
    };
  },
  mounted() {
    this.$axios.get("getcollectionlist").then(res => {
      console.log(res.data);
      this.collectionlist = res.data.list;
    });
  },
  components: {
    CollectionTaskItem
  }
};
</script>

<style scoped lang="scss">
.data-collection {
  padding: 30px;
  height: calc(100vh - 100px);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  //   align-items: flex-start;
  align-content: flex-start;
  // overflow: hidden;
  overflow: auto;
}
.collect-item {
  min-width: 300px;
  max-width: 600px;
}
@media screen and (max-width: 1740px) {
  .collect-item {
    width: 33%;
  }
}
@media screen and (max-width: 1180px) {
  .collect-item {
    width: 45%;
  }
}
@media screen and (max-width: 880px) {
  .collect-item {
    width: 100%;
  }
}
</style>