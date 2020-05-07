<template>
  <div class="app__components__card">
    <div class="app__components__card__img">
       <img src="@/assets/images/billgates.jpg">
    </div>
    <h1>Spend Bill Gates' Money</h1>
  </div>
</template>

<script>
export default {
  name: 'Spend',
}
</script>

<style lang="scss" scoped>
.app__components__card {
  margin: 10px 0px;
  background-color: white;
  color: #333;
  text-align: center;
  padding: 10px;
  .app__components__card__img > img {
    background-color: #ddd;
    border-radius: 100%;
    height: 125px;
    object-fit: cover;
    width: 125px;   
  }
}
  
</style>
