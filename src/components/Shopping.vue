<template>
	<div class="card__shopping">
    <p class="card__shopping__title">Your Shopping Spree</p>
    <div class="card__shopping__items">
      <div v-for="purchasedItem in item" :key="purchasedItem.name" v-if="purchasedItem.count > 0">
        <div class="card__shopping__items__item"> 
          <div class="card__shopping__items__item__img">
            <img :src="purchasedItem.image">
          </div> 
          <p> {{purchasedItem.name}} X {{purchasedItem.count}}</p>
        </div> 
      </div>
    </div>
	</div>
</template>

<script>

export default {
   props:['item']

}
</script>

<style lang="scss" scoped>

  .card__shopping {
    margin: 10px 0px;
    background-color: white;
    color: #333;
    text-align: center;
    padding: 10px;
    .card__shopping__title {
      background-color: white;
      text-align: center;
      font-size: 28px;
      color: rgb(46, 204, 113);
      font-weight: bold;
    }
    .card__shopping__items {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
      justify-items: center;
      align-items: center;
      .card__shopping__items__item {
        justify-items: center;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        .card__shopping__items__item__img {
          width: 50px;
          overflow:hidden;
          padding: 10px;
          img {
            width:100%;
            position:relative;
          }
        }
      }
    } 
  }
</style>