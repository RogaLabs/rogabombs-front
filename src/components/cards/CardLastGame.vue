<template>
  <div class="lastGame">
    <card-header img="http://via.placeholder.com/65x65" title="Última partida" />
    <div class="information">
      <span>05/05/2018</span>
      <img src="http://via.placeholder.com/40x40">
      <span>Negao do zap</span>
    </div>
  </div>
</template>

<script>
import CardHeader from './CardHeader';

export default {
  name: 'card-last-game',
  components: {
    CardHeader,
  },
};
</script>

<style lang="scss" scoped>
.lastGame {
  padding: 1em 2em;
  border-radius: 15px;
  box-shadow: 5px 5px rgba(#000000, 0.16);
  font-weight: bold;
  background: #ffffff;
  grid-area: lastGame;
}

.information {
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    margin: 0 1em;
  }
}
</style>
