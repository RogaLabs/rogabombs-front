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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dashboard {
  margin: auto;
}
</style>
