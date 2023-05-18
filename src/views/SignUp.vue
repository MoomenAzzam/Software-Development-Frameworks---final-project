<template>
  <div class="main">
    <div
      class="mx-auto text-center mt-5 pa-5 bg-blue-grey-lighten-5 rounded-lg signIn"
    >
      <form @submit.prevent="submit">
        <h1 class="my-4">SignUp</h1>
        <v-avatar class="my-avatar x-large mb-4" size="80">
          <v-img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          ></v-img>
        </v-avatar>
        <v-text-field
          v-model="name"
          label="Name"
          append-inner-icon="mdi-account"
          variant="outlined"
          :rules="[rules.required]"
          type="text"
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="Email"
          append-inner-icon="mdi-email"
          variant="outlined"
          type="email"
          :rules="[emailValidationRule]"
        ></v-text-field>
        <v-text-field
          v-model="phone"
          label="Phone"
          :rules="[numberValidationRule]"
          append-inner-icon="mdi-phone"
          variant="outlined"
          type="text"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
          @click:append-inner="show1 = !show1"
          variant="outlined"
        ></v-text-field>
        <!--  -->
        <v-combobox
          label="News"
          v-model="favorite"
          :items="['رياضة', 'الجنايات', 'مجتمع']"
          multiple
        ></v-combobox>
        <!--  -->
        <v-btn
          class="me-4 mt-4 bg-blue"
          type="button"
          variant="outlined"
          @click="SignUpNow"
        >
          SignUp
        </v-btn>
        <router-link to="/signin">
          <v-btn class="me-4 mt-4 bg-green" type="button" variant="outlined">
            Go To signIn
          </v-btn>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUpPage",

  data() {
    return {
      show1: false,
      name: "",
      email: "",
      phone: "",
      password: "",
      favorite: [],
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
    };
  },

  methods: {
    async SignUpNow() {
      const newsString = this.favorite.join(",");
      // post data for registration new user
      try {
        let result = await axios.post("http://localhost:8000/users/regester", {
          name: this.name,
          email: this.email,
          phone: this.phone,
          password: this.password,
          favorite: newsString,
        });
        console.log(result.data.data._id);
        if (result.status == 201) {
          console.log("added user new user");
          localStorage.setItem("user-id", result.data.data._id);

          this.$router.push({ name: "news" });
          // redirect to home page
        } else {
          console.log("Error on added new user");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>
.main {
  position: relative;
  top: 480px;
}
.signIn {
  width: 350px;
  position: absolute;
  top: -450px;
  left: 50%;
  transform: translatex(-50%);
}
.my-avatar.x-large {
  height: 80px;
  width: 80px;
}
</style>
