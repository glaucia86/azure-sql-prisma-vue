<template>
  <v-app>
    <v-app-bar app color="purple" elevation="24" outlined dark>
      <div class="d-flex align-center mr-2">
        Full Stack App - Azure SQL Server + Prisma
      </div>

      <v-spacer></v-spacer>
    <v-btn to="/" text>
      <span class="mr-2">Create New Employee</span>
      <v-icon>mdi-account-multiple-plus-outline</v-icon>
    </v-btn>

    <v-btn to="/list-employees" text>
      <span class="mr-2">List All Employees</span>
      <v-icon>mdi-account-search-outline</v-icon>
    </v-btn>
  </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
