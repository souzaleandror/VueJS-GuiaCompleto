<template>
  <div class="row">
    <!-- coluna 1 -->
    <div class="col-8">
      <h2>Filmes</h2>

      <ul class="list-group list-group-flush">
        <!-- <FilmesListaIten class="test-class" v-for="filme in filmes" :key="filme.id" v-bind="filme" /> -->
        <FilmesListaIten
          v-for="filme in filmes"
          :key="filme.id"
          :filme="filme"
          :class="aplicarClasseAtiva(filme)"
          @selecionarFilme="filmeSelecionado = $event"
        ></FilmesListaIten>
      </ul>
    </div>

    <!-- coluna 2 -->
    <div class="col-4">
      <FilmesListaItenInfo v-if="!editar" :filme="filmeSelecionado" @editarFilme="editarFilme" />
      <FilmesListaItenEditar v-else :filme="filmeSelecionado" />
    </div>
  </div>
</template>

<script>
import FilmesListaIten from "./FilmesListaIten.vue";
import FilmesListaItenInfo from "./FilmesListaItenInfo.vue";
import FilmesListaItenEditar from "./FilmesListaItenEditar.vue";
import { eventBus } from "./../main";

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo,
    FilmesListaItenEditar
  },
  data() {
    return {
      //filmes: ["Vingadores", "formigas", "Pantera Negra", "DeadPool 2"]
      filmes: [
        { id: 1, titulo: "teste1", ano: 2009, diretor: "EU" },
        { id: 2, titulo: "teste2", ano: 2009, diretor: "EU" },
        { id: 3, titulo: "teste3", ano: 2009, diretor: "EU" },
        { id: 4, titulo: "teste4", ano: 2009, diretor: "EU" }
      ],
      filmeSelecionado: undefined,
      editar: false
    };
  },
  methods: {
    aplicarClasseAtiva(filmeIterado) {
      return {
        active:
          this.filmeSelecionado && this.filmeSelecionado.id === filmeIterado.id
      };
    },
    editarFilme(filme) {
      this.editar = true;
      this.filmeSelecionado = filme;
    }
  },
  created() {
    eventBus.$on("selecionarFilme", filmeSelecionado => {
      this.filmeSelecionado = filmeSelecionado;
    });
  }
};
</script>
