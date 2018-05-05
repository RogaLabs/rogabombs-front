<template>
  <header>
    <div class="title">
      <img :src="img" alt="Placeholder">
      <h2>{{ title }}</h2>
    </div>
    <span v-if="subtitle" class="subtitle">Maio/2018</span>
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
header {
  text-align: center;
  margin-bottom: 1em;

  & img {
    margin-right: 1em;
  }
}

.subtitle {
  color: #797979;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
