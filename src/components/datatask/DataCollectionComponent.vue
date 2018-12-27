<template>
  <div class="data-collection">
    <CollectionTaskItem title="this is title" total="200" detail="this is detail" width="23%"></CollectionTaskItem>
    <CollectionTaskItem title="this is title" total="200" detail="this is detail" width="23%"></CollectionTaskItem>
    <CollectionTaskItem title="this is title" total="200" detail="this is detail" width="23%"></CollectionTaskItem>
    <CollectionTaskItem title="this is title" total="200" detail="this is detail" width="23%"></CollectionTaskItem>
    <CollectionTaskItem title="this is title" total="200" detail="this is detail" width="23%"></CollectionTaskItem>
  </div>
</template>

<script>
import CollectionTaskItem from "@/components/datatask/CollectionTaskItem.vue";
export default {
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
  overflow: hidden;
}
</style>