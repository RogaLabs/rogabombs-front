<template>
  <div class="lastGame">
    <card-header :img="img" title="Última partida" />

    <template v-if="!loading && !!lastGame">
      <div class="information">
        <span>{{ lastGame.date | formatDate }}</span>
        <img width="40px" :src="fameIcon">
        <span>{{ lastGame.winner.name }}</span>
      </div>
    </template>

    <empty-card
      v-else
      :loading="loading"
      title="Nenhum dado há exibir"
    />
  </div>
</template>

<script>
import format from 'date-fns/format';
import FameIcon from '@/assets/images/dashboard/fame-icon.png';
import LastGameIcon from '@/assets/images/dashboard/last-game-icon.png';
import CardHeader from './CardHeader';
import EmptyCard from './EmptyCard';

export default {
  name: 'card-last-game',
  components: {
    CardHeader,
    EmptyCard,
  },
  data() {
    return {
      img: LastGameIcon,
      fameIcon: FameIcon,
      loading: true,
      lastGame: null,
    };
  },
  mounted() {
    this.$http
      .get('https://rogabombs-api.herokuapp.com/api/matches')
      .then(({ data: response }) => {
        this.lastGame = response.data[0] || null;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  filters: {
    formatDate(date) {
      return format(date, 'DD/MM/YYYY');
    },
  },
};
</script>

<style lang="scss" scoped>
.lastGame {
  padding: 1em 2em;
  border-radius: 10px;
  box-shadow: 5px 5px rgba(#000000, 0.16);
  font-weight: bold;
  background: #ffffff;
  grid-area: lastGame;
}

.information {
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    margin: 0 1em;
  }
}
</style>
