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
      <!-- <transition
        enter-class
        enter-active-class="animated bounceInLeft"
        enter-to-class
        leave-class
        leave-active-class="animated bounceOutDown"
        leave-to-class
      >
        <div class="alert alert-primary" v-if="mostrar">Animacoes do Vue</div>
      </transition>-->

      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
        :css="false"
      >
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
  },
  methods: {
    beforeEnter(el) {
      console.log(el);
      console.log("BeforeEnter");
    },
    enter(el, done) {
      console.log(el);
      console.log("done");

      let contagem = 0;

      const intervalo = setTimeout(() => {
        el.style.opacity = +el.style.opacity + 0.1;
        contagem++;

        if (contagem > 10) {
          clearInterval(intervalo);
          done();
        }
      }, 150);

      //done();
    },
    afterEnter(el) {
      console.log(el);
      console.log("afterEnter");
    },
    enterCancelled(el) {
      console.log(el);
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log(el);
      console.log("beforeLeave");
    },
    leave(el, done) {
      console.log(el);
      console.log("done");

      let contagem = 0;
      const tamanho = el.offsetwidth;

      const intervalo = setTimeout(() => {
        el.style.opacity = +el.style.opacity + 0.1;
        contagem++;

        if (contagem > 10) {
          clearInterval(intervalo);
          done();
        }
      }, 150);

      done();
    },
    afterLeave(el) {
      console.log(el);
      console.log("afterLeave");
    },
    leaveCancelled(el) {
      console.log(el);
      console.log("leaveCancelled");
    }
  }
};
</script>

<style>
body {
  overflow: hidden;
}
</style>


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