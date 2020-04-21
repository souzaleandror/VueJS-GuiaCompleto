<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Animações</h1>
        <p class="lead">Treinando transição/animação de elementos/components no Vue.</p>
      </div>
    </div>

    <div class="container">
      <button class="btn btn-primary mb-3" @click="mostrar = !mostrar">Mostrar</button>
      <transition name="slide" type="animation" :duration="{ enter: 1200, leave: 2000 }">
        <div class="alert alert-primary" v-if="mostrar">Animacoes do Vue</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: true
    };
  }
};
</script>

<style scoped>
.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide 0.7 ease-out;
  transition: opacity 0.7;
}

.slide-leave-active {
  animation: slide 0.7 reverse ease-in-out;
  transition: opacity 0.7;
}

.slide-leave-to {
  opacity: 0;
}

@keyframes slide {
  from {
    transform: translateX(-100px);
  }
  to {
    transform: translateX(0px);
  }
}
</style>