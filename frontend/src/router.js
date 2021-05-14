import Vue from "vue";
import Router from "vue-router";
import Login from './components/Login.vue';
import Register from './components/Register.vue';

Vue.use(Router);

var router = new Router({
  mode: "history",
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./components/Profile.vue')
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("./Admin")
    },
    {
      path: "/myportfolio",
      name: "myportfolio",
      component: () => import("./MyPortFolio")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./components/AddContact")
    },
    {
      path: "/tasks/:experienceId",
      name: "add task",
      component: () => import("./components/AddTask")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddExperience")
    },
    {
      path: "/add_project",
      name: "add_project",
      component: () => import("./components/AddProject")
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("./components/ProjectsList")
    },
    {
      path: "/educations",
      name: "educations",
      component: () => import("./components/EducationsList")
    },
    {
      path: "/add_education",
      name: "add_education",
      component: () => import("./components/AddEducation")
    },
  ]
})

router.beforeEach((to, from, next) => {
  const privatePages = ['/admin'];
  const authRequired = privatePages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;