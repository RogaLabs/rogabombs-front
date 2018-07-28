<template>
  <div style="align-self: baseline">
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn fab dark color="white" slot="activator">
        <v-icon>add</v-icon>
      </v-btn>
      <v-card>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card-title>
            <span class="headline">Nova Partida</span>
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
                    required
                  />
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    v-model.number="matches_plays[i - 1].score"
                    :min="0"
                    :max="5"
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
              :disabled="!matches_plays.length"
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
const initialMatchesPlays = Array.from({ length: 5 }, () => ({
  player_id: null,
  score: null,
}));

export default {
  data: () => ({
    dialog: true,
    loading: false,
    valid: true,
    showSnackBar: false,
    snackbarColor: '',
    snackbarText: '',
    player_id: '',
    players: [],
    score: 0,
    matches_plays: initialMatchesPlays,
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
    saveMatch() {
      console.log(this.matches_plays);
      // if (this.matches_plays.length > 0) {
      //   this.loading = true;

      //   this.$http
      //     .post('players', {
      //       player: {
      //         name: this.name,
      //       },
      //     })
      //     .then(({ data: response }) => {
      //       this.$emit('add-player', response.data);
      //       this.snackbarColor = 'success';
      //       this.snackbarText = 'Usuário cadastrado com sucesso!';
      //       this.clear();
      //     })
      //     .catch(() => {
      //       this.snackbarColor = 'error';
      //       this.snackbarText = 'Houve um erro ao cadastrar o usuário.';
      //       this.loading = false;
      //     })
      //     .finally(() => {
      //       this.showSnackBar = true;
      //     });
      // }
    },
  },
  mounted() {
    this.$http
      .get('players')
      .then(({ data: response }) => {
        this.players = response.data;
      })
      .catch(console.error);
  },
};
</script>

<style>
.dialog__activator {
  display: flex;
}

.card__text {
  padding: 0 16px;
}

.container.grid-list-md {
  padding: 0;
}
</style>
