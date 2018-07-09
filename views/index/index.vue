<template>
  <div :class="$style.container">
    这是首页
    <div>
      我是子元素12
    </div>
  </div>
</template>

<script>
export default {
  name:'index'
}
</script>
<style lang = "scss" module>
  @import '../../styles/hotcss/px2rem';
  .container{
    background-color: blue;
    font-size:px2rem(69);
    height: px2rem(300);
    width: px2rem(750);
    div{
      color:yellow;
    }
  }
</style>






