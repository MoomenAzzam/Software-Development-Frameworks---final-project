<template>
  <div class="main">
    <SideBar />
    <v-btn class="bg-red logout" type="button" variant="outlined">
      logout
    </v-btn>
    <div
      class="w-mx-auto text-center mt-5 pa-5 bg-blue-grey-lighten-5 rounded-lg signIn"
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
          :disabled="!isInputEnabled"
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="Email"
          append-inner-icon="mdi-email"
          variant="outlined"
          type="email"
          :disabled="!isInputEnabled"
        ></v-text-field>
        <v-text-field
          v-model="phone"
          label="Phone"
          :rules="[numberValidationRule]"
          append-inner-icon="mdi-phone"
          variant="outlined"
          type="text"
          :disabled="!isInputEnabled"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="New Password"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
          @click:append-inner="show1 = !show1"
          variant="outlined"
          :disabled="!isInputEnabled"
        ></v-text-field>
        <!--  -->
        <v-combobox
          label="News"
          v-model="favorite"
          :items="['رياضة', 'الجنايات', 'مجتمع']"
          multiple
          :disabled="!isInputEnabled"
        ></v-combobox>
        <!--  -->
        <v-btn
          class="me-4 mt-4 bg-blue"
          type="submit"
          variant="outlined"
          v-model="buttonText"
          @click="enableInput()"
          v-show="!isInputEnabled"
        >
          Update
        </v-btn>
        <v-btn
          class="me-4 mt-4 bg-blue"
          type="submit"
          variant="outlined"
          v-model="buttonText"
          v-show="isInputEnabled"
          @click="saveNewData()"
        >
          Save
        </v-btn>
      </form>
      <h3 v-show="errorrMessag" class="bg-red mt-3">{{ errorrMessag }}</h3>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import axios from "axios";
export default {
  name: "ProfilePage",

  data() {
    return {
      show1: false,
      show2: true,
      userId: "",
      name: "",
      email: "",
      password: "",
      favorite: "",
      errorrMessag: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email you entered don't match`,
      },
      isInputEnabled: false,
      buttonText: "Update",
    };
  },
  components: {
    SideBar,
  },
  methods: {
    enableInput() {
      this.isInputEnabled = true;
      this.buttonText = "Save";
    },
    async saveNewData() {
      // Handle saving input logic here
      console.log("data saved");
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
          console.log("updated user new user");
          localStorage.setItem("user-id", result.data.data._id);

          this.$router.push({ name: "news" });
          // redirect to home page
        } else {
          console.log("Error on update new user");
          this.errorrMessag = "Error on update new user";
        }
      } catch (err) {
        console.log(err);
        console.log("Error on update new user");
        this.errorrMessag = "Error on update new user";
      }
    },
  },
  async mounted() {
    this.userId = localStorage.getItem("user-id");
    console.log(this.userId);
    if (!this.userId) {
      this.$router.push({ name: "SignIn" });
    }
    // **************** get data****************
    const result = await axios.get(
      `http://localhost:8000/users/profile/${this.userId}`
    );
    if (result.status) {
      console.log(result.data.data);
      const data = result.data.data;
      this.name = data.name;
      this.email = data.email;
      this.phone = data.phone;
    }
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
.logout {
  position: absolute;
  top: -445px;
  right: 50px;
}
</style>
