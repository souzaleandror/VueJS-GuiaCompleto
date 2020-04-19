import Vue from 'vue'

const data = {
  titulo: 'Curso de VueJS4',
  contador: 0
}

Vue.component('pjn-compoment', {
  data: function() {
    return data
  },
  methods: {
    incrementar: function() {
      this.contador++;
    }
  },
  template: `
  <div>
    <h1> {{titulo }} </h1>
    <button @click="incrementar"> Cliclado {{ contador }} vezes</button>
    </div>
    `
})

const pjComponent = {
  data: function() {
    return data
  },
  methods: {
    incrementar: function() {
      this.contador++;
    }
  },
  template: `
  <div>
    <h1> {{titulo }} 2 </h1>
    <button @click="incrementar"> Cliclado {{ contador }} vezes</button>
    </div>
    `
}

new Vue({
  el: '#app',
  components: { 
    'pj-component': pjComponent
  }
})

new Vue({
  el: '#app2',
})
