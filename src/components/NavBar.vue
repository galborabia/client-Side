<template>
    <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item ><router-link :to="{ name: 'Home' }">Home</router-link></b-nav-item>
        <b-nav-item ><router-link :to="{ name: 'Search' }">Search</router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" type="dark">
        <b-nav-item ><router-link :to="{ name: 'Register' }" right>Register</router-link></b-nav-item>
        <b-nav-item ><router-link :to="{ name: 'Login' }" right>Login</router-link></b-nav-item>
        <b-nav-item ><router-link :to="{ name: 'Home' }" right>Logout</router-link></b-nav-item>
        <b-nav-item-dropdown text="Profile" right>
        <b-dropdown-item ><router-link :to="{ name: 'Register' }" right>Personal recipes</router-link></b-dropdown-item>
        <b-dropdown-item ><router-link :to="{ name: 'Register' }" right>Family recipes</router-link></b-dropdown-item>
        <b-dropdown-item ><router-link :to="{ name: 'Register' }" right>Favorites recipes</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style>

</style>