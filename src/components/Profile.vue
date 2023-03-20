<template>
  <div class="main">
    <SideBar />
    <div
      class="w-25 mx-auto text-center mt-5 pa-5 bg-blue-grey-lighten-5 rounded-lg signIn"
    >
      <form @submit.prevent="submit">
        <h1 class="my-4">Profile</h1>
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
          type="text"
          disabled
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="Email"
          append-inner-icon="mdi-email"
          variant="outlined"
          type="email"
          disabled
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
          disabled
        ></v-text-field>
        <!--  -->
        <v-combobox
          disabled
          label="Combobox"
          :items="['News', 'Policy', 'Economy', 'culture', 'sports', 'art']"
          multiple
        ></v-combobox>
        <!--  -->
        <v-btn class="me-4 mt-4 bg-blue" type="submit" variant="outlined">
          Update
        </v-btn>
      </form>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  name: "ProfilePage",

  data() {
    return {
      show1: false,
      show2: true,
      name: "Mohammed Azzam",
      email: "mohammedAzm123@gmail.com",
      password: "123456789",
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
