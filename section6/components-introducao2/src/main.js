import Vue from "vue";
import App from "./App.vue";
// import AppContador from "./AppContador.vue";
// import AppHeader from "./AppHeader.vue";

// Vue.component("app-contador", AppContador);
// Vue.component("AppHeader", AppHeader);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
