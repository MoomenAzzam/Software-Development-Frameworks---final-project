<template>
  <v-app>
    <v-main>
      <!-- <SideBar /> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
html,
body {
  direction: rtl;
}
</style>
