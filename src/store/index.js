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
      { name:'Big Mac', price:'2', image: bigmac, count: 0 },
      { name:'Cup of Coffe', price:'4', image: cupofcoffe, count: 0 },
      { name:'Book', price:'15', image: book, count: 0 },
      { name:'Video Game', price:'60', image: videogame, count: 0 },
      { name:'Charity', price:'100', image: charity, count: 0 },
      { name:'Headphones', price:'200', image: headphones, count: 0 },
      { name:'Air Jordans', price:'200', image: airjordans, count: 0 },
      { name:'Skateboard', price:'300', image: skateboard, count: 0 },
      { name:'Smartphone', price:'600', image: smartphone, count: 0 },
      { name:'Gaming Console', price:'600', image: gamingconsole, count: 0 },
      { name:'Bike', price:'800', image: bike, count: 0 },
      { name:'Drone', price:'800', image: drone, count: 0 },
      { name:'Designer Handbag', price:'1,000', image: handbag, count: 0 },
      { name:'Jet Ski', price:'8,000', image: jetski, count: 0 },
      { name:'4K TV', price:'10,000', image: tv, count: 0 },
      { name:'Diamond Ring', price:'10,000', image: ring, count: 0 },
      { name:'Rolex', price:'15,000', image: rolex, count: 0 },
      { name:'Speed boat', price:'30,000', image: speedboat, count: 0 },
      { name:'Food Truck', price:'50,000', image: foodtruck, count: 0 },
      { name:'Tesla', price:'70,000', image: tesla, count: 0 },
      { name:'Monster Truck', price:'150,000', image: monstertruck, count: 0 },
      { name:'Helicopter', price:'175,000', image: helicopter, count: 0 },
      { name:'Ferrari', price:'200,000', image: ferrari, count: 0 },
      { name:'Lamborghini', price:'200,000', image: lamborghini, count: 0 },
      { name:'Firetruck', price:'200,000', image: firetruck, count: 0 },
      { name:'Townhouse', price:'200,000', image: townhouse, count: 0 },
      { name:'Bar', price:'300,000', image: bar, count: 0 },
      { name:'Pizza Shop', price:'500,000', image: pizzashop, count: 0 },
      { name:'Bar of Gold', price:'500,000', image: barofgold, count: 0 },
      { name:'Superbowl Ad', price:'5,000,000', image: superbowlad, count: 0 },
      { name:'Beach House', price:'5,000,000', image: beachhouse, count: 0 },
      { name:'Yacht', price:'10,000,00', image: yacht, count: 0 },
      { name:'F16', price:'15,000,000', image: f16, count: 0 },
      { name:'Skyscraper', price:'50,000,000', image: skyscraper, count: 0 },
      { name:'Mansion', price:'50,000,000', image: mansion, count: 0 },
      { name:'Rocket', price:'60,000,000', image: rocket, count: 0 },
      { name:'Passenger Jet', price:'150,000,000', image: passengerjet, count: 0 },
      { name:'Mona Lisa', price:'780,000,000', image: monalisa, count: 0 },
      { name:'Cruise Ship', price:'1,200,000,000', image: cruiseship, count: 0 },
      { name:'NBA Team', price:'1,300,000,000', image: nba, count: 0 },
      { name:'MLB Team', price:'1,500,000,000', image: mlb, count: 0 },
      { name:'NFL Team', price:'2,300,000,000', image: nfl, count: 0 }
    ]
  },
 getters: {
    'items:getItems': state => state.items
  },
  mutations: {
  },
  actions: {
  }
})
