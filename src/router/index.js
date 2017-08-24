import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Home from '../pages/home/home'
import Audio from '../pages/audio/audio'
import Broadcast from '../pages/broadcast/broadcast'
import Group from '../pages/group/group'
import Mine from '../pages/mine/mine'
import Movie from "../pages/audio/movie"
import Read from "../pages/audio/read"
import Tv from "../pages/audio/tv"
import City from "../pages/audio/city"
import Music from "../pages/audio/music"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio,
      children:[
        {
          path:"/audio",
          component:Movie
        },
        {
          path:"movie",
          name:"Movie",
          component:Movie
        },
        {
          path:"read",
          name:"Read",
          component:Read
        },
        {
          path:"tv",
          name:"Tv",
          component:Tv
        },
        {
          path:"city",
          name:"City",
          component:City
        },
        {
          path:"music",
          name:"Music",
          component:Music
        },
      ]
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
  ]
})
