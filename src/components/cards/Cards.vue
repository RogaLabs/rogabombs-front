<template>
  <div class="cards-grid">
    <card-hall-of-fame />
    <card-last-game />
    <card-hall-of-shame />
  </div>
</template>

<script>
import CardHallOfFame from './CardHallOfFame';
import CardLastGame from './CardLastGame';
import CardHallOfShame from './CardHallOfShame';

export default {
  components: {
    CardHallOfFame,
    CardLastGame,
    CardHallOfShame,
  },
  name: 'cards',
};
</script>

<style lang="scss" scoped>
.cards-grid {
  display: grid;
  grid-template-areas:
    'fame lastGame'
    'fame shame';
  grid-gap: 1em;

  @media screen and (max-width: 599px) {
    grid-template-areas:
      'fame fame'
      'lastGame lastGame'
      'shame shame';
  }
}
</style>

