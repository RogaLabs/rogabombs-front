<template>
  <v-container>
    <v-layout fluid align-center justify-center>
        <v-expansion-panel expand class="matches">
          <div v-if="loadingMatches">
            Carregando...
          </div>
          <div v-else-if="!loadingMatches && matches.length === 0">
            Nenhuma partida encontrada
          </div>
          <v-expansion-panel-content
            v-else
            class="match"
            v-for="(item,i) in matches"
            :key="i"
            :value="item === 2"
          >
            <div slot="header">{{item.date | formatDate}}</div>
            <v-card>
              <v-list>

                <template v-for="(participant, index) in item.matches_plays">
                  <!-- <v-subheader v-if="item.header" :key="index">{{ item.header }}</v-subheader> -->
                  <!-- <v-divider v-else-if="item.header" inset="participant.inset" :key="index"></v-divider> -->
                  <div
                    :key="participant.id"
                    class="player"
                    :class="{ 'top-player': participant.player.id === item.winner.id }"
                  >
                    <strong>#{{ index + 1 }}</strong>
                    <v-avatar :size="participant.ranking === 1 ? 55 : 32">
                      <img :src="participant.img || defaultImg" :alt="participant.name">
                    </v-avatar>
                    <div style="width: 120px">
                      <strong class="player-name">{{ participant.player.name }}</strong>
                    </div>
                    <div class="special-victories" v-if="participant.score > 0">
                      <div v-for="index in participant.score" class="special-victory">
                        <img class="icon" :src="dashboardIcon">
                        <!-- +{{ special_victory.additional_points }} {{ special_victory.type }} -->
                      </div>
                    </div>
                  </div>
                </template>
              </v-list>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
    </v-layout>
  </v-container>
</template>

<script>
import format from 'date-fns/format';
import ptLocale from 'date-fns/locale/pt';
import dashboardIcon from '@/assets/images/navigation/dashboard-icon.png';

const defaultImg =
  'http://4.bp.blogspot.com/-PDqvxCC-8wQ/UPnM3-TWJeI/AAAAAAAAAkc/7J9-SYbKyzQ/s1600/capture-20130118-192904.png';

export default {
  data() {
    return {
      dashboardIcon,
      loadingMatches: true,
      matches: [],
      defaultImg,
    };
  },
  methods: {
    formatResponse(response) {
      return response.map(m => ({
        ...m,
        matches_plays: m.matches_plays.sort((a, b) => b.score - a.score),
      }));
    },
  },
  mounted() {
    this.$http
      .get('https://rogabombs-api.herokuapp.com/api/matches')
      .then(({ data: response }) => {
        this.matches = this.formatResponse(response.data);
      })
      .finally(() => {
        this.loadingMatches = false;
      });
  },
  filters: {
    formatDate(date) {
      return format(date, 'DD [de] MMMM', { locale: ptLocale });
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0;
}

.matches {
  box-shadow: none;
}

.match {
  margin-bottom: 13px;
  border-radius: 15px;
  -webkit-box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.16);
}

.expansion-panel__body > .card {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.list {
  background: #e0e0e0;
}

.top-player {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 68px;
  margin-left: 30px;
  margin-right: 20px;
  padding-left: 10px;
  padding-right: 65.26px;
  background: rgba(255, 236, 0, 0.54);
  -webkit-box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 15px;
}

.player {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 34px;
  margin-left: 30px;
  margin-right: 20px;
  padding-left: 10px;
  padding-right: 65.26px;
  margin-bottom: 15px;
}

.avatar {
  margin-left: 30px;
}

.player-name {
  margin-left: 15px;
}

.special-victories {
  margin-left: 33px;
  display: flex;
}

.icon {
  margin-right: 1em;
}
</style>
