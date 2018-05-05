<template>
  <ul class="main-navbar">
    <li class="item">Painel</li>
    <li class="item">Jogadors</li>
    <li class="item">Partidas</li>
  </ul>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<styles lang="sass">
  .main-navbar {
    > .item{
      display: inline-block;
    }
  }
</styles>
