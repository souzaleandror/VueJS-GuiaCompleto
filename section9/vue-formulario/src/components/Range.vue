<template>
  <div>
    <label>Salario:</label>
    <label>{{customLabel}}</label>
    <input type="range" :class="inputClasses" v-bind="$attrs" :value="valor" @input="atualizar" />
  </div>
</template>

<script>
export default {
  name: "Range",
  inheritAttrs: false,
  model: {
    prop: "valor",
    event: "change"
  },
  props: {
    label: String,
    valor: [Number, String],
    inputClasses: [String, Object, Array]
  },
  data() {
    return {
      valorAtual: this.valor || this.$attrs.min
    };
  },
  computed: {
    customLabel() {
      return `${this.label} (R$ ${this.valorAtual})`;
    }
  },
  methods: {
    atualizar(event) {
      const valor = event.target.value;
      this.$emit("input", valor);
      this.valorAtual = valor;
    }
  },
  created() {
    console.log("Attrs: ", this.$attrs);
  }
};
</script>