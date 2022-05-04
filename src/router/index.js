import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue"
import ProjectsView from "../views/ProjectsView.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/about",
    name : "about",
    component: AboutView
  },
  {
    path:"/projects",
    name: "projects",
    component: ProjectsView
  },
  {
    path:"/github",
    beforeEnter(){
      location.href = 'https://github.com/ceaiius';
    }
  },
  {
    path:"/facebook",
    beforeEnter(){
      location.href = 'https://www.facebook.com/ceaiius';
    }
  },
  {
    path:"/linkedin",
    beforeEnter(){
      location.href = 'https://www.linkedin.com/in/nikoloz-mamaladze-51b035213/';
    }
  },
  {
    path:"/twitter",
    beforeEnter(){
      location.href = 'https://twitter.com/NikaMamaladze6';
    }
  },
  {
    path:"/redberry",
    beforeEnter(){
      location.href = "https://github.com/ceaiius/Redberry";
    }
  },
  {
    path:"/search",
    beforeEnter(){
      location.href = 'https://github.com/ceaiius/Github-Search';
    }
  },
  {
    path:"/movies",
    beforeEnter(){
      location.href = 'https://github.com/ceaiius/VueMovies';
    }
  },
  {
    path:"/weather",
    beforeEnter(){
      location.href = 'https://github.com/ceaiius/weather';
    }
  }
  ,
  {
    path:"/notes",
    beforeEnter(){
      location.href = 'https://github.com/ceaiius/Keeper';
    }
  },
  {
    path:"/game",
    beforeEnter(){
      location.href = 'https://github.com/ceaiius/SimonSays';
    }
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
