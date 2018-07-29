<template>
  <div class="new-match-container">
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn fab dark color="white" slot="activator">
        <v-icon>add</v-icon>
      </v-btn>
      <v-card>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card-title>
            <v-flex column class="text-center">
              <div class="headline">Nova Partida</div>
              <div xs6 class="headline">Data: {{ today }}</div>
              <v-flex px-5>
                <v-select
                  autocomplete
                  clearable
                  v-model="victory_type"
                  :items="victory_types"
                  :rules="[v => !!v || 'Campo obrigatório!']"
                  label="Tipo de vitória"
                  item-text="name"
                  item-value="type"
                  px-5
                  required
                />
              </v-flex>
            </v-flex>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout row wrap :key="i" v-for="i in 5">
                <v-flex xs6>
                  <v-select
                    autocomplete
                    clearable
                    v-model="matches_plays[i - 1].player_id"
                    :items="players"
                    :rules="[v => !!v || 'Campo obrigatório!']"
                    label="Jogador"
                    item-text="name"
                    item-value="id"
                  />
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    v-model.number="matches_plays[i - 1].score"
                    :min="0"
                    :max="3"
                    :rules="[v => v >= 0 || 'Campo obrigatório!', v => v <= 5 || 'Máximo de 5 pontos!']"
                    label="Pontos"
                    required
                    type="number"
                  />
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              flat
              @click="clear"
              :disabled="loading"
            >
              Fechar
            </v-btn>
            <v-btn
              color="blue darken-1"
              flat
              :disabled="numberOfPlayers < 4"
              :loading="loading"
              @click="saveMatch"
            >
              Enviar
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <v-snackbar
      :timeout=2000
      :color="snackbarColor"
      v-model="showSnackBar"
    >
      {{ snackbarText }}
      <v-btn flat @click.native="showSnackBar = false">Fechar</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import format from 'date-fns/format';
import ptLocale from 'date-fns/locale/pt';

const initialMatchesPlays = Array.from({ length: 5 }, () => ({
  player_id: null,
  score: null,
}));

export default {
  data: () => ({
    dialog: false,
    loading: false,
    valid: true,
    showSnackBar: false,
    snackbarColor: '',
    snackbarText: '',
    player_id: '',
    players: [],
    score: 0,
    matches_plays: initialMatchesPlays,
    victory_types: [{ name: 'Dourado', type: 'golden' }, { name: 'Padrão', type: 'standard' }],
    victory_type: '',
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.matches_plays.push({
          player_id: this.player_id,
          score: this.score,
        });

        this.$refs.form.reset();
      }
    },
    clear() {
      this.$refs.form.reset();
      this.dialog = false;
      this.loading = false;
      this.matches_plays = initialMatchesPlays;
    },
    buildData() {
      this.removeNullPlayers();
      return {
        date: new Date(),
        victory_type: this.victory_type,
        matches_plays: this.matches_plays,
      };
    },
    saveMatch() {
      if (this.matches_plays.length >= 4) {
        this.loading = true;
        this.$http
          .post('matches', { match: this.buildData() })
          .then(({ data: response }) => {
            this.$emit('add-player', response.data);
            this.snackbarColor = 'success';
            this.snackbarText = 'Partido cadastrado com sucesso!';
            this.initialMatchesPlays();

            this.clear();
          })
          .catch((error) => {
            const errorKeys = Object.keys(error.data.errors);
            const errorKey = errorKeys[0];
            const errorMessage = error.data.errors[errorKey][0];
            this.snackbarColor = 'error';
            this.snackbarText =
              (!!errorMessage && errorMessage) || 'Houve um erro ao cadastrar a partida.';
            this.loading = false;
          })
          .finally(() => {
            this.showSnackBar = true;
          });
      }
    },
    removeNullPlayers() {
      this.matches_plays = this.matches_plays.filter((item) => {
        if (item.player_id !== null && item.score !== null) {
          return item;
        }
        return true;
      });
    },
  },
  mounted() {
    this.$http
      .get('players')
      .then(({ data: response }) => {
        this.players = response.data;
      })
      .catch(error => error);
  },
  computed: {
    today() {
      const date = new Date();
      return format(date, 'DD [de] MMMM', { locale: ptLocale });
    },
    numberOfPlayers() {
      let numberOfPlayers = 0;
      this.matches_plays.map((item) => {
        if (item.player_id && item.score) {
          numberOfPlayers += 1;
        }
        return null;
      });
      return numberOfPlayers;
    },
  },
};
</script>

<style>
.new-match-container {
  align-self: flex-end;
  margin-left: 50px;
}

.dialog__activator {
  display: flex;
}

.card__text {
  padding: 0 16px;
}

.container.grid-list-md {
  padding: 0;
}

.text-center {
  text-align: center;
}
</style>
