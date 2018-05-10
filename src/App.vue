<template>
  <v-app>
    <v-toolbar class="header-navigation -transparent">
      <v-toolbar-items v-for="screen in screens" :key="screen.id">
        <v-btn class="link" flat route :to="{ path: screen.url }">
          <img class="icon" :src="screen.icon">
          <span class="text">{{ screen.title }}</span>
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <img class="logo" :src="logo" alt="Logo">
    </v-toolbar>

    <v-layout fluid>
      <router-view/>
    </v-layout>
  </v-app>
</template>

<script>
import logo from '@/assets/images/roga-logo.png';
import dashboardIcon from '@/assets/images/navigation/dashboard-icon.png';
import playerIcon from '@/assets/images/navigation/player-icon.png';
import matchIcon from '@/assets/images/navigation/match-icon.png';

export default {
  name: 'App',
  data() {
    return {
      logo,
      screens: [
        { id: '1', icon: dashboardIcon, title: 'Painel', url: '/' },
        { id: '2', icon: playerIcon, title: 'Jogadores', url: '/players' },
        { id: '3', icon: matchIcon, title: 'Partidas', url: '/matches' },
      ],
    };
  },
};
</script>

<style lang="scss">
body {
  background-image: url('./assets/images/app-background.jpg');
  background-size: cover;
}

.application {
  &.theme--light {
    background: none;
    max-width: 1040px;
    margin: 0 auto;
  }
}

.header-navigation {
  &.-transparent {
    padding: 2rem 0;
    background-color: transparent;
    box-shadow: none;
  }

  .logo {
    box-shadow: 5px 5px 0 rgba(#000, .15);
  }

  .link {
    font-size: 2rem;
    color: #fff;
    text-shadow: 3px 3px 0 #000;
    text-transform: none;

    .icon {
      margin-right: 1rem;
    }

    &.btn--active {
      & {
        background-color: transparent;
      }

      .text {
        position: relative;

        &:after {
          position: absolute;
          bottom: -2px;
          left: 0;
          display: block;
          content: "";
          width: 100%;
          height: 4px;
          background: #fff;
          box-shadow: 3px 3px 0 #000;
        }
      }
    }
  }
}
</style>
