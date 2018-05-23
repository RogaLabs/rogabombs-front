<template>
  <div class="empty-card">{{loading ? 'Carregando...' : title}}</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>


<style>
.empty-card {
  grid-column: 1 / -1;
  text-align: center;
}
</style>
