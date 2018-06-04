<template>
  <div class="dashboard">
    <cards />
  </div>
</template>

<script>
import Cards from './cards/Cards';

export default {
  name: 'dashboard',
  components: {
    Cards,
  },
};
</script>

<style scoped lang="scss">
.dashboard {
  margin: auto;

  @media screen and (max-width: 599px) {
    width: 100%;
    margin: 0 1em 1em 1em;
  }
}
</style>
