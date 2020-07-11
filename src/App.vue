<template>
  <div id="app">
    <NavBar /> 
     <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar"
export default {
  name: "App",
  components: {
    NavBar
  },
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

