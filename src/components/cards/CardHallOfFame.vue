<template>
  <div class="fame">
    <card-header
      :img="img"
      subtitle="Maio/2018"
      title="Hall da fama"
    />

    <div class="players">
      <div class="player" v-for="(player, index) in players" :key="player.id">
        <v-badge left :color="getColor(index)">
          <span slot="badge">{{ index + 1 }}</span>
          <v-avatar size=65>
            <img :src="player.img" :alt="player.name">
          </v-avatar>
        </v-badge>
        <span class="player-name">{{ player.name }}</span>

        <span class="subtitle">{{ player.wins }} vitórias</span>
        <span class="subtitle">{{ player.games }} jogos</span>
      </div>
    </div>

  </div>
</template>

<script>
import FameIcon from '@/assets/images/dashboard/fame-icon.png';
import CardHeader from './CardHeader';

const badgeColors = {
  0: 'yellow',
  1: 'grey',
  2: 'orange',
};

export default {
  name: 'card-hall-of-fame',
  components: {
    CardHeader,
  },
  data() {
    return {
      img: FameIcon,
      players: [
        {
          img: 'http://via.placeholder.com/65x65',
          name: 'Negão do zap',
          wins: 123,
          games: 123,
        },
        {
          img: 'http://via.placeholder.com/65x65',
          name: 'Atalabs',
          wins: 123,
          games: 123,
        },
        {
          img: 'http://via.placeholder.com/65x65',
          name: 'Mano Ralte',
          wins: 123,
          games: 123,
        },
      ],
    };
  },
  methods: {
    getColor(index) {
      return badgeColors[index];
    },
  },
};
</script>

<style scoped lang="scss">
.fame {
  padding: 1em 2em;
  border-radius: 15px;
  box-shadow: 5px 5px rgba(#000000, 0.16);
  font-weight: bold;
  background: #ffffff;
  grid-area: fame;
  display: grid;
  align-items: center;
}

header {
  text-align: center;
  margin-bottom: 2em;

  & img {
    margin-right: 1em;
  }
}

.subtitle {
  color: #797979;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
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
