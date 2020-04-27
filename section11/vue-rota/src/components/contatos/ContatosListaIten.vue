<template>
  <li>
    <span>{{ contato.nome }}</span>
    <!-- <router-link :to="`/contatos/${contato.id}`" class="btn btn-info btn-sm float-right">Info</router-link> -->
    <router-link
      :to="{ name: 'contato', params: { id: contato.id }}"
      class="btn btn-info btn-sm float-right"
    >Info</router-link>
    <button class="btn btn-info btn-sm float-right mr-2 ml-2" @click="verDetalhes">Button Info</button>
  </li>
</template>

<script>
export default {
  props: {
    contato: {
      type: Object,
      required: true
    }
  },
  methods: {
    verDetalhes() {
      //this.$router.push(`/contatos/${this.contato.id}`);
      //this.$router.push({ path: `/contatos/${this.contato.id}` });
      // this.$router.push({ name: "contato", params: { id: this.contato.id } });
      this.$router.replace({
        name: "contato",
        params: { id: this.contato.id }
      });
    }
  }
};
</script>