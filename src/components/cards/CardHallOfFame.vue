<template>
  <div class="fame">
    <card-header
      img="http://via.placeholder.com/65x65"
      subtitle="Maio/2018"
      title="Hall da fama"
    />

    <div class="players">
      <div class="player" v-for="player in players" :key="player.id">
        <img :src="player.img" :alt="player.name">
        <p class="player-name">{{ player.name }}</p>

        <p class="subtitle">{{ player.wins }} vitórias</p>
        <p class="subtitle">{{ player.games }} jogos</p>
      </div>
    </div>

  </div>
</template>

<script>
import CardHeader from './CardHeader';

export default {
  name: 'card-hall-of-fame',
  components: {
    CardHeader,
  },
  data() {
    return {
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
  display: flex;
  justify-content: space-between;
}

.player {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  & img {
    max-width: 65px;
    margin-bottom: 1em;
    border-radius: 50%;
  }
}

.player-name {
  color: #2f2f2f;
}
</style>
