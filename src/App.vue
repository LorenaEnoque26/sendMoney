<template>
  <div class="app">
    <div class="app__components">
      <Spend/>
      <Money/>
      <div class="app__components__grid">
        <div class="app__components__grid__items" v-for="(item, index) in items" :key="index" ref="items">
          <div class="app__components__grid__items__item">
            <div class="app__components__grid__items__item__img">
              <img :src="item.image">
            </div>   
          <div class="app__components__grid__items__item__description">
              <p class="app__components__grid__items__item__description__name">{{item.name}}</p>
              <p class="app__components__grid__items__item__description__price"> ${{parseInt(item.price).toLocaleString()}}</p>
            </div>
            <div class="app__components__grid__items__item__buttons">
              <button class="app__components__grid__items__item__buttons__sell" :disabled="item.count <= 0" v-on:click="item.count--">Sell</button>
                <input type="number" v-model="item.count">
              <button class="app__components__grid__items__item__buttons__buy" :disabled="item.price > money" v-on:click="item.count++">Buy</button>
            </div>
          </div> 
        </div>
      </div>
      <Shopping :item="items" v-if="items.find(item => item.count > 0)"/>
    </div>
  </div>
</template>

<script>

import Spend from './components/Spend'
import Money from './components/Money'
import Shopping from './components/Shopping'

import { mapGetters } from 'vuex';
export default {
  components: {
    Spend,
    Money,
    Shopping
  },
  computed: {
    ...mapGetters(['items']),
    ...mapGetters(['money'])
  }
}
</script>

<style lang="scss">
  body {
    margin: 0px;
    display: grid;
    font-family: Roboto,sans-serif;
    color: rgb(51, 51, 51);
    font-weight: bold;
    .app {
      background-color: rgb(239, 241, 245);
      min-height: 100%;
      min-height: 100vh;
      .app__components {
        width: 50%;
        margin: 0 auto;
        margin-top: 25px;
        margin-bottom: 25px;
        .app__components__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          justify-items: center;
          align-items: center;
          justify-items: stretch;
          align-items: stretch;
          grid-gap: 10px;
          .app__components__grid__items {
            background-color:  rgb(255, 255, 255);;
            text-align: center;
            padding: 20px 15px;
            font-size: 30px;
            .app__components__grid__items__item {
              .app__components__grid__items__item__img {
                height:150px;
                width:150px;
                overflow:hidden;
                margin: 0 auto;
                img {
                  width:100%;
                }
              }
              .app__components__grid__items__item__description {
                margin-bottom: 20px;
                .app__components__grid__items__item__description__name {
                  font-size: 22px;
                  margin: 2px;
                }
                .app__components__grid__items__item__description__price {
                  font-size: 19px;
                  color: rgb(46, 204, 113);
                  margin: 2px;
                }
              }
              .app__components__grid__items__item__buttons {
                font-size: 20px;
                font-weight: bold;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                margin-top: 25px;
                gap: 10px;
                button {
                  border-width: initial;
                  border-style: none;
                  border-color: initial;
                  border-image: initial;
                  touch-action: manipulation;
                  user-select: none;
                  padding: 9px 12px;
                  border-radius: 3px;
                  font-size: 16px;
                  cursor: pointer;
                  text-align: center;
                }
                .app__components__grid__items__item__buttons__sell {
                  background-color: rgb(245, 59, 87);
                  color: rgb(255, 255, 255);
                  &:disabled {
                    color: rgb(51, 51, 51);
                    cursor: auto;
                    background-color: rgb(241, 242, 246) !important;
                  }
                }
                input{
                  max-width: 100px;
                  text-align: center;
                  font-size: 16px;
                  padding: 9px 12px;
                  border-radius: 3px;
                  border-width: 1px;
                  border-style: solid;
                  border-color: rgb(178, 190, 195);
                  border-image: initial;
                }
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                  }
                .app__components__grid__items__item__buttons__buy {
                  background-color: rgb(5, 196, 107);
                  color: white;
                  &:disabled {
                    color: rgb(51, 51, 51);
                    cursor: auto;
                    background-color: rgb(241, 242, 246) !important;
                  }
                }
              } 
            } 
          }
        }
      }
    }
  }

   @media (max-width: 1700px) {
     body > .app > .app__components {
      width: 70%;
    }
  }

  @media (max-width: 1220px) {
    body > .app > .app__components {
      width: 98%;
    }
  }

  @media (max-width: 1000px) {
    body > .app > .app__components > .app__components__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 630px) {
    body > .app > .app__components > .app__components__grid  {
      grid-template-columns: repeat(1, 100%);
    }
  }
</style>
