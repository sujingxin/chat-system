<template>
  <div class="hello">
    <div class="size">jintian</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello{
  font-size: 10px;
  .size{
    color: red;
  }
}
</style>
