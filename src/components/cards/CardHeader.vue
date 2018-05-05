<template>
  <header class="card-header">
    <img :src="img" alt="Placeholder">
    <div>
      <h1>{{ title }}</h1>
      <span v-if="subtitle" class="subtitle">Maio/2018</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'card-header',
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: null,
    },
  },
};
</script>


<style scoped lang="scss">
.card-header {
  display: flex;
  text-align: center;
  margin-bottom: 0.5em;
  align-items: center;
  justify-content: center;

  & img {
    margin-right: 1em;
  }
}

.subtitle {
  color: #797979;
}
</style>
