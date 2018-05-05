                                                                                                       <template>
  <v-app>
    <header>
      <ul>
        <li v-for="screen in screens" :key="screen.id">
          <router-link :to="{ path: screen.url }">{{ screen.title }}</router-link>
        </li>
      </ul>
    </header>
    <div>
      <router-view/>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      screens: [
        { id: '1', title: 'Painel', url: '/' },
        { id: '2', title: 'Jogadores', url: '/players' },
        { id: '3', title: 'Partidas', url: '/matches' }
      ]
    };
  }
};
</script>
