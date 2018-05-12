<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn fab dark color="white" slot="activator">
        <v-icon>add</v-icon>
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Novo Jogador</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Nome ou Apelido" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>* Campo obrigatório</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Fechar</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Confirmar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: 'NewPlayer',
    data: () => ({
      dialog: false,
    }),
  };
</script>
