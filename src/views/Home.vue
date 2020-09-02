<template>
  <div class="pageWrapper">
    <div class="contentWrap">
      <HelloWorld></HelloWorld>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
