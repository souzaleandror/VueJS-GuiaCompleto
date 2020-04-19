ytr<template>
  <li class="list-group-item">
    <span>{{ filme.titulo }}</span>
    <br />
    <span>{{ filme.ano }}</span>
    <button @click="selecionar" class="btn btn-success float-right">Selecionar</button>
  </li>
</template>

<script>
import { eventBus } from "./../main";

export default {
  props: {
    filme: {
      type: Object,
      required: true
    },
    titulo: {
      type: String
      //required: true
      // default() {
      //   return "Vingadores";
      // },
      // validator(filmeTitulo) {
      //   return filmeTitulo.includes("Marvel");
      // }
    },
    ano: {
      type: Number
      //required: true
    }
  },
  computed: {
    filmeTituloConcatenado() {
      return `Titulo: ${this.titulo}`;
    }
  },
  methods: {
    selecionar: function() {
      //this.$emit("selecionarFilme", this.filme);
      //eventBus.$emit("selecionarFilme", this.filme);
      eventBus.selecionarFilme(this.filme);
    }
  },
  created() {
    //console.log("Filme Titulo: ", this.titulo);
    //console.log(typeof this.titulo);
    console.log(typeof this.filme);
  }
};
</script>