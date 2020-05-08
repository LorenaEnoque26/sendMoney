import bigmac from "@/assets/images/items/bigmac.png"
import cupofcoffe from "@/assets/images/items/cupofcoffe.png"
import book from "@/assets/images/items/book.png"
import videogame from "@/assets/images/items/videogame.png"
import charity from "@/assets/images/items/charity.png"
import headphones from  "@/assets/images/items/headphones.png"
import airjordans from "@/assets/images/items/airjordans.png"
import skateboard from "@/assets/images/items/skateboard.png"
import smartphone from "@/assets/images/items/smartphone.png"
import gamingconsole from "@/assets/images/items/gamingconsole.png"
import bike from "@/assets/images/items/bike.png"
import drone from "@/assets/images/items/drone.png"
import handbag from "@/assets/images/items/handbag.png"
import jetski from "@/assets/images/items/jetski.png"
import tv from "@/assets/images/items/tv.png"
import ring from "@/assets/images/items/ring.png"
import rolex from "@/assets/images/items/rolex.png"
import speedboat from "@/assets/images/items/speedboat.png"
import foodtruck from "@/assets/images/items/foodtruck.png"
import tesla from "@/assets/images/items/tesla.png"
import monstertruck from "@/assets/images/items/monstertruck.png"
import helicopter from "@/assets/images/items/helicopter.png"
import ferrari from "@/assets/images/items/ferrari.png"
import lamborghini from "@/assets/images/items/lamborghini.png"
import firetruck from "@/assets/images/items/firetruck.png"
import townhouse from "@/assets/images/items/townhouse.png"
import bar from "@/assets/images/items/bar.png"
import pizzashop from "@/assets/images/items/pizzashop.png"
import barofgold from "@/assets/images/items/barofgold.png"
import superbowlad from "@/assets/images/items/superbowlad.png"
import beachhouse from "@/assets/images/items/beachhouse.png"
import yacht from "@/assets/images/items/yacht.png"
import f16 from "@/assets/images/items/f16.png"
import skyscraper from "@/assets/images/items/skyscraper.png"
import mansion from "@/assets/images/items/mansion.png"
import rocket from "@/assets/images/items/rocket.png"
import passengerjet from "@/assets/images/items/passengerjet.png"
import monalisa from "@/assets/images/items/monalisa.png"
import cruiseship from "@/assets/images/items/cruiseship.png"
import nba from "@/assets/images/items/nba.png"
import mlb from "@/assets/images/items/mlb.png"
import nfl from "@/assets/images/items/nfl.png"

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      { id:'0', name:'Big Mac', price:'2', image: bigmac, count: 0 },
      { id:'1', name:'Cup of Coffe', price:'4', image: cupofcoffe, count: 0 },
      { id:'2', name:'Book', price:'15', image: book, count: 0 },
      { id:'3', name:'Video Game', price:'60', image: videogame, count: 0 },
      { id:'4', name:'Charity', price:'100', image: charity, count: 0 },
      { id:'5', name:'Headphones', price:'200', image: headphones, count: 0 },
      { id:'6', name:'Air Jordans', price:'200', image: airjordans, count: 0 },
      { id:'7', name:'Skateboard', price:'300', image: skateboard, count: 0 },
      { id:'8', name:'Smartphone', price:'600', image: smartphone, count: 0 },
      { id:'9', name:'Gaming Console', price:'600', image: gamingconsole, count: 0 },
      { id:'10', name:'Bike', price:'800', image: bike, count: 0 },
      { id:'11', name:'Drone', price:'800', image: drone, count: 0 },
      { id:'12', name:'Designer Handbag', price:'1.000', image: handbag, count: 0 },
      { id:'13', name:'Jet Ski', price:'8000', image: jetski, count: 0 },
      { id:'14', name:'4K TV', price:'10000', image: tv, count: 0 },
      { id:'15', name:'Diamond Ring', price:'10000', image: ring, count: 0 },
      { id:'16', name:'Rolex', price:'15000', image: rolex, count: 0 },
      { id:'17', name:'Speed boat', price:'30000', image: speedboat, count: 0 },
      { id:'18', name:'Food Truck', price:'50000', image: foodtruck, count: 0 },
      { id:'19', name:'Tesla', price:'70000', image: tesla, count: 0 },
      { id:'20', name:'Monster Truck', price:'150000', image: monstertruck, count: 0 },
      { id:'21', name:'Helicopter', price:'175000', image: helicopter, count: 0 },
      { id:'22', name:'Ferrari', price:'200000', image: ferrari, count: 0 },
      { id:'23', name:'Lamborghini', price:'200000', image: lamborghini, count: 0 },
      { id:'24', name:'Firetruck', price:'200000', image: firetruck, count: 0 },
      { id:'25', name:'Townhouse', price:'200000', image: townhouse, count: 0 },
      { id:'26', name:'Bar', price:'300000', image: bar, count: 0 },
      { id:'27', name:'Pizza Shop', price:'500000', image: pizzashop, count: 0 },
      { id:'28', name:'Bar of Gold', price:'500000', image: barofgold, count: 0 },
      { id:'29', name:'Superbowl Ad', price:'5000000', image: superbowlad, count: 0 },
      { id:'30', name:'Beach House', price:'5000000', image: beachhouse, count: 0 },
      { id:'31', name:'Yacht', price:'1000000', image: yacht, count: 0 },
      { id:'32', name:'F16', price:'15000000', image: f16, count: 0 },
      { id:'33', name:'Skyscraper', price:'50000000', image: skyscraper, count: 0 },
      { id:'34', name:'Mansion', price:'50000000', image: mansion, count: 0 },
      { id:'35', name:'Rocket', price:'60000000', image: rocket, count: 0 },
      { id:'36', name:'Passenger Jet', price:'150000000', image: passengerjet, count: 0 },
      { id:'37', name:'Mona Lisa', price:'780000000', image: monalisa, count: 0 },
      { id:'38', name:'Cruise Ship', price:'1200000000', image: cruiseship, count: 0 },
      { id:'39', name:'NBA Team', price:'1300000000', image: nba, count: 0 },
      { id:'40', name:'MLB Team', price:'1500000000', image: mlb, count: 0 },
      { id:'41', name:'NFL Team', price: '2300000000', image: nfl, count: 0 }
    ],
    money: 0,
    initialMoney: '90000000000'
  },
 getters: {
    'items': state => state.items,
    'money': state => {
      let totalValue = state.initialMoney
      state.items.forEach(item => {
        if(item.count > 0) {
          totalValue -= ( item.count * item.price )
        }
      })
      state.money = totalValue
      return state.money
    }
  },
  mutations: {

  },
  actions: {

  }
})
