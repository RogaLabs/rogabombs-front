<template>
  <div class="shame">
    <card-header img="http://via.placeholder.com/65x65" title="Hall da Vergonha" />

    <div class="players">
      <div class="player" v-for="player in players" :key="player.id">
        <img :src="player.img" :alt="player.name">
        <span class="player-name">{{ player.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CardHeader from './CardHeader';

export default {
  name: 'card-hall-of-shame',
  components: {
    CardHeader,
  },
  data() {
    return {
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
