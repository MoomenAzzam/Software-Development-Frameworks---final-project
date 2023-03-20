<template>
  <div>
    <SideBar />
    <v-container>
      <v-row>
        <v-col cols="9">
          <div class="py-3">
            <v-card class="" :elevation="20">
              <v-img
                class="align-end text-white"
                :src="`https://picsum.photos/500/300?image=${3}`"
                :lazy-src="`https://picsum.photos/10/6?image=${40}`"
                cover
              >
                <v-card-title
                  >Main Title Main Title Main Title Main Title Main Title Main
                  Title Main Title Main Title Main Title Main Title
                </v-card-title>
              </v-img>

              <v-card-subtitle class="pt-4">6-3-2023 </v-card-subtitle>

              <v-card-text class="pa-5">
                <h2 class="py-5">secundery title</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestias, consequatur! Voluptatum veniam mollitia, doloremque
                  aspernatur officia quasi, adipisci pariatur esse unde sint
                  nobis, accusamus temporibus nemo corporis rerum ea
                  accusantium. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Molestias, consequatur! Voluptatum veniam
                  mollitia, doloremque aspernatur officia quasi, adipisci
                  accusantium. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Molestias, consequatur! Voluptatum veniam
                  mollitia, doloremque aspernatur officia quasi, adipisci
                  pariatur esse unde sint nobis, accusamus temporibus nemo
                  corporis rerum ea accusantium.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestias, consequatur! Voluptatum veniam mollitia, doloremque
                  aspernatur officia quasi, adipisci pariatur esse unde sint
                  Molestias, consequatur! Voluptatum veniam mollitia, doloremque
                  aspernatur officia quasi, adipisci pariatur esse unde sint
                  Molestias, consequatur! Voluptatum veniam mollitia, doloremque
                  aspernatur officia quasi, adipisci pariatur esse unde sint
                  nobis, accusamus temporibus nemo corporis rerum ea
                  accusantium.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestias, consequatur! Voluptatum veniam mollitia, doloremque
                  aspernatur officia quasi, adipisci pariatur esse unde sint
                  nobis, accusamus temporibus nemo corporis rerum ea Molestias,
                  consequatur! Voluptatum veniam mollitia, doloremque aspernatur
                  officia quasi, adipisci pariatur esse unde sint nobis,
                  accusamus temporibus nemo corporis rerum ea Molestias,
                  consequatur! Voluptatum veniam mollitia, doloremque aspernatur
                  officia quasi, adipisci pariatur esse unde sint nobis,
                  accusamus temporibus nemo corporis rerum ea accusantium.
                </p>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  name: "NewsDitales",
  components: {
    SideBar,
  },
};
</script>

<style>
h2 {
  font-size: 24px;
}
p {
  line-height: 1.8;
  font-size: 16px;
}
</style>
