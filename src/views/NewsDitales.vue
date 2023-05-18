<template>
  <div>
    <SideBar />
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="py-3">
            <v-card class="" :elevation="20">
              <v-img
                class="align-end text-white"
                :src="data.image"
                :lazy-src="data.image"
                cover
              >
                <v-card-title class="bg-grey-lighten-2"
                  >{{ data.title }}
                </v-card-title>
              </v-img>

              <v-card-text class="pa-5">
                <p>
                  {{ data.data }}
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
import axios from "axios";

export default {
  name: "NewsDitales",
  data() {
    return {
      data: "",
    };
  },
  components: {
    SideBar,
  },
  async mounted() {
    try {
      let result = await axios.get(
        `http://localhost:8000/getDatadetails?url=${this.$route.params.newsLink}`
      );
      if (result.status == 201) {
        console.log(result.data);
        this.data = result.data;
      }
    } catch (error) {
      console.log(error);
    }
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
