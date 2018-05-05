<template>
  <v-container>
    <v-layout fluid align-center justify-center>
        <v-expansion-panel expand>
          <v-expansion-panel-content v-for="(item,i) in matches" :key="i" :value="item === 2">
            <div slot="header">{{item.date}}</div>
            <v-card>
              <v-flex justify-space-between >
                <v-list>
                <template v-for="(player, index) in item.players">
                  <v-subheader v-if="item.header" :key="index">{{ item.header }}</v-subheader>
                  <v-divider v-else-if="item.header" inset="player.inset" :key="index"></v-divider>
                  <v-list-tile v-else :key="player.title" avatar @click="">
                    <v-list-tile-avatar>
                      <strong>#{{player.ranking}}</strong>
                      <img :src="player.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="player.name"></v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="player.name"></v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="player.name"></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>
              </v-flex>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
    </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<script>
export default {
  data() {
    return {
      matches: [
        {
          date: '05 de Maio',
          players: [
            {
              name: 'Negao do Zap',
              avatar: '',
              badges: '',
              victories: 4,
              divider: true,
              inset: true,
              ranking: 1
            },
            {
              name: 'Negao do Zap',
              avatar: '',
              badges: '',
              victories: 4,
              divider: true,
              inset: true,
              ranking: 1
            }
          ]
        },
        {
          date: '06 de Maio',
          players: [
            {
              name: 'Negao do Zap',
              avatar: '',
              badges: '',
              victories: 4,
              divider: true,
              inset: true,
              ranking: 1
            },
            {
              name: 'Negao do Zap',
              avatar: '',
              badges: '',
              victories: 4,
              divider: true,
              inset: true,
              ranking: 1
            }
          ]
        }
      ]
    };
  }
};
</script>
