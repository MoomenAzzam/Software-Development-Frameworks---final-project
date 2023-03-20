<template>
  <div>
    <SideBar />
    <container>
      <h1 class="text-center pb-3">News</h1>
      <v-container class="news">
        <v-container>
          <h2
            class="mx-3 bg-grey-darken-4 text-white pa-2 pl-4 mb-4 rounded-lg"
          >
            sports
          </h2>
          <v-row no-gutters>
            <v-col v-for="n in 5" :key="n" cols="12" sm="4">
              <div class="py-3">
                <v-card class="mx-3" max-width="400">
                  <v-img
                    class="align-end text-white"
                    height="200"
                    :src="`https://picsum.photos/500/300?image=${n * 4 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 4 + 10}`"
                    cover
                  >
                    <v-card-title
                      >Main Title Main Title Main Title Main Title Main Title
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pt-4">6-3-2023 </v-card-subtitle>

                  <v-card-text>
                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Molestias, consequatur! Voluptatum veniam mollitia,
                      doloremque aspernatur officia quasi, adipisci pariatur
                      esse unde sint nobis, accusamus temporibus nemo corporis
                      rerum ea accusantium.
                    </div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn color="green"> Share </v-btn>

                    <v-btn color="red"> Favorite </v-btn>
                  </v-card-actions>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
      <v-container class="news">
        <v-container>
          <h2
            class="mx-3 bg-grey-darken-4 text-white pa-2 pl-4 mb-4 rounded-lg"
          >
            sports
          </h2>
          <v-row no-gutters>
            <v-col v-for="n in 5" :key="n" cols="12" sm="4">
              <div class="py-3">
                <v-card class="mx-3" max-width="400">
                  <v-img
                    class="align-end text-white"
                    height="200"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    cover
                  >
                    <v-card-title>Main Title</v-card-title>
                  </v-img>

                  <v-card-subtitle class="pt-4">6-3-2023 </v-card-subtitle>

                  <v-card-text>
                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Molestias, consequatur! Voluptatum veniam mollitia,
                      doloremque aspernatur officia quasi, adipisci pariatur
                      esse unde sint nobis, accusamus temporibus nemo corporis
                      rerum ea accusantium.
                    </div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn color="green"> Share </v-btn>

                    <v-btn color="red"> Favorite </v-btn>
                  </v-card-actions>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </container>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  name: "newsComp",
  components: {
    SideBar,
  },
};
</script>

<style></style>
