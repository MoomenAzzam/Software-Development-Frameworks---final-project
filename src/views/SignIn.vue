<template>
  <div
    class="w-25 mx-auto text-center mt-5 pa-5 bg-blue-grey-lighten-5 rounded-lg signIn"
  >
    <form @submit.prevent="submit">
      <h1 class="my-5">Sign In</h1>
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
      <v-btn class="me-4 mt-4 bg-green" type="submit" variant="outlined">
        Sign In
      </v-btn>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignInPage",

  data() {
    return {
      show1: false,
      show2: true,
      password: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
};
</script>
<style>
.signIn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
}
</style>
