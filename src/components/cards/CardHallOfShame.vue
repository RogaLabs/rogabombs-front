<template>
  <div class="shame">
    <card-header :img="img" subtitle="Maio/2018" title="Hall da Vergonha" />

    <template v-if="!loading && players.length > 0">
      <div class="players">
        <div class="player" v-for="player in players" :key="player.id">
          <v-avatar size=65>
            <img :src="player.img" :alt="player.name">
          </v-avatar>
          <span class="player-name">{{ player.name }}</span>
        </div>
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
import ShameIcon from '@/assets/images/dashboard/shame-icon.png';
import CardHeader from './CardHeader';
import EmptyCard from './EmptyCard';

export default {
  name: 'card-hall-of-shame',
  components: {
    CardHeader,
    EmptyCard,
  },
  data() {
    return {
      img: ShameIcon,
      loading: true,
      players: [],
    };
  },
  mounted() {
    this.$http
      .get('dashboard/shame')
      .then(({ data: response }) => {
        this.players = response;
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>

<style lang="scss" scoped>
.shame {
  padding: 1em 2em;
  border-radius: 10px;
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
