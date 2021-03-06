import Vue from 'vue';
import App from './App.vue';
//import FilmesListaIten from './components/FilmesListaIten.vue';

Vue.config.productionTip = false;

export const eventBus = new Vue({
	methods: {
		selecionarFilme(filmeSelecionado) {
			this.$emit('selecionarFilme', filmeSelecionado);
		}
	}
});

new Vue({
	render: (h) => h(App)
}).$mount('#app');
