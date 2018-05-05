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

      <v-flex class="date-picker">
        <v-menu
          ref="menu1"
          :close-on-content-click="false"
          v-model="menu1"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="dateFormatted"
            label="Date"
            hint="MM/DD/YYYY format"
            persistent-hint
            prepend-icon="event"
            @blur="date = parseDate(dateFormatted)"
          ></v-text-field>
          <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
        </v-menu>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .new-player{
    align-self: flex-end;
  }

  .date-picker{
    max-width: 200px;
    width: 100%;
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
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    methods: {
      formatDate(date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
  };
</script>
