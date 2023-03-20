<template>
  <div class="main">
    <SideBar />
    <div
      class="w-25 mx-auto text-center mt-5 pa-5 bg-blue-grey-lighten-5 rounded-lg signIn"
    >
      <form @submit.prevent="submit">
        <h1 class="my-4">Sign Up</h1>
        <v-avatar class="my-avatar x-large mb-4" size="80">
          <v-img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          ></v-img>
        </v-avatar>
        <v-text-field
          label="Name"
          append-inner-icon="mdi-account"
          variant="outlined"
          type="text"
        ></v-text-field>
        <v-text-field
          label="Email"
          append-inner-icon="mdi-email"
          variant="outlined"
          type="email"
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
          label="Combobox"
          :items="['News', 'Policy', 'Economy', 'culture', 'sports', 'art']"
          multiple
        ></v-combobox>
        <!--  -->
        <v-btn class="me-4 mt-4 bg-green" type="submit" variant="outlined">
          Sign Up
        </v-btn>
      </form>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  name: "SignUpPage",

  data() {
    return {
      show1: false,
      show2: true,
      password: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
        select: ["Vuetify", "Programming"],
        items: ["Programming", "Design", "Vue", "Vuetify"],
      },
    };
  },
  components: {
    SideBar,
  },
};
</script>
<style>
.main {
  position: relative;
  top: 480px;
}
.signIn {
  position: absolute;
  top: 50px;
}
.my-avatar.x-large {
  height: 80px;
  width: 80px;
}
</style>
