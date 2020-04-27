<template>
  <div>
    <h3 class="font-weight-light">Contatos</h3>

    <div class="form-group">
      <input
        type="search"
        class="form-control"
        placeholder="Procurar"
        @keyup.enter="buscar"
        :value="this.$router.query.busca"
      />
      <button class="btn btn-info" @click="buscar">buscar</button>
    </div>

    <ul class="list-group" v-if="contatosFiltrados.length > 0">
      <ContatosListaIten
        class="list-group-item"
        v-for="contato in contatosFiltrados"
        :key="contato.id"
        :contato="contato"
      />
    </ul>
    <p v-else>Nenhum Contato cadastrado</p>

    <button @click="voltar" class="btn btn-info btn-sm">Voltar</button>
  </div>
</template>

<script>
import ContatosListaIten from "./ContatosListaIten";

export default {
  components: {
    ContatosListaIten
  },
  data() {
    return {
      contatos: [
        { id: 1, nome: "teste1", email: "teste1@gmail.com" },
        { id: 2, nome: "teste2", email: "teste2@gmail.com" },
        { id: 3, nome: "teste3", email: "teste3@gmail.com" }
      ]
    };
  },
  computed: {
    contatosFiltrados() {
      const busca = this.$router.query.busca;
      return !busca
        ? this.contatos
        : this.contatos.filter(c =>
            c.nome.toLowerCase().include(busca.toLowerCase())
          );
    }
  },
  methods: {
    voltar(event) {
      console.log(event);
      this.$router.back();
    },
    buscar(event) {
      console.log(event);
      this.$router.push({
        path: "/contatos",
        query: { busca: event.target.value }
      });
    }
  }
};
</script>