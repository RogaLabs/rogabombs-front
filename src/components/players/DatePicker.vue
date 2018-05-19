<template>
  <div>
    <v-menu
      :nudge-right="40"
      lazy
      style="visibility: collapse; position:absolute"
      transition="scale-transition"
    >
      <v-text-field
        class="input-datepicker"
        slot="activator"
      />

      <v-date-picker
        @input="hideDatePicker"
        locale="pt-br"
        no-title
      ></v-date-picker>
    </v-menu>
    <p class="select-date" @click="openDatePicker">
      {{ selectDateTitle }}
      <v-icon color="white">chevron_right</v-icon>
    </p>
  </div>
</template>

<script>
export default {
  name: 'date-picker',
  props: {
    date: String,
  },
  methods: {
    formatDate(date) {
      if (!date) return null;

      return date
        .split('-')
        .reverse()
        .join('/');
    },
    hideDatePicker(selectedDate) {
      this.$emit('select-date', selectedDate);
    },
    openDatePicker() {
      this.$el.querySelector('.input-datepicker').click();
    },
  },
  computed: {
    selectDateTitle() {
      return this.date ? this.formatDate(this.date) : 'Selecione uma data';
    },
  },
};
</script>

<style scoped>
.select-date {
  color: white;
  cursor: pointer;
  margin: 1em 0;
}
</style>
