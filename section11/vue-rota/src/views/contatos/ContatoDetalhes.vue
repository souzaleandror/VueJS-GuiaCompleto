<template>
  <div>
    <h3 class="font-weight-light">Detalhes sobre o contato: {{ this.$route.params.id }}</h3>
    <router-link :to="`/contatos/${id}/editar`" class="btn btn-warning btn-sm">Editar</router-link>
    <button @click="voltar" class="btn btn-info btn-sm btn-sm ml-2 mr-2">Voltar</button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  created() {
    console.log("rota: ", this.$route);
    console.log("Parametros da rota: ", this.$route.params);
  },
  data() {
    return {
      //id: this.$route.params.id
    };
  },
  // watch: {
  //   $route(to, from) {
  //     console.log(to);
  //     console.log(from);
  //     this.id = to.params.id;
  //   }
  // },
  beforeRouteUpdate(to, from, next) {
    this.id = to.params.id;
    next();
  },
  methods: {
    voltar(event) {
      console.log(event);
      this.$router.back();
    }
  }
};
</script>