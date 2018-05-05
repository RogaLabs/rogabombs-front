<template>
  <div class="shame">
    <card-header :img="img" subtitle="Maio/2018" title="Hall da Vergonha" />

    <div class="players">
      <div class="player" v-for="player in players" :key="player.id">
        <v-avatar size=65>
          <img :src="player.img" :alt="player.name">
        </v-avatar>
        <span class="player-name">{{ player.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import ShameIcon from '@/assets/images/dashboard/shame-icon.png';
import CardHeader from './CardHeader';

export default {
  name: 'card-hall-of-shame',
  components: {
    CardHeader,
  },
  data() {
    return {
      img: ShameIcon,
      players: [
        {
          img: 'http://via.placeholder.com/65x65',
          name: 'Negão do zap',
        },
        {
          img: 'http://via.placeholder.com/65x65',
          name: 'Negão do zap',
        },
        {
          img: 'http://via.placeholder.com/65x65',
          name: 'Negão do zap',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.shame {
  padding: 1em 2em;
  border-radius: 15px;
  box-shadow: 5px 5px rgba(#000000, 0.16);
  font-weight: bold;
  background: #ffffff;
  grid-area: shame;
}

.players {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
}

.player {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.avatar {
  margin-bottom: 1em;
}

.player-name {
  color: #2f2f2f;
}
</style>
