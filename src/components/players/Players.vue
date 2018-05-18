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
            :no-data-text="dataTableText"
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
        <NewPlayer class="new-player"/>
      </v-layout>

      <div class="date-picker">
        <v-menu
          ref="menu1"
          :close-on-content-click="false"
          v-model="menu1"
          :nudge-right="40"
          color="white"
          lazy
          style="visibility: collapse; position:absolute"
          transition="scale-transition"
          offset-y>

          <v-text-field dark
            slot="activator"
            class="input-datepicker"
            v-model="dateFormatted"
            label="Date"
            hint="MM/DD/YYYY format"
            persistent-hint
            prepend-icon="event"
            color="white"
            @blur="date = parseDate(dateFormatted)"
          ></v-text-field>

          <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>

        </v-menu>
        <p class="select-date" @click="openDatePicker">
          {{ selectDateTitle }}
          <v-icon color="white">chevron_right</v-icon>
        </p>
      </div>

    </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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

.new-player {
  align-self: flex-end;
}

.date-picker {
  max-width: 200px;
  width: 100%;
  position: relative;
}

.select-date {
  color: white;
  cursor: pointer;
  position: absolute;
  top: 1em;
  left: 0;
}
</style>

<script>
import NewPlayer from './NewPlayer';

export default {
  components: { NewPlayer },
  data() {
    return {
      date: null,
      dateFormatted: null,
      loadingPlayers: true,
      menu1: false,
      menu2: false,
      headers: [
        { text: 'Jogador', value: 'name' },
        { text: 'Partidas Jogadas', value: 'matches_played' },
        { text: 'Vitórias', value: 'wins' },
        // { text: 'Ranking', value: 'ranking' },
      ],
      players: [],
      defaultImg:
        'http://4.bp.blogspot.com/-PDqvxCC-8wQ/UPnM3-TWJeI/AAAAAAAAAkc/7J9-SYbKyzQ/s1600/capture-20130118-192904.png',
    };
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
    selectDateTitle() {
      return this.dateFormatted ? this.dateFormatted : 'Selecione uma data';
    },
    dataTableText() {
      return this.loadingPlayers ? 'Carregando...' : 'Nenhum jogador encontrado';
    },
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split('-');
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split('/');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    },
    openDatePicker() {
      this.$el.querySelector('.input-datepicker').click();
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
