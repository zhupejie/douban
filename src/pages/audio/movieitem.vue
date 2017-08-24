<template>
  <div class="movieitem">
    <div class="moviepic">
      <slot name="moviepic"></slot>
    </div>

    <h3>{{moviename}}</h3>
    <slot name="moviescore"></slot>
  </div>
</template>
<style>
  .movieitem{overflow: hidden;width: 100%}
  .movieitem h3{font-size: 16px;height: 21px;overflow: hidden}
  .movieitem img{width: 100%;height: 100%}
  .moviepic {height: 160px;}
</style>
<script>
  export default {
    props:["moviename"]
  }
</script>
