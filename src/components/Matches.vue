<template>
  <v-container>
    <v-layout fluid align-center justify-center>
        <v-expansion-panel expand class="matches">
          <v-expansion-panel-content class="match" v-for="(item,i) in matches" :key="i" :value="item === 2">
            <div slot="header">{{item.date}}</div>
            <v-card>
              <v-list>
                <template v-for="(player, index) in item.players">
                  <v-subheader v-if="item.header" :key="index">{{ item.header }}</v-subheader>
                  <v-divider v-else-if="item.header" inset="player.inset" :key="index"></v-divider>
                  <div :key="player.id" :class="{ 'top-player': player.ranking === 1, 'player': player.ranking > 1 }">
                    <strong>#{{ player.ranking }}</strong>
                    <v-avatar :size="player.ranking === 1 ? 55 : 32">
                      <img :src="player.avatar" :alt="player.name">
                    </v-avatar>
                    <strong class="player-name">{{ player.name }}</strong>
                    <div class="special-victories" v-if="player.victories.special_victories.length > 0">
                      <div v-for="special_victory in player.victories.special_victories" class="special-victory">
                        +{{ special_victory.additional_points }} {{ special_victory.type }}
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .matches {
    box-shadow: none;
  }
  .match {
    margin-bottom: 13px;
    border-radius: 15px;
    -webkit-box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.16);
    -moz-box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.16);
    box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.16);
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
    -webkit-box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.25);
    box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.25);
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
    display: inline-block;
  }
</style>

<script>
export default {
  data() {
    return {
      classes: {
        playerOrTopPlayer: { }
      },
      matches: [
        {
          date: '05 de Maio',
          players: [
            {
              id: 1,
              name: 'Negao do Zap',
              avatar: 'http://via.placeholder.com/55x55',
              badges: '',
              victories: {
                quantity: 5,
                special_victories: [
                  { type: 'flawless', additional_points: 1 }
                ]
              },
              divider: true,
              inset: true,
              ranking: 1
            },
            {
              id: 2,
              name: 'Sider',
              avatar: 'http://via.placeholder.com/55x55',
              badges: '',
              victories: {
                quantity: 2,
                special_victories: []
              },
              divider: true,
              inset: true,
              ranking: 2
            }
          ]
        },
        {
          date: '06 de Maio',
          players: [
            {
              id: 1,
              name: 'Negao do Zap',
              avatar: 'http://via.placeholder.com/55x55',
              badges: '',
              victories: {
                quantity: 3,
                special_victories: [
                  { type: 'flawless', additional_points: 1 }
                ]
              },
              divider: true,
              inset: true,
              ranking: 3
            },
            {
              id: 2,
              name: 'Sider',
              avatar: 'http://via.placeholder.com/55x55',
              badges: '',
              victories: {
                quantity: 1,
                special_victories: []
              },
              divider: true,
              inset: true,
              ranking: 4
            }
          ]
        }
      ]
    };
  }
};
</script>
