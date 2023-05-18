<template>
  <v-container>
    <v-navigation-drawer expand-on-hover rail>
      <v-list>
        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/john-smirk.png"
          title="Sandra Adams"
          subtitle="sandra_a88@gmailcom"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-newspaper-variant"
          title="News"
          value="color"
          @click="isWithColor"
          to="/home"
        ></v-list-item>
        <v-list-item
          prepend-icon=" mdi-account"
          title="Profile"
          value="grey"
          @click="isgray"
          to="/Profile"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>
