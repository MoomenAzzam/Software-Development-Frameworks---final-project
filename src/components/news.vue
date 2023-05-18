<template>
  <div>
    <SideBar />
    <container>
      <h1 class="text-center pb-3">الأخبار</h1>
      <div v-for="cate of category" :key="cate">
        <v-container class="news">
          <v-container>
            <h2
              class="mx-3 bg-grey-darken-4 text-white pa-2 pl-4 mb-4 rounded-lg"
            >
              {{ cate }}
            </h2>
            <v-row no-gutters>
              <v-col v-for="n in listOfNews[cate]" :key="n" cols="12" sm="4">
                <router-link
                  :to="{
                    name: 'NewsDitales',
                    params: { newsLink: n.link },
                  }"
                >
                  <div class="py-3 card">
                    <v-card class="mx-3" max-width="400" elevation="10">
                      <v-img
                        class="align-end text-white"
                        height="200"
                        :src="`${n.img}`"
                        :lazy-src="`${n.img}`"
                        cover
                      >
                        <v-card-title class="titel bg-grey-lighten-2"
                          >{{ n.data }}
                        </v-card-title>
                      </v-img>
                    </v-card>
                  </div>
                </router-link>
              </v-col>
            </v-row>
          </v-container>
        </v-container>
      </div>
    </container>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import axios from "axios";
export default {
  name: "newsComp",
  data() {
    return {
      listOfNews: {},
      category: ["رياضة", "جريمة", "مجتمع"],
      data: {},
      userId: "",
    };
  },
  components: {
    SideBar,
  },
  async mounted() {
    this.userId = localStorage.getItem("user-id");
    if (!this.userId) {
      this.$router.push({ name: "SignIn" });
    }
    // *******************get data to diplay it**************************
    let result = await axios.get(`http://localhost:8000/main`);

    if (result.status == 201) {
      this.listOfNews = result.data;
      // const arr = Object.entries(this.listOfNews);
      // console.log(arr["رياضة"]);
      // arr.forEach((element) => {
      //   // console.log(element["جريمة"]);
      //   // if (element[0].includes(this.category)) {
      //   //   console.log(element);
      //   // }
      // });
    } else {
      console.log("no data");
    }
  },
};
</script>

<style>
body,
html {
  text-align: right;
}
.card {
  cursor: pointer;
}
.v-card-title {
  white-space: wrap !important;
}
</style>
