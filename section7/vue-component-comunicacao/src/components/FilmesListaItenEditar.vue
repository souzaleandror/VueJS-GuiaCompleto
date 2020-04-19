<template>
  <div>
    <h2>Editar filme</h2>

    <div class="form-group">
      <label>Título:</label>
      <input
        type="text"
        class="form-control"
        placeholder="Insira o título"
        :value="filmeSelecionado.titulo"
      />
      <label>Ano:</label>
      <input
        type="text"
        class="form-control"
        placeholder="Insira o Ano"
        :value="filmeSelecionado.ano"
      />
      <br />
      <button @click="editar" class="btn btn-danger float-right">Editar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filme: {
      type: Object,
      required: true
    },
    filmeTitulo: String
  },
  data() {
    return {
      filmeLocal: this.filme
    };
  },
  computed: {
    filmeSelecionado() {
      return this.filme;
    }
  },
  methods: {
    editar() {}
  }
};
</script>