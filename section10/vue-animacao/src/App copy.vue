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
      <transition name="fade">
        <div class="alert alert-primary" v-if="mostrar">Animacoes do Vue</div>
      </transition>

      <transition name="zoom">
        <div class="alert alert-primary" v-if="mostrar">Animacoes do Vue</div>
      </transition>

      <transition name="slide" type="animation">
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
@keyframes slide {
  from {
    transform: translateX(-100px);
  }
  to {
    transform: translateX(0px);
  }
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide 0.7;
  transition: opacity 0.7;
}

.slide-enter-to {
  opacity: 1;
}

.slide-leave {
  opacity: 1;
}

.slide-leave-active {
  animation: slide 0.7 reverse;
  transition: opacity 0.7;
}

.slide-leave-to {
  opacity: 0;
}

/* aparecer */
/* .v-enter {
  opacity: 0;
}

.v-enter-active {
  transition: opacity 3s;
}

.v-enter-to {
  opacity: 1;
} */

/* deixar */
/* .v-leave {
  opacity: 1;
}

.v-leave-active {
  transition: opacity 3s;
}

.v-leave-to {
  opacity: 0;
}

/* aparecer */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
}
/* 
.fade-enter-to,
.fade-leave {
  opacity: 1;
} */

/* deixar */
/* .fade-leave {
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 3s;
}

.fade-leave-to {
  opacity: 0;
} */

.zoom-enter {
  transform: scale(0);
}

.zoom-enter-active {
  transition: transform 0.5;
}

.zoom-enter-to {
  transform: scale(1);
}

.zoom-leave {
  transform: scale(1);
}

.zoom-leave-active {
  transition: transform 0.5;
}

.zoom-leave-to {
  transform: scale(0);
}
</style>