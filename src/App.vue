<template>
  <v-app>
    <v-main>
      <!-- <SideBar /> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import SideBar from "../src/components/SideBar.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),
  // components: {
  //   SideBar,
  // },
};
</script>
