<template>
  <div class="main">
    <div
      class="mx-auto text-center mt-5 pa-5 bg-blue-grey-lighten-5 rounded-lg signIn"
    >
      <form @submit.prevent="submit">
        <h1 class="my-4">Sign In</h1>
        <v-avatar class="my-avatar x-large mb-4" size="80">
          <v-img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          ></v-img>
        </v-avatar>
        <v-text-field
          v-model="email"
          label="Email"
          append-inner-icon="mdi-email"
          variant="outlined"
          type="email"
          :rules="[rules.required]"
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
        <!--  -->
        <v-btn
          class="me-4 mt-4 bg-green"
          type="button"
          variant="outlined"
          @click="lgoinNow"
        >
          Sign In
        </v-btn>
        <br />
        <router-link to="/signup">
          <v-btn class="me-4 mt-4 bg-blue" type="button" variant="outlined">
            Go To SignUp
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
      email: "",
      password: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
    };
  },

  methods: {
    async lgoinNow() {
      try {
        let result = await axios.post(`http://localhost:8000/users/login`, {
          email: this.email,
          password: this.password,
        });
        console.log(result.data);
        if (result.status == 201) {
          console.log("user is login");
          localStorage.setItem("user-id", result.data.data._id);
          // redirect to home page
          this.$router.push({ name: "news" });
        } else {
          console.log("User not found");
          // this.ErrorUserNotFound = "User not found";
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
