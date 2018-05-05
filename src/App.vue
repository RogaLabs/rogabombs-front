<template>
  <v-app>
    <v-toolbar>
      <v-spacer></v-spacer>
      <v-toolbar-items v-for="screen in screens" :key="screen.id">
        <v-btn flat route :to="{ path: screen.url }">{{ screen.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-layout fluid>
      <router-view/>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      screens: [
        { id: '1', title: 'Painel', url: '/' },
        { id: '2', title: 'Jogadores', url: '/players' },
        { id: '3', title: 'Partidas', url: '/matches' },
      ],
    };
  },
};
</script>

<style>
body {
  background-image: url('./assets/images/app-background.jpg');
  background-size: cover;
}

#app {
  background: none;
  max-width: 1040px;
  margin: 0 auto;
}
</style>
