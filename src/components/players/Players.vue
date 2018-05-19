<template>
  <v-container fluid>
    <v-layout column>
      <v-layout row>
        <v-flex>
          <v-data-table
            :headers="headers"
            :items="players"
            hide-actions
            class="player-list"
            :no-data-text="noDataText"
          >
            <template slot="items" slot-scope="props">
              <td>
                <v-avatar size=35>
                  <img :src="props.item.img || defaultImg" :alt="props.item.name">
                </v-avatar>
                <span class="player-name">{{ props.item.name }}</span>
              </td>
              <td>{{ props.item.matches_played }}</td>
              <td>{{ props.item.wins }}</td>
              <!-- <td>{{ props.item.ranking }}</td> -->
            </template>
          </v-data-table>
        </v-flex>
        <new-player @add-player="handleAddPlayer" />
      </v-layout>

      <date-picker
        @select-date="handleDateSelection"
        :date="date"
      />
    </v-layout>
  </v-container>
</template>

<script>
import NewPlayer from './NewPlayer';
import DatePicker from './DatePicker';

const defaultImg =
  'http://4.bp.blogspot.com/-PDqvxCC-8wQ/UPnM3-TWJeI/AAAAAAAAAkc/7J9-SYbKyzQ/s1600/capture-20130118-192904.png';

export default {
  components: {
    DatePicker,
    NewPlayer,
  },
  data() {
    return {
      date: null,
      loadingPlayers: true,
      headers: [
        { text: 'Jogador', value: 'name' },
        { text: 'Partidas Jogadas', value: 'matches_played' },
        { text: 'Vitórias', value: 'wins' },
        // { text: 'Ranking', value: 'ranking' },
      ],
      players: [],
      defaultImg,
    };
  },
  computed: {
    noDataText() {
      return this.loadingPlayers ? 'Carregando...' : 'Nenhum jogador encontrado';
    },
  },
  methods: {
    handleAddPlayer(newPlayer) {
      this.players.push(newPlayer);
    },
    handleDateSelection(selectedDate) {
      this.date = selectedDate;
    },
  },

  mounted() {
    this.$http
      .get('https://rogabombs-api.herokuapp.com/api/players')
      .then(({ data: response }) => {
        this.players = response.data;
      })
      .finally(() => {
        this.loadingPlayers = false;
      });
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0;
}

.menu__content .menuable__content__active {
  min-width: 200px;
  top: 673px;
  left: 192px;
  transform-origin: left top 0px;
  z-index: 8;
}

.avatar {
  margin-right: 2em;
}

.player-list {
  .table {
    padding-right: 5px;
    background: none;
    border-collapse: separate;
    border-spacing: 0 5px;

    > thead {
      box-shadow: 5px 5px 0 rgba(#000, 0.15);
      border-radius: 5px;
    }

    > tbody {
      > tr {
        background: none !important;
      }
    }

    th,
    td {
      & {
        background: #fff;
      }

      &:first-child {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }

      &:last-child {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }
}
</style>
