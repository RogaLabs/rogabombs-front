<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn fab dark color="white" slot="activator">
        <v-icon>add</v-icon>
      </v-btn>
      <v-card>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card-title>
            <span class="headline">Novo Jogador</span>
          </v-card-title>
          <v-card-text>
              <v-text-field
                v-model="name"
                :rules="[v => !!v || 'Campo obrigatório!']"
                label="Nome ou apelido"
                required
              ></v-text-field>
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
              :disabled="!valid || loading"
              :loading="loading"
              @click="submit"
            >
              Enviar
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'NewPlayer',
  data: () => ({
    dialog: false,
    loading: false,
    name: '',
    valid: true,
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        setTimeout(() => {
          this.loading = false;
        }, 3000);
      }
    },
    clear() {
      this.$refs.form.reset();
      this.dialog = false;
    },
  },
};
</script>
