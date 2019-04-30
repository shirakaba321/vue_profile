<template>
<footer>
  <p>2019年 Portfolio</p>
</footer>
</template>

<script>
export default {
  name: 'appfooter'
}
</script>

<style>
footer{
  width: 100%;
  background-color: #a1ff75;
  text-align: center;
  padding: 30px 0;
  position: absolute;/*←絶対位置*/
  bottom: 0; /*下に固定*/
}

footer p {
  font-size: 10px;
  color: #fff;
  font-weight: bold;
}
</style>


