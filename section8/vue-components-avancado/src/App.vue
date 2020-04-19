<template>
  <div id="app" class="container">
    <button @click="componenteSelecionado = 'Home'">Home</button>
    <button @click="componenteSelecionado = 'PostLista'">PostLista</button>
    <button @click="componenteSelecionado = 'Sobre'">Sobre</button>
    <button @click="componenteSelecionado = 'Assincrono'">Assincrono</button>

    <p>{{ componenteSelecionado }}</p>

    <keep-alive :include="Sobre" :exclude="['Home', 'PostLista']" max="2">
      <component :is="componenteSelecionado" v-bind="propsAtuais"></component>
    </keep-alive>
    <hr />

    <h1>Test 1</h1>
    <PostLista :posts="posts" />
    <hr />
    <h1>Slot com Scope</h1>
    <PostLista :posts="posts">
      <!-- <template slot-scope="slotPost">  -->
      <template slot-scope="{ meuPost }">
        <h2>{{meuPost.titulo}}</h2>
        <p>{{meuPost.conteudo}}</p>
        <smal>{{meuPost.autor}}</smal>
        <br />
        <br />
        {{ meuPost }}
        <!-- {{ slotPost }} -->
      </template>
    </PostLista>
  </div>
</template>

<script>
import PostLista from "./components/PostLista.vue";
import Home from "./components/Home.vue";
import Sobre from "./components/Sobre.vue";

export default {
  components: {
    //Assincrono: () => import("./components/Assincrono.vue"),
    Assincrono: () => ({
      //component: import("./components/Assincrono.vue"),
      component: new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(import("./components/Assincrono.vue"));
        }, 2000);
        console.log(reject);
      }),
      loading: { template: "<h1> Carregando.. </h1>" },
      error: { template: "<p>Erro ao carregar template</p>" },
      delay: 200,
      timeout: 3000
    }),
    Home,
    PostLista,
    Sobre
  },
  data() {
    return {
      componenteSelecionado: "Home",
      autor: "Plinio teste",
      posts: [
        { id: 1, titulo: "titulo 1", conteudo: "conteudo 1", autor: "autor1" },
        { id: 2, titulo: "titulo 2", conteudo: "conteudo 2", autor: "autor2" }
      ]
    };
  },
  computed: {
    propsAtuais() {
      return this.componenteSelecionado === "PostLista"
        ? { posts: this.posts }
        : {};
    }
  }
};
</script>

<style scoped>
.container {
  width: 960px;
  margin: auto;
}

.post-paragrafo {
  color: red;
}
</style>