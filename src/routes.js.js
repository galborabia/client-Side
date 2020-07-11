import Home from "./pages/Home.vue";

export const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/Login",
        name: "Login",
        component: () => import ("./pages/Login.vue")
    },
    {
        path: "/Register",
        name: "Register",
        component: () => import ("./pages/Register.vue")
    },
    {
        path: "/recipe",
        name: "recipe",
        component: () => import ("./pages/Recipe.vue")
    },
    {
        path: "/Search",
        name: "Search",
        component: () => import ("./pages/Search.vue")
    },
    { path: "*", redirect: "/"}
];