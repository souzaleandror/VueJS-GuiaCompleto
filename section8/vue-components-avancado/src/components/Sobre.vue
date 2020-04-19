<template>
  <div>
    <h2>Sobre</h2>

    <p v-if="autor">autor: {{ autor }}</p>
    <input type="text" v-model="autor" />
  </div>
</template>

<script>
export default {
  name: "SobreNos",
  data() {
    return {
      autor: ""
    };
  },
  created() {
    console.log("created");
  },
  destroyed() {
    console.log("destroyed");
  },
  activated() {
    console.log("activated");
  },
  desactived() {
    console.log("desactived");
  }
};
</script>