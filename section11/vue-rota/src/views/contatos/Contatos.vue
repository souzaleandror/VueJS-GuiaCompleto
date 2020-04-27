<template>
  <div>
    <h3 class="font-weight-light">Contatos</h3>
    <ContatosLista />
    <router-view></router-view>
    <router-view name="contato-detalhes"></router-view>
    <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>
  </div>
</template>

<script>
import ContatosLista from "./../../components/contatos/ContatosLista.vue";

export default {
  components: {
    ContatosLista
  },
  methods: {
    voltar(event) {
      console.log(event);
      this.$router.back();
    }
  }
};
</script>