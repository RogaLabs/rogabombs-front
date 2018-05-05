<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
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
      <NewPlayer/>
    </v-layout>
  </v-container>


</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<script>
  import NewPlayer from "./NewPlayer"

  export default {
    components: { NewPlayer },
    data() {
    return {
      headers: [
        { text: 'Jogador', value: 'name' },
        { text: 'Partidas Jogadas', value: 'matches' },
        { text: 'Vitórias', value: 'victories' },
        { text: 'Ranking', value: 'ranking' }
      ],
      players: [
        {
          name: 'Negao do zap',
          matches: 123,
          victories: 123,
          ranking: 1
        },
        {
          name: 'Atalabs',
          matches: 75,
          victories: 69,
          ranking: 2
        },
        {
          name: 'Mano Ralte',
          matches: 66,
          victories: 88,
          ranking: 3
        }
      ]
    };
  }
};
</script>
