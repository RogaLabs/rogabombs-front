<template>
  <div class="fame">
    <card-header
      :img="img"
      subtitle="Maio/2018"
      title="Hall da fama"
    />

    <div class="players">
        <template v-if="!loading && players.length > 0">
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
        </template>
        <empty-card
          v-else
          :loading="loading"
          title="Nenhum dado há exibir"
        />
    </div>

  </div>
</template>

<script>
import FameIcon from '@/assets/images/dashboard/fame-icon.png';
import CardHeader from './CardHeader';
import EmptyCard from './EmptyCard';

const badgeColors = {
  0: 'yellow',
  1: 'grey',
  2: 'orange',
};

export default {
  name: 'card-hall-of-fame',
  components: {
    CardHeader,
    EmptyCard,
  },
  data() {
    return {
      img: FameIcon,
      loading: true,
      players: [],
    };
  },
  methods: {
    getColor(index) {
      return badgeColors[index];
    },
  },
  mounted() {
    this.$http
      .get('https://rogabombs-api.herokuapp.com/api/dashboard/fame')
      .then(({ data: response }) => {
        this.players = response;
      })
      .finally(() => {
        this.loading = false;
      });
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
  grid-template-rows: auto 1fr;
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
