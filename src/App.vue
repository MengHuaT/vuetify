<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />

        <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-card style="margin: 20px;">
        <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1"></v-data-table>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
 import { getAllData } from '../src/api/api';
// import axios from "axios";

export default {
  data() {
    return {
      headers: [
        {
          text: "序号",
          align: "start",
          sortable: false,
          value: "id"
        },
        { text: "职位", value: "jobtitle" },
        { text: "地址", value: "address" },
        { text: "公司名称", value: "companyName" },
        { text: "薪资", value: "salary" },
        { text: "福利", value: "note" }
      ],
      desserts: []
    };
  },
  mounted() {
    this.getData1();
  },
  methods: {
    getData1() {
      getAllData().then(
        response => {
          console.log(response.data);
          this.desserts = response.data;
        },
        error => {  
          console.log(error);
        }
      );
    }
  }
};
</script>
<style scoped></style>