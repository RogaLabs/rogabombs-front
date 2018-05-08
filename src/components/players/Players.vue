<template>
  <v-container fluid fill-height>
    <v-layout column>
      <v-layout row>
        <v-flex>
          <v-data-table
            :headers="headers"
            :items="players"
            hide-actions
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td>{{ props.item.matches }}</td>
              <td>{{ props.item.victories }}</td>
              <td>{{ props.item.ranking }}</td>
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
  top: 13px;
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
      menu1: false,
      menu2: false,
      headers: [
        { text: 'Jogador', value: 'name' },
        { text: 'Partidas Jogadas', value: 'matches' },
        { text: 'Vitórias', value: 'victories' },
        { text: 'Ranking', value: 'ranking' },
      ],
      players: [
        {
          name: 'Negao do zap',
          matches: 123,
          victories: 123,
          ranking: 1,
        },
        {
          name: 'Atalabs',
          matches: 75,
          victories: 69,
          ranking: 2,
        },
        {
          name: 'Mano Ralte',
          matches: 66,
          victories: 88,
          ranking: 3,
        },
      ],
    };
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
    selectDateTitle() {
      return this.dateFormatted ? this.dateFormatted : 'Selecione uma data';
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
      return `${month}/${day}/${year}`;
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
};
</script>
