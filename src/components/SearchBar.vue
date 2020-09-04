<template>
  <div class="pageWrapper">
    <div class="contentWrap">
      <h1>Hi</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>

<style scoped>
.pageWrapper{
  display: flex;
  color: white;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
}

.contentWrap{
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 60%;
  background: rgba(0, 0, 0, 0.54);
  border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
  text-align: center;
}
</style>